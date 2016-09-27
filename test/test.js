let unit = require('../lib/unit-test');

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
  test(Math.E).gte (2.6);
  test(Math.E).lt  (2.8);
  test(Math.E).lte (2.8);

  test(Math.E).gte (2.718281828459045);
  test(Math.E).lte (2.718281828459045);

  done();
});
