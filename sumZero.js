// Problem-1 Sum Zero - Sorted Array
// [-5,-4,-3,-2,0,2,4,6,8]

let arr = [-5,-4,-3,-2,0,2,4,6,8]

// Brute force Method
//  Time Complexity - O(n^2)

function sumPairZero(arr){
    for(let number of arr){
        // console.log(number); 
        for(let j=1;j<arr.length;j++){
            if(number+arr[j]===0){
                return [number,arr[j]]
            }
        }
    }
}

const result = sumPairZero(arr)
// console.log(result);


// Optimized Method
//  Time Complexity - O(n)
  function sumPairZeroTwo (arr){
    let left = 0;
    let right = arr.length -1

    while(left<right){
        sum = arr[left]+arr[right]
        if(sum==0){
            return [arr[left],arr[right]];
        }else if (sum>0){
            right--
        }else{
            left++
        }
    }

  }

  const resultTwo = sumPairZeroTwo(arr)
console.log(resultTwo);