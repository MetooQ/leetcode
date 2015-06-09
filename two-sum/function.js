function sum(arr,target) {
	for(var i = 0;i<arr.length;i++){
		for(var j = i+1; j<arr.length;j++){
			if(arr[i] + arr[j] === target){
				index1 = i;
				index2 = j;
			}
		}
	}
}


function sum2(arr,target) {
	var left = 0;
	var right = arr.length-1;
	while(left<right){
		var temp = arr[left] + arr[right];
		if(temp === target){
			index1 = left;
			index2 = right;
			return;
		}else if(temp >target){
			right --;
		}else{
			left ++;
		}
	}
}

var arr = [1,5,10,13,45];
var target = 23;
var index1 = 0;
var index2 = 0;
sum2(arr,target);
console.log('index1',index1,'index2',index2)