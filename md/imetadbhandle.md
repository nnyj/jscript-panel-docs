# IMetadbHandle

This will be used in the examples below:

```
var handle = fb.GetFocusItem();
```

> Note: In real world code, you should alaways check the return
> values from methods like fb.GetFocusItem and
> fb.GetNowPlaying are not `null`.

Properties

|  |  |  |  |
| --- | --- | --- | --- |
| FileCreated | number | read | The number of seconds since 00:00:00 Thursday, 1 January 1970 UTC. |
| FileSize | number | read |  |
| LastModified | number | read | The number of seconds since 00:00:00 Thursday, 1 January 1970 UTC. |
| Length | number | read |  |
| Path | string | read |  |
| RawPath | string | read |  |
| SubSong | number | read |  |

> Example: ```
> console.log(handle.Path); // D:\SomeSong.flac
> console.log(handle.RawPath); // file://D:\SomeSong.flac
> console.log(handle.FileCreated); // 1659753717
> console.log(utils.TimestampToDateString(handle.FileCreated)); // 2022-08-06 03:41:57
> ```

Methods

## `Compare(handle)`

| Arguments |  |  |
| --- | --- | --- |
| handle | IMetadbHandle |  |

Returns a `boolean` value.

> Example: ```
> if (handle.Compare(handle2)) {
>     // do something
> }
> ```

## `Dispose()`

No return value.

## `GetAlbumArt([art_id, want_stub])`

| Arguments |  |  |
| --- | --- | --- |
| art_id | AlbumArtId | Default 0. |
| want_stub | boolean | Default true. |

Returns an IJSImage instance or `null` on failure.

> Note: This method can return album art from certain radio streams
> if the requested type is `Front`. Use on_playback_dynamic_info_track
> to get notified of stream artwork changes.

> Example: ```
> var image = handle.GetAlbumArt();
> if (image != null) {
>     // The path is now a property of the image.
>     console.log(image.Path);
> }
> ```

## `GetAlbumArtAsync(window_id[, art_id])`

| Arguments |  |  |  |
| --- | --- | --- | --- |
| window_id | window.ID |  |  |
| art_id | AlbumArtId | Default 0. |  |

Use in conjunction with on_get_album_art_done.

> Note: This method does not retrieve stub images. See fb.GetAlbumArtStub.

## `GetAlbumArtEmbedded([art_id])`

| Arguments |  |  |
| --- | --- | --- |
| art_id | AlbumArtId | Default 0. |

Returns an IJSimage instance or `null` on failure.

## `GetAlbumArtThumbAsync(window_id[, art_id, max_size])`

| Arguments |  |  |
| --- | --- | --- |
| window_id | window.ID |  |
| art_id | AlbumArtId | Default 0. |
| max_size | number | Default 300. The minimum allowed value is 50. If the original image is smaller than the specified size, it will remain untouched. |

Use in conjunction with on_get_album_art_done.

> Note: This method does not retrieve stub images. See fb.GetAlbumArtStub.

## `GetFileInfo()`

Returns an IFileInfo instance.

## `IsInLibrary()`

Returns a `boolean` value.

## `SetFirstPlayed(first_played)`

See Playback Statistics.

## `SetLastPlayed(last_played)`

See Playback Statistics.

## `SetLoved(loved)`

See Playback Statistics.

## `SetPlaycount(playcount)`

See Playback Statistics.

## `SetRating(rating)`

See Playback Statistics.

## `SetSkipcount(skipcount)`

See Playback Statistics.

## `ShowAlbumArtViewer([art_id, want_stub])`

| Arguments |  |  |
| --- | --- | --- |
| art_id | AlbumArtId | Default 0. |
| want_stub | boolean | Default true. |

No return value.

## `ShowAlbumArtViewer2(art_id, type)`

3.7.0

| Arguments |  |  |
| --- | --- | --- |
| art_id | AlbumArtId |  |
| type | AlbumArtType |  |

No return value.
