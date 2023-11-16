function arraypair(array,sum){
    for (i = 0;i < array.length;i++) {
        var first = array[i];
        for (j = i + 1;j < array.length;j++) {
            var second = array[j];

            if ((first + second) == sum) {
        //alert('First: ' + first + ' Second ' + second + ' SUM ' + sum);
        console.log('First: ' + first + ' Second ' + second + ' Sum is '+sum);
            }
        }

    }
}

var a = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];

arraypair(a,7);

