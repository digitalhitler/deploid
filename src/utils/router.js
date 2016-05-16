/*
 *     @project
 *     Deploid
 *
 *     @file
 *     utils/router.js
 *     CLI routing entry point
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

Deploid.cli = Deploid.__libs.commander || require('commander');

module.exports = (function() {

  Deploid.cli
      .version(Deploid.config.packageFile.version)
      .option('-d, --dir <path>', 'change the working directory')
      .option('-c, --config <path>', 'set config path. defaults to' +
          ' ./deploid.json')
      .option('-v, --verbose', 'verbose (debug) output');

  Deploid.cli.command('init')
      .description('initialize new deploid configuration')
      .action(function() {

      });

  Deploid.cli.parse(process.argv);

  return Deploid.cli;
})();
