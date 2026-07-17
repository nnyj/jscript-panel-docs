# IJSImage

Properties

|  |  |  |  |
| --- | --- | --- | --- |
| Height | number | read |  |
| Path | string | read | This will the source path of the image when created from the various album art methods or utils.LoadImage. It will be empty if the image is cloned or created with utils.CreateImage or utils.LoadSVG. |
| Width | number | read |  |

Methods

## `ApplyEffect(effect)`

| Arguments |  |  |
| --- | --- | --- |
| effect | ImageEffect |  |

No return value.

> Example: ```
> var original = utils.LoadImage(fb.ComponentPath + 'samples\\images\\1.webp');
> 
> var grayscale = original.Clone();
> var invert = original.Clone();
> var sepia = original.Clone();
> 
> grayscale.ApplyEffect(0);
> invert.ApplyEffect(1);
> sepia.ApplyEffect(2);
> 
> function on_mouse_lbtn_dblclk() {
>     original.SaveAs("z:\\original.jpg");
>     grayscale.SaveAs("z:\\grayscale.jpg");
>     invert.SaveAs("z:\\invert.jpg");
>     sepia.SaveAs("z:\\sepia.jpg");
> }
> ```
> <div class="tabbed-set tabbed-alternate" data-tabs="1:4"><input checked="checked" id="__tabbed_1_1" name="__tabbed_1" type="radio" /><input id="__tabbed_1_2" name="__tabbed_1" type="radio" /><input id="__tabbed_1_3" name="__tabbed_1" type="radio" /><input id="__tabbed_1_4" name="__tabbed_1" type="radio" /><div class="tabbed-labels"><label for="__tabbed_1_1">Original</label><label for="__tabbed_1_2">Grayscale</label><label for="__tabbed_1_3">Invert</label><label for="__tabbed_1_4">Sepia</label>

## `Clone()`

Returns an `IJSImage` instance.

## `CreateBitmap()`

3.8.4

Return an IJSBitmap instance. You may consider using `Dispose()` immediately after
using this to free up memory.

> Example: ```
> var g_bitmap = null;
> 
> function update_bitmap() {
>     if (g_bitmap) {
>         g_bitmap.Dispose();
>         g_bitmap = null;
>     }
> 
>     var handle = fb.GetNowPlaying();
> 
>     if (handle) {
>         var image = handle.GetAlbumArt(0); // 0 = front
>         if (image) {
>             g_bitmap = image.CreateBitmap();
>             image.Dispose();
>         }
>     }
> }
> ```

See also: utils.LoadBitmap.

## `Dispose()`

No return value.

## `FlipRotate(options)`

| Arguments |  |  |
| --- | --- | --- |
| options | WICBitmapTransform |  |

No return value.

## `GetColourScheme(count)`

| Arguments |  |  |
| --- | --- | --- |
| count | number |  |

Returns a `VBArray` so you need to use `.toArray()` on the result.

> Example: ```
> // Tracks playlist selection
> 
> var img = null;
> var arr = [];
> on_item_focus_change();
> 
> function on_item_focus_change() {
>     if (img) {
>         img.Dispose();
>         img = null;
>     }
> 
>     arr = [];
>     var metadb = fb.GetFocusItem();
>     if (metadb) {
>         img = metadb.GetAlbumArt();
> 
>         if (img) {
>             arr = img.GetColourScheme(10).toArray();
>         }
>     }
>     window.Repaint();
> }
> 
> function on_paint(gr) {
>     if (img && arr.length) {
>         gr.DrawImage(img, 0, 0, 300, 300, 0, 0, img.Width, img.Height);
>         for (var i = 0; i
> ```

## `GetGraphics()`

Return an IJSGraphics instance.

## `ReleaseGraphics()`

No return value.

## `Resize(width, height)`

| Arguments |  |  |
| --- | --- | --- |
| width | number |  |
| height | number |  |

No return value.

## `SaveAs(path)`

| Arguments |  |  |
| --- | --- | --- |
| path | string | The parent folder must already exist. The image is saved as JPG so you should use that as the file extension. |

Returns a `boolean` value to indicate success.

## `StackBlur(radius)`

| Arguments |  |  |
| --- | --- | --- |
| radius | number | Valid values 2-254. |

No return value.

> Example: ```
> // ==PREPROCESSOR==
> // @name "StackBlur (image)"
> // @author "marc2003"
> // @import "%fb2k_component_path%helpers.txt"
> // ==/PREPROCESSOR==
> 
> var img = utils.LoadImage(fb.ComponentPath + 'samples\\images\\1.webp');
> var blur_img = null;
> var radius = 20;
> 
> StackBlur(radius);
> 
> function StackBlur(radius) {
>     if (blur_img) blur_img.Dispose();
>     blur_img = img.Clone();
>     blur_img.StackBlur(radius);
> }
> 
> function on_paint(gr) {
>     gr.DrawImage(img, 0, 0, 550, 368, 0, 0, 550, 368);
>     gr.DrawImage(blur_img, 0, 368, 550, 368, 0, 0, 550, 368);
>     gr.FillRectangle(0, 0, window.Width, 24, RGB(0, 0, 0));
>     gr.WriteText('Scroll mouse to change radius: ' + radius, '', RGB(255, 255, 255), 0, 0, window.Width, 24, 2, 0);
> }
> 
> function on_mouse_wheel(step) {
>     radius += step * 5;
>     if (radius  254)
>         radius = 254;
>     StackBlur(radius);
>     window.Repaint();
> }
> ```
