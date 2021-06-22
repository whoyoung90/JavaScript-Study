import React from 'react';

function CallbackHell() {
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

  return <div>콜백 지옥</div>;
}

export default CallbackHell;
