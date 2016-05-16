/*
 *     @project
 *     Deploid
 *
 *     @file
 *     commands/init.js
 *     `deploid init` command handler
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

module.exports = function() {
  var inquirer = global.Deploid.__libs.inquirer || require('inquirer');
  var questions = [
    {
      type: 'input',
      name: 'first_name',
      message: 'What\'s your first name'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What\'s your last name',
      default: function () {
        return 'Doe';
      }
    },
    {
      type: 'input',
      name: 'phone',
      message: 'What\'s your phone number',
      validate: function (value) {
        var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
        if (pass) {
          return true;
        }

        return 'Please enter a valid phone number';
      }
    }
  ];


  inquirer.prompt([{
      "message": "Test message",
      "choices": [ "Choice A", new inquirer.Separator(), "choice B" ]
    }]).then(function(answers) {
      console.log(answers);
  });

};
