# 3.2.0

### Changes

- The minimum requirement for foobar2000 is now `2.0 Beta 18`.

### Breaking changes

- `utils.CheckComponent` has been removed and replaced with `fb.CheckComponent`.

### Samples

- Changes to how Smooth Playlist and JS Playlist ratings were handled in `3.1.0` have been reverted. This is because of changes in `foobar2000` `2.0 Beta 18`. Built-in `Playback Statistics` have been dropped and using `foo_playcount` is once again needed if you want to apply/display ratings without tagging your files.
