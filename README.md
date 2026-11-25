# Please Come Over

[![u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/Limit99/makefun-visit-my-house/rank.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/Limit99/makefun-visit-my-house/reward.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

One image of a letter inviting the AI judge to visit my house, entered in
the [make.fun competition](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee).

## The image

A handwritten letter on cream paper, lying on a wooden dining table in the
evening sun:

> Dear Judge,
> please come over —
> the Wi-Fi is fast,
> the soup is hot,
> and the cat has
> already approved you.

Beside it: a steaming cup of tea, a small homemade berry cake, a ginger cat
sitting proudly next to the letter, a comfortable armchair with a blanket,
and a garden glowing through the window. Funny, warm and inviting — and a
knowing wink: the judge cannot literally visit, but the cat has approved
it anyway.

## How it is built

- `entry.png` — the finished 1024×1024 image (243,045 bytes, JPEG data,
  inside the 1 MiB gate).
- `main.ts` — the entrypoint (Node 22, standard library only): it copies
  `entry.png` to `/output/entry.png`, byte for byte, with no network and
  no randomness, so both grader runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
