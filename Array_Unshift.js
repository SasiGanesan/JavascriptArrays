//unshift


let arr2 = function () {
  let arr1 = [3, 4, 5];
  console.log(arr1.unshift(8, 9));
  console.log(arr1);
};
arr2();

/*

//Example2
const color=function(){
const colors = ["blue", "green", "yellow"];
colors.unshift("red");
console.log(colors);
}
color()

//Example3
 
const score=function(){
 const scores= [
  {name:"sasi",score:100},
  {name:"Arthi",score:90},
  {name:"sreeni",score:80}
 ]

 const Newscores={name:"millan",score:70}
scores.unshift(Newscores)
console.log(scores)

}
score()
*/