/*
    1.El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
*/
const frase="El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor";
const cantWord=frase.match(/amor/gi).length
console.log(cantWord);
/*
    2.Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
*/
const sentences='No puedes terminar una oración con porque porque porque es una conjunción';
const cantPorque=sentences.match(/porque/gi).length;
console.log(cantPorque);
/*
    3.Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
    const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
*/
const sentence="%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const words=/[%@$&#]/gi;
let sentenceClear=sentence.replaceAll(words,"");
console.log(sentenceClear);
/*
    4.Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
*/
const oracion='Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
const expresionRegularNumero=/\d+/g;
const money=oracion.match(expresionRegularNumero);
console.log(money);
const total=money.reduce((a,b)=>parseInt(a)+parseInt(b),0)*12;
console.log(total);
