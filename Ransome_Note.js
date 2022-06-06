// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Note:
// You may assume that both strings contain only lowercase letters.
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true
var canConstruct = function(ransomNote, magazine) {
    let map = {};
    for(let i =0; i<magazine.length; i++){// for each letter in magazine create a map with the letter and the number of times it appears
        if(map[magazine[i]]){// if the letter already exists in the map add 1 to the number of times it appears
            map[magazine[i]]++;
        }
        else{
            map[magazine[i]] = 1;// if the letter does not exist in the map create it and set the number of times it appears to 1
    }
}
    for(let i =0; i<ransomNote.length; i++){// for each letter in ransomNote check if the letter exists in the map
        if(map[ransomNote[i]]){// if the letter exists in the map subtract 1 from the number of times it appears
            map[ransomNote[i]]--;// if the number of times it appears is 0 delete the letter from the map
        }
        else{
            return false;// if the letter does not exist in the map return false
        }
    }
    return true;// if the map is empty return true
}