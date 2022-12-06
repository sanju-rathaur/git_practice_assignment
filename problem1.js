

let prime_number=17;
let var count=0;
for (let i=1;i<=prime_number;i++){
        if(prime_number%i==0){
         count++
}
}if (count==2){
   console.log("Prime No");
}
else{
console.log("Not a prime no");
}