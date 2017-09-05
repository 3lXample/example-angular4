/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
const fs = require('fs-extra');

const srcDirMain     = 'build/dist/main';
const srcDirExample  = 'build/dist/example';
const srcTestSumFile = 'build/reports/karma-html/result.html';
const srcTestCovDir  = 'build/reports/karma-coverage/lcov-report'

const distDirMain     = 'docs';
const distDirExample  = 'docs/example';
const distTestSumFile = 'docs/test/summary/index.html';
const distTestCovDir  = 'docs/test/coverage';

const copyOptions = { 'overwrite': true, 'errorOnExist': true };

// Delete dist directory content or create folder if not exist
fs.emptyDirSync(distDirMain);

// Copy content of src directory into docs directory
fs.copySync(srcDirMain, distDirMain, copyOptions);

// Copy content of src directory into docs directory
fs.copySync(srcDirExample, distDirExample, copyOptions);

// Copy test summary into dist directory
fs.copySync(srcTestSumFile, distTestSumFile, copyOptions);

// Copy test coverage into dist directory
fs.copySync(srcTestCovDir, distTestCovDir, copyOptions);
