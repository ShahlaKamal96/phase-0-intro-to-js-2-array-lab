// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
   cats.pop();
   return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    const copy=[...cats,name];
    return copy;
}
function prependCat(name){
    const copy=[name,...cats];
    return copy;
}
function removeLastCat(){
    const copy = cats.slice(0,-1);
    return copy;
}
function removeFirstCat(){
    const copy = cats.slice(1);
    return copy;
}