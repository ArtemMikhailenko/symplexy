const sharp = require('sharp');
const path = require('path');

async function optimize() {
  const inputPath = path.join(__dirname, '../public/images/111.webp');
  const outputPath = path.join(__dirname, '../public/images/111-optimized.webp');
  
  console.log('🚀 Оптимізація файлу 111.webp...');
  
  try {
    await sharp(inputPath)
      .resize(1200, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ 
        quality: 50,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(outputPath);
    
    const fs = require('fs');
    const oldSize = (fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2);
    const newSize = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    const reduction = ((1 - newSize / oldSize) * 100).toFixed(1);
    
    console.log(`✅ Готово!`);
    console.log(`   Старий розмір: ${oldSize}MB`);
    console.log(`   Новий розмір: ${newSize}MB`);
    console.log(`   Зменшено на: ${reduction}%`);
    console.log(`\nТепер замініть файл:`);
    console.log(`   mv public/images/111.webp public/images/111-backup.webp`);
    console.log(`   mv public/images/111-optimized.webp public/images/111.webp`);
    
  } catch (error) {
    console.error('❌ Помилка:', error.message);
  }
}

optimize();
