## Mutelogs.js

[![dependencies](https://david-dm.org/qbunt/mutelogs.js.svg) ](https://david-dm.org/)

A simple/fast/easy no-dependency way to **reversibly** mute all the `console.*` methods from any JavaScript project. The advantage to this approach is that logs can simply be hidden behind a feature flag. 

Works with Node and the browser.

## Install
`npm install mutelogs`

## Usage
###### Node
    var mutelogs = require('mutelogs')
    mutelogs.mute()
    // or
    mutelogs.unmute()
###### Browser
    mutelogs.mute()
    // or 
    mutelogs.unmute()
    
## Testing
    npm run test

## License
[MIT](./LICENSE)
