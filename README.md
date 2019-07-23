# base64-blob
[![NPM Version](http://img.shields.io/npm/v/base64-blob.svg?style=flat-square)](https://www.npmjs.com/package/base64-blob)
[![Download Month](http://img.shields.io/npm/dm/base64-blob.svg?style=flat-square)](https://www.npmjs.com/package/base64-blob)
![gzip with dependencies: .5kb](https://img.shields.io/badge/gzip--with--dependencies-.5kb-brightgreen.svg "gzip with dependencies: .5kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

A module for interconversion of base64 and blob, wrapped by Promise

You may need a Promise polyfill while use old `IE` browser

## repository
https://github.com/livelybone/base64-blob.git

## Demo
http://github.com/livelybone/base64-blob@readme

## Installation
```bash
npm i -S base64-blob
```

## Global name
`Base64_Blob`

## Usage
```js
import { base64ToBlob, blobToBase64 } from 'base64-blob'
```

when you want to set this module as external while you are developing another module, you should import it like this:
```js
import * as Base64_Blob  from 'base64-blob'

// then use it by need
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/base64-blob/lib/umd/)
```html
<script src="https://unpkg.com/base64-blob@[version]/lib/umd/index.js"></script>
```

## Functions

```typescript
/** Format: /^data:[\w\d]*\/[\d\w]*;base64,.*$/ */
type Base64Url = string
```

### base64ToBlob
> `(base64: Base64Url) => Promise<Blob>`

### blobToBase64

> `(blob: Blob) => Promise<Base64Url>`