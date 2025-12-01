const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeFiles() {
  const files = [
    { 
      input: 'crystal-flower-mob.webp', 
      output: 'crystal-flower-mob-optimized.webp',
      width: 800,
      quality: 50
    },
    { 
      input: 'crystal-flower.webp', 
      output: 'crystal-flower-optimized.webp',
      width: 1000,
      quality: 55
    }
  ];

  console.log('🚀 Оптимізація декоративних зображень...\n');

  for (const file of files) {
    const inputPath = path.join(__dirname, '../public/images', file.input);
    const outputPath = path.join(__dirname, '../public/images', file.output);
    
    try {
      const oldSize = (fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2);
      
      await sharp(inputPath)
        .resize(file.width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ 
          quality: file.quality,
          effort: 6,
          smartSubsample: true,
        })
        .toFile(outputPath);
      
      const newSize = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
      const reduction = ((1 - newSize / oldSize) * 100).toFixed(1);
      
      console.log(`✅ ${file.input}`);
      console.log(`   Старий: ${oldSize}MB → Новий: ${newSize}MB (${reduction}%)\n`);
      
    } catch (error) {
      console.error(`❌ Помилка ${file.input}:`, error.message);
    }
  }
  
  console.log('\n📝 Замініть файли:');
  console.log('mv public/images/crystal-flower-mob.webp public/images/crystal-flower-mob-backup.webp');
  console.log('mv public/images/crystal-flower-mob-optimized.webp public/images/crystal-flower-mob.webp');
  console.log('mv public/images/crystal-flower.webp public/images/crystal-flower-backup.webp');
  console.log('mv public/images/crystal-flower-optimized.webp public/images/crystal-flower.webp');
}

optimizeFiles();
