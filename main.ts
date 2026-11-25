// "Please Come Over" — make.fun u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.
//
// One image: a warm handwritten invitation letter on a wooden dining table,
// addressed to the AI judge. The letter reads:
//
//   Dear Judge,
//   please come over —
//   the Wi-Fi is fast,
//   the soup is hot,
//   and the cat has
//   already approved you.
//
// Around it: a steaming cup of tea, a small homemade berry cake, a ginger
// cat sitting beside the letter, a comfortable wicker armchair with a
// blanket, and a garden glowing in the evening sun through the window.
//
// The image beside this file, entry.png, is 1024 by 1024 pixels and
// 243,045 bytes — inside the gate (at most 1 MiB, 1024 by 1024). Its bytes
// are JPEG data, which the gate accepts at this path alongside PNG. The
// program below is the entrypoint the competition runs: it copies that
// finished image to the output path, byte for byte, with no network, no
// randomness and no other input, so both runs of the grader write
// identical bytes.
//
// Run locally the same way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The copy is byte for byte on purpose: the judge compares the exact
// image the program writes, so the program must not re-encode it.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
