#! /usr/bin/env node
/*
 *     @project
 *     Deploid
 *
 *     @file
 *     index.js
 *     Entry point to the Deploid
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

//noinspection InjectedReferences
global.Deploid = {
  __properlyStarted: true,
  __rootPath: __dirname,
  __libs: {
    /**
     * meow: CLI app commands, flags & arguments parser.
     * https://github.com/sindresorhus/meow
     */
    meow: require('meow'),

    /**
     * inquirer: CLI questions & answers framework
     * https://github.com/SBoudrias/Inquirer.js
     */
    inquirer: require('inquirer'),

    /**
     * chalk: CLI colors helper that not affects general prototypes
     * https://github.com/chalk/chalk
     */
    chalk: require('chalk'),

    /**
     * configstore: global configuration
     * https://github.com/yeoman/configstore
     */
    configstore: require('configstore'),

    /**
     * x18n: localization module
     * https://github.com/florian/x18n
     */
    x18n: require('x18n')
  }
};

Deploid.resolve = require('./utils/resolve');
Deploid.config = require('./utils/config')(Deploid);
Deploid.localize = require('./utils/localize')(Deploid);

Deploid.formatters = require('./utils/formatters');
Deploid.router = require('./utils/router');

Deploid.formatters.printError('lalalej', true);

console.log("And here");