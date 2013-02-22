# `FIX` jQuery Plugin

This is a module to backup and restore the current database application.

## Usage
### Via data attributes
To easily add `fix` behavior to any element, just add `data-spy="fix"` to the element you want to spy on. Then use offsets to define when to toggle the pinning of an element on and off.
```html
<div data-spy="fix" data-class="subnav-fixed" data-offset-top="40">...</div>
```

### Via JavaScript
Call the affix plugin via JavaScript:
```js
$('#navbar').fix()
```

### Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to data-, as in data-offset-top="200".
+--------+-----------+-----------+-------------------------+
|  Name  |    Type   |  Default  |       Description       |
+--------+-----------+-----------+-------------------------+
|        | number    |           | Pixels to offset from   |
| offset | function  |     0     | screen when calculating |
|        | object    |           | position of scroll      |
+--------+-----------+-----------+-------------------------+
| class  | string    | "fix-top" | Class to add in element |
|        |           |           | when fixed              |
+--------+-----------+-----------+-------------------------+