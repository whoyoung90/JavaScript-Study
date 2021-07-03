import React from 'react';

let globalName = 'globalName'; //전역 변수

export const DataType = () => {
  // 1. Use Strict
  // added in ES5
  // use this for Vanlia Javascipt.
  'use strict';

  // 2. Variable
  // 2-1. let (added in ES6)
  {
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
  }
  // console.log(name); // Error!
  console.log(globalName);

  // 2-2. var (don't ever use this!)
  // var hoisting (move declaration from bottom to top)
  // has no block scope
  {
    age = 4;
    var age;
  }
  console.log(age);

  // 3. Constants
  // favor immutable data type always..for a few reasons:
  // - security
  // thread safety
  // reduce human mistakes
  const daysInWeek = 7;
  const maxNumber = 5;

  // 4. Variable Types
  // - Primitive Type(single item) : Number, string, boolean, null, undefined, symbol
  // - Object Type(box contatiner)
  // - function(first-class function): function도 다른 데이터 타입처럼 "변수할당", "함수의 파라미터", "함수의 return값"으로 사용 가능하다

  const count = 17; //integer
  const size = 17.1; //decimal number
  console.log(`value: ${count}, type: ${typeof count}`);
  console.log(`value: ${size}, type: ${typeof size}`);

  // 4-1. Number - special numeric values : infinity, -infinity, NaN
  //항상 연산할 때 valid한 값인지 체크하자!
  const infinity = 1 / 0;
  const negativeInfinity = -1 / 0;
  const NaN = 'not a number' / 2;
  console.log(infinity);
  console.log(negativeInfinity);
  console.log(NaN);

  // 4-2. String ( template literals )
  const Jack = 'Jack';
  const helloJack = 'hello ' + Jack;
  const hiJack = `hi ${Jack}`;
  console.log('value: ' + helloJack + ' type: ' + typeof helloJack);
  console.log(`value: ${hiJack}, type: ${typeof hiJack}`);

  // 4-3. Boolean
  // false : 0, undefined, null, NaN, '' //2차 프로젝트 때 재욱님 => {배열.length !== 0 && ... }
  // true: any other value
  const directSet = true;
  const test = 3 < 1;
  console.log(`value: ${directSet}, type: ${typeof directSet}`);
  console.log(`value: ${test}, type: ${typeof test}`);

  // 4-4. null : 명확하게 지정하는 값! null로 값이 할당! (type->object)
  let nothingPoint = null;
  console.log(`value: ${nothingPoint}, type: ${typeof nothingPoint}`);

  // 4-5. undefined : 선언은 되었지만 할당된 게 없음! (type->undefined)
  let x;
  console.log(`value: ${x}, type: ${typeof x}`);

  // 4-6. symbol
  const symbol1 = Symbol('id');
  const symbol2 = Symbol('id');
  console.log('symbol : ', symbol1 === symbol2);

  const symbol3 = Symbol.for('id');
  const symbol4 = Symbol.for('id');
  console.log('symbol.for : ', symbol3 === symbol4);

  console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

  // 5. Dynamic typing : dynamically typed language (js는 runtime에서 할당된 값에 따라 타입이 변경된다!)
  let text = 'hello';
  console.log(text.charAt(0)); //h
  console.log(`value: ${text}, type: ${typeof text}`);
  text = 1;
  console.log(`value: ${text}, type: ${typeof text}`);
  text = '7' + 5;
  console.log(`value: ${text}, type: ${typeof text}`);
  text = '8' / '2';
  console.log(`value: ${text}, type: ${typeof text}`);
  // console.log(text.charAt(0)); //Error

  return (
    <>
      <div>
        <h2>Babel</h2>
        <ul>
          <li>
            개발할 때는 최신 EScript를 쓰고, 사용자에게 배포할 때만 JS
            transcompiler를 이용해서 ESCript 5~6로 내려서 변환
          </li>
          <li>
            IE 👉 ES6+으로 개발하고 나중에 배포할 때 BABEL을 이용해 4~5로 내려서
            배포하면 된다.
          </li>
        </ul>
      </div>

      <div>
        <h2>Const 장점</h2>
        <ul>
          <li>
            security 👉 한번 작성한 값에 해커들이 다른 코드들을 삽입해서 값을
            변경하지 못하도록!
          </li>
          <li>
            thread safety 👉 다양한 스레드들이 동시에 변수의 값을 변경할 수
            있다. 가능하면 값이 변경되지 않는걸 사용!
          </li>
          <li>reduce human mistakes</li>
        </ul>
      </div>

      <div>
        <h2>Symbol</h2>
        <ul>
          <li>주어지는 string에 상관없이 고유한 식별자를 만들때 사용!</li>
          <li>
            map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 우선순위를
            주고 싶을 때 사용
          </li>
          <li>symbol은 항상 .description을 사용해서 string으로 변환 출력!!</li>
        </ul>
      </div>
    </>
  );
};
