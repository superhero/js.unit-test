module.exports = (name, unit) =>
{
  let
  tested = 0,
  passed = 0,
  ended;

  const
  count = (valid) =>
  {
    tested++;
    valid && passed++;
  },
  test = (value) =>
  ({
    is  : (compare) => count(value == compare),
    not : (compare) => count(value != compare),
    gt  : (compare) => count(value >  compare),
    lt  : (compare) => count(value <  compare),
    gte : (compare) => count(value >= compare),
    lte : (compare) => count(value <= compare)
  }),
  completed = () =>
  {
    if(ended)
      return;

    console.info();
    console.timeEnd(name);
    console.info();

    console.info(`\t tested: ${tested}`);
    console.info(`\t passed: ${passed}`);
    console.info(`\t failed: ${tested - passed}`);
    console.info();

    ended = true;
  };

  try
  {
    console.time(name);
    unit(test, completed);
  }
  catch(e)
  {
    console.error();
    console.error(`"${name}" failed!`);
    console.error(`Exception occured:`, e);
    console.error();

    ended = true;
  }
};
