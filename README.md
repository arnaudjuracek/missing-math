# missing-math  
> missing features of the `Math` built-in object

<br>

## Installation

```console
$ npm install --save missing-math
```

## Usage

##### Import with a module bundler
```js
// using ES6 module
import { clamp, degrees } from 'missing-math'

// using CommonJS module
var { clamp, degrees } = require('missing-math')
```

##### Import from a browser

```html
<script src="https://unpkg.com/missing-math"></script>
<script>
  // all methods are exposed in window.MissingMath
  MissingMath.clamp()
  MissingMath.degrees()
</script>
```

## Methods
- `clamp(a, min, max)`   
- `normalize(a, min, max)`   
- `map(a, in_min, in_max, out_min, out_max)`
- `lerp(a, b, t)`
- `random(a, [ b ])`
- `degrees(radians)`
- `radians(degrees)`


## License
[MIT](https://tldrlegal.com/license/mit-license).
