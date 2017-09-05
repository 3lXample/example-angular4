/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
const fs = require('fs-extra');

const srcDirMain    = 'build/dist/main';
const srcDirExample = 'build/dist/example';

const distDirMain    = 'docs';
const distDirExample = 'docs/example';

const copyOptions = { 'overwrite': true, 'errorOnExist': true };

// Delete dist directory content or create folder if not exist
fs.emptyDirSync(distDirMain);

// Copy content of src directory into docs directory
fs.copySync(srcDirMain, distDirMain, copyOptions);

// Copy content of src directory into docs directory
fs.copySync(srcDirExample, distDirExample, copyOptions);
