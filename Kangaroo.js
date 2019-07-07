function kangaroo(x1, v1, x2, v2) {
    var jump =0,jump1 = 0, jump2 = 0;
    while(jump < 10000){
        x1 += v1;
        x2 += v2;
        jump1++;
        jump2++;
        if (jump1 == jump2 && x1 == x2) {
            // console.log('YES');
            return 'YES';
        }
        else {
            jump++;
            if (jump == 10000) {
                // console.log('NO');
                return 'NO';
            }
        }
    }

}

// kangaroo(0,2,5,3);