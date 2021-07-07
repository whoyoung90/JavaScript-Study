import React from 'react';

export const Class = () => {
  // Object-oriented programming
  // class: template
  // object: instance of a class

  // JavaScript Class
  // - introduced in ES6
  // - syntactical sugar over prototype-based inheritance

  // 1-1. Class declarations
  class Person {
    constructor(name, age) {
      // fields
      this.name = name;
      this.age = age;
    }

    // methods
    speak() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }

  // 1-2. Object declaration
  const foo = new Person('Eren', 20);
  console.log(foo);
  console.log(foo.name, foo.age);
  foo.speak();

  // 2. Getter and Setters
  class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get age() {
      return this._age;
    }

    set age(value) {
      // if (value < 0) {
      //   throw Error('age can not be negative!🤬');
      // } else {
      //   this._age = value;
      // }
      this._age = value < 0 ? 'age can not be negative!🤬' : value;
    }
  }
  const CEO = new User('Steve', 'Jobs', -1);
  console.log(CEO);
  console.log(CEO.age);

  // 3. Fields (Public, Private)
  // Too soon!
  // 생성자를 쓰지 않고 fields를 정의.
  // private : class 밖에서는 읽기 및 변경 불가능
  class Experiment {
    publicField = 2;
    #privateField = 0;
  }
  const tester = new Experiment();
  console.log('Public Field ', tester.publicField);
  console.log('Private Field ', tester.privateField);

  // 4. Static properties and methods
  // Too soon!
  // static은 object마다 할당되는 것이 아니라 class 자체에 붙어있다!
  // TypeScript >> data나 object에 상관없이, 공통적으로 class에서 쓸 수 있는 거라면 static&static method를 사용하는게 메모리 사용 절감
  class Article {
    static publisher = 'Hello World';
    constructor(testNum) {
      this.testNum = testNum;
    }

    static printPublisher() {
      console.log(Article.publisher);
      // console.log(this.publisher);
    }
  }
  const Foo1 = new Article(1);
  console.log(Foo1);
  console.log(Foo1.testNum, Article.publisher); //static이 붙은 것만 변경
  Article.printPublisher();
  // console.log(Foo1.testNum, Foo1.publisher);
  // Foo1.printPublisher();

  // 5. Inheritance
  // a way for one class to extend another class.
  class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }

    draw() {
      console.log(`drawing "${this.color}" color`);
    }

    getArea() {
      return this.width * this.height;
    }
  }

  class Rectangle extends Shape {}
  class Triangle extends Shape {
    draw() {
      console.log('🔺'); // overwriting : 필요한 함수만 재정의
      super.draw(); // super : 기존 요소도 유지
    }
    getArea() {
      return (this.width * this.height) / 2;
    }
    toString() {
      return `JavaScript Object의 공통 메소드들은 언제나 overwriting 가능하다! 항상 상속중이니까!`;
    }
  }

  const rectangle = new Rectangle(20, 20, 'blue');
  const triangle = new Triangle(20, 20, 'red');
  rectangle.draw();
  console.log(rectangle.getArea());
  triangle.draw();
  console.log(triangle.getArea());
  console.log(triangle.toString()); // JavaScript Object의 공통 메소드들

  // 6. Class checking : instanceOf
  // 왼쪽 object가 오른쪽 class의 instance인지를 판별
  console.log(rectangle instanceof Rectangle);
  console.log(triangle instanceof Rectangle);
  console.log(triangle instanceof Triangle);
  console.log(triangle instanceof Shape);
  console.log(triangle instanceof Object); // 우리가 만든 모든 object, class들은 JavaScript Object를 상속한 것이다!

  return (
    <>
      <p>
        class는 관련있는 데이터(변수 + 함수)들을 묶어놓은 것 fields + methods
      </p>
      <div>
        <h2>✅ class (붕어빵 틀)</h2>
        <ul>
          <li>
            <h3>template</h3>
          </li>
          <li>
            <h3>declare once</h3>
          </li>
          <li>
            <h3>no data in</h3>
          </li>
        </ul>
        <section>
          👉 class자체에는 데이터가 들어가있지 않고, template(틀)만 정의해 놓은
          것
        </section>
        <section>
          👉 "이 class에는 요런요런 데이터가 들어올 수 있어"라고 한번만
          선언한다.
        </section>
      </div>

      <div>
        <h2>✅ object (팥붕어빵, 슈크림붕어빵 ...)</h2>
        <ul>
          <li>
            <h3>instanace of a class</h3>
          </li>
          <li>
            <h3>created many times</h3>
          </li>
          <li>
            <h3>data in</h3>
          </li>
        </ul>
        <section>
          👉 class를 이용해 실제 데이터를 넣어서 만드는 게 object(붕어빵)!
        </section>
        <section>
          👉 class를 이용해서 새로운 instance를 생성하면 object가 된다.
        </section>
      </div>
      <p>
        - constructor(생성자)를 이용해서 object에 필요한 데이터(name, age)를
        전달.
      </p>

      <div>
        <h2>✅ getter setter</h2>
        <ul>
          <li>
            class를 사용자가 잘못 사용해도 좀더 방어적인 자세로 만들 수 있도록
            해준다.
          </li>
          <li>get으로 수정할 값을 리턴</li>
          <li>set으로 값을 설정( value값을 받아와서 설정해야한다 )</li>
        </ul>
        <section>
          - CallStack 에러를 방지하기 위해 변수이름 변경! this.age 👉 this._age
        </section>
      </div>

      <div>
        <h2>✅ Inheritance</h2>
        <ul>
          <li>a way for one class to extend another class.</li>
          <li>extends를 통한 클래스간 상속</li>
          <li>overwriting : 필요한 함수만 재정의</li>
          <li>super : 기존 요소도 유지</li>
        </ul>
      </div>
    </>
  );
};
