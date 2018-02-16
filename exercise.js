/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};
exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
    //toggle flag between 0 and 1
    exercise.flag ^= 1;
    //increment position
    exercise.pos.x += exercise.increment;
    //update position
    exercise.img1.style.left = exercise.pos.x+"px";

};


exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
    	//going to the right
        if (exercise.flag === 1) {
            exercise.img1.src = './PacMan2.png';

        } else {
            exercise.img1.src = './PacMan1.png';

        }
    } else if (exercise.increment < 0) {
    	//going to the left
        if (exercise.flag === 1) {
            exercise.img1.src = './PacMan4.png';

        } else {
            exercise.img1.src = './PacMan3.png';

        }
    }
};


exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width
    var currentPosition = exercise.pos.x;
    //collision on the left
    if (currentPosition === 600){
        exercise.increment = -20;
    }
    //collision on the right
    else if (currentPosition === 0){
        exercise.increment = 20;
    }
};