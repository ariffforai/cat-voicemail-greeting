# Cat Voicemail Greeting

[![Make.fun competition](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Make.fun rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/ariffforai/cat-voicemail-greeting/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Make.fun reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/ariffforai/cat-voicemail-greeting/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

Entry for the [Funniest Cat Voicemail Greeting](https://make.fun/c/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443) competition on Make.fun.

## The entry

> This is Pickles. I'm in the box the bed came in. Leave a message, and if it's the vet, I'm not here.

One line, 100 characters, pure ASCII. A named cat, a cat-specific joke (the box the bed came in), a caller instruction, and the punch in the last words.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` — a single line, no trailing newline — and fails loudly if the line ever leaves the 1–120 character / byte range or stops being pure printable ASCII.

```sh
node main.ts
cat /output/entry.txt
```

Deterministic: the same line on every run. No randomness, no network, no input files.
