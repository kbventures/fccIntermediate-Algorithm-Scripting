/*


Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster,
 move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

*/ 




function translatePigLatin(str){


    // Regexx 
    var isItAVowel = /[aeiouAEIOU]/;
    var isTheFirstLetterAVowel = /^[aeiouAEIOU]/;
    var doesTheWordNotContainAnyVowelsAtAll = /[aeiouAEIOU]+/;


    // Test Results

    var doesTheWordNotContainAnyVowelsAtAllBooleanTestResult = doesTheWordNotContainAnyVowelsAtAll.test(str);
    var isTheFirstLetterAVowelBooleanTestResult = isTheFirstLetterAVowel.test(str);
        
    if(!doesTheWordNotContainAnyVowelsAtAllBooleanTestResult){
        return str + 'ay';
    }

    if(isTheFirstLetterAVowelBooleanTestResult){
    return str + 'way';
    }

    for(let i=0; i< str.length; i++){
        var isItAVowelBooleanTestResult = isItAVowel.test(str[i]);
        if(isItAVowelBooleanTestResult)
   
            return str.substring(i) + str.substring(0,i) + 'ay';
        }

        // If its not a vowel move the letter to the end of the string

    }

    


// translatePigLatin('consonan');
// translatePigLatin('california');
// translatePigLatin('paragraphs');
// translatePigLatin('glove');
// translatePigLatin('algorithm');
// translatePigLatin('eight');
// translatePigLatin('schwartz');
// translatePigLatin('rhythm');



module.exports = translatePigLatin;