function compareTriplets(a, b) {
    var Alice = 0;
    var Bob = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            Alice += 1;
        }
        else if (a[i] == b[i]) {
            Alice += 0;
            Bob += 0;
        }
        else {
            Bob += 1;
        }
    }
    // console.log(Alice + ' '+ Bob);
    return Alice + ' ' + Bob;
}

//test
// compareTriplets([5,6,7], [3,6,10]);