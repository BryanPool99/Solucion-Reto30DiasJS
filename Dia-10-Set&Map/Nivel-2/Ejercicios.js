const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
/*
    1.Encontrar a unión b
*/
let c=[...a,...b];
let cUnion=new Set(c);
console.log(cUnion);
/*
    2.Encontrar a intersección b
*/
let B=new Set(b)
c=a.filter((num)=>B.has(num));
let cIntersencion=new Set(c);
console.log(cIntersencion);
/*
    3.Encontrar a diferencia b
*/
let d=[...a,...b];
d=a.filter((num)=>!B.has(num));
let cDiferencia=new Set(d);
console.log(cDiferencia);