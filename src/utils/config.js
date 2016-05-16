/*
 *     @project
 *     Deploid
 *
 *     @file
 *     {$FILENAME}
 *     com.maddyhome.idea.copyright.pattern.FileInfo@2cd5e233
 *     $filename
 *
 *     @link
 *     https://github.com/digitalhitler/deploid
 *
 *     @copyright
 *     Copyright (c) 2016.
 *     Sergey Petrenko <spetrenko@me.com>
 *
 *     @license GPL-3.0
 *     This file is part of Deploid - fast & easy deployment manager based on Git & Node.js.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     Full license text available in LICENSE file.
 */

'use strict';

if(!global.Deploid || global.Deploid.__properlyStarted !== true) {
  console.log('Please use src/index.js to start Deploid.');
  process.exit(1);
}


if(!global.Deploid || global.Deploid.__properlyStarted !== true) {
  console.log('Please use src/index.js to start Deploid.');
  process.exit(1);
}

module.exports = function(Deploid) {
  let resolve = Deploid.resolve || require('./resolve');
  let Configstore = Deploid.configstore || require('configstore');
  let defaultConfiguration = {
    'language': 'en',
    'debug': false
  };
  let packageFile = require(resolve('../package.json')) || {
        name: 'deploid'
      };
  let result = new Configstore(packageFile.name, defaultConfiguration, {
    globalConfigPath: true
  });
  result.packageFile = packageFile;

  return result;
};