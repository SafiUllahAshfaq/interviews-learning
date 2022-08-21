/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    log({nums, target});
    
    // 1. iterate over nums => "i"
    // 2. iterate over remaining elements i.e. from i+1 to nums.length => "j"
    // 3. check if nums[i] + nums[j] === target
    // 4. if yes, then exit the forLoop
    // 5. if no, then continue step 2
    // 6. retrun [i, j]
    
    const result = [null, null];
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                result[0] = i;
                result[1] = j;
                break;
            }
        }
    }
    
    return result;
   
    // nums.flatMap((curr, index, arr) => {
    //     arr.slice(index+1).map(value => [value, ])
    // })
    
//    nums.reduce((acc, curr, index, arr) => {
//        log({acc, curr, index, arr});
//        return arr;
//    }, []);
    
    /*
    * x + y = target
    * y = target - x;
    */
    
//     let num1Index, num2Index;
    
//     for(let i = 0; i < nums.length; i++) {
//         const y = target - nums[i];
        
//         const yIndex = nums.findIndex(num => num === y);
        
//         if(yIndex > 0) {
//             ([num1Index, num2Index] = [i, yIndex]);
//             break;
//         };
//     }
    
//     // log({num1Index, num2Index});
    
//     return [num1Index, num2Index];
};

const log = (data) => console.log(data)
