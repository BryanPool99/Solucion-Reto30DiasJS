/*
    1.Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más frecuentes de una cadena?
*/
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
function tenMostFrequentWords(txt,n) {
    const res={};
    //const words=txt.split(/\b/).filter(word => word !== '.' && word!==' ' && word !== '. ')
    const words=txt.split(/\b/).filter(word => word !== '.' && word!==' ' && word !== '. ')
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
    return resSort.slice(0,n);
}
console.log(tenMostFrequentWords(paragraph,10));
