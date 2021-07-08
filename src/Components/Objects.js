import React from 'react';

export const Objects = () => {
  // primitive type은 변수 하나당 값 하나

  // const name = 'ellie';
  // const age = 4;
  // print(name, age);
  // function print(name, age) {
  //   console.log(name);
  //   console.log(age);
  // }

  // Objects
  // one of the JavaScript's data types.
  // a collection of related data and/or functionality
  // Nearly all objects in JavaScript are instances of Object.
  // object = { key : value };

  // 1. Literals and properties
  const obj1 = {}; // 'object literal' syntax
  const obj2 = new Object(); // 'object constructor' syntax | Object에 정의된 constructor가 호출된다. | class란 template을 이용해서 만드는 방법.
  console.log(obj1, obj2);

  function print(person) {
    console.log(person.name);
    console.log(person.age);
  }
  const foo = { name: 'Jack', age: 32 };
  print(foo);

  // with JavaScript magic (dynamically typed language)
  // can add properties later
  foo.hasJob = true;
  console.log(foo);

  // can delete properties later
  delete foo.hasJob;
  console.log(foo);

  // 2. Computed properties
  // key should be always string

  function printValue(obj, key) {
    // console.log(obj.key); // object에 key라는 프로퍼티가 당장 없으니까 undefined
    console.log(obj[key]); // 동적으로 key에 관련된 value를 받아야 할때 유용!
  }
  printValue(foo, 'name');
  printValue(foo, 'age');

  // 3. Property value shorthand
  const person1 = { name: 'Mikasa', age: 1 };
  const person2 = { name: 'libai', age: 2 };
  const person3 = new SurveyCorp('Ackerman', 3); // JavaScript 엔진이 알아서 object 생성
  console.log(person3);

  // 4. Constructor function
  function SurveyCorp(name, age) {
    // this = {}; 생략
    this.name = name;
    this.age = age;
  }

  // 5. in operator: property existence check (key in obj)
  console.log('name' in foo);
  console.log('none' in foo);

  // 6. for..in vs for..of
  // for (key in obj)
  for (let key in foo) {
    console.log(key); // name, age
    console.log(foo[key]); //jack, 32
  }

  // for (value of iterable)
  const array = [7, 8, 9];
  for (let value in array) {
    console.log(value); // 0, 1, 2
  }
  for (let value of array) {
    console.log(value); //7, 8, 9
  }

  // 7. Fun cloning
  // Object.assign(dest, [obj1, obj2, obj3...])
  const user = { name: 'Eren', age: 20 };
  const user2 = user;
  user2.name = 'Yegar';
  console.log('user', user); // 바라보는 ref가 같으니까!

  // old way
  const user3 = {};
  for (let key in user) {
    user3[key] = user[key];
  }
  console.log('user3', user3);

  // Object.assign
  const user4 = Object.assign({}, user);
  console.log('user4', user4);

  // another example
  const fruit1 = { color: 'red', size: 'big' };
  const fruit2 = { color: 'blue' };
  const mixed = Object.assign({}, fruit1, fruit2); //중복되면 최신 값 overwriting
  console.log('mixed', mixed);

  return (
    <>
      <h2>Object</h2>
      <div>
        <h2>✅ foo['name']</h2>
        <ul>
          <li>정확하게 어떤 key가 필요한지 모를 때!</li>
          <li>
            실시간으로 원하는 key값을 받아오고 싶을 때(runtime에서 결정될 때)
            사용!
          </li>
        </ul>
      </div>

      <div>
        <h2>✅ ES6 Class 이전에는? Constructor function</h2>
        <ul>
          <li>클래스를 정의하지 않고 바로 Object를 만듬</li>
          <li>function을 이용한 template작성</li>
          <li>
            This constructor function may be converted to a class declaration.
            ts(80002)
          </li>
        </ul>
      </div>

      <div>
        <h2>✅ for..in vs for..of [7, 8, 9] </h2>
        <ul>
          <li>for (key in obj) 👉 key값 추출 0, 1, 2</li>
          <li>for (value of iterable) 👉 value값 추출 7, 8, 9</li>
          <li>
            Object는 for..in만 가능 (not iterable) <br /> Array는 for..in
            for..of 둘다 가능
          </li>
        </ul>
      </div>

      <h4>Object.assign : JavaScript Object는 언제나 상속할 수 있다!</h4>
    </>
  );
};
