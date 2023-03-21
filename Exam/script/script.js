// B1
function checkSoNguyenTo(val){
    for(var i=2; i < val; i++){
      if(val % i === 0){
        return false;
      }
    }
    return true;
}
function sum(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let sum=0;
    if(a > b || a===b){
        alert("Nhap a nho hon b");
    }
    else{
        for(i=a;i<=b;i++){
            if(checkSoNguyenTo(i)){
            sum+=i
        }
    }
    }
    document.getElementById('result').innerHTML = sum;
}
// B2
function numberOneTriangle(num){
    let result='';
    for (i=1;i<=num;i++){
        result = '';
            for (let j = 1; j <= i; j++){
                result = result + '*';
        }
    console.log(result);
}}
console.log(numberOneTriangle(5));
