function r(r,t,o){return Math.max(t,Math.min(r,o))}function t(t,o,n,e,u,a){void 0===a&&(a=!1);var i=(t-o)*(u-e)/(n-o)+e;return a?r(i,e,u):i}function o(r,t,o){return r+o*(t-r)}function n(r,t,n){return void 0===n&&(n=Math.random),void 0!==t?o(r,t,n()):o(0,r,n())}exports.clamp=r,exports.wrap=function r(t,o,n){return t>n?t%n:t<o?r(t+n,o,n):t},exports.normalize=function(r,o,n,e){return void 0===e&&(e=!1),t(r,o,n,0,1,e)},exports.map=t,exports.lerp=o,exports.random=n,exports.randomInt=function(r,t,o){return void 0===o&&(o=Math.random),Math.floor(n(r,t,o))},exports.degrees=function(r){return 180*r/Math.PI},exports.radians=function(r){return r*Math.PI/180},exports.ceilTo=function(r,t){return Math.ceil(r/t)*t},exports.roundTo=function(r,t){return Math.round(r/t)*t},exports.floorTo=function(r,t){return Math.floor(r/t)*t},exports.fract=function(r,t){var o=r-Math.floor(r);return t?+o.toFixed(t):o};
//# sourceMappingURL=missing-math.js.map
