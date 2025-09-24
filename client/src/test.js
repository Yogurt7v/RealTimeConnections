function createCounter(init, calls) {
  let res = {};
  let count = init;

  for (let i = 0; i < calls.length; i++) {
    switch (calls[i]) {
      case 'increment':
        count++;
        res = { ...res, count };
        break;
      case 'decrement':
        count--;
        res = { ...res, count };
        break;

      case 'reset':
        count = init;
        res = { ...res, count };
        break;

      default:
        break;
    }
  }

  return res;
}

const result = createCounter(5, ['increment', 'reset', 'decrement']);
console.log(result);
