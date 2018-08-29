const isPrime = require('prime-number')
const arrayGenerator = require('array-generator')
let n =7;
var doSomething=function(n){
	var a =[];
	if(isPrime(n)){
		a= arrayGenerator(n,0,n); 	
	}
}

module.exports=  doSomething;
