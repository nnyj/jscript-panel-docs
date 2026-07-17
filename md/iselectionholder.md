# ISelectionHolder

Methods

## `SetSelection(handle_list[, type])`

| Arguments |  |  |
| --- | --- | --- |
| handle_list | IMetadbHandleList |  |
| type | SelectionType | Default 0. |

No return value.

## `SetPlaylistSelectionTracking()`

No return value.

Sets selected items to playlist selection and enables tracking.
When the playlist selection changes, the stored selection is automatically
updated. Tracking ends when a set method is called on any `SelectionHolder`
or when the last reference to this `SelectionHolder` is released.

## `SetPlaylistTracking()`

No return value.

Sets selected items to playlist contents and enables tracking.
When the playlist selection changes, the stored selection is automatically
updated. Tracking ends when a set method is called on any `SelectionHolder`
or when the last reference to this `SelectionHolder` is released.

The above methods are typically used to update the selection used by the Default UI
artwork panel or any other panel that makes use of the `Preferences` under
`File>Preferences>Display>Selection viewers`.

> Example: <div class="tabbed-set tabbed-alternate" data-tabs="1:2"><input checked="checked" id="__tabbed_1_1" name="__tabbed_1" type="radio" /><input id="__tabbed_1_2" name="__tabbed_1" type="radio" /><div class="tabbed-labels"><label for="__tabbed_1_1">Playlist Viewer</label><label for="__tabbed_1_2">Library Viewer</label>

```
var selection_holder = fb.AcquireSelectionHolder();
selection_holder.SetPlaylistSelectionTracking();

function on_focus(is_focused) {
    if (is_focused) {
        // Updates the selection when panel regains focus
        selection_holder.SetPlaylistSelectionTracking();
    }
}
```

```
var selection_holder = fb.AcquireSelectionHolder();
var handle_list = null;

function on_mouse_lbtn_up(x, y) {
    // Presumably going to select something here...
    handle_list = ...;
    selection_holder.SetSelection(handle_list, 6);
}
```
