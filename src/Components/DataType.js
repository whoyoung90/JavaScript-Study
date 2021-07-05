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
    let name = 'block';
    console.log('할당', name);
    name = 'scope';
    console.log('재할당', name);
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
  // - thread safety
  // - reduce human mistakes
  const daysInWeek = 7;
  const maxNumber = 5;

  // 4. Variable Types
  // - Primitive Type(single item) : Number, string, boolean, null, undefined, symbol
  // - Object Type(box contatiner)
  // - function(first-class function): function도 다른 데이터 타입처럼 "변수할당", "함수의 파라미터", "함수의 return값"으로 사용 가능하다

  const count = 17; //integer
  const size = 17.1; //decimal number
  console.log(count, typeof count);
  console.log(size, typeof size);

  // 4-1. Number - special numeric values : infinity, -infinity, NaN
  //항상 연산할 때 valid한 값인지 체크하자!
  const infinity = 1 / 0;
  const negativeInfinity = -1 / 0;
  const nan = 'not a number' / 2;
  console.log(infinity, typeof infinity);
  console.log(negativeInfinity, typeof negativeInfinity);
  console.log(nan, typeof nan);

  // 4-2. String ( template literals )
  const wooyoung = 'wooyoung';
  const helloWooyoung = 'hello ' + wooyoung;
  const hiWooyoung = `hi ${wooyoung}`;
  console.log('value: ' + helloWooyoung + ', type: ' + typeof helloWooyoung);
  console.log(`value: ${hiWooyoung}, type: ${typeof hiWooyoung}`);

  // 4-3. Boolean
  // false : 0, undefined, null, NaN, ''
  // true: any other value
  //2차 프로젝트 때 재욱님 => {배열.length !== 0 && ... }
  const directSet = true;
  const test = 3 < 1;
  console.log(directSet, typeof directSet);
  console.log(test, typeof test);

  // 4-4. null : "비어있음"을 명시적으로 나타내고 싶을 때 (type->object)
  let nothingPoint = null;
  console.log(`value: ${nothingPoint}, type: ${typeof nothingPoint}`);

  // 4-5. undefined : 선언은 되었지만 할당된 게 없을 때, js엔진이 반환해 주는 값 (type->undefined)
  let x;
  console.log(`value: ${x}, type: ${typeof x}`);

  // 4-6. symbol : 고유한 식별자를 만들 때!

  //동일한 string으로 작성해도, 다른 symbol로 만들어진다.
  const symbol1 = Symbol('id');
  const symbol2 = Symbol('id');
  console.log('symbol : ', symbol1 === symbol2);

  //동일한 string으로 동일한 symbol을 만들고 싶다면 .for
  const symbol3 = Symbol.for('id');
  const symbol4 = Symbol.for('id');
  console.log('symbol.for : ', symbol3 === symbol4);

  console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

  // 5. dynamically typed language : js는 runtime에서 할당된 값에 따라 타입이 변경된다!
  let text = 'hello';
  console.log(text.charAt(0)); //h
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' + '2'; //string + string = string
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' - '2'; //string - string = number
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' * '2'; //string * string = number
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' / '2'; //string / string = number
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' + 2; //string + number = string
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' - 2; //string - number = number
  console.log(`value: ${text}, type: ${typeof text}`);

  text = '3' * 2; //string * number = number
  console.log(`value: ${text}, type: ${typeof text}`);

  text = 3 / '2'; //string / number = number
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
          <li>
            <h4>장바구니 물량 최댓값, 최솟값 등 고정값에 사용</h4>
          </li>
        </ul>
      </div>

      <div>
        <h2>Symbol</h2>
        <ul>
          <li>
            동일한 string으로 작성해도 다른 symbol로 만들어지기 때문에
            <br />
            주어지는 string에 상관없이 고유한 식별자를 만들때 사용한다!
          </li>
          <li>
            map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 우선순위를
            주고 싶을 때 사용
          </li>
          <li>symbol은 항상 .description을 사용해서 string으로 변환 출력!!</li>
        </ul>
      </div>

      <div>
        <h2>string, number 연산</h2>
        <ul>
          <li>"string + string" 과 "string + number" 만 string</li>
          <li>
            나머지 모든 "string & string", "string & number" 연산은 number
          </li>
        </ul>
      </div>
    </>
  );
};
