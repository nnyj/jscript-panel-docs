# 3.3.0

### Changes

- The component has been unified in to a single version for any version of `foobar2000` `1.6.6+`.
- The following features were previously exclusive to the `3.2.x` series for `foobar2000` `2.0` but are now available for `foobar2000` `1.6.x` users: `fb.ShowPictureViewer`
- `utils.CreateTextLayout2`
- `utils.DownloadImageAsync` / `on_download_image_done`
- `utils.Run`
- `utils.RunCmdAsync` / `on_run_cmd_async_done`
- `utils.TextBox`
- `window.IsThemed`
- `IMenuObj` `SetDefault`
- `IMetadbHandle` `EvalPlaylistItem`

The following features remain exclusive to `foobar2000` `2.0`:

- `console.ClearBacklog`
- `console.GetLines`
- `plman.FindByGUID`
- `plman.GetGUID`
- `plman.GetQueryItems`
- `IMetadbHandle` `DateCreated`
- `on_console_refresh`

### Breaking changes

- For people upgrading from the `3.0.x` series, `utils.CheckComponent` has been removed and replaced with `fb.CheckComponent`.

### New additions

- Add `fb.IsV2` which is a `boolean` property.

### Samples

- If you're upgrading from the `3.0.x` series, you should replace all samples in panels from the `Samples` button in the Configuration Window. `JS Playlist` custom column and grouping settings will be lost.
- The advanced Text Display sample is now available.
