!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.MissingMath={})}(this,function(n){function t(n,t,o,r,e){return(n-t)*(e-r)/(o-t)+r}function o(n,t,o){return n+o*(t-n)}function r(n,t,r){return void 0===r&&(r=Math.random),void 0!==t?o(n,t,r()):o(0,n,r())}n.clamp=function(n,t,o){return Math.max(t,Math.min(n,o))},n.normalize=function(n,o,r){return t(n,o,r,0,1)},n.map=t,n.lerp=o,n.random=r,n.randomInt=function(n,t,o){return void 0===o&&(o=Math.random),Math.floor(r(n,t,o))},n.degrees=function(n){return 180*n/Math.PI},n.radians=function(n){return n*Math.PI/180},n.roundTo=function(n,t){return Math.ceil(n/t)*t},n.floorTo=function(n,t){return Math.floor(n/t)*t}});
//# sourceMappingURL=missing-math.umd.js.map