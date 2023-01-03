/*
    1.Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
*/
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(sentence) {
    return sentence.replace(/[^A-Za-z ]+/g,"")
}
console.log(cleanText(sentence));
/*
    2. Escriba una función que encuentre las palabras más frecuentes. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.

    console.log(mostFrequentWords(cleanedText))
    [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
*/
cleanedText=cleanText(sentence);
function mostFrequentWords(cleanedText="") {
    let res={};
    const words=cleanedText.split(" ");
    words.map(word=>{
        if ( word in res) {
            res[word]++;
          } else {
            res[word] = 1;
          }
    })
    const resFormat=Object.keys(res).map(key=>({
        word:key,
        count:res[key]
    }));
    resSort=resFormat.sort((a,b)=>{
        if (a.count !== b.count) {
            return b.count - a.count;
          }
          return b.word.localeCompare(a.word);
    })
    return resSort.slice(0,3);
}
console.log(mostFrequentWords(cleanedText));