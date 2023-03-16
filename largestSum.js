// [1,2,3,4,3,5,4,6,7,8] = Total element 10
// Count largest sum of consecutive digits
// consecutive 4 digits
// no of times loop will be [total element - no of consecutive integer + 1]



function findLargest(arr,num){
if(num>arr){
    throw new Error("number cannot be greater than array")
}else{
    let max=0;
    for(i=0;i<arr.length-num+1;i++){
            let temp=0;
      for(j=0;j<num;j++){
        // console.log(i,"i",j,"j","arr[i+j]",arr[i+j]);
        temp += arr[i+j]
      }
      if(temp>max){
        max=temp
    }
    }
    return max;
    
}
}
// for(j=0,j<num;j++)
const result = findLargest([1,2,3,6,3,5,4,6,7,8],4)
console.log(result);