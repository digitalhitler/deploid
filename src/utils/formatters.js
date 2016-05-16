/*
 *     @project
 *     Deploid
 *     
 *     @file
 *     utils/formatter.js
 *     Some output formatting functions
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

if(Deploid.config && Deploid.localize) {
  const color = Deploid.__libs.chalk || require('chalk');
  const formattersModule = {
    asterisksLine: color.dim('* * * * * * * * * * * * * * * * * * *') + '\n',
    printHeader: function() {
      console.log(
          this.asterisksLine +
          color.bold.cyan(__('app.headline', Deploid.config.packageFile.version)) + '\n' +
          this.asterisksLine
      );
    },
    printError: function(text, isExit) {
      console.log(
          this.asterisksLine +
          color.bold.red(__('general.error.headline')) + '\n' +
          color.bold(text) +
          (isExit === true ? '\n' + color.yellow('[!]') + ' ' + __('general.error.exitFootline') + '\n' : '\n')
      );
    }
  };

  module.exports = formattersModule;
} else {
  console.log('Failed to initialize formatters: too early.');
  process.exit(1);
}
