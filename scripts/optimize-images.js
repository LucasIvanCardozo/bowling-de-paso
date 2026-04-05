import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = 'scripts/forOptimize'
const outputDir = 'scripts/optimized'

fs.mkdirSync(outputDir, { recursive: true })

const files = fs.readdirSync(inputDir)

for (const file of files) {
  const base = path.parse(file).name

  await sharp(path.join(inputDir, file))
    .resize({
      width: 768,
      withoutEnlargement: true,
    })
    .webp({ quality: 75, effort: 6 })
    .toFile(path.join(outputDir, `${base}.webp`))
}
