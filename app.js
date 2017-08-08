/**
     * [[Description]]
     */

function one(){
    alert("yoo");
};

/**
 * [[Description]]
 */

function hello() {
    log("hello")
};
log(hello());

/**
  * [[Description]]
  * @param   {[[Type]]} p [[Description]]
  * @returns {[[Type]]} [[Description]]
  */
function dummyReturn(p) {
    return p
};
log(dummyReturn());

/**
 * [[Description]]
 * @returns {string} [[Description]]
 */

function foo () {
    return "bar";
};
var x = foo();

log(foo());

/**
 * [[Description]]
 * @param {[[Type]]} nom [[Description]]
 */

function helloWho(nom) {
    return"helloooo" +" "+ nom;

};
log(helloWho("marc"));

/**
 * [[Description]]
 * @param   {[[Type]]} n [[Description]]
 * @returns {boolean}  [[Description]]
 */

function isNumber(n) {
    if (typeof n === "number"){
        return true;
    } else {
        return false;
    }
};
log(isNumber(20));


/**
 * [[Description]]
 * @param   {[[Type]]} b [[Description]]
 * @returns {boolean}  [[Description]]
 */
function contraire(b) {
    if(b !== "boolean"){
        return false;
    } else{
        return true;

    }
};
log(contraire());


var p = [];

/**
 * [[Description]]
 * @param   {[[Type]]} p [[Description]]
 * @returns {boolean}  [[Description]]
 */
function isEmpty(p){
    if(Array.isArray(p) === true && p.length === 0 && typeof p === "string" && p.length === 0 && Object.getOwnPropertyNames(p)){
        return true;
    }else{
        return false;
    };



}
log(isEmpty(p));


/**
 * [[Description]]
 * @param {[[Type]]} s   [[Description]]
 * @param {[[Type]]} css [[Description]]
 */
function addCSSClass(s, css){
    s = document.querySelectorAll(".param");
    console.log(s);
    console.log(s.length);
    console.log(s[0].textContent);
    var arr = Array.prototype.slice.call(s);
    console.log(arr);
    // console.log(arr.length);
    // console.log(arr[0].textContent);
    console.log("=============== separateur ==========================");
    arr.forEach(function parse(elem){
        console.log(elem);
        arr.push(elem);
        elem.classList.add("css");
    });
    log(arr);
};

/////////////////function 2 //////////


window.onload = function start() {
    "use strict";
    /*var elem = document.querySelectorAll('p');
    function deleteNodes(list) {
        for (var i = 0; i < list.length; i++) {
            console.log(list[i]);
            list[i].remove();
        }
    }
    deleteNodes(elem);*/ 
};
var n = 1;
var x = isOdd(n);
function isOdd(n) {
 if(typeof n !== "number") {
   throw "erreur";
 } else if (n % 2 === 0 ) {
   return true;
 } else if (n % 2 === 1 ) {
   return false;
 } else {
   console.log("LOL");
 }
};
console.log(x);
console.log(1 % 2);


function sum (a) {
    
};

/*var a = [3,8,0,6];*/
/*function sum (a) {
    
    if( a.value === !isNumber ){
       throw 'erreur ';
       } else(a.length){
           
       }
}
log(a); */


/*var n = 1;

function isOdd (n) {
    if (typeof n !== "number"){
          throw 'err'
    } else if (n % 2 === 0){
        return true; 
    } else if (n % 2 === 1){
        return false;
        
    } else{
        log('mmmm')
    }
    
    
}
isOdd(n)*/



