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

