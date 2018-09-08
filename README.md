# Syncano Socket for storing PostalAddress type of data

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-postal-address/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-postal-address/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-postal-address/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-postal-address/)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/postal-address.svg)](https://www.npmjs.com/package/@eyedea-sockets/postal-address)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-postal-address.svg)

Main Socket features:

* **postal-address/add** — add PostalAddress object
* **postal-address/update** — update PostalAddress object
* **postal-address/delete** — delete PostalAddress object

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/postal-address --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

// PostalAddress params
const params = {
  addressCountry: 'USA',
  addressLocality: 'Mountain View',
  streetAddress: '1600 Amphitheatre Pkwy',
  postalCode: '94043',
  addressRegion: 'CA', // optional
  postOfficeBoxNumber: 'PB1234', // optional
  telephone: '+1123123123' // optional
}

const suggestions = await s.post('postal-address/add', params)
```
