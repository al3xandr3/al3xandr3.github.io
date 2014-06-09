---
layout: post
title: Music Production
category: other
tags:
  - learning
  - music
  - guitar
intro: "Music Production"
---

## Sound

> Sound is a mechanical wave that is an oscillation of pressure transmitted through some medium (like air or water), composed of frequencies which are within the range of hearing.
[wikipedia](http://en.wikipedia.org/wiki/Sound)

Touching still water creates (mechanical) waves, sound is the equivalent on air, sound is about agitating still air, generating a (mechanical) wave that propagates through air when when reaches our ears is perceived as sound.

A Speaker works by pushing air with its cone at a specific vibration.

Properties of sound:

- Propagation, is the sound moving around from point A to point B. It has a certain speed of propagation and is also connected to our sense of space, because of surface reflections (reverb, delay).

- Amplitude, how high (and/or low) are the sound wave curve peaks. Interesting enough sound waves amplitude are in fact (counter intuitively) a longitudinal wave, like sound pressure, i.e. a sound wave that propagates faster is perceived as a louder sound. But in practice sound is represented as wave for easier manipulation.

- Frequency, frequency is how far apart are the peeks in the sound wave, the closer the higher the frequency, these translate directly into music notes. Every instrument an microphones have a set dynamic range the produce. Every note on a instrument corresponds to a certain frequency, Ex: A2 = 440Hz.

- Timbre, relates to the type of sound. A sine wave is about the simplest sound wave possible, real live sounds are actually an aggregation of several waves together, that aggregation defines the timbre. (Could i use a FFT to break a timbre into its composing parts?)

> Frequency of a guitar:
Guitar strings are E2=82.41Hz, A2=110Hz, D3=146.8Hz, G3=196Hz, B3=246.9Hz, E4=329.6Hz

Drop D tunning: D2=73.42 hz

and the highest on guitar, the 24th fret on the high E string = 1318.4 hz

## Signal level & DI

The term dB (decibel) by itself means the amount a signal level changes in relation to wherever it started. When you see gear specs that say "-10 dBv" or "+4 dBu", they are telling you how much lower or higher the average output is relative to a specific fixed reference voltage.  That voltage is usually either 1.0 V, referred to as "0 dBv", or 0.78 V, referred to as "0 dBu".

Common Types:
Line level - processors, racks, pedal effects ? 2 kinds

 - professional: +4dBu
 - consumer audio: -10dBv

Instrument level: -20 dBu

Microphone level - -30 dBu

Guitar signal is high impedance, -20, unbalanced (degrades faster over long cables)

A DI box converts guitar signal (-20 dBu) to microphone level (-30 dBu), also converts it into a balanced (better on long distances)

Reference: http://www.ovnilab.com/articles/linelevel.shtml

## Microphone

Types:

- Dynamic: rugged, for live loud stage usage, has a fairly small, typically directional. ex: shure SM57, SM58 

- Condenser: very sensitive, not for live stage, better for studios, pickup a 

Microphone polar pattern is about the area they pickup around the microphone, typically the Dynamic have smaller area than condenser, SM58: cardio shaped polar pattern.
Condenser often are less directional, and more likely to have omni directional, or more wide range polar pattern.

A wider polar pattern captures more from room, environment, that can be very useful, depending on application.

## Noise

All electronic devices have a transformer that works at a specific frequency, when that frequency is within the human hearing range: 20 to 20khz it will create noise in recordings. Room Light controllers (that allow diming) are noisy.

## DAW 

### Project Checklist
- Proper project tracks and location 
- Digital Audio preferences and Hardware Setup (see Basic Settings)
- File recording: all uncompressed

### Audio Settings
- 48,000Hz, 24bit, 128 (less if possible) buffer size.

### Individual tracking checklist 

 - Name individual tracks, the recording are often named after the track
 - Mono vs stereo
 - Set the level

### When too many plug-ins (CPU having a hard time)

- Render the audio into a 2nd track.
- Disable the original track with effects - but don’t delete, to be able to re-amp (fine tune) the FX's again later.

### Saving processing power on doubled guitars (left and right)

Doubled guitars can be panned left and right into a bus, that enters into a stereo guitar amplifier. Individual sub-tracks are without any effects.
Saves processing power.

### Several Takes, merge the best bits (audio photoshop)

Do several takes for same track like rhythm guitar then take then best form each and merge into 1:

- Do very short crossfades, between each segment to avoid sound clipping. (reaper seems to do that by default)

- Do a track freeze (or merge), that renders it all into 1 audio track.

### Track Automations

Very common that volume of track is not same for the whole track, do track automations to change volume over time. This is very useful to make things standout / hide when required.

## MIDI

MIDI often triggers either a sampled instrument or an synth algorithmic one.

Velocity is the intensity then note was played, lower to make it quieter.

Quantization, good trick to fix performance, use quantization to the notes that were played, quarter notes, eight notes etc...

Quantization strength: do at 20%, check if good enough, if not then 20% again, etc... it keeps the human feel to it.

## Equalizer

In a mix, each instrument to be heard properly lives in a certain region alone, 
EQ strategy is to think what instruments dominate the space frequency and accentuate that, for example for a bass: cut the high end (also because bass does not emit those frequencies, most likely is noise) and slightly boost the low freq.
Guitar typically lives in higher frequencies.
Vocals, guitars piano live in similar frequencies. Cut radically to give space for all instruments at same, decide the cuts depending on function for the music is piano dominating the top, guitar the mid, or vice versa?

Better to cut than to boost. Boosting a lot sounds fake.

Types Of EQ:

- Low / high pass - only lets low or high edges to pass ( high pass often used to remove noise from mic'd instruments
- Low / high shelf - reduces low or high edges to a set level ( typically the bass treble nobs of amps )
- Band Pass filter - a bell shaped curved window  to boost or cut the frequencies on that window. Not so common to use as the other filters. A great way to find what frequencies a certain instrument dominates is by using a bell filter and moving manually across the whole frequency range and hear what frequencies make it weaker.

### EQ in a real mixing console are typically
- High Pass (cut lower than 75hz, removes noise) 
- low shelf (80hz)
- high shelf (12khz)
- bell low mid low (sweep from 100 - 2k)
- bell mid high ( sweep from 400 - 8k)

EQ reference guide: http://www.idmforums.com/showthread.php?t=18237

## Dynamics

Effects that act on volume, very important. Maybe a bit abused nowadays where there is little dynamics and volumes are maximized.

Types of Dynamic Effects:

- Compressor - reduces the level of the loud peaks (the transients). Removes dynamic range. 1st bring down the transients. 2nd raise the gain up. At the end means increased volume of quiet moments

- Limiter - Original to cut the sound above a specific threshold. Works like a compressor, but automatically increases gain. Is essentially a compressor with a high ratio 10:1 or more. Loudness maximizers are limiters.

- Gate - is a compressor at a very high ratio with a very fast attack. Its used to cut noise bellow the threshold.

Parameters:

- Threshold - reduce the level when volume goes above threshold.

- Knee - blunts the threshold hit points, soften the transition

- Ratio - input to output compression ratio: 2:1, means output is half the input. Defines how much the volume comes down when it hits the threshold.

- Attack and Release: Control how fast does the compressor/limiter kicks in.

Compressor application - rides the wave, lowers the highs, augments the quiets. Imagine following the voice track (actually very common), when gets lower then raise it up, when very loud then lower volume a bit. a Compressor does this automatically its an analyzer that by taking averages of x samples creates a simplified wave shape called envelope that is used to update the volume knob. The envelope curve goes up the volume goes down in case of a compressor.

Transients are the peaks in sound wave.

Should always mix / play at same volume level always, volume influences our natural ears eq.

## Delay & Reverb

Short slapback delay can often do same function, and is cleaner than a more complex noisy reverb. A short slapback simulates a 1 time reflexion. A reverb is a fairly more complex (and noisy) slapback. 

> Guitar Tip
Try slapback ( left:80ms, rigth:90ms, with left right crossover and wet at 30%) see if good enough to replace reverb. As a cleaner and tighter reverb.

Use reverb to give the impression of a room, of a certain space the instruments are in, thus often good idea to apply a whole track reverb. When reverb is applied to individual tracks then is like they were in different rooms or at different distances.

Chorus, phaser, flanger are oscillating short delay type effects.

A long delay often has the repetitions modified, for example cutting some high frequencies to make it clearer that they are reflexions, sounds more natural.

Long delay is better if time synced with track.

Long delay, better when left different than right, for a ping pong effect.

Best (most realistic) reverbs are convolution, but they can't be fined tuned as much as the algorithmic ones, typically algorithmic one the goal is to best simulate a space.

Getting the right sounding reverb often involves trial and error.

## Space (depth) in a stereo mix

Properties that affect Perception of deep in a mix:

- Volume - the closer the louder
- High End - long distances loose high end became duller
- Reverb - the closer the mic the less gets from room, the less reverb
- Stereo with - low sound on 1 ear is very close, as it gets further start to hear a small delay on the other ear, when very far no separation of left from right.

The main focal point should be at the center, thus widening a certain track or instrument can give space for another central point. For example guitar rhythm on stereo wide  and guitar solo centered.
The center can then be filled with instruments across all frequencies, typically: low kick, bass, guitar, vocals and high hat

Important is that left and right are in balance.

Triangle shape balance strategy: low end is central and the high end can be spread wide.

> Guitar Tip
Having left (or right) channel delayed up to 20ms, gives a close impression of doubled guitar. Somewhat similar to recording 2 takes of same lick, panned left and right.

## Synths 

Synths purpose is to engineer an instrument's sound.  A model of instrument sound. They have a nice modular design that is combined together to recreate an instrument timbre sound.

Works by first generating some kind of simple wave, then applying several filters to it, including time based filters, like oscillating ones, that for example create vibrato.

Building Blocks:

- Oscillator - simple sound generator, sine wave, square wave, square wave, etc
- Filter - low pass, high pass, band pass
- Amplifier - volume knob, really works together with the envelope
- Envelope - the parameters that define volume when note on and off happens.
- Low-frequency-oscillator - cyclic/oscillator that is used to dynamically change other module parameter.  

Example:
Tremolo is a triangular LFO changing the volume over time.
Compressor is like a, dynamic envelope, that in real time averages the volume dynamically.

## Guitars

### Woods
Mentioned often times as good woods combination for an electric guitar:

- Light body: Basswood back, maple top
- Dense wood neck

But there is a good deal of taste, and even the same wood can be of different quality.

## Reference

This is mostly a summary of things I've learned from the [music production class at coursera](https://class.coursera.org/musicproduction-003/lecture/index). With added findings from my own guitar recordings.

