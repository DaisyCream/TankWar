/**
 * Created by DaisyCream on 15/9/21.
 */

/***************************The window's height and width*****************************/
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;


/***************************The Cannon's attribute*****************************/
var cannon = document.getElementById('cannon');
cannon.style.width = windowWidth *0.08 + 'px';
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
ENEMY.side = parseInt(windowWidth*0.03);
ENEMY.createTime = function(){
    return (parseInt(Math.random()*10)+10)*1000;
};

/***
 * This function is random enemy's move speed;
 * @returns {number}
 */
ENEMY.moveSpeed = function(target){
    target.moveSpeed = parseInt(Math.random()*6)+1;
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
    switch (ranChooseSide){
        case 1:
            target.style.left = ranChooseXLong + 'px';
            target.style.top = 0 + 'px';
            console.log(target.style.left);
            console.log(target.style.top);
            break;
        case 2:
            target.style.left = windowWidth + 'px';
            target.style.top = ranChooseYLong + 'px'
            console.log(target.style.left);
            console.log(target.style.top);
            break;
        case 3:
            target.style.left = ranChooseXLong + 'px';
            target.style.top = windowHeight + 'px';
            console.log(target.style.left);
            console.log(target.style.top);
            break;
        case 4:
            target.style.left = 0 + 'px';
            target.style.top = ranChooseYLong + 'px';
            console.log(target.style.left);
            console.log(target.style.top);
            break;
    }

};


function addEnemyAnimation(target){
    target.style.webkitTransition = 'top ' + ENEMY.moveSpeed(target) + 's' + ",left " + target.moveSpeed+'s';
    target.style.top = windowHeight/2 + 'px';
    target.style.left = windowWidth/2 + 'px';
}

/***
 * The function is create enemy
 */


function createEnemy(){
    var enemy = document.createElement('div');
    enemy.setAttribute('id','sd');
    enemy.setAttribute('class','enemy');
    enemy.style.width = ENEMY.side + 'px';
    enemy.style.height = ENEMY.side + 'px';
    alert(ENEMY.side);
    cannon.parentNode.appendChild(enemy);
    ENEMY.initPosition(enemy);
    addEnemyAnimation(enemy);

    //setTimeout(createEnemy, ENEMY.createTime());
}


window.onload = function(){
    createEnemy();
};
