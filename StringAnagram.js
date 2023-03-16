// String Anagram(no of letter same but different arrangement of letter)

//  "hello" ->"llheo"



function isAnagram(string1,string2){
if(string1.length!==string2.length){
    return false
}
let counter={}
for(let letter of string1){
counter[letter] =(counter[letter]||0)+1
// console.log((counter[letter]||0));
}

for (item of string2){
    if(!counter[item]){
        return false
    }
    // console.log(counter[item]);
    counter[item]-=1
}
return true
}


const result = isAnagram("hello","llheo")
console.log(result);