// var Person = require('./modules/Person'); 這是 node.js 的寫法
// 這是 ES6 的寫法
// import Person from './modules/Person'
//
// var $ = require('jquery');
//
// class Adult extends Person{
//   payTaxes(){
//     console.log(this.name+' no owe $0 in taxes');
//   }
// }
// // alert("Test abc");
//
// var john = new Person("John Doe","blue");
// john.greet();
//
// var jane = new Adult("Jane Smith","orange");
// jane.greet();
// jane.payTaxes();
// $('h1').remove();
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
var stickyHeader = new StickyHeader();
