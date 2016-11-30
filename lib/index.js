'use strict'

const nj = require('nunjucks')

module.exports = (config = {}) => {
  let { debug = false, ext = 'html', path = './', njConfig = {} } = config
  let env = nj.configure(path, njConfig)
  return async(ctx, next) => {
    ctx.render = (file, data = {}) => {
      env.render(file + '.' + ext, data, (error, result) => {
        if (error) {
          if (debug) {
            console.log(error)
          }
          result = error.message
        }
        ctx.body = result
      })
    }
    next()
  }
}
