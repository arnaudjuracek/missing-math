function n(n,t,r){return Math.max(t,Math.min(n,r))}function t(n,t,o){return r(n,t,o,0,1)}function r(n,t,r,o,u){return(n-t)*(u-o)/(r-t)+o}function o(n,t,r){return n+r*(t-n)}function u(n,t,r){return void 0===r&&(r=Math.random),void 0!==t?o(n,t,r()):o(0,n,r())}function i(n,t,r){return void 0===r&&(r=Math.random),Math.floor(u(n,t,r))}function a(n){return 180*n/Math.PI}function e(n){return n*Math.PI/180}function f(n,t){return Math.ceil(n/t)*t}function c(n,t){return Math.floor(n/t)*t}export{n as clamp,t as normalize,r as map,o as lerp,u as random,i as randomInt,a as degrees,e as radians,f as roundTo,c as floorTo};
//# sourceMappingURL=missing-math.m.js.map
