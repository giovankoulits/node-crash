///
///
///
///

setTimeout(() => console.log('hi from timeout 1'), 0);
setTimeout(() => console.log('hi from timeout 2 '), 0);
Promise.resolve().then(() => console.log('hi from promise'));

process.nextTick(() => console.log('hi from next.tick1'));
process.nextTick(() => {
  console.log("'hi from next.tick2'");
  process.nextTick(() => {
    console.log('hi from inner next tick');
  });
});
process.nextTick(() => console.log('hi from next.tick4'));
