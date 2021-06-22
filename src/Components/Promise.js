import React from 'react';

export const ProMise = () => {
  // Promise is a JavaScript object for asynchronous operation.

  // 1. Producer
  const promise = new Promise((resolve, reject) => {
    console.log(
      'when new Promise is created, the executer runs automatically !!'
    );

    setTimeout(() => {
      // resolve('value is wooyoung');
      reject('error reason..');
    }, 2000);
  });

  // 2. Consumers : then, catch, finally
  promise
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('finally'); //성공,실패 상관없이 무조건 마지막에 호출
    });

  // 3. Promise Chaining : 비동기들을 묶어서 한번에 처리할 수도 있다
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });

  fetchNumber
    .then(num => num * 3)
    .then(num => num + 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 2000);
      });
    })
    .then(num => console.log(num));

  // 4. Error Handling     //new Promise밖에 대괄호 금지 const getPig = () => { new Promise() } X
  const getPig = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐷'), 1000);
    });

  const getMeat = pig =>
    new Promise((resolve, reject) => {
      // setTimeout(() => resolve(`${pig} => 🥩`), 1000);
      setTimeout(() => reject(new Error(`error! ${pig} => 🥩`)), 1000);
    });

  const cook = meat =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${meat} => 🍔`), 1000);
    });

  getPig() //then에서 콜백함수 전달 시, 받아오는 value 생략가능!
    .then(getMeat)
    .catch(error => {
      return '🥑';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

  return (
    <>
      <h1>Promise</h1>
      <ul>
        <li>
          promise object를 만들때 비동기적으로 수행하고 싶은 코드를 작성하고
        </li>
        <li>성공한 값은 resolve호출하여 resolve값 ➡ then파라미터</li>
        <li>실패한 값은 reject 호출하여 reject값 ➡ catch파라미터</li>
        <li>
          (reject가 있는데 .catch()를 안해주면 Uncaught (in promise) Error )
        </li>
      </ul>
      <article>
        <h2>프로미스 체이닝 : promise.then().catch()</h2>
        <ul>
          <li>
            then은 다시 promise를 리턴해주기 때문에 재리턴된 promise에서 catch를
            호출!!
          </li>

          <li>then은 값 또는 promise를 리턴</li>
        </ul>

        <h3>const promise = new Promise()</h3>
        <ul>
          <li>
            Promise는 class이기 때문에 키워드 new를 이용하여 object를 생성할 수
            있다.
          </li>
        </ul>

        <h3>new Error('not found!');</h3>
        <ul>
          <li>
            Error는 class이기 때문에 키워드 new를 이용하여 object를 생성할 수
            있다.
          </li>
          <li> Error라는 class는 자바스크립트가 제공하는 object 중 하나!</li>
        </ul>
      </article>
    </>
  );
};
