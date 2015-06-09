/**
 * @param {number[]} nums
 * @return {number}
 * Given an array of integers, every element appears twice except for one. Find that single one.

*Note:
*Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

//不考虑复杂度的脑残解法
var singleNumber1 = function(nums) {
	
    for(var i = 0;i<nums.length;i++){
		var flag = 0;
        for(var j = 0; j<nums.length; j++){
            if(nums[i] == nums[j] && i != j){
               	flag = 1;
            }
        }
		if(flag == 0){
			return nums[i];
		}
    }
};

//线性复杂度的解法
var singleNumber2 = function (nums) {
	nums.sort();
	
	if(nums.length === 1){
		return nums[0];
	}else{
		if(nums[0] != nums[1]){
			return nums[0];
		}else if(nums[nums.length-1] != nums[nums.length-2]){
			return nums[nums.length-1];
		}else{
			for(var i = 1; i<nums.length-1; i++){
				if(nums[i-1] != nums[i] && nums[i] != nums[i+1]){
					return nums[i];
				}
			}
		}
		
	}
		
};


//奇妙的解法
var singleNumber3 = function (nums){
	var result = nums[0];
	for(var i = 1; i<nums.length; i++){
		result = result ^ nums[i];
	}
	return result;
}



var nums = [2,2,1];
//singleNumber(nums);
console.log(singleNumber3(nums));

