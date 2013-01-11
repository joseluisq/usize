uSizer
======

Useful class for resize DOM elements


How to use
----------

The js code :

        #js
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

The html code :

        #html
        <div id="parent">
            <div id="child" class="box">Child !</div>
        </div>

        <div id="parent2">
            <div id="child2" class="box">Child !</div>
        </div>

        <div id="parent3">
            <div id="child3" class="box">Child !</div>
        </div>


Live Demo
-----------

* uSizer live demo [here](http://goo.gl/2VGUz)


Screenshots
-----------
* ![Screenshot](http://goo.gl/W8dxR)


Base Doc
-----------

Public Methods :

  * uSizer.setParent()    
  * uSizer.setChild()
  * uSizer.resizeToHeight()
  * uSizer.resizeToWidth()
  * uSizer.getPropWidth()
  * uSizer.getPropHeight()
  * uSizer.scale()
  * uSizer.crop()
  * uSizer.centerCrop()
  * uSizer.centerCropResize()
