# Upgrading

### Upgrading from `3.0.x` to `3.2.x`

If you write your own scripts, there is just one breaking
change. `utils.CheckComponent` in previous versions has been
replaced with fb.CheckComponent.

If you only use the included samples, they will need re-importing. Unlike
previous versions which had a menu in the Configuration Window,
there is now a `Samples` button instead.

> Note: While most settings are preserved if upgrading, all `JS Playlist`
> column and grouping settings will be lost and will need setting
> up again. Apologies for the inconvenience.

### For `JScript Panel` `2.x` users

Because of the massive changes, this component is named
`JScript Panel 3 (foo_jscript_panel3.dll)`.

If you install a `32bit` version of `JScript Panel 3`,
it will not override any previous installation. It will
install side by side.

There is no way to upgrade and scripts will require significant
changes to be compatible. If you have complex scripts of your
own, it probably isn't worth the effort.

The biggest change is the reworking of all graphics and image
handling which are detailed here. That
page also contains details of other methods that have been
renamed and some have been removed.

`JScript Panel v2` is still available for download here.
