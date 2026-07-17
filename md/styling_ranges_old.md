# Styling Ranges Of Text

## Using `IJSGraphics WriteText`

This first example uses IJSGraphics WriteText
where you can combine custom fonts/colours in a single array.

The limitation here is that scrolling text vertically is not supported so if you need
that, you'll need to use the `utils.CreateTextLayout` / `utils.CreateTextLayout2` examples below.

> Note: You can load this directly from the Configuration Window `Samples` button `basic/WriteTextStyles`.

> Example: ```
> // ==PREPROCESSOR==
> // @name "WriteTextStyles"
> // @author "marc2003"
> // @import "%fb2k_component_path%helpers.txt"
> // ==/PREPROCESSOR==
> 
> /*
> This sample splits a string in to whole words and then randomly
> styles each one and updates itself twice a second. Every element
> of the array which is used for styling must have a valid
> start/length value. You can see how the start value is
> incremented for each word.
> */
> 
> var fonts = utils.ListFonts().toArray();
> var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
> var style_string = '';
> 
> // split text in to whole words for styling
> var words = text.split(' ');
> 
> refresh();
> 
> window.SetInterval(function () {
>     refresh();
>     window.Repaint();
> }, 500);
> 
> function refresh() {
>     var styles = [];
>     var start = 0;
>     words.forEach(function(item, i) {
>         var len = item.length + 1;
>         styles.push({
>             // when using an array of styles, Start and Length are mandatory
>             Start : start,
>             Length : len,
>             // the following are all optional and may be omitted. Segoe UI/16px will be used if Name/Size are not specified.
>             Name : fonts[Math.floor(Math.random() * fonts.length)],
>             Size : 12 + Math.floor(Math.random() * 20),
>             Weight : Math.round(Math.random() * 800) + 100, // values between 100-900
>             Underline : Math.random()
> ```

## Using `utils.CreateTextLayout`

Use something like this if you want scrollable text, a single font and to apply different colours.

> Example: ```
> // ==PREPROCESSOR==
> // @name "SimpleScroll + Coloured Text"
> // @author "marc2003"
> // @import "%fb2k_component_path%helpers.txt"
> // ==/PREPROCESSOR==
> 
> var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
> var layout = utils.CreateTextLayout(text, 'Segoe UI', 24);
> var offset = 0;
> var text_height = 0;
> 
> // split text in to whole words for colouring
> var words = text.split(' ');
> var colour_string = '';
> 
> refresh();
> 
> function refresh() {
>     var colours = [];
>     var start = 0;
>     words.forEach(function(item, i) {
>         var len = item.length + 1;
>         colours.push({
>             // when using an array, Start and Length are mandatory
>             Start : start,
>             Length : len,
>             Colour : RGB(Math.random() * 200, Math.random() * 200, Math.random() * 200),
>         });
>         start += len;
>     });
>     colour_string = JSON.stringify(colours);
> }
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
>     gr.WriteTextLayout(layout, colour_string, box.x, box.y, box.w, box.h, offset);
> }
> 
> function on_mouse_wheel(step) {
>     if (text_height  0) offset = 0;
>     else if (offset
> ```

## Using `utils.CreateTextLayout2`

Use something like this if you want scrollable text, custom fonts and to apply different colours.

> Example: ```
> // ==PREPROCESSOR==
> // @name "SimpleScroll + Styled Text"
> // @author "marc2003"
> // @import "%fb2k_component_path%helpers.txt"
> // ==/PREPROCESSOR==
> 
> var fonts = utils.ListFonts().toArray();
> var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
> var layout = null;
> var offset = 0;
> var text_height = 0;
> var colour_string = '';
> 
> // split text in to whole words for styling
> var words = text.split(' ');
> 
> refresh();
> 
> function refresh() {
>     var fonts = [];
>     var colours = [];
>     var start = 0;
>     words.forEach(function(item, i) {
>         var len = item.length + 1;
> 
>         fonts.push({
>             // When using an array of fonts, Start and Length are mandatory
>             Start : start,
>             Length : len,
>             // The following are all optional and may be omitted.
>             // Segoe UI/16px will be used if Name/Size are not specified.
>             Name : fonts[Math.floor(Math.random() * fonts.length)],
>             Size : 12 + Math.floor(Math.random() * 20),
>             Weight : Math.round(Math.random() * 800) + 100, // values between 100-900
>             Underline : Math.random()  0) offset = 0;
>     else if (offset
> ```
