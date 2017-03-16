## Mutelogs.js

[![dependencies](https://david-dm.org/qbunt/mutelogs.js.svg) ](https://david-dm.org/)

A simple/fast/easy no-dependency way to **reversibly** mute all the `console.*` methods from any JavaScript project. The advantage to this approach is that logs can simply be hidden behind a feature flag.

**NOTE:**
Due to a [currently filed bug](https://bugs.chromium.org/p/chromium/issues/detail?id=682517) with Chrome, the 'unmute' method in this library does not function as expected. Working on a solution now.

## Install
`npm install mutelogs`

## Usage
#### To mute all `console.*` methods
`mutelogs.mute();`

#### To unmute all `console.*` methods
`mutelogs.unmute();`

## License
[MIT](https://en.wikipedia.org/wiki/MIT_License)

##
