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
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset-top="200"`.
<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Type</td>
      <td>Default</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>offset</td>
        <td>number | function | object</td>
        <td>0</td>
        <td>Pixels to offset from screen when calculating position of scroll</td>
    </tr>
    <tr>
        <td>class</td>
        <td>string</td>
        <td>"fix-top"</td>
        <td>Class to add in element when fixed</td>
    </tr>
  </tbody>
</table>
