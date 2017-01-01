<h1 align="center">missing-math</h1>
<h3 align="center">missing <code>js</code> math utils</h3>
<div align="center">
  <!-- License -->
  <a href="https://raw.githubusercontent.com/arnaudjuracek/xy/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" />
  </a>
</div>

## Installation

```sh
npm install -S arnaudjuracek/missing-math
```

## Usage

```js
var mm = require('missing-math');
```

## API

### stable
+ `mm.degrees(radians)`
+ `mm.radians(degrees)`
+ `mm.random(min, max)`
+ `mm.constrain(a, min, max)`
+ `mm.lerp(a, b, t)`
+ `mm.norm(a, min, max)`
+ `mm.map(a, in_min, in_max, out_min, out_max)`

### experimental 
<sup>(may change in future updates)</sup>
+ `mm.lerpColor(c1, c2, t)`

## License

[MIT](https://tldrlegal.com/license/mit-license).