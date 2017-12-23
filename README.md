# missing-math  

[![LICENSE](https://img.shields.io/npm/l/missing-math.svg?style=flat-square)](https://github.com/arnaudjuracek/missing-math/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/missing-math.svg?style=flat-square&colorB=E4612D)](https://www.npmjs.com/package/missing-math)
> missing `Math` utils

<br>
<br>

## Installation

```sh
npm install -S missing-math
```

## Usage

###### global namespace
```js
const mm = require('missing-math')
mm.random(0, 100) // => 36.11395762648013
```

###### selective import
```js
const { random } = require('missing-math')
random(0, 100) // => 36.11395762648013
```

###### using ES6 `import`
```js
import { random } from 'missing-math'
random(0, 100) // => 36.11395762648013
```

## Methods
+ `clamp(a, min, max)`   
+ `degrees(radians)`
+ `radians(degrees)`
+ `lerp(a, b, t)`
+ `normalize(a, min, max)`   
+ `map(a, in_min, in_max, out_min, out_max)`
+ `random(a, [ b ])`   
+ `perlin(x, [ y, [ z ] ])`   

#### Aliases
+ `clamp` : `constrain`
+ `normalize` : `norm`
+ `random` : `rnd`
+ `perlin` : `noise`

## License

[MIT](https://tldrlegal.com/license/mit-license).
