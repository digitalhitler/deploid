/*
 *     @project
 *     Deploid
 *
 *     utils/resolve.js
 *     File resolver helper
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


module.exports = (function(Deploid) {

  const path = require('path');
  const resolveModuleRelativePath = '..';
  
  function findRootDirectory() {
    if(typeof Deploid === 'object' && typeof Deploid.__rootPath === 'string') {
      return Deploid.__rootPath;
    } else {
      let rootScopeModule = module.mainModule || module.parent;
      if(typeof rootScopeModule.filename === 'string') {
        return path.dirname(rootScopeModule.filename)
            || path.normalize(path.join(path.dirname(module.filename), resolveModuleRelativePath));
      } else {
        return path.normalize(path.join(__dirname, resolveModuleRelativePath));
      }
    }
  }
  
  return function resolve(filename) {
    let rootModulePath = findRootDirectory();
    console.log(`Resolving ${filename} in ${rootModulePath}`);
    return path.normalize(path.join(rootModulePath, filename));
  }

})(Deploid);