/*
 *     @project
 *     Deploid
 *
 *     @file
 *     utils/i18n.js
 *     Localization library based on x18n made by Florian Hartmann:
 *     https://github.com/florian/x18n
 *
 *     @link
 *     https://github.com/digitalhitler/deploid
 *
 *     @copyright
 *     Copyright (c) 2016.
 *     Sergey Petrenko <spetrenko@me.com>
 *
 *     Copyright (c) 2012-2016
 *     Florian Hartmann
 *     https://github.com/florian/
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

const settings = {
  locales: [
      'en',
      'ru'
  ],
  defaultLocale: 'en'
};

// Non-browser environment fix
if(typeof navigator !== 'object') {
  global.navigator = {
    language: settings.defaultLocale
  }
};

module.exports = function(Deploid) {
  let resolve = Deploid.resolve || require('./resolve');
  let config  = Deploid.config  || require(resolve('./utils/config'));
  let x18n = Deploid.x18n || require('x18n');
  let configLanguage = config.get('language'),
      currentLanguage = configLanguage || settings.defaultLocale;

  for(let locale in settings.locales) {
    x18n.register(settings.locales[locale], require(resolve('locales/' + settings.locales[locale])));
  }

  x18n.setDefault(settings.defaultLocale);
  x18n.set(currentLanguage);

  global.__ = x18n.t;
  
  return x18n;
  
};
