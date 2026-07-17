# utils

Properties

|  |  |  |
| --- | --- | --- |
| utils.Version | number | read |
| utils.VersionString | string | read |

The version number corresponds with the string like these examples:

| utils.VersionString | utils.Version |
| --- | --- |
| 3.3.11 | 30311 |
| 3.4.1 | 30401 |
| 3.10.12 | 31012 |

Methods

## `utils.CalcTextWidth(text, font_name, font_size[, font_weight, font_style, font_stretch])`

| Arguments |  |  |
| --- | --- | --- |
| text | string |  |
| font_name | string |  |
| font_size | number |  |
| font_weight | DWRITE_FONT_WEIGHT | Default 400. |
| font_style | DWRITE_FONT_STYLE | Default 0. |
| font_stretch | DWRITE_FONT_STRETCH | Default 5. |

Returns a `number`.

## `utils.CalcTextWidth2(text, font_str)`

3.6.11

| Arguments |  |  |
| --- | --- | --- |
| text | string |  |
| font_str | string |  |

Returns a `number`.

> Example: ```
> var text = "blah";
> var font = window.GetFontDUI(0);
> var width = utils.CalcTextWidth2(text, font);
> ```

## `utils.CheckFont(name)`

| Arguments |  |  |
| --- | --- | --- |
| name | string |  |

Returns a `boolean` value.

> Note: If this unexpectedly returns `false` for font names you think are correct, check
> the `basic\DWriteFonts` sample. This lists all recognised fonts.

## `utils.ColourPicker(default_colour[, error_on_cancel])`

| Arguments |  |  |
| --- | --- | --- |
| default_colour | number |  |
| error_on_cancel | boolean | Default false. If set to true, you must use try/catch to prevent script errors. |

Returns a `number` which can used as the `colour` in many methods.

## `utils.ConvertToAscii(str)`

| Arguments |  |  |
| --- | --- | --- |
| str | string |  |

Returns a `string`.

## `utils.CopyFile(from, to[, overwrite])`

| Arguments |  |  |
| --- | --- | --- |
| from | string |  |
| to | string |  |
| overwrite | boolean | Default true. |

Returns a `boolean` value.

## `utils.CopyFolder(from, to[, overwrite, recur])`

| Arguments |  |  |
| --- | --- | --- |
| from | string |  |
| to | string |  |
| overwrite | boolean | Default true. |
| recur | boolean | Default true. If false, only files at the root of the folder are copied. |

Returns a `boolean` value.

## `utils.CreateFolder(path)`

Returns `true` on success or if folder already exists. Returns
`false` if operation fails.

Parent folders are created if they don't exist.

## `utils.CreateImage(width, height)`

| Arguments |  |  |
| --- | --- | --- |
| width | number |  |
| height | number |  |

Returns an IJSImage instance.

## `utils.CreateProfiler([name])`

| Arguments |  |  |
| --- | --- | --- |
| name | string | Optional |

Returns an IProfiler instance. Check
link for an example.

## `utils.CreateTextLayout(text, font_name, font_size[, font_weight, font_style, font_stretch, text_alignment, paragraph_alignment, word_wrapping, trimming_granularity])`

| Arguments |  |  |
| --- | --- | --- |
| text | string | As of component version 3.6.0, this may contain $rgb and $font code. |
| font_name | string |  |
| font_size | number |  |
| font_weight | DWRITE_FONT_WEIGHT | Default 400. |
| font_style | DWRITE_FONT_STYLE | Default 0. |
| font_stretch | DWRITE_FONT_STRETCH | Default 5. |
| text_alignment | DWRITE_TEXT_ALIGNMENT | Default 0. |
| paragraph_alignment | DWRITE_PARAGRAPH_ALIGNMENT | Default 0. |
| word_wrapping | DWRITE_WORD_WRAPPING | Default 0. |
| trimming_granularity | DWRITE_TRIMMING_GRANULARITY | Default 0. |

Returns an ITextLayout instance.

You typically use this when you want to calculate the height of a string
that wraps over multiple lines or need scrolling. When passing to IJSGraphics WriteTextLayout,
you can supply a vertical offset.

> Note: You can load this directly from the Configuration Window `Samples` button `basic/SimpleScroll`.

> Example: ```
> // ==PREPROCESSOR==
> // @name "SimpleScroll"
> // @author "marc2003"
> // @import "%fb2k_component_path%helpers.txt"
> // ==/PREPROCESSOR==
> 
> var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
> var layout = utils.CreateTextLayout(text, 'Segoe UI', 24);
> var offset = 0;
> var text_height = 0;
> 
> var box = {
>     x : 50,
>     y : 50,
>     w : 0,
>     h : 0,
> }
> 
> function on_paint(gr) {
>     gr.Clear(RGB(255, 255, 255));
>     gr.DrawRectangle(box.x, box.y, box.w, box.h, 1, RGB(255, 0, 0));
>     gr.WriteTextLayout(layout, RGB(0, 0, 0), box.x, box.y, box.w, box.h, offset);
> }
> 
> function on_mouse_wheel(step) {
>     if (text_height  0) offset = 0;
>     else if (offset
> ```

## `utils.CreateTextLayout2(text, fonts[, text_alignment, paragraph_alignment, word_wrapping, trimming_granularity])`

| Arguments |  |  |
| --- | --- | --- |
| text | string | As of component version 3.6.0, this may contain $rgb code. |
| fonts | string | This must be a stringified array of fonts. Anything other than an array will throw a script error. |
| text_alignment | DWRITE_TEXT_ALIGNMENT | Default 0. |
| paragraph_alignment | DWRITE_PARAGRAPH_ALIGNMENT | Default 0. |
| word_wrapping | DWRITE_WORD_WRAPPING | Default 0. |
| trimming_granularity | DWRITE_TRIMMING_GRANULARITY | Default 0. |

Returns an ITextLayout instance.

Use this if you want to apply multiple fonts to a single string of text and need scrolling support. When passing
to IJSGraphics WriteTextLayout,
you can supply a vertical offset.

See Styling Ranges Of Text for more advanced usage notes.

## `utils.DateStringToTimestamp(str)`

| Arguments |  |  |
| --- | --- | --- |
| str | string | Must be in full YYYY-MM-DD HH:MM:SS format. |

The return value is seconds since 00:00:00 Thursday, 1 January 1970 UTC.

It is expected date strings are timezone adjusted but timestamps are UTC (not adjusted).

> Example: ```
> var last_played_string = "2018-08-30 00:00:00";
> var last_played_timestamp = utils.DateStringToTimestamp(last_played_string);
> 
> var now = utils.Now();
> 
> // number of seconds in a day
> var day = 24 * 60 * 60;
> 
> // number of days since last played
> console.log(Math.floor((now - last_played_timestamp) / day));
> ```

## `utils.DetectCharset(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string | Path to a text file. |

Returns a `number` which can be supplied to utils.ReadTextFile.

This may not be accurate and returns `0` if an error occurred.

## `utils.DownloadFileAsync(window_id, url, path[, verify_image])`

|  | Arguments |  |  |
| --- | --- | --- | --- |
|  | window_id | window.ID |  |
|  | url | string | The remote file you want to download. |
|  | path | string | Full path including extension. The parent folder must already exist. |
| 3.7.5 | verify_image | boolean | Default false. |

No return value.

Use in conjunction with on_download_file_done.

> Note: You must ensure none of the folders in the `path` end with a period character.

## `utils.DownloadImageAsync(window_id, url)`

| Arguments |  |  |
| --- | --- | --- |
| window_id | window.ID |  |
| url | string | The image url you want to download. |

No return value.

Use in conjunction with on_download_image_done.

> Note: This is useful for temporary display of images you consider disposable and don't want to keep. Use
> `utils.DownloadFileAsync` if you want a permanent copy.
> There is a maximum size limit in place. Anything larger than `64MB` will fail to download.

## `utils.FormatDuration(seconds)`

| Arguments |  |  |
| --- | --- | --- |
| seconds | number |  |

Returns a `string`.

> Example: ```
> var playlist_items = plman.GetPlaylistItems(plman.ActivePlaylist);
> var playlist_length_seconds = playlist_items.CalcTotalDuration();
> console.log(utils.FormatDuration(playlist_length_seconds)); // 5:24:44
> ```

## `utils.FormatFileSize(bytes)`

| Arguments |  |  |
| --- | --- | --- |
| bytes | number |  |

Returns a `string`.

> Example: ```
> var playlist_items = plman.GetPlaylistItems(plman.ActivePlaylist);
> var playlist_bytes = playlist_items.CalcTotalSize()
> console.log(utils.FormatFileSize(playlist_bytes)); // 601 MB
> ```

## `utils.GetClipboardText()`

Returns a `string`. It will be empty if the clipboard contents are not text.

## `utils.GetCountryFlag(country_or_code)`

| Arguments |  |  |
| --- | --- | --- |
| country_or_code | string |  |

Returns a `string`. Could be empty on failure.

See Country Flags.

## `utils.GetFileSize(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |

Returns the size in bytes.

## `utils.GetLastModified(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |

The return value is seconds since 00:00:00 Thursday, 1 January 1970 UTC.

## `utils.GetSysColour(index)`

| Arguments |  |  |
| --- | --- | --- |
| index | number | https://docs.microsoft.com/en-gb/windows/win32/api/winuser/nf-winuser-getsyscolor |

Returns a `number` which can used as the `colour` in many methods. Could
be `0` if the `index` is invalid.

> Example: ```
> var splitter_colour = utils.GetSysColour(15);
> ```

## `utils.GetSystemMetrics(index)`

| Arguments |  |  |
| --- | --- | --- |
| index | number | https://docs.microsoft.com/en-gb/windows/win32/api/winuser/nf-winuser-getsystemmetrics |

Returns a `number`.

## `utils.Glob(pattern[, exc_mask, inc_mask])`

| Arguments |  |  |
| --- | --- | --- |
| pattern | string |  |
| exc_mask | FILE_ATTRIBUTE | Default FILE_ATTRIBUTE_DIRECTORY. |
| inc_mask | FILE_ATTRIBUTE | Default 0xffffffff. |

Returns a `VBArray` so you need to use `.toArray()` on the result.

> Example: ```
> var arr = utils.Glob("C:\\Pictures\\*.jpg").toArray();
> ```

## `utils.HashString(str)`

| Arguments |  |  |
| --- | --- | --- |
| str | string |  |

Returns a `string`.

## `utils.HTTPRequestAsync(window_id, type, url[, user_agent_or_headers, post_data])`

| Arguments |  |  |
| --- | --- | --- |
| window_id | window.ID |  |
| type | number | Use 0 for GET, 1 for POST. |
| url | string |  |
| user_agent_or_headers | string | Optional. See Web Requests for examples. |
| post_data | string | This is ignored for GET requests and can be omitted. It is required for POST requests. It could be form data or a stringified JSON object/array. |

> Note: This is for fetching plain text only. See utils.DownloadFileAsync for downloading binary files or utils.DownloadImageAsync for downloading images in memory.

Returns a unique `task_id` which is used as the first argument in
the on_http_request_done callback.

> Note: When making a `POST` request, you should set a `Content-Type` header. Valid
> values could be `application/json` or `application/x-www-form-urlencoded`.

See Web Requests for examples.

## `utils.InputBox(prompt, title[, default_value, error_on_cancel])`

| Arguments |  |  |
| --- | --- | --- |
| prompt | string |  |
| title | string |  |
| default_value | string | Defaults to an empty string if omitted. |
| error_on_cancel | boolean | Default false. If set to true, you must use try/catch to prevent script errors. |

Returns a `string`.

With `error_on_cancel` not set (or set to `false`), cancelling the dialog will return `default_value`.

> Example: ```
> var username = utils.InputBox("Enter your username", "JScript Panel", "");
> ```

Using the above example, you can't tell if `OK` or `Cancel` was
pressed if the return value is the same as `default_value`.

If you need to know, set `error_on_cancel` to `true` which throws
a script error when `Cancel` is pressed.

> Example: ```
> try {
>     var username = utils.InputBox("Enter your name", "JScript Panel", "", true);
>     // OK was pressed.
> } catch(e) {
>     // Dialog was closed by pressing Esc, Cancel or the Close button.
> }
> ```

## `utils.IsFile(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |

Returns a `boolean` value.

## `utils.IsFolder(folder)`

| Arguments |  |  |
| --- | --- | --- |
| folder | string |  |

Returns a `boolean` value.

## `utils.IsKeyPressed(vkey)`

| Arguments |  |  |
| --- | --- | --- |
| vkey | number | https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes |

Returns a `boolean` value.

## `utils.ListFiles(folder[, recursive])`

| Arguments |  |  |
| --- | --- | --- |
| folder | string |  |
| recursive | boolean | Default false. |

Returns a `VBArray` so you need to use `.toArray()` on the result.

## `utils.ListFolders(folder[, recursive])`

| Arguments |  |  |
| --- | --- | --- |
| folder | string |  |
| recursive | boolean | Default false. |

Returns a `VBArray` so you need to use `.toArray()` on the result.

## `utils.ListFonts()`

Returns a `VBArray` so you need to use `.toArray()` on the result.

## `utils.LoadBitmap(path[, max_size])`

3.8.4

| Arguments |  |  |
| --- | --- | --- |
| path | string | Any valid image supported by the Windows Imaging Component. |
| max_size | number | Default is 0 which leaves the original untouched. |

Returns an IJSBitmap instance or `null` on failure.

## `utils.LoadImage(path[, max_size])`

| Arguments |  |  |
| --- | --- | --- |
| path | string | Any valid image supported by the Windows Imaging Component. |
| max_size | number | Default is 0 which leaves the original untouched. |

Returns an IJSImage instance or `null` on failure.

## `utils.LoadImageAsync(window_id, path)`

| Arguments |  |  |
| --- | --- | --- |
| window_id | window.ID |  |
| path | string |  |

No return value.

Use in conjunction with on_load_image_done.

## `utils.LoadSVG(path_or_xml[, max_width])`

| Arguments |  |  |
| --- | --- | --- |
| path_or_xml | string |  |
| max_width | number | Default is 0. |

Returns an IJSImage instance or `null` on failure.

> Example: ```
> var svg_file = fb.ComponentPath + 'samples\\svg\\android.svg';
> 
> var original = utils.LoadSVG(svg_file);
> var large = utils.LoadSVG(svg_file, 512); // set optional max_width
> 
> function on_paint(gr) {
>     gr.DrawImage(original, 0, 0, original.Width, original.Height, 0, 0, original.Width, original.Height);
>     gr.DrawImage(large, original.Width, 0, large.Width, large.Height, 0, 0, large.Width, large.Height);
> }
> ```

## `utils.MessageBox(prompt, title, flags)`

| Arguments |  |  |
| --- | --- | --- |
| prompt | string |  |
| title | string |  |
| flags | MessageBox Buttons, MessageBox Icons | Can be combined. |

Returns a MessageBox Return Value.

> Example: ```
> // ==PREPROCESSOR==
> // @import "%fb2k_component_path%helpers.txt"
> // ==/PREPROCESSOR==
> 
> var prompt = "Do you really want to open the Preferences?";
> var title = "A very important question";
> if (utils.MessageBox(prompt, title, MB_YESNO | MB_ICONQUESTION) == IDYES) {
>     fb.ShowPreferences();
> }
> ```

## `utils.Now()`

Returns a Unix timestamp.

This is just shorthand instead of writing

```
var now = Math.round(new Date().getTime() / 1000);
```

## `utils.ReadINI(path, section, key[, default_value])`

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |
| section | string |  |
| key | string |  |
| default_value | string | This will be the return value if the key isn't found. Defaults to an empty string if omitted. |

Returns a `string`. The maximum length is limited to 255 characters.

An INI file should look something like this:

```
[section]
key=val
```

> Example: ```
> var username = utils.ReadINI("e:\\my_file.ini", "Last.fm", "username");
> ```

## `utils.ReadTextFile(path[, codepage])`

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |
| codepage | number | Default 0. See utils.DetectCharset. |

Returns a `string`. Will be empty if `path` doesn't exist or there
was an error opening it.

> Note: If the file is determined to be `UTF16-LE` or `UTF8`, any
> supplied `codepage` will be ignored.

> Example: <div class="tabbed-set tabbed-alternate" data-tabs="1:2"><input checked="checked" id="__tabbed_1_1" name="__tabbed_1" type="radio" /><input id="__tabbed_1_2" name="__tabbed_1" type="radio" /><div class="tabbed-labels"><label for="__tabbed_1_1">Simple</label><label for="__tabbed_1_2">Using utils.DetectCharset</label>

```
var path = "E:\\some text file.txt";
var text = utils.ReadTextFile(path);
```

```
var path = "E:\\some text file.txt";
var codepage = utils.DetectCharset(path);
var text = utils.ReadTextFile(path, codepage);
```

## `utils.ReadUTF8(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |

Returns a `string`. Will be empty if `path` doesn't exist or there
was an error opening it.

> Note: It's preferable to use this when you know the file
> is `UTF8`. If you're unsure, continue to use utils.ReadTextFile

## `utils.RemoveFolderRecursive(path[, option])`

3.5.0

| Arguments |  |  |
| --- | --- | --- |
| path | string |  |
| option | number | Default 0 which removes the folder and its contents. Supplying 1 clears the contents but leaves the root folder in place. |

Returns a `boolean` value.

## `utils.RemovePath(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string | Can be a file or folder. If it's a folder, it must be empty. |

Returns a `boolean` value.

## `utils.RenamePath(from, to)`

| Arguments |  |  |
| --- | --- | --- |
| from | string | Can be a file or folder. |
| to | string |  |

Returns a `boolean` value.

## `utils.ReplaceIllegalChars(str[, modern, strip_trailing_periods])`

| Arguments |  |  |
| --- | --- | --- |
| str | string |  |
| modern | boolean | Default true. |
| strip_trailing_periods | boolean | Default false. Set to true if str is a folder name. |

Returns a `string`.

> Example: <div class="tabbed-set tabbed-alternate" data-tabs="2:2"><input checked="checked" id="__tabbed_2_1" name="__tabbed_2" type="radio" /><input id="__tabbed_2_2" name="__tabbed_2" type="radio" /><div class="tabbed-labels"><label for="__tabbed_2_1">Modern</label><label for="__tabbed_2_2">Legacy</label>

```
var chars = '"\\\/*|:<>?';
console.log(utils.ReplaceIllegalChars(chars, true));
```

```
''⧵⁄∗∣∶˂˃？
```

```
var chars = '"\\\/*|:<>?';
console.log(utils.ReplaceIllegalChars(chars, false));
```

```
''--x_-__
```

## `utils.Run(app[, params])`

| Arguments |  |  |
| --- | --- | --- |
| app | string | Can be the path to a file and Windows will open the associated application. |
| params | string | Defaults to an empty string if omitted. |

No return value.

> Example: ```
> utils.Run('notepad');
> utils.Run('https://www.foobar2000.org');
> 
> var file = ...
> if (utils.IsFile(file)) {
>     utils.Run('explorer', '/select,"' + file + '"');
> }
> ```

## `utils.RunCmdAsync(window_id, app, params)`

| Arguments |  |  |
| --- | --- | --- |
| window_id | window.ID |  |
| app | string |  |
| params | string |  |

Returns a unique `task_id` which is used as the first argument in
the on_run_cmd_async_done callback.

This is for launching command line tools only and they will run in background threads.
You'll get notified when complete. The callback will not be called
if supplied with a bad `app` argument.

## `utils.SetClipboardText(text)`

| Arguments |  |  |
| --- | --- | --- |
| text | string |  |

No return value.

## `utils.ShowPopupMessage(message[, title])`

| Arguments |  |  |
| --- | --- | --- |
| message | string |  |
| title | string | Default JScript Panel 3. |

No return value.

## `utils.TextBox(prompt, title[, default_value, help_text])`

|  | Arguments |  |  |
| --- | --- | --- | --- |
|  | prompt | string |  |
|  | title | string |  |
|  | default_value | string | Defaults to an empty string if omitted. |
| 3.8.4 | help_text | string | Defaults to an empty string it omitted. If not empty, a Help button will show in the dialog. If help_text begins with http, it will launch a web browser otherwise it will open a popup window containing the text. |

Returns a `string`.

This offers a multi-line text edit area.

> Note: This always throws an error if cancelled so you must use `try/catch`.

## `utils.TimestampToDateString(ts)`

| Arguments |  |  |
| --- | --- | --- |
| ts | number | Should be the number of seconds since 00:00:00 Thursday, 1 January 1970 UTC. |

Returns a `string`. It will be adjusted to your local time zone.

> Example: ```
> var now = utils.Now();
> console.log(utils.TimestampToDateString(now));
> ```

## `utils.WriteINI(path, section, key, value)`

| Arguments |  |  |
| --- | --- | --- |
| path | string | The parent folder must already exist. |
| section | string |  |
| key | string |  |
| value | string |  |

Returns a `boolean` value.

> Example: ```
> utils.WriteINI("e:\\my_file.ini", "Last.fm", "username", "Bob");
> ```

## `utils.WriteTextFile(path, content)`

| Arguments |  |  |
| --- | --- | --- |
| path | string | The parent folder must already exist. |
| content | string |  |

Returns a `boolean` value.

> Note: Files are written as `UTF8` without `BOM`.
