const label = document.querySelector('.result');

let str1 = 'I love apple pie and apple juice' // apple 단어 포함 확인
let pattern = /apple/ig; // 정답
let result = str1.match(pattern);

let str2 = 'Hello World! This is a Test String.' // 대문자 찾기
let pattern2 = /[A-Z]/g; // 정답
let result2 = str2.match(pattern2);

let str3 = '1 10 100 2000 30000'; // 100 200 300 출력
let pattern3 = /\d{3}/g; // 정답
let result3 = str3.match(pattern3);

let str4 = 'How do you do'; // o,d,o,o,d,o 출력
let pattern4 = /[od]/g; // 정답
let result4 = str4.match(pattern4);

let str5 = '89139012349'; // 9,9,0,9 출력
let pattern5 = /[^1-8]/g; // [90]도 가능, 하지만 제외하는 것이 정답
let result5 = str5.match(pattern5);

let str6 = 'A AA B BB Aa Bb AAA'; // A가 최소 1번 최대 2번 반복되는 문자열 검색
let pattern6 = /A{1,2}/g; //정답
let result6 = str6.match(pattern6);

let str7 = 'AA BB 12 345'; // 0-9가 한 번 이상 반복되는 문자열 검색
let pattern7 = /\d{1,}/g; // 정답, 하지만 [0-9]+도 가능
let result7 = str7.match(pattern7);

let text = '';
text += result + '<br>';
text += result2 + '<br>';
text += result3 + '<br>';
text += result4 + '<br>';
text += result5 + '<br>';
text += result6 + '<br>';
text += result7 + '<br>';

label.innerHTML = text;