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

    //Collision on the left, move right
    console.log(exercise.pos.x);
    if (exercise.checkWallCollision() === 'R'){
        exercise.increment = 20;
    }
    //Collision on the right, move left
    else if (exercise.checkWallCollision() === 'L'){
        exercise.increment = -20;
    }

    var currentPosition = parseInt(exercise.pos.x);
    //increment position
    exercise.pos.x = currentPosition + exercise.increment + "px";
    //update position
    exercise.img1.style.left = exercise.pos.x;

};


exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
    	//going to the right
        if (exercise.flag === 1) {
        	//PacMan2
            exercise.img1.src = './PacMan2.png';

        } else {
        	//PacMan1
            exercise.img1.src = './PacMan1.png';

        }
    } else if (exercise.increment < 0) {
    	//going to the left
        if (exercise.flag === 1) {
        	//PacMan4
            exercise.img1.src = './PacMan4.png';

        } else {
        	//Pacman3
            exercise.img1.src = './PacMan3.png';

        }
    }
};


exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width

    var currentPosition = parseInt(exercise.img1.style.left);
    //collision on the left
    if (currentPosition === 400){
        return 'L';
    }
    //collision on the right
    else if (currentPosition === 0){
        return 'R';
    }

};