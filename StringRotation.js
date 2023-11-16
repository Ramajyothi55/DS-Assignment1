function areRotEq (str1, str2) {
    for(let i=0; i<str1.length; ++i) {
        // shift str1
        str1 = str1[str1.length-1] + str1.substring(0, str1.length-1);
        if(str1 === str2) {
            return true;
        }
    }
    return false;
}


console.log(
    areRotEq('12345', '34512'), // true
    areRotEq('12345', '23451'), // true
    areRotEq('12345', '12354') // false
);
