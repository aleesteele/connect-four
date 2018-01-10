///////////////DECLARATION OF VARIABLES///////////////

var c0 = $('.column0');
var c1 = $('.column1');
var c2 = $('.column2');
var c3 = $('.column3');
var c4 = $('.column4');
var c5 = $('.column5');
var c6 = $('.column6');
var curPlayer = 'red';
var all = $('.slot');
var jupiter = $('#red-win');
var moon = $('#yellow-win');


///////////////CHANGES PLAYERS///////////////

function player() {

    if (curPlayer == 'red') {
        curPlayer = 'yellow';
    } else {
        curPlayer = 'red';
    }

}


///////////////ADD PIECES TO COLUMN///////////////

function column(p) { // p is input
    var r = 0; // r == row
    for (var i = 5; i >= 0; i--) {
        var column = $('.column').eq(p) //acts locally on column
        var slots = column.find('.slot') //gets slots locally in column
        if (!slots.eq(i).hasClass('red') && !slots.eq(i).hasClass('yellow')) {
            slots.eq(i).addClass(curPlayer);
            player();
            r = i; // r = row
            break;
        }
    }


    ///////////////HORIZONTAL WIN///////////////
    var hrcounter = 0;
    var hycounter = 0;

    for (var i = 0; i <= 6; i++) {
        var column = $('.column').eq(i)
        var slots = column.find('.slot')

        if (slots.eq(r).hasClass('red')) {
            hrcounter++;
            if (hrcounter == 4) {
                redVict();
                console.log("victory for RED");
                return;
            }
        } else {
            hrcounter = 0;
        }

        if (slots.eq(r).hasClass('yellow')) {
            hycounter++;
            if (hycounter == 4) {
                yellowVict();
                console.log("victory for YELLOW");
                return;
            }
        } else {
            hycounter = 0;
        }
     }

    ///////////////VERTICAL WIN///////////////

    var vcounter = 0;

    for (var i = 5; i >= 0; i--) {
        var column = $('.column').eq(p) //acts locally on column
        var slots = column.find('.slot') //gets slots locally in column

        if (slots.eq(i).hasClass('red')) {
            vcounter++;
            if (vcounter == 4) {
                redVict();
                console.log("victory for RED");
                return;
            }
        } else {
            vcounter = 0;
        }

    }

    vcounter = 0;
    for (var i = 5; i >= 0; i--) {
        var column = $('.column').eq(p) //acts locally on column
        var slots = column.find('.slot') //gets slots locally in column

        if (slots.eq(i).hasClass('yellow')) {
            vcounter++;
            if (vcounter == 4) {
                yellowVict();
                console.log("victory for YELLOW");
                return;
            }
        } else {
            vcounter = 0;
        }

    }

    ///////////////DIAGONAL WIN///////////////

    var drrcounter; //diagonal left->right top->down red
    var drlcounter; //diagonal left->right down->up yellow
    var dyrcounter; //diagonal left->right top->down yellow
    var dylcounter; //diagonal left->right down->up yellow

//////////////////////////RED
    //NW diagonal TOP
    drrcounter = 0;
    dyrcounter = 0;
    for (var i = (6*p+r); i >= 0; i -= 7) {
        // console.log('entered For 1');
        if (all.eq(i).hasClass('red')) {
            drrcounter++;
            if (drrcounter == 4) {
                redVict();
                console.log('DIAGONAL victory for RED 1');
                break;
            }
        } else {
             break; //drrcounter;
        }

    }

    //SE diagonal DOWN
    for (var i = (6*p+r)+7; i <= 41; i += 7) {
        if (all.eq(i).hasClass('red')) {
            drrcounter++;
            if (drrcounter == 4) {
                redVict();
                console.log('DIAGONAL victory for RED 2');
                break;
            }
        } else {
            drrcounter = 0;
            break; //resets counter...
        }

    }

/////////////left to right down->top
    //SW diagonal DOWN
   drlcounter = 0;
   dylcounter = 0;
    for (var i = (6*p+r); i >= 0; i -= 5){
        if (all.eq(i).hasClass('red')) {
            drlcounter++;

            if (drlcounter == 4) {
                redVict();
                console.log('DIAGONAL victory for RED 3');
                break;
            }
        } else {
            break;
        }
    }

    //NE diagonal TOP
    for (var i = (6*p+r)+5; i <= 41; i += 5) {
        // console.log('entered For 4');
        if (all.eq(i).hasClass('red')) {
            drlcounter++;

            if (drlcounter == 4) {
                redVict();
                console.log('victory for RED 4');
                break;
            }
        } else {
            drlcounter = 0;
            break;
        }
    }

    ////////////////////////YELLOW
    //NW diagonal TOP
    dyrcounter = 0;
    for (var i = (6*p+r); i >= 0; i -= 7) {
        if (all.eq(i).hasClass('yellow')) {
            dyrcounter++;
            if (dyrcounter == 4) {
                yellowVict();
                console.log('DIAGONAL victory for YELLOW 1');
                break;
            }
        } else {
             break; //resets counter...
        }
    }

    //SE diagonal DOWN
    for (var i = (6*p+r)+7; i <= 41; i += 7) {
        if (all.eq(i).hasClass('yellow')) {
            dyrcounter++;
            if (dyrcounter == 4) {
                yellowVict();
                console.log('DIAGONAL victory for YELLOW 2');
                break;
            }
        } else {
            dyrcounter = 0;
            break; //resets counter...
        }
    }

/////////////left to right down->top
    //SW diagonal DOWN
   dylcounter = 0;
    for (var i = (6*p+r); i >= 0; i -= 5){
        if (all.eq(i).hasClass('yellow')) {
            dylcounter++;

            if (dylcounter == 4) {
                yellowVict();
                console.log('DIAGONAL victory for YELLOW 3');
                break;
            }
        } else {
            break;
        }
    }

    //NE diagonal TOP
    for (var i = (6*p+r)+5; i <= 41; i += 5) {
        // console.log('entered For 4');
        if (all.eq(i).hasClass('yellow')) {
            dylcounter++;

            if (dylcounter == 4) {
                yellowVict();
                console.log('victory for YELLOW 4');
                break;
            }
        } else {
            dylcounter = 0;
            break;
        }

    }



} //end of column





///////////////PUT PIECES IN///////////////

c0.on('click',function() {
    column(0);
});

c1.on('click',function() {
    column(1);
});

c2.on('click',function() {
    column(2);
});

c3.on('click',function() {
    column(3);
});

c4.on('click',function() {
    column(4);
});

c5.on('click',function() {
    column(5);
});

c6.on('click',function() {
    column(6);
});


///////////////VICTORY ANIMATIONS///////////////


function redVict() {
    jupiter.addClass('yes');
    for (var i = 0; i <= 41; i++) {
        if (all.eq(i).hasClass('red')) {
            all.eq(i).addClass('win');
        }
    }
}


function yellowVict() {
    moon.addClass('yes');
    console.log('hey');
    for (var i = 0; i <= 41; i++) {
        if (all.eq(i).hasClass('yellow')) {
            all.eq(i).addClass('win');
        }
    }
}
