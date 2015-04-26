# jquery.m.toast

A simply toast plugin for mobile webpage, especially suitable for webview pages. ;-) [DEMO](http://htmlpreview.github.com/?https://github.com/kong-lo/jquery.m.toast/blob/master/example/demo.html).

## Required Files

    <link rel="stylesheet" type="text/css" href="../src/jquery.m.toast.css" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="../src/jquery.m.toast.js"></script>

## Usage

    $.toast(message, options);

Example:

    $.toast('Hello world, I'm a little pretty toast.');
    $.toast('Hello world, I'm a little pretty but dangerous toast.', {'duration': 1000, 'type': 'danger'});

## Options

Options include toast duration, stickiness, and toast type.

* **width** - Determines width of toast. (default: self-adaption)
* **duration** - Milliseconds duration for toast display. (default: 5000)
* **type** - Determines css class: blank, 'danger', 'info', 'success'. (default is blank)
* **align** - Align toast top / bottom. (default is bottom)
* **singleton** - Determines if only one toast in page or not. (default is true)
