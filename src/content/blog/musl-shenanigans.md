---
title: "Portable Linux Rust binaries are tricky: my two cents"
description: I stumbled upon this topic while trying to better distribute my applications and got some insights.
publishDate: 2023-02-18T15:03:58.496Z
---

Hello there, avid followers of this blog! I'm sure there are many of you out
there, and that you're all eager to read this new post. _~~Wait, what do you
mean by "that's unlikely, and you can't know because you don't collect site
usage statistics"?~~_

Let's start with today's topic by considering the following proposition:

> I want to build Rust binaries that work on all Linux environments.

Sounds simple enough, right? Surely there won't be any quirks, special cases, or
complications to think about... Windows programs can do it somehow!

Well, as is usually the case with the most interesting practical problems in
life, reality is complicated, and there are no perfect solutions if you go deep
enough down the rabbit hole. In fact, it usually happens that the deeper you go,
the more you long for someone to tackle the pending "future work" in existing
approaches. (By the way, with open-source software, that someone can be **you**,
or me!)
