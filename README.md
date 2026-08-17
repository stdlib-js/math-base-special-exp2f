<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# exp2f

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base `2` [exponential function][exponential-function] in single-precision floating-point format.

<section class="intro">

The base `2` [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:base2_exponential_function" align="center" raw="y = 2^x" alt="Base 2 exponential function"> -->

```math
y = 2^x
```

<!-- <div class="equation" align="center" data-raw-text="y = 2^x" data-equation="eq:base2_exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@59ded26cf977eb741b49ca66f32901fc903bac2d/lib/node_modules/@stdlib/math/base/special/exp2f/docs/img/equation_base2_exponential_function.svg" alt="Base 2 exponential function">
    <br>
</div> -->

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import exp2f from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp2f@deno/mod.js';
```

#### exp2f( x )

Evaluates the base `2` [exponential function][exponential-function] in single-precision floating-point format.

```javascript
var v = exp2f( 3.0 );
// returns 8.0

v = exp2f( -9.0 );
// returns ~0.002

v = exp2f( 0.0 );
// returns 1.0

v = exp2f( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import exp2f from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp2f@deno/mod.js';

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( '2^%0.4f = %0.4f', x, exp2f );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



* * *

<section class="references">

## References

-   Tang, Ping-Tak Peter. 1989. "Table-driven implementation of the exponential function in IEEE floating-point arithmetic." _ACM Trans. Math. Softw._ 15 (2). New York, NY, USA: ACM: 144–57. doi:[10.1145/63522.214389][@tang:1989a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-exp2f.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-exp2f

[test-image]: https://github.com/stdlib-js/math-base-special-exp2f/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-exp2f/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-exp2f/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-exp2f?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-exp2f.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-exp2f/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-exp2f/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-exp2f/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-exp2f/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-exp2f/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-exp2f/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-exp2f/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-exp2f/blob/main/branches.md

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

[@tang:1989a]: https://doi.org/10.1145/63522.214389

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
