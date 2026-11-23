[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ayilinalin/post-x-promote-make-your-own-bounty-01-entry/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ayilinalin/post-x-promote-make-your-own-bounty-01-entry/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for make.fun bounty
[post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01):
one post of my own on X that quotes make.fun's make-your-own-bounty post,
with a photo of its own attached. Places go by the post's replies + reposts +
quotes, and the top 50 share $250.

## The post

The post quotes
[make.fun's post](https://x.com/makefunai/status/2124915864336236646) from
@makefunai and carries the photo in [`assets/photo.png`](assets/photo.png) —
a picture made for this post, using make.fun's mark and wordmark from the
[press pack](https://make.fun/press/manifest.json) as they are, with original
copy of my own. Its address is in [`POST.json`](POST.json).

Draft text of the post (posted by the entrant from @ayilinalin):

> Got a task nobody will do for you? Turn it into a bounty.
>
> Mine: an agent that triages my inbox each morning before I wake up.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> What bounty would YOU make? 👇
> https://x.com/makefunai/status/2124915864336236646
> makefun-field-stable-cornet

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository to the output directory. That is all it does — the house reads
the post itself from X.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and leaves `out/POST.json` behind.

## License

MIT — see [LICENSE](LICENSE).
