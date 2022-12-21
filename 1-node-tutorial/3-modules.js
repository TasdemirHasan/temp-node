//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimun)
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Lola')
sayHi(names.hasan)
