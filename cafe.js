function startsWidthVowel(word){
        const vowels = "aeiou";
        return vowels.indexOf(word[0]) !== -1;
}
exports.cafe = function(menuName){
    const aAndan = startsWidthVowel(menuName) ? "an" : "a";
    return `Make ${aAndan} ${menuName}`;
}