let obj = {};
for(let i=0;i<10000;i++){
    let random = Math.floor(Math.random()*20+1)
    if(obj[random]){
        obj[random]++
    }else{
        obj[random] = 1
    }
}


console.log(obj)
let sum = Object.values(obj).reduce((accumulator, current)=> accumulator + current);
/*Se puede hacer lo mismo con .keys para pedir solo las keys*/
console.log(sum)