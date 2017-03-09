# save-to-disk
Javascript modules for save files from browser on disk.

## Install

```bash
npm install save-to-disk
```

## Example

```javascript
var lib = require('save-to-disk'),
downloadFile = lib.saveToDiskNew,

var url = 'http://mergeye.com/public/img/logo.png';
downloadFile(url, 'test.png');
```

## License

MIT
