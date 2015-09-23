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
ENEMY.side = windowWidth*0.03 + 'px';
/***
 * This function is random enemy's move speed;
 * @returns {number}
 */
ENEMY.moveSpeed = function(){
    return parseInt(Math.random()*6)+1;
};


/***
 * This function for enemy initPosition
 * @param target
 */


ENEMY.initPosition = function(target){
    var ranChooseSide = parseInt(Math.random()*4)+1;
    var ranChooseXLong = parseInt(Math.random()*(windowWidth-ENEMY.side));
    var ranChooseYLong = parseInt(Math.random()*(windowWidth-ENEMY.side));
    switch (ranChooseSide){
        case 1:
            target.style.left = ranChooseXLong + 'px';
            target.style.top = 0 + 'px';
            break;
        case 2:
            target.style.left = windowWidth + 'px';
            target.style.top = ranChooseYLong + 'px';
            break;
        case 3:
            target.style.left = ranChooseXLong + 'px';
            target.style.top = windowHeight + 'px';
            break;
        case 4:
            target.style.left = 0 + 'px';
            target.style.top = ranChooseYLong + 'px';
            break;
    }

};


function addEnemyAnimation(target){
    target.style.webkitTransition = 'left ' + ENEMY.moveSpeed()+'s' + ',top ' + ENEMY.moveSpeed() + 's';
    target.style.top = windowHeight/2 + 'px';
    target.style.left = windowWidth/2 + 'px';
}

/***
 * The function is create enemy
 */

function createEnemy(){


}


