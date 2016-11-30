#  Koa2 middleware of nunjucks.
## Install

```bash
$ npm install --save koa@next
$ npm install --save koa2-nunjucks
```

## Usage

```js
const Koa = require('koa')
const app = new Koa()
const nj = require('../lib')

app.use(nj({
  debug: true, // default: false
  ext: 'html', // default: 'html'
  path: '../tmpl', // default: './'
  njConfig: {
    watch: true
    /* Config Options */
  }
}))

```

## Examples
```sh
$ git clone https://github.com/cjg125/koa2-nunjucks.git demo
$ cd demo
$ npm install
$ node --harmony example/
# http://127.0.0.1:3000/
```

## Config Options
[nunjucks](https://mozilla.github.io/nunjucks/api.html#configure)

