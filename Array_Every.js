//Array Every()

const arr = function () {
  let arr1 = [12, 34, 56, 78, 90];
  let value = arr1.every((Even) => Even % 2 == 0);
  console.log(value);
};
arr();

/*
//Example2
let string=function(){
  let values=['sasi','sreeni','Arthii','millan','sherlin']
  let string1=values.every((Element)=>Element>5)
  console.log(string1)
}
string();

//Example3
let positivenumber=function(){
  let arr=[2,3,5,6,8,10]
  let new_arr=arr.every((Element)=>Element>0) 
  console.log(new_arr)
}
positivenumber()
*/