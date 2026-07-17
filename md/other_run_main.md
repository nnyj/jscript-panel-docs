# Run Main

Download

## Overview

Unlike the built in command line handler/`foo_runcmd`, this component has
full support for dynamically generated menu commands meaning you can
use `Edit` commands and switch playlists, change output devices etc.

## Usage

To avoid ambiguity with common names that might appear more than once
under different sub menus, you must supply the full path to the command.

> Example: ```
> foobar2000.exe /run_main:Edit/Sort/Randomize
> foobar2000.exe /run_main:Library/Search
> 
> // use double quotes when command contains spaces
> foobar2000.exe /run_main:"Playback/Device/Primary Sound Driver"
> ```

## Changes

### 1.0.4

- Compiled with latest `foobar2000` `SDK`.
- The minimum requirement is now `foobar2000` `2.1`.
