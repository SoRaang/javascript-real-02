/** Spread 문법 */

let arr1 = [1, 4];
let arr2 = [2, 3];

arr1.splice(1, 0, ... arr2); // arr2 배열을 전개하여 arr1의 요소로 삽입했다.
console.log(arr1);

/** 배열 리터럴에서 사용하면 기존의 방식보다 더욱 간결하고 가독성 좋게 표현 가능하다. */
/** 이터러블을 배열로 변환할 수 있다. */

// ------------------------------------------------------------------------------------------------------

let origin = [1, 2];
let copy =  [ ... origin ];

console.log(copy === origin);

/** slice() 메소드처럼 얕은 복사가 가능하다. */

// ------------------------------------------------------------------------------------------------------

/** 객체 리터럴 내부에서 사용하는 경우 */

const obj = { x: 1, y: 2 };
const copyObj = { ... obj };

console.log(copyObj);
console.log(copyObj === obj); // 서로 다른 객체이다.

const merged = { x: 1, y: 2, ... { a: 3, b: 4 } }; // 객체 속성 내부에서 다른 객체를 전개하여 병합한다.

console.log(merged);

const assign = Object.assign({}, { x: 1, y: 2 }, { a: 3, b: 4 }); // 위와 같은 결과를 보여주지만, 코드가 길고 복잡하다.

console.log(assign);

/**
 * 스프레드 프로퍼티를 사용하면 객체 리터럴의 프로퍼티 목록에서도 스프레드 문법을 사용할 수 있다.
 * Object.assign() 메소드처럼 다른 객체의 속성을 쉽게 복사하거나 병합할 수 있다.
 */

// ------------------------------------------------------------------------------------------------------

/** Destructuring - 구조 분해 할당 */

const destArr = [1, 2, 3];
const [one, two, three] = destArr; // destArr 내부의 요소가 각각 분해되어 할당된다.

console.log(one, two, three);

const [a, b] = [1, 2];

console.log(a, b);

const [c, d] = [1]; // 대응하는 요소가 없는 d는 undefined가 된다.

console.log(c, d);

/** 구조화된 배열과 같은 이터러블 또는 객체를 비구조화, 구조파괴 하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다. */

// ------------------------------------------------------------------------------------------------------

/** 객체 디스트럭쳐링 할당 */

const user = { firstName: 'Chang Wan', lastName: 'Kim' };
const { lastName, firstName } = user;

console.log(lastName, firstName);

/**
 * ES5 객체의 각 프로퍼티를 객체로부터 디스트럭쳐링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야 한다.
 * ES6 객체는 각 프로퍼티를 추출하여 1개 이상의 변수에 할당할 수 있다.
 */

// ------------------------------------------------------------------------------------------------------

function printTodo({ content, completed }) {
    console.log(`할 일 ${ content }(은)는 ${ completed ? '완료되었습니다.' : '완료되지 않았습니다.' }`);
}

printTodo({ id: 1, content: 'HTML', completed: true });

/** 객체를 인수로 전달받는 함수의 매개 변수에도 구조 분해를 사용할 수 있다. (객체.프로퍼티 형식으로 사용하지 않아도 된다.) */

// ------------------------------------------------------------------------------------------------------

const doubleUser = {
    name: 'Kim',
    address: {
        zipCode: '47103',
        city: 'Busan'
    }
}

const { address: { city }} = doubleUser; // 객체의 키, 그리고 객체의 키로 값을 추출했다.

console.log(city);

/** 중첩 객체의 경우에는 프로퍼티 키로 객체를 추출하고, 이 객체의 프로퍼티 키로 값을 추출한다. */

// ------------------------------------------------------------------------------------------------------

/** 중간 문제 */

/** 객체 person을 만들고 name과 age를 구조 분해 할당하여 변수 userName과 userAge에 각각 저장한 후, 두 변수를 활용하여 아래와 같은 형식의 문자열을 출력하는 코드를 작성하세요. */

const person = { name: '김창완', age: 38 };
const { name: userName, age: userAge } = person;

console.log(`이름: ${ userName }, 나이: ${ userAge }`);