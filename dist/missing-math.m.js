function n(n,t,r){return Math.max(t,Math.min(n,r))}function t(n,r,o){return n>o?n%o:n<r?t(n+o,r,o):n}function r(n,t,r,u){return void 0===u&&(u=!1),o(n,t,r,0,1,u)}function o(t,r,o,u,i,a){void 0===a&&(a=!1);var e=(t-r)*(i-u)/(o-r)+u;return a?n(e,u,i):e}function u(n,t,r){return n+r*(t-n)}function i(n,t,r){return void 0===r&&(r=Math.random),void 0!==t?u(n,t,r()):u(0,n,r())}function a(n,t,r){return void 0===r&&(r=Math.random),Math.floor(i(n,t,r))}function e(n){return 180*n/Math.PI}function f(n){return n*Math.PI/180}function c(n,t){return Math.ceil(n/t)*t}function h(n,t){return Math.floor(n/t)*t}function M(n,t){var r=n-Math.floor(n);return t?+r.toFixed(t):r}export{n as clamp,t as wrap,r as normalize,o as map,u as lerp,i as random,a as randomInt,e as degrees,f as radians,c as roundTo,h as floorTo,M as fract};
//# sourceMappingURL=missing-math.m.js.map
