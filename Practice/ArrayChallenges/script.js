function alwaysHungry(arr, arr1) {
	for (let i = 0; i < arr.length; i++) { 
		if(arr[i] === "comida") {
			console.log("delicioso")
		}
	}
	for (let j = 0; j < arr1.length; j++) { 
		if (arr1[j] !== "comida") {
			console.log("Tengo hambre")
		}
	}
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"], [4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
    var filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] > cutoff) {
			filteredArr.push(arr[i])
		}
	}
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

function betterThanAverage(arr) {
    var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
    var promedio = sum / arr.length;
    var count = 0
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > promedio) {
			count++
		}
	}
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

function reverse(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr.reverse()
	}
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

function fibonacciArray(n) {
    var fibArr = [0, 1];
	for (let i = 2; i < n; i++) {
		fibArr.push(fibArr[i-1] + fibArr[i-2])
	}
	return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
