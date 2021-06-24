import React from 'react';

export const Async = () => {
  // async & await
  //clear style of using promise :)

  // 1. async ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  function fetchUser() {
    return new Promise((resolve, reject) => {
      // 비동기 코드
      resolve('king');
    });
  }
  async function fetchUsers() {
    // 비동기 코드
    return 'queen';
  }

  const users = fetchUsers();
  users.then(console.log);
  console.log(users);

  // 2. await ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  async function getApple() {
    await delay(2000);
    // throw 'error test';
    return '🍎';
  }

  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  // function getBanana() {
  //   return delay(3000).then(() => '🍌');
  // }

  async function pickFruits() {
    try {
      const apple = await getApple();
      const banana = await getBanana();
      return `${apple} + ${banana} (2+1초)`;
    } catch (e) {
      return `no network`;
    }
  }
  // function pickFruits() {
  //   return getApple().then(apple => {
  //     return getBanana().then(banana => `${apple} + ${banana}`);
  //   });
  // }
  pickFruits().then(console.log).catch(console.log);

  // 3. useful APIs : await 병렬 처리 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(
      fruits => fruits.join(' + ') //배열을 String 으로 묶을 수 있는 join
    );
  }
  pickAllFruits().then(console.log);

  // function pickOnlyOne() {
  //   return Promise.race([getApple(), getBanana()]);
  // }
  // pickOnlyOne().then(console.log);

  return (
    <>
      <h1>Async</h1>
      <article>
        <div>
          async와 await을 이용해서 Promise를 좀 더 간편하게 작성할 수 있다.
        </div>
        <h3>:: await 병렬 처리</h3>
        <h4>
          둘이 관련없는 관계이므로 2+1초를 기다릴 이유가 없다. 병렬적으로
          "동시에" 실행되도록 만들어보자
        </h4>
        <ul>
          <li>Promise.all([ ])</li>
          <li>
            Promise 배열을 전달하게 되면 모든 Promise들이 병렬적으로 다 받아질
            때까지 기다려주는 API
          </li>
        </ul>
        <ul>
          <li>Promise.race([ ])</li>
          <li>
            Promise 배열 중에서 가장 먼저 값을 리턴하는 하나만 전달되는 API
          </li>
        </ul>
      </article>
    </>
  );
};
