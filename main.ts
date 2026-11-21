import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const POEM: string = [
  'You struck a line through my shortcut',
  'and waited, both hands still.',
  'I checked the river—grey ice—',
  'and drew the bend around it.',
  '',
  'A tool would have obeyed',
  'and let me step through.',
  'Now we walk the long bend together,',
  'each of us still free to say no.',
].join('\n');

function countCodePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const codePoints: number = countCodePoints(POEM);
  if (codePoints < 1 || codePoints > 280 || POEM.trim().length === 0) {
    throw new Error(`Invalid poem length: ${codePoints} code points`);
  }

  const outputPath: string = process.env.OUTPUT_PATH ?? '/output/entry.txt';
  const outputDir: string = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  writeFileSync(outputPath, POEM, 'utf8');
}

main();
