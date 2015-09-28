/**
 * Created by DaisyCream on 15/9/21.
 */

/***************************The window's height and width*****************************/
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;


/***************************The Cannon's attribute*****************************/
var cannon = document.getElementById('cannon');
cannon.style.width = windowWidth *0.1 + 'px';
cannon.style.height = cannon.style.width;
cannon.style.top = (windowHeight-parseInt(cannon.style.height))/2 + 'px';
cannon.style.left = (windowWidth-parseInt(cannon.style.width))/2 + 'px';


/***************************The AIM coordinate*****************************/

var AIM = function(){};
AIM.side = parseInt(cannon.style.width);
AIM.targetX = parseInt(cannon.style.left);
AIM.targetY = parseInt(cannon.style.top);


/***************************The enemy's appear*****************************/
var ENEMY = function(){};
ENEMY.side = parseInt(windowWidth*0.04);
ENEMY.createTime = function(){
    return (parseInt(Math.random()*3)+2)*1000;
};

/***
 * This function is random enemy's move speed;
 * @returns {number}
 */
ENEMY.moveSpeed = function(target){
    target.moveSpeed = parseInt(Math.random()*3)+8;
    return target.moveSpeed;
};



/***
 * This function for enemy initPosition
 * @param target
 */
ENEMY.initPosition = function(target){
    var ranChooseSide = parseInt(Math.random()*4)+1;
    var ranChooseXLong = parseInt(Math.random()*(windowWidth-ENEMY.side));
    var ranChooseYLong = parseInt(Math.random()*(windowHeight-ENEMY.side));
    var degree;
    switch (ranChooseSide){
        case 1:
            target.style.left = ranChooseXLong + 'px';
            target.style.top = 0 + 'px';
            degree = faceToCannon(parseInt(target.style.left),parseInt(target.style.top));
            target.style.transform = "rotate("+ degree + "deg)";
            break;
        case 2:
            target.style.left = (windowWidth-ENEMY.side) + 'px';
            target.style.top = ranChooseYLong + 'px';
            degree = faceToCannon(parseInt(target.style.left),parseInt(target.style.top));
            target.style.transform = "rotate("+ degree + "deg)";
            break;
        case 3:
            target.style.left = ranChooseXLong + 'px';
            target.style.top = (windowHeight-ENEMY.side) + 'px';
            degree = faceToCannon(parseInt(target.style.left),parseInt(target.style.top));
            target.style.transform = "rotate("+ degree + "deg)";
            break;
        case 4:
            target.style.left = 0 + 'px';
            target.style.top = ranChooseYLong + 'px';
            degree = faceToCannon(parseInt(target.style.left),parseInt(target.style.top));
            target.style.transform = "rotate("+ degree + "deg)";
            break;
    }

};


function addEnemyAnimation(target){
    target.style.top = (windowHeight-ENEMY.side)/2 + 'px';
    target.style.left = (windowWidth-ENEMY.side)/2 + 'px';
    console.log(target.moveSpeed);
}


function createStyle (target){
    //target.style.backgroundColor = '#000';
    //target.style.position = 'absolute';
    target.style.width = ENEMY.side + 'px';
    target.style.height = ENEMY.side + 'px';

}

/***
 * The function is create enemy
 */
function createEnemy(){
    enemy = document.createElement('div');
    enemy.setAttribute('class','enemy');
    cannon.parentNode.appendChild(enemy);
    createStyle(enemy);
    ENEMY.initPosition(enemy);
    enemy.style.webkitTransition = 'top ' + ENEMY.moveSpeed(enemy) + 's' + ",left " + enemy.moveSpeed+'s';
    setTimeout("addEnemyAnimation(enemy)", 2000);
    setTimeout(createEnemy, ENEMY.createTime());
}


/***
 * the enemy face to cannon
 */
centerX = windowWidth/2;
centerY = windowHeight/2;

function faceToCannon(x,y){
    var deg;
    if(x<=centerX){
        if(y<=centerY){
            if(y==0) deg = 270;
            else deg = 270;
        }
        else {
            if(y==0) deg = 180;
            else deg = 225;
        }
    }
    else{
        if(y<=centerY){
            if(y==0) deg = 0;
            else deg = 45;
        }
        else{
            if(y==0) deg = 135;
            else deg = 90;
        }

    }
    var cos = Math.abs(centerY-y)/Math.sqrt(Math.pow((centerX-x),2)+Math.pow((centerY-y),2));
    console.log(cos);
    deg += Math.acos(cos)*180;
    return parseInt(deg);
}


/***************************cannon rotate*****************************/
var CANNONMOVE = function(){};
CANNONMOVE.addDeg = false;
CANNONMOVE.deductDeg = false;
CANNONMOVE.moveDeg = 0;

CANNONMOVE.move = function(){
    if(CANNONMOVE.addDeg==true) {
        CANNONMOVE.moveDeg+=1;
        cannon.style.transform = "rotate(" + CANNONMOVE.moveDeg +"deg)";
    }
    if(CANNONMOVE.deductDeg==true){
        CANNONMOVE.moveDeg-=1;
        cannon.style.transform = "rotate(" + CANNONMOVE.moveDeg +"deg)";
    }
};


document.onkeydown = function(event){
    event = event || window.event;
    if(event.keyCode==37)   CANNONMOVE.deductDeg = true;
    if(event.keyCode==39)   CANNONMOVE.addDeg = true;
};

document.onkeyup = function(event){
    event = event || window.event;
    if(event.keyCode==37)   CANNONMOVE.deductDeg = false;
    if(event.keyCode==39)   CANNONMOVE.addDeg = false;
};


/***************************grame start*****************************/

function gameStart(){
    createEnemy();
    setInterval(CANNONMOVE.move,15);
};

window.onload = function(){
    gameStart();
};
