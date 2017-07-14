class Person{
  constructor(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet(){
    console.log("Hi there,my name is "+ this.name +" and my favorite color is "+this.favoriteColor+".");
  }
}
// 這是 node.js 的寫法
// module.exports = Person;
// 這是 ES6 的寫法
export default Person;



// 輸出的方法可以在別處載入使用
// exports.abc = asdcf;
// exports.cde = ewfewf;
//
// 要輸出的不是方法而是整個建構式
// module.exports
// exports 的 parent 是 module
