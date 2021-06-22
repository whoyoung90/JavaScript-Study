import React from 'react';

export const Callback = () => {
  console.log('1');
  setTimeout(() => console.log('2'), 1000);
  console.log('3');

  //Synchronous callback
  function printImmediately(print) {
    print();
  }
  printImmediately(() => console.log('Sync callback'));

  //Asynchronous callback
  function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
  }
  printWithDelay(() => console.log('Async callback'), 2000);

  /* hoisting */
  // function printImmediately(print) {
  //   print();
  // }
  // function printWithDelay(print, timeout) {
  //   setTimeout(print, timeout);
  // }
  // console.log('1');
  // setTimeout(() => console.log('2'), 1000);
  // console.log('3');
  // printImmediately(() => console.log('Sync callback'));
  // printWithDelay(() => console.log('Async callback'), 2000);

  return <div>동기 콜백 & 비동기 콜백</div>;
};
