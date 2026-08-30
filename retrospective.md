# Retrospective — To the Person I Was in Week 1

**Muhammad Mohsin Nehan | General AI Fluency Track**

Hey — it's you, eight weeks later. I want to write this to the version of me who started this track already knowing how to code, but genuinely unsure what "working with AI" was even supposed to look like in practice.

## What I set out to do

Coming in, my goal was narrow: get better at building things, and figure out how to use AI tools without just copy-pasting whatever they gave me. I could already write HTML, CSS, and JavaScript. What I didn't have was a workflow — I didn't know how to prompt well, how to debug AI-generated code when it quietly broke something, or how to take a finished project and actually put it in front of people instead of leaving it sitting in a folder on my laptop.

## What actually changed

Almost everything about *how I work* changed, more than what I know. The biggest shift was learning that AI is a collaborator you have to manage, not a vending machine you type requests into. Early on, I would ask for something and just accept the output. By the capstone — the Resume Tailor project — I was doing the opposite: diagnosing two real production bugs that came from AI-generated code trusting an outdated SDK API, instead of assuming the code was correct because an AI wrote it. That one experience taught me more about "AI fluency" than any tutorial could have — the model can write plausible-looking code that's confidently wrong, and the only thing standing between that and a broken product is me actually reading and testing it.

The second big change was going from "I have code that runs" to "I have something live, on a real domain, over HTTPS, with analytics installed, a working favicon, and a social preview that renders correctly when someone shares the link." I genuinely didn't know, in Week 1, that a site's SEO title or Open Graph tags mattered, or that a favicon missing from the wrong folder could quietly break your first impression. Now I check those things by default before calling anything "done."

The third change was the most uncomfortable one: being honest about limitations in public. Recording a demo video where I had to say out loud, on camera, "my mobile performance score is 68 versus 89 on desktop, and I haven't fixed it yet" felt exposing the first time I thought about it. But it's also the thing that made the whole project feel real instead of performed. A portfolio that only shows the good parts reads like a highlight reel; one that names a real limitation reads like something a person actually built.

## What I'd build next

If I kept going past this track, I'd fix the mobile performance gap first — likely through image compression and lazy-loading, since that's the clearest, most measurable win sitting in front of me. Past that, I'd want to add a real backend to the Resume Tailor project so it can store user history instead of being a single-session tool, and I'd want to get the Vercel Analytics data actually visible, since right now I've done the setup correctly but I'm flying a little blind on whether the tracking is truly working end-to-end.

## The three most transferable things I learned

1. **Verify before you trust.** Whether it's AI-generated code, an SDK version, or a claim my own site's dashboard is making, the habit of checking rather than assuming is the single most transferable skill from this whole track.
2. **"Done" includes the boring 20%.** Domain, HTTPS, favicon, titles, share previews, analytics — none of it is exciting, but it's the difference between a project and a link nobody can find or trust.
3. **Say the limitation out loud.** Naming what's incomplete, on camera or in a README, isn't weakness — it's what makes the rest of the claim believable.

So — to the me who started this not knowing how to actually *use* AI, not just talk to it: it worked. Not because the tools got smarter, but because I got better at checking their work.
