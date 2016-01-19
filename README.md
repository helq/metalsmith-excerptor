Metalsmith-excerptor
====================

A Metalsmith plugin to create an excerpt from html data, it truncates correctly
all html tags thanks to [html-truncate](https://www.npmjs.com/package/html-truncate).

Usage
-----

```javascript
var excerptor = require('metalsmith-excerptor');

Metalsmith(__dirname)
    .use( excerptor({
        maxLength: 800,
        keepImageTag: true,
        ellipsis: '…'
    }))

```

`excerptor` will create a new attribute to all object files with a max length of
800 characters, keeping the image tags (`<img>`).

Options
-------

**maxLength** `Number` (optional, default=`300`): Excerpt's max length

**keepImageTag** `Boolean` (optional, default=`true`)

**ellipsis** `String` (optional, default=`''`): String attached to the end of the excerpt

License
-------

Copyright (c) 2016, Elkin Cruz
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies,
either expressed or implied, of the FreeBSD Project.
