const {getLogoInfo, makeSVG} = require('./lib/prompt.js')
getLogoInfo()
    .then(makeSVG)