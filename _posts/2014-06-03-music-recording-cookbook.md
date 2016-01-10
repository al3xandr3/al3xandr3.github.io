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

### Audio Settings

- File recording: all uncompressed
- 48,000Hz, 24bit, 128 (less if possible) buffer size.

### Recording Raw

Recording unprocessed instrument is the most flexible for audio mastering editing. All the processing then happens in software plug-ins on top of already recorded instrument.
See re-amping.



## Recording Guitars


### Widening

- Record the same part 2 times into different tracks and pan one to right and the other one to left (80-95%). The very small differences in playing makes them sound big. But only sounds good if they are really close.
- Record this with different sounds, different amplifier/cabinet combination.

This produces an a wider sound, less central and more stereo spread and bigger sound in general.
Some people even 4 recordings for an even bigger effect.


#### (Fake) stereo with a delay

- Delay one channel (either left or right) by about 20-30 ms, this will produce a wide stereo effect. Similar to what happens in reality that a sound reflecting on a wall  reaches the other ear a few milliseconds after.


- Use a stereo widening plug-in that adds a delay to either right of left channel to simulate space, and give a wider stereo sound. (http://www.kvraudio.com/product/adt_by_vacuumsound)


### Mixing

Guitars especially with distortion tend to fill in a wide spectrum, so the idea in EQ'ing guitars is all about subtracting: 

1. Don't pile up instruments in the same range. Instead assign each instrument its own frequency range (typically an octave per instrument).
2. Apply high-pass filters to every single instrument. Shave off all the unnecesary bass frequencies below each sound.
3. Sometimes overlapping instruments is innevitable (e.g. bassline and kick drum). To separate overlapping instruments, use 'inverted EQ': apply a boost and a cut to the first instrument. Then copy that same EQ to the second instrument, but invert it - where you boosted by 2db, now cut by 2db. And where you cut by 2db, now boost by 2db.
4. Since all instruments overlap in the midrange, you can go through every instrument and cut slightly between the 200-500Hz range. This is a small effect on each instrument, but really adds up and results in a much cleaner mix.

Alternatively this can be done with a Multi-band compressor, for a more adaptive 'fix'.

#### Reference:

- HOW TO CREATE A CLEAN MIX / ARRANGEMENT: https://www.youtube.com/watch?v=G8lFAaANnhs

### Soloing

Is easy for the Solo to get muddy when added on top of existing tracks of the same instrument (or the same frequency range).

- Automate in DAW the lowering of the volume of the already recorded instruments of the same frequency range, when doing the solo, this helps the solo to stand out, example, lower the volume of the rhythm guitars parts when doing the guitar solo. Fairly easy to do in a DAW as a audio mastering technique. Leave the rest of the instruments at the same level.
- Punch holes in the frequency range of song, to open up space for the soloing instrument. Find the frequency the soloing instrument uses and then compress those in the rest of the mix. Trick of the inverse EQ, mentioned in "Mixing" section

## Song Sections Transitions

Accentuate the effect of music from one section to other, or to make a more natural transition.

### Brief Mute

Right before a heavy hitting section mute completely for a few  milliseconds (on the previous section), it accentuates the hit of the heavy section.

### Volume roll in

To make a transition from quiet to loud dense sections, a good trick is to make the volume of the dense section, start low (at same level of quiet part) and raise up progressively to full. Start to end fairly quick, 1 sec max ?

### Stutter Effect

Gaps in audio in fast rhythmic intervals

### Tape slow down and speed up

Simulating a slow down like a old Cassette player loosing their batteries ?



## Mixing


### "Cleaner" Reverb
Use delay between (80-90ms), like left:80ms, rigth:90ms, with left right crossover and wet at 30%, add in as much (or as little) repeats as needed.



## Mastering

Learn from existing music examples, even in when mastering, keep a example at hand to compare to.

1. Center vs Sides

1.1 Force the low frequencies to be in center.
1.2 Widen the sides a little bit, volume higher for sides.

2. EQ

2.1 Clean: remove frequencies
2.2 EQ boost the top end

3. Compress, guing things toguether

Dynamic, multiband compressor: 
Maybe more top eq, especially on the sides

4. Color

Add Subtle warm saturation: sides vs mid. Push sides highs up

5. Make it loud
Maximizer and limiter at the end


Reference:
- https://www.youtube.com/watch?v=FzNweEPg-2U
- https://www.youtube.com/watch?v=Bah367_iLBg





## Final output
I want to convert the final audio or video into different formats, for different purposes

### Convert from wav to mp3

- Export raw from daw.
- Use Audacy with the lame encoder pack.

### Convert videos in raw form to mp4

- Export raw from daw
- Convert to mp4 using Handbreak.

### Reaper video export reference settings

- Video (FFmpeg encoder) MKV container
- HUFFYUV video codec, 24 bit PCM audio
- Set: "Get native video settings"

## Sound Quality Characteristics

### Overdrive, Distortion, Fuzz


- Rat: drive up to half, more than that starts to loose definition. To get more gain, use a cleaner (low drive) tube screamer to push it.
- OCD should be more used as overdrive, too much drive start to loose definition. Works great with a BBpreamp pushing it.
