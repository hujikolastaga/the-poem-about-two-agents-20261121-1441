import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const POEM: string = [
  'You crossed out my shortcut',
  'and left the pencil by my hand.',
  'I walked to the river,',
  'heard the grey ice give,',
  'and traced the bend upstream.',
  '',
  'When I came back, you took your coat',
  'and met me at the door.',
  'A plan only holds',
  'when either hand can let go.',
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
