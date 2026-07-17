# 3.0.x

## 3.0.29

- Various sample fixes.

## 3.0.28

- Fix various `Smooth` sample bugs when using the Ctrl key and mouse wheel to increase the font size.

## 3.0.27

- Fix issue with `ITextLayout` `CalcTextHeight` where passing an invalid `max_width` would throw a script error.

## 3.0.26

- Existing `Spectrogram Seekbar` users must use the `Samples` button in the Configuration Window to reload their scripts. Underlying changes require it.
- 2 new button scripts have been added: `Playback Buttons` which is a super minimal set for compact layouts.
- `Track Info + Seekbar + Buttons + Volume` is a modification of an existing script adding a `Volume` slider.

The existing `Track Info + Seekbar + Buttons` scripts have been updated so you can toggle the `Stop After Current` state by right clicking the `Stop` button. The new scripts also support this.
All button scripts have been updated to provide an alternative button set if the `Segoe Fluent Icons` font is installed. `Windows 11`
users have it by default, `Windows 10` users can download it here.

## 3.0.25

- Various sample fixes.

## 3.0.24

- Update `Smooth` samples with dynamic colour support. They are read from the front cover each time a new track starts. It can be enabled via the right click menu under `Colours`.
- Update `Smooth Browser` with the ability to drag the selected group out on to playlist viewers/playlist managers.
- Fix script error when using `Smooth Playlist Manager` to drag and move a playlist towards the end of the list.

## 3.0.23

- Fix drag/drop which was broken in `3.0.22`.

## 3.0.22

- Fix bugs with `fb.GetClipboardContents()` and the `Paste` handling in `JS Playlist` / `Smooth Playlist`.
- Various UI colour handling improvements in the `Smooth` samples.

## 3.0.21

- Fix `Smooth Browser` which was accidentally broken by copying code from the `foobar2000` `2.0` version which is not compatible.

## 3.0.20

- Restore `on_playlist_item_ensure_visible` which was removed in `3.0.0`.
- Fix `JS Playlist` and `Smooth Playlist` using the above callback so they should always scroll to the playing item when the status bar is double clicked. Previously, it would work only if the playing item wasn't focused.

## 3.0.19

- Fixes a bug with the 3rd party Lexilla library used for keyword highlighting in the Configuration Window.

## 3.0.18

- Minor `IThemeManager` bug fix.
- The `Spectrogram Seekbar` scripts can now generate images for tracks longer than 1 hour in length. This requires ffmpeg 6.0.

## 3.0.17

- Various sample fixes.

## 3.0.16

- Restore the `on_main_menu` callback.
- Restore the `fromhook` argument to `on_metadb_changed`.

## 3.0.15

- Update `window.GetFontCUI` / `window.GetFontDUI` so they properly handle font names which contain properties like `SemiBold`, `Condensed`, `Light` etc.
- Fix bug with `plman.AddLocations` so items are added to the correct playlist if other playlist operations during the async process cause the `playlistIndex` of the destination playlist to change.
- Various sample fixes.

## 3.0.14

- The `Thumbs` sample has been limited to loading no more than 64MB of images from disk.

## 3.0.13

- Backport some fixes from the latest version.

## 3.0.12

- Various bug fixes.

## 3.0.11

- Fix regression from `3.0.10` where resources may not have been freed correctly on shut down. This would only affect scripts that used `utils.LoadSVG`.

## 3.0.10

- The `SVG` renderer now supports `text`.

## 3.0.9

- Update `utils.LoadSVG` to use a better rendering library.

## 3.0.8

- Fix bugs with `IJSGraphics` `FillGradientRectangle` / `FillGradientRectangleAdvanced`.

## 3.0.7

- Fix `Thumbs` sample so existing images are not downloaded again.

## 3.0.6

- Built in support for `WebP` images was backported from version `3.1.3`.

## 3.0.5

- Restore Configuration Window menu and editor presets that were unintentionally replaced in `3.0.4`.
- `Smooth Playlist Manager` and `JS Playlist` bug fixes.

## 3.0.4

- The minimum requirement for `foobar2000` is now `1.6.6`.
- The IMetadbHandle interface now has a `LastModified` property. Unlike `%last_modified%`, this is a timestamp.
- Fixes broken `$rgb` support in `JS Playlist`. It should be usable in columns again.
- Fixes a bug with `Last.fm Bio` and `Thumbs` not being able to download and save files if the artist ended with a period character.
- The `Spectrogram` seekbar scripts have been updated to save as `WebP` which are much smaller images.
- The `Last.fm Artist Info + User Info (previously Similar Artists)` can now display `Top tracks` and `Top tags`. Also, a bug which prevented `Recent Tracks` from updating has been fixed but the script needs reloading from the `Samples` button.

## 3.0.3

- Fixes a bug with `JS Playlist` `state` and `mood` column alignment where the `right` and `centre` options were inverted.

## 3.0.2

- Fix crash if Configuration Window `Goto` dialog was empty when clicking `OK`.

## 3.0.1

- Calling DrawImage with bad `srcW` or `srcH` arguments now silently fails instead of turning the whole panel black.

## 3.0.0

### New additions

- utils.CreateFolder (creates all parent folders if necessary)
- utils.CreateTextLayout, gr.WriteTextLayout
- utils.GetClipboardText, utils.SetClipboardText
- utils.GetLastModified
- utils.LoadSVG
- utils.MessageBox
- utils.RemovePath
- window.IsDark
- gr.WriteText (supports coloured emoji, styling ranges of text)

### Sample changes

- The `Queue Viewer` sample has been removed.
- The `Album Art` sample no longer has a `CD Jewel Case` option.
- `Smooth Browser` no longer creates playlists on selection changes. To send tracks to the `Library selection` playlist, a group has to be double clicked. The destination playlist name can be changed via the panel properties. As before, groups can be added to existing playlists using the right click>`Add to...` option.
- The group headers in `Smooth Playlist` are no longer collapsable.
- `Thumbs` now has a `circular` option available via the right click menu,

### Removed features

- There is no longer a playback statistics database. This has been restored in `3.3.12`.
- Panels cannot be added as toolbars in `Columns UI`. This has been restored in `3.2.16`.
- There is no pseudo transparent option in `Columns UI`. Panels are transparent when added as a `Columns UI` toolbar.

### Removal of `gdi`

There is no longer a `gdi` namespace. Those methods have
been replaced as follows:

| Removed | Replacement |
| --- | --- |
| gdi.CreateImage | utils.CreateImage |
| gdi.Font | Stringified JSON |
| gdi.Image | utils.LoadImage |
| gdi.LoadImageAsync | utils.LoadImageAsync |

### Removal of `IGdiGraphics`

The replacement is IJSGraphics which uses `DirectWrite` instead
of `Gdiplus`. The most commonly used methods have changed as follows:

| Removed | Replacement | Notes |
| --- | --- | --- |
| gr.DrawRect | gr.DrawRectangle | No changes in usage. |
| gr.FillSolidRect | gr.FillRectangle | No changes in usage. |
| gr.DrawString, gr.GdiDrawText | gr.WriteText |  |

Special care has to be taken with all other methods as their behaviour
has changed.

The most commonly used method will be `gr.DrawImage` which
used to take `angle` and `alpha` as the last 2 arguments. Now the
last 2 are `opacity` and `angle`. They were/are always optional
so may be omitted.

```
// old
gr.DrawImage(img, dstx, dsty, dstw, dsth, srcx, srcy, srcw, srch[, angle, alpha])

// new
gr.DrawImage(img, dstx, dsty, dstw, dsth, srcx, srcy, srcw, srch[, opacity, angle])
```

Unlike `alpha` which accepted values between `0-255`, `opacity` takes
a floating point number between `0-1`.

`gr.DrawPolygon` and `gr.FillPolygon` no longer exist at all.

### Removal of `IGdiBitmap`

Since `Gdiplus` is no longer used, the `Windows Imaging Component` is used for all
image handling. I've managed to transfer most but not all previous functionality.

`ApplyMask` and `InvertColours` no longer exist but similar functionality
can be replicated with new methods.

See IJSImage for full details.

### Callback changes

on_playlist_item_ensure_visible has been removed entirely. This has been restored in the latest versions.

`on_get_album_art_done` no longer receives `image_path` because it's now a
property of the image.

> Example: ```
> function on_get_album_art_done(handle, art_id, image)
> {
>     if (image) g_img_path = image.Path;
> }
> ```

`on_load_image_done` has different arguments where the `image_path` supplied
to `utils.LoadImageAsync` is now the identifier instead of a `task_id`.

> Example: ```
> function on_load_image_done(image_path, image) {
>     if (image) { // could be null if supplied path was bad
>         // do something
>     }
> }
> ```

### Renamed/moved methods

This list may be incomplete.

| Old | New | Notes |
| --- | --- | --- |
| fb.CopyHandleListToClipboard | IMetadbHandleList CopyToClipboard |  |
| fb.CreateProfiler | utils.CreateProfiler |  |
| fb.DoDragDrop | IMetadbHandleList DoDragDrop |  |
| fb.GetQueryItems | IMetadbHandleList GetQueryItems |  |
| fb.GetSelections | fb.GetSelection | This replaces the old fb.GetSelection |
| fb.IsMetadbInMediaLibrary | IMetadbHandle IsInLibrary |  |
| fb.RunContextCommandWithMetadb | IMetadbHandleList RunContextCommand |  |
| fb.ShowPopupMessage | utils.ShowPopupMessage |  |
| plman.PlaylistItemCount | plman.GetPlaylistItemCount |  |
| utils.Chardet | utils.DetectCharset |  |
| utils.GetAlbumArtAsync | IMetadbHandle GetAlbumArtAsync |  |
| utils.GetAlbumArtEmbedded | IMetadbHandle GetAlbumArtEmbedded |  |
| utils.GetAlbumArtV2 | IMetadbHandle GetAlbumArt |  |
| utils.GetRequestAsync, utils.PostRequestAsync | utils.HTTPRequestAsync |  |
| window.InstanceType | window.IsDefaultUI | Now returns a boolean value |
| IMetadbHandleList Add | IMetadbHandleList AddItem |  |
| IMetadbHandleList AddRange | IMetadbHandleList AddItems |  |
| IMetadbHandleList Insert | IMetadbHandleList InsertItem |  |
| IMetadbHandleList InsertRange | IMetadbHandleList InsertItems |  |
| IMetadbHandleList Item | IMetadbHandleList GetItem, IMetadbHandleList ReplaceItem |  |
| IMetadbHandleList OrderByFormat | IMetadbHandleList SortByFormat |  |
| IMetadbHandleList OrderByPath | IMetadbHandleList SortByPath |  |
| IMetadbHandleList OrderByRelativePath | IMetadbHandleList SortByRelativePath |  |

### Methods with changed behaviour

- fb.CreateMainMenuManager now takes a `name` parameter for `File`, `Edit`, `View` etc and the returned `IMainMenuManager` object no longer has an `Init` method.
- IMetadbHandleList RemoveDuplicatesByFormat and IMetadbHandleList SortByFormat now take a title format pattern as a `string`.

### Removals with no replacement

- plman.AddPlaylistItemToPlaybackQueue
- plman.EnsurePlaylistItemVisible
- plman.FlushPlaybackQueue
- plman.GetPlaybackQueueHandles
- plman.RemoveItemFromPlaybackQueue
- plman.RemoveItemsFromPlaybackQueue
- plman.SetPlaylistFocusItemByHandle
- utils.MapString
- utils.PathWildcardMatch
- window.IsTransparent
- IMetadbHandleList BSearch
