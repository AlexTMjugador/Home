---
title: Hello world!
description: The premiere of maybe a series of more posts to come.
publishDate: 2023-02-18T15:03:58.496Z
---

I have noticed for a while now that most of the coolest and most visible
computer enthusiasts and professionals on the Internet have their own personal
websites.

Recently, I have acquired enough university degrees and work experience to say
without a doubt that I indeed am a junior computer professional, so the idea of
making a personal website began to gain traction in my mind. Even some
acquaintances of mine suggested that I should do it.[^1] After all, who doesn’t
want to become a rockstar in their field of knowledge or be friends with one?

Therefore, I started to consider doing a personal website seriously. I came up
with lots of reasons to do it, including the following:

- _Creating a personal website shows skill and effort_. Communicating who you
  are and what you can bring to the table in a personalized manner helps
  differentiate oneself from the rest, which is helpful to secure better
  contracts, collaborations, and job positions. It also demonstrates an ability
  to use web technologies for practical purposes.
- _A personal website provides a decentralized, trend-agnostic, privacy-friendly
  hub to share thoughts, facts, and experiences with others_. Today, Twitter and
  Medium are among the first services that come to mind for the purposes of
  sharing ideas online. However, it is good to not rely too heavily on companies
  that offer hard-to-replace services for these purposes: I do not want to
  migrate to whatever social network takes the place of Twitter,[^2] force my
  visitors to download cookies, or contribute to a dystopian web where a few
  parties have great power over what content is allowed and how it is presented
  to others. My space has my rules, and is my way of reaching my readers
  directly. In fact, anyone can send a pull request to this website!
- _A personal website can be a rewarding way to practice language skills_. As
  some may be able to tell, I am not a native English speaker. While English is
  not difficult for me, it takes time and effort to master any language to the
  point where you can communicate clearly and effortlessly in most
  circumstances. I recognize the value of English as the _de facto_ language for
  communicating with people outside my country and comfort zone: I want to be
  exposed to different schools of thought and avoid knowledge silos and biases.
  Most educated people in my country can read English, so I'm not missing out on
  them either.[^3]
- _Writing blog posts can be a way to relax_. Instead of wasting time on
  meaningless endeavors when I am tired or in a bad mood, it is wiser to focus
  on some random topic of interest and produce a coherent writeup about it that
  I am not ashamed to share with others. Perhaps my readers and I can learn
  something from that.

I also came up with a reason not to do it: it takes time and effort with no
guaranteed return on investment. But I’m not a perfectly rational investor,[^4]
and learning new technologies provides enough intrinsic motivation for me. I
don’t need the external incentive of people reading these posts, but it is
welcome.

The conclusion was clear: I should do it! After quite a few Google searches and
reads to the documentation of the static site generator that caused the best
first impression to me for this project, Astro, I began to write code. The
result is in front of you. Cool, right?

Moving on to the technical side of developing this website, I'm glad I chose
Astro for the task. Even though its landing page suffers from an excess of
buzzwords that require digging a bit to know what they actually mean,[^5] the
design principles behind it are solid and follow best technical practices, so
the development experience was satisfying. I care about computer resource usage
efficiency, and a static personal website doesn't benefit much from reactivity
and reusing previously developed artifacts, so the tradeoffs offered by Astro
made sense.

For now, I didn’t set any schedule or commitment to update this blog. Perhaps
this is the last update I ever write, and I’m wasting my time. But it would be a
shame to waste the groundwork I have done, and it’s unlikely that I won't ever
come up with a topic worth discussing in a post.

Feel free to suggest topics for me to discuss, take a look at the source code
that powers this site, or comment down below! Beware that this site is powered
by a Jamstack architecture, so Giscus is used to integrate with GitHub
Discussions to handle comments, and GitHub requires you to accept cookies and
log in to comment.

[^1]:
    When such reasonable suggestions come around to me, they usually are good
    ideas that I should have done already. Thanks 😊

[^2]:
    Such a mass migration does not seem extremely unlikely given the recent
    events and turmoil involving Twitter. I would rather avoid the drama
    altogether with a radical, lasting and satisfying solution than just keep
    mindlessly following the _statu quo_. What’s more, I prefer to invest my
    time on stuff other than keeping up with which social network has the most
    network effect at a given time for a given purpose.

[^3]:
    Actually, I may miss out on those who do not think about reading English
    content online, or lack the time or willingness to do so. Luckily,
    experience has shown me that I tend not to feel much affinity for such
    people, so in practice that is not a concern.

[^4]: Nobody is, but I try to be aware of it and act as rationally as possible.

[^5]:
    You can call it an extensible static site generator based on components
    that render to plain HTML and CSS with no JavaScript code on the client,
    except when it does hydration or such components contain JavaScript, that
    leverages Node.js and the npm package manager, integrates the Vite asset and
    module bundler and minifier, and technically can be used with other
    established frontend frameworks, minus when code or components that target
    such frameworks is incompatible with Astro's "leading paradigm shift for
    frontend web architecture". Perhaps I'm not the best marketing person out
    there...
