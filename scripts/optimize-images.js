const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const optimizedDir = path.join(__dirname, '../public/images-optimized');

// Створюємо папку для оптимізованих зображень
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Налаштування для різних типів зображень
const optimizationSettings = {
  // Великі фонові зображення
  backgrounds: {
    quality: 75,
    maxWidth: 1920,
    effort: 6, // 0-6, більше = краще стиснення
  },
  // Середні зображення
  medium: {
    quality: 80,
    maxWidth: 1200,
    effort: 6,
  },
  // Маленькі іконки/логотипи
  small: {
    quality: 85,
    maxWidth: 500,
    effort: 6,
  }
};

// Визначаємо тип зображення за назвою
function getOptimizationSettings(filename) {
  const bgPatterns = ['bg', 'background', 'hero-', 'footer-', 'faq-', 'crystal', 'flower', 'cloude'];
  const smallPatterns = ['logo', 'icon', 'slider'];
  
  if (bgPatterns.some(pattern => filename.toLowerCase().includes(pattern))) {
    return optimizationSettings.backgrounds;
  } else if (smallPatterns.some(pattern => filename.toLowerCase().includes(pattern))) {
    return optimizationSettings.small;
  }
  return optimizationSettings.medium;
}

async function optimizeImage(inputPath, outputPath) {
  const filename = path.basename(inputPath);
  const settings = getOptimizationSettings(filename);
  
  try {
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`\n📸 Обробка: ${filename} (${sizeMB}MB)`);
    
    await sharp(inputPath)
      .resize(settings.maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ 
        quality: settings.quality,
        effort: settings.effort,
        smartSubsample: true,
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ Готово: ${newSizeMB}MB (зменшено на ${reduction}%)`);
    
    return { filename, oldSize: sizeMB, newSize: newSizeMB, reduction };
  } catch (error) {
    console.error(`❌ Помилка при обробці ${filename}:`, error.message);
    return null;
  }
}

async function processDirectory(dir, baseDir = imagesDir, relativeDir = '') {
  const items = fs.readdirSync(dir);
  const results = [];
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const newRelativeDir = path.join(relativeDir, item);
      const newOptimizedDir = path.join(optimizedDir, newRelativeDir);
      
      if (!fs.existsSync(newOptimizedDir)) {
        fs.mkdirSync(newOptimizedDir, { recursive: true });
      }
      
      const subResults = await processDirectory(fullPath, baseDir, newRelativeDir);
      results.push(...subResults);
    } else if (item.match(/\.(webp|png|jpg|jpeg)$/i) && !item.startsWith('.')) {
      const relativePath = path.join(relativeDir, item);
      const outputPath = path.join(optimizedDir, relativePath);
      const outputFilename = path.parse(outputPath).name + '.webp';
      const finalOutputPath = path.join(path.dirname(outputPath), outputFilename);
      
      const result = await optimizeImage(fullPath, finalOutputPath);
      if (result) {
        results.push(result);
      }
    }
  }
  
  return results;
}

async function main() {
  console.log('🚀 Початок оптимізації зображень...\n');
  console.log(`📁 Вхідна папка: ${imagesDir}`);
  console.log(`📁 Вихідна папка: ${optimizedDir}\n`);
  
  const startTime = Date.now();
  const results = await processDirectory(imagesDir);
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 ПІДСУМОК ОПТИМІЗАЦІЇ');
  console.log('='.repeat(60));
  
  const totalOldSize = results.reduce((sum, r) => sum + parseFloat(r.oldSize), 0);
  const totalNewSize = results.reduce((sum, r) => sum + parseFloat(r.newSize), 0);
  const totalReduction = ((1 - totalNewSize / totalOldSize) * 100).toFixed(1);
  
  console.log(`\n✅ Оброблено файлів: ${results.length}`);
  console.log(`📦 Початковий розмір: ${totalOldSize.toFixed(2)}MB`);
  console.log(`📦 Новий розмір: ${totalNewSize.toFixed(2)}MB`);
  console.log(`💾 Заощаджено: ${(totalOldSize - totalNewSize).toFixed(2)}MB (${totalReduction}%)`);
  console.log(`⏱️  Час виконання: ${duration}s`);
  
  console.log('\n' + '='.repeat(60));
  console.log('📝 ІНСТРУКЦІЯ:');
  console.log('='.repeat(60));
  console.log('\n1. Перевірте зображення в папці: public/images-optimized/');
  console.log('2. Якщо все ОК, замініть оригінали:');
  console.log('   rm -rf public/images.backup');
  console.log('   mv public/images public/images.backup');
  console.log('   mv public/images-optimized public/images');
  console.log('3. Або скопіюйте вибірково потрібні файли\n');
}

main().catch(console.error);
