
// wordsearch = (sentence, word) => {
//     let numberOfWords = 0;
//     const sentenceArray = sentence.split(" ");
//     sentenceArray.forEach(sentenceWord => {
//         if (sentenceWord === word) numberOfWords ++;
//         }
//     );
//     return numberOfWords;
// }

const wordsearch = (sentence, word) => {
    let numberOfWords = 0;
    const sentenceArray = sentence.split(" ");
    for (let sentenceWord of sentenceArray) {
        if (sentenceWord === word) numberOfWords ++;
    }
    return numberOfWords;
}
console.log(wordsearch("the cat in the hat", "the"));

class Sentence {
    constructor(sentence) {
        this.sentence = sentence;
    }

    searchAll() {
        let searchObject = {};
        const sentenceArray = this.sentence.split(" ");
        for (let i =0; i < sentenceArray.length; i++) {
            const value = this.search(sentenceArray[i]);
            searchObject[sentenceArray[i]] = value;
        }
        return searchObject;
    }

    search(word) {
        let numberOfWords = 0;
        const sentenceArray = this.sentence.split(" ");
        for (let sentenceWord of sentenceArray) {
            if (sentenceWord === word) numberOfWords ++;
        }
        return numberOfWords;
    }
}

const sentence = new Sentence("the cat in the hat");
console.log(sentence.search("the"));
console.log(sentence.search("cat"));
console.log(sentence.searchAll());

// let myObj = {};
// myObj["ollie"] = 10000;
// console.log(myObj)