'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 */
var ThumbwheelScrolling = Feature.extend('ThumbwheelScrolling', {

    alias: 'ThumbwheelScrolling',

    /**
     * @memberOf ThumbwheelScrolling.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleWheelMoved: function(grid, e) {
        if (!grid.resolveProperty('scrollingEnabled')) {
            return;
        }
        var primEvent = e.primitiveEvent;
        var deltaY = primEvent.wheelDeltaY || -primEvent.deltaY;
        var deltaX = primEvent.wheelDeltaX || -primEvent.deltaX;
        if (deltaY > 0) {
            grid.scrollBy(0, -1);
        } else if (deltaY < -0) {
            grid.scrollBy(0, 1);
        } else if (deltaX > 0) {
            grid.scrollBy(-1, 0);
        } else if (deltaX < -0) {
            grid.scrollBy(1, 0);
        }
    }

});


module.exports = ThumbwheelScrolling;
