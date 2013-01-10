/*
 ---
 
 name: uSizer
 description: Useful class for resize DOM objects
 license: MIT-Style License <http://www.lbnstudio.fr/license.txt>
 copyright: Jose Luis Quintana <http://www.lbnstudio.fr/>
 authors: Jose Luis Quintana <joseluisquintana20@gmail.com>
 requires: 
 - Core: 1.4/*
 
 ...
 */


window.uSizer = new Class({
    version: '1.0',
    child: null,
    parent: null,
    initialize: function(parent, child) {
        this.setParent(parent);
        this.setChild(child);
    },
    setChild: function(element) {
        this.child = element;
    },
    setParent: function(element) {
        this.parent = element;
    },
    resizeToHeight: function(height) {
        this.resize(this.getPropWidth(height), height);
    },
    resizeToWidth: function(width) {
        this.resize(width, this.getPropHeight(width));
    },
    getPropWidth: function(height) {
        return this.child.getSize().x * (height / this.child.getSize().y);
    },
    getPropHeight: function(width) {
        return this.child.getSize().y * (width / this.child.getSize().x);
    },
    scale: function(scale) {
        this.resize(this.child.getSize().x * scale / 100, this.child.getSize().y * scale / 100);
    },
    centerCropResize: function() {
        var width, height, pwidth, pheight;

        if (arguments.length === 2) {
            width = arguments[0];
            height = arguments[1];
        } else {
            width = this.parent.getSize().x;
            height = this.parent.getSize().y;
        }

        pwidth = this.getPropWidth(height);
        pheight = this.getPropHeight(width);

        if (pwidth === width && pheight === height) {
            this.resizeToWidth(width);
        } else {
            if (pheight > height) {
                this.resizeToWidth(width);
            } else {
                pheight += height - pheight;
                this.resizeToHeight(pheight);
            }

            this.croper(width, height, (this.child.getSize().x - width) / 2, (this.child.getSize().y - height) / 2);
        }
    },
    centerCrop: function() {
        var width = this.parent.getSize().x, height = this.parent.getSize().y;
        this.croper(width, height, (this.child.getSize().x - width) / 2, (this.child.getSize().y - height) / 2);
    },
    crop: function(x, y) {
        this.croper(this.parent.getSize().x, this.parent.getSize().y, x, y);
    },
    croper: function(width, height, x, y) {
        this.resize(width, height, x, y, true);
    },
    resize: function(width, height, x, y, crop) {
        if (crop) {
            if (this.parent) {
                this.parent.set('styles', {
                    'width': width,
                    'height': height
                });
            }

            if (this.child) {
                this.child.set('styles', {
                    'position': 'absolute',
                    'margin-top': -y,
                    'margin-left': -x
                });
            }
        } else {
            if (this.child) {
                this.child.set('styles', {
                    'width': width,
                    'height': height
                });
            }
        }
    }
});