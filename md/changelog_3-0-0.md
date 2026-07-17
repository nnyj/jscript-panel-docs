# 3.0.0

### New additions

- utils.CreateFolder (creates all parent folders if necessary)
- utils.CreateTextLayout, gr.WriteTextLayout
- utils.GetClipboardText, utils.SetClipboardText
- utils.GetLastModified
- utils.LoadSVG
- utils.MessageBox
- utils.RemovePath
- window.IsDark
- gr.FillGradientRectangleAdvanced (allows you to create `D2D` Linear and Radial brushes.)
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
