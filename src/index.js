// // const,let等の変数宣言
// var val = "var変数";
// console.log(val);

// // var変数は上書き可能
// val = "var変数は上書き可能";
// console.log(val);

// // var変数は再宣言可能
// val = "var変数は再宣言可能";
// console.log(val);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const上書き";
// // const val3 = "const上書き";

// const val4 = {
//   name: "jojo",
//   age: 28,
// };
// val4.name = "jojo2";
// val4.age = 36;
// val4.addres = "morioucho";
// console.log(val4);

// const name = "jojo";
// const age = 28;

// // 「私の名前はnameです。年齢はageです」
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// // 従来の関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10,20))

// 分割代入

// const myProfile = {
//   name: "jojo",
//   age: 28,
// }
// // const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// // console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// const myProfile2 = ['kira', 31];
// // const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です`;
// // console.log(message5);

// const [name, age] = myProfile2;
// const message6 = `名前は${name}です。年齢は${age}です`;
// console.log(message6);

// デフォルト値

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello("jojo");
// sayHello();

// スプレッド構文

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// map,filter使った配列処理
const nameArr = ["jojo", "Kira", "Josuke"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5, 6];
// const newNamArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })

// console.log(numArr);
// console.log(newNamArr);

// nameArr.map((name, index) => console.log(`${index + 1}番目の名前は${name}です。`));

// const newNameArr = nameArr.map(name => {
//   if (name === "jojo") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })

// console.log(newNameArr);

//  参考演算子　ある条件 ? tureの時 : falesの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "300";
// console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(90,50));
// console.log(checkSum(30,50));

// 論理演算子の本当の意味を知ろう　&& ||

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtrueになります")
// }

// if (flag1 && flag2) {
//   console.log("１も２はfalseになります")
// }

// // || は左がfalseなら右を返す
// const num = null;
// const fee = num || "金額未設定です"
// console.log(fee);

// // && は左がtrueなら左を返す
// const num2 = null;
// const fee2 = num2 && "何かが設定されました"
// console.log(fee2);
