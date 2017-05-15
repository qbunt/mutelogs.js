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

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fqbunt%2Fmutelogs.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fqbunt%2Fmutelogs.js?ref=badge_shield)