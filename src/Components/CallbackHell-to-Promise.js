import React from 'react';

export const CallbackHellToPromise = () => {
  class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id === 'wooyoung' && password === 'kim') {
            resolve(id);
          } else {
            reject(new Error('not found!'));
          }
        }, 2000);
      });
    }

    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'wooyoung') {
            resolve({ name: 'wooyoung', role: 'developer' });
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
    }
  }

  const userStorage = new UserStorage();
  const id = prompt('아이디를 입력하세요.');
  const password = prompt('비밀번호를 입력하세요.');

  userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you are a ${user.role}!`))
    .catch(console.log);

  return <h1>CallbackHell-To-Promise</h1>;
};
