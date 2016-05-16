/*
 *     @project
 *     Deploid
 *
 *     @file
 *     errors/profile-not-initialized.js
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

function InternalServerError(message) {
  this.message = message;
  this.stack = new Error().stack;
  this.statusCode = 500;
  this.errorType = this.name;
}

InternalServerError.prototype = Object.create(Error.prototype);
InternalServerError.prototype.name = 'InternalServerError';

module.exports = InternalServerError;
