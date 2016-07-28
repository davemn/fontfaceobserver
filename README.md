# Font Face Observer - UMD-friendly Fork

This is a fork of [Bram Stein's Font Face Observer](https://github.com/bramstein/fontfaceobserver).
I've modified it to expose its API via a browser-friendly [Universal Module Definition](https://github.com/umdjs/umd/blob/master/templates/returnExports.js).

The original code is built around Google's Closure compiler, and uses a builtin Promises polyfill.
I've removed both, so the built library isn't as optimized or backwards-compatible as it could be.

> Font Face Observer is a small `@font-face` loader and monitor (3.5KB minified and 1.3KB gzipped) compatible with any web font service. It will monitor when a web font is applied to the page and notify you. It does not limit you in any way in where, when, or how you load your web fonts. Unlike the [Web Font Loader](https://github.com/typekit/webfontloader) Font Face Observer uses scroll events to detect font loads efficiently and with minimum overhead.

See the [original repo](https://github.com/bramstein/fontfaceobserver) for further information, including usage instructions & examples.

## License

Font Face Observer is licensed under the BSD License. Copyright 2014-2016 Bram Stein. All rights reserved.
