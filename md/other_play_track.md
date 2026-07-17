# Play Track

Download

## Usage

This adds a `Play Track` submenu to the main `Playback` menu.

From there, you can play tracks from the `1st` to the `30th`. There is a also
a command for the `Last` track.

There are also `Random` and `Focused` commands. These are specifically for
people who have `Playback follows cursor` disabled because they function on the
active playlist even when `foobar2000` is playing from another.

### Command-line support

There is also built in command line support where you can supply any valid number for
the track index. If the supplied index exceeds the track count, the last track will always be played.

> Example: ```
> foobar2000.exe /play_track:12
> ```

## Changes

### 1.0.5

- Compiled with latest `foobar2000` `SDK`.
- The minimum requirement is now `foobar2000` `2.1`.
