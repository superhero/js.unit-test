# Unit test

Licence: [MIT](https://opensource.org/licenses/MIT)

---

[![npm version](https://badge.fury.io/js/%40superhero%2Funit-test.svg)](https://badge.fury.io/js/%40superhero%2Funit-test)

Just a simple unit tester..

## Example

```javascript
let unit = require('@superhero/unit-test');

unit('Math pi', (test, done) =>
{
  test(Math.PI).is  (3.141592653589793);
  test(Math.PI).not (3.14);
  test(Math.PI).gt  (3.13);
  test(Math.PI).gte (3.13);
  test(Math.PI).lt  (3.15);
  test(Math.PI).lte (3.15);

  done();
});

unit('Math E', (test, done) =>
{
  test(Math.E).is  (2.718281828459045);
  test(Math.E).not (2.7);
  test(Math.E).gt  (2.6);
  test(Math.E).gte (false);
  test(Math.E).lt  (false);
  test(Math.E).lte (false);

  test(Math.E).gte (2.718281828459045);
  test(Math.E).lte (2.718281828459045);

  done();
});
```

**output:**

```
Math pi: 1.398ms

	 tested: 6
	 passed: 6
	 failed: 0


Math E: 0.091ms

	 tested: 8
	 passed: 5
	 failed: 3
```
