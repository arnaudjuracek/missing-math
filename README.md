# missing-math  
*Missing <code>js</code> math utils*

<br>

## Installation

```sh
npm install -S arnaudjuracek/missing-math
```

<br>

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
<br>

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

<br>

## License

[MIT](https://tldrlegal.com/license/mit-license).
