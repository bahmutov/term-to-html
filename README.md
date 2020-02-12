# term-to-html [![CircleCI](https://circleci.com/gh/bahmutov/term-to-html/tree/master.svg?style=svg)](https://circleci.com/gh/bahmutov/term-to-html/tree/master)

> Stream terminal output with ansi codes into nicely formatted HTML

Imagine you have terminal output, let's say from a test runner. It looks like this

![terminal output](images/term.png)

You can pipe the output through `term-to-html` to create equivalent HTML file. Same output (HTML page was white background)

![html](images/html.png)

The output could be used to do [visual testing against CLI output](https://glebbahmutov.com/blog/visual-diffing-for-CLI-apps/)

## Use

```shell
npm i -g term-to-html
mocha spec.js --reporter spec | term-to-html > mocha.html
```

**Note:** many applications detect non-interactive terminal and turn off colors. Usually you can enable colors using an environment variable, like `FORCE_COLOR=2` in [chalk](https://github.com/chalk/chalk) library.

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2020

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/term-to-html/issues) on Github

## MIT License

Copyright (c) 2020 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/term-to-html.svg?downloads=true
[npm-url]: https://npmjs.org/package/term-to-html
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
