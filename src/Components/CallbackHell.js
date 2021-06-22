import React from 'react';

export const CallbackHell = () => {
  class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (id === 'wooyoung' && password === 'kim') {
          onSuccess(id);
        } else {
          onError(new Error('not found!'));
        }
      }, 2000);
    }

    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === 'wooyoung') {
          onSuccess({ name: 'wooyoung', role: 'developer' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }

  const userStorage = new UserStorage();
  const id = prompt('아이디를 입력하세요.');
  const password = prompt('비밀번호를 입력하세요.');

  userStorage.loginUser(
    id,
    password,
    user => {
      userStorage.getRoles(
        user,
        userWithRole => {
          alert(`Hello ${userWithRole.name}, you are a ${userWithRole.role}!`);
        },
        error => {
          console.log(error);
        }
      );
    },
    error => console.log(error)
  );

  return (
    <div>
      <h1>콜백 지옥</h1>
      <h3>class UserStorage</h3>
      <h3>const userStorage = new UserStorage( );</h3>
      <ul>
        <li>class는 new 키워드를 이용하여 object를 생성할 수 있다.</li>
      </ul>
    </div>
  );
};
