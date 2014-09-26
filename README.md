# uSizer

Useful Mootools class for resize DOM elements.


## How to use

JS:
```js
var sizer = new uSizer();

sizer.setParent($('parent'));
sizer.setChild($('child'));
sizer.crop(0,0);

sizer.setParent($('parent2'));
sizer.setChild($('child2'));
sizer.centerCrop();

sizer.setParent($('parent3'));
sizer.setChild($('child3'));
sizer.centerCropResize();
```

HTML :
```html
<div id="parent">
    <div id="child" class="box">Child !</div>
</div>

<div id="parent2">
    <div id="child2" class="box">Child !</div>
</div>

<div id="parent3">
    <div id="child3" class="box">Child !</div>
</div>
```

## Live Demo

[uSizer live demo](http://goo.gl/2VGUz)


## Screenshots

![Screenshot](http://goo.gl/W8dxR)


## Base Doc

**Public Methods :**

  * `uSizer.setParent()`
  * `uSizer.setChild()`
  * `uSizer.resizeToHeight()`
  * `uSizer.resizeToWidth()`
  * `uSizer.getPropWidth()`
  * `uSizer.getPropHeight()`
  * `uSizer.scale()`
  * `uSizer.crop()`
  * `uSizer.centerCrop()`
  * `uSizer.centerCropResize()`

## License

Released under [MIT Licence](http://www.opensource.org/licenses/mit-license.php)
