function diagonalDifference(arr) {
    var a = 0,
        b = 0,
        result = 0;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                a += arr[i][j];
                // console.log('a: '+arr[i][j]);
            }
            if (i + j == arr.length -1) {
                b += arr[i][j];
                // console.log('b: '+arr[i][j]);
            }
        }
    }
    // result = a - b;
    result = Math.abs(a-b);
    // console.log(result);
    return result;
}

// diagonalDifference([[1,2,3],
//                     [4,5,6],
//                     [9,8,9]]);

diagonalDifference([[-1,1,-7,-8],
                    [-10,-8,-5,-2],
                    [0,9,7,-1],
                    [4,4,-2,1]]);
