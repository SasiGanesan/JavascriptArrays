
//Reduce array
let arr1 = function () {
    let arr1 = [2, 5, 7, 4];
    let initial_value = 0;
    let sum = arr1.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      initial_value
    );
    console.log(sum);
  };
  arr1();
/*
  //Example2
let array1 = function () {
  let arr1 = [
    ["a", "t", "y", "e"],
    ["w", "t", "a", "a"],
    ["c", "v", "c", "v"],
  ];
  console.log(arr1.flat());
  
  let count1 = arr1.flat().reduce((accumulator, currentvalue) => {
    if (accumulator[currentvalue])
        accumulator[currentvalue]++;
    else 
        accumulator[currentvalue] = 1;
    return accumulator;
  }, {});
  console.log(count1);
};
array1();

//Example3
let value1=function(){
  const arr=[4,6,2,-3,1,-1,3,5,-7,8,-4,3]
  let positivenumber=arr.reduce((accumulator,currentvalue)=>{
    if (accumulator[currentvalue]>0)
        accumulator[currentvalue]++
    else
        accumulator[currentvalue]
    return accumulator
  },{})
  console.log(positivenumber)
}
value1();
*/