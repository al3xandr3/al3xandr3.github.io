---
layout: post
title: Music Recording Cookbook
category: other
tags:
  - music
  - guitar
intro: "Music Recording Cookbook"
---

Start with the [music production](http://al3xandr3.github.io/music-production.html) for general intro.


## Song structure

### I want to
Know how to structure a song

### How

There are different approaches but maybe the most common is to have sections of the song repeating, while typically the lyrics change. This also helps to hook in the listener with a common background pattern. This is called the Strophic form (derived from a Greek work, meaning "turn") and the alternative is the through-composed form.

The parts the take "turns" by historical reasons are called Verse, Chorus, Bridge, pre-chorus, etc... But i like the approach of a generic naming of sections A, B, C, etc...

Commonly used song structures:

- AABA: 32 form (8 bars each)
- ABABB(B): verse-chorus style, B is the highlight
- ABABCAB: C acts as a fairly different section (bridge) and then resolves back to the known (already heard) section.

But of course, songs don't mandatorily need to follow a pre-determined structure, you can do whatever you like.

Reference:

- http://en.wikipedia.org/wiki/Strophic_form
- http://en.wikipedia.org/wiki/Song_structure_(popular_music)




## Setup for recording

### I want to
Setup for the recording process

### Audio Settings
- File recording: all uncompressed
- 48,000Hz, 24bit, 128 (less if possible) buffer size.

### Recording Raw
Recording unprocessed instrument is the most flexible for audio mastering tweaks. All the processing then happens in software plugins on top of already recorded instrument.
See re-amping.



## Bigger sound

### I want to
Make a sound of a recorded part sound bigger

### How
Use a stereo widening effect.

Best to record to 2 tracks with the same part, then pan (80-95%) one right and the other one left.
This produces an a wider sound, less central and more stereo spread.
Some people do even 4 recordings for an even bigger effect.

Alternative use a stereo widening plugin that adds a delay to either right of left channel to simulate space, and give a wider stereo sound. (http://www.kvraudio.com/product/adt_by_vacuumsound)

### (Fake) stereo with a delay
Delay one channel (either left or right) by about 20-30 ms, this will produce a wide stereo effect.
Similar to what happens in reality that a sound reflecting on a wall  reaches the other ear a few milliseconds after.




## Song Sections transitions

### I want to
Accentuate the effect of music from one section to other, or to make a more natural transition.

### Brief Mute
Right before a heavy hitting section mute completelly for a few  milliseconds (on the previous section), it accentuates the hit of the heavy section.

### Volume roll in
To make a transition from quiet to loud dense sections, a good trick is to make the volume of the dense section, start low (at same level of quiet part) and raise up progressively to full. Start to end fairly quick, 1 sec max ?




## Soloing

### I want to
Clearly listen the solo in a song. Is easy for the Solo to get muddy when added on top of existing tracks of the same instrument (or the same frequency range).

### How
Automate in daw the lowering of the volume of the already recorded instruments of the same frequency range, when doing the solo, this helps the solo to stand out, example, lower the volume of the rhythm guitars parts when doing the guitar solo. Fairly easy to do in a DAW as a audio mastering technique.
Leave the rest of the instruments at the same level.


An alternave and maybe more intuitive is to increase volume of solo instrument, but this does not always work.




## Audio Mastering

### I want to
Make the recorded material as best sounding as possible.

### "Cleaner" Reverb
Use delay between (80-90ms), like left:80ms, rigth:90ms, with left right crossover and wet at 30%, add in as much (or as little) repeats as needed.




## Final output
### I want to
Convert the final audio or video into different formats, for different purposes

### How
Export from Daw in raw format as the main output.
Use then tools to convert from the main raw output to other formats.

### Convert from wav to mp3
Export raw from daw
Use Audacy with the lame encoder pack

### Convert videos in raw form to mp4
Export raw from daw
Handbreak

### Reaper video export reference settings
- Video (FFmpeg encoder) MKV (or avi) container
- HUFFYUV video codec, 24 bit PCM audio
- Set: "Get native video settings"
