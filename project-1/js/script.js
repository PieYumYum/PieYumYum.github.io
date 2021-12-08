let spacesToMove = document.getElementById("spaces-to-move");
let playerPosition = document.getElementById("playerImg");
let enemyOne = document.getElementById("EnemyOne");
let enemyTwo = document.getElementById("EnemyTwo");
let goal = document.getElementById("Goal");
let mutedSound = document.getElementById("sound-button")

let goalLeftfull = goal.style.left;
let goalLeftStr = goalLeftfull.slice(0, -2);
let goalLeft = parseInt(goalLeftStr);

let goalTopFull = goal.style.top;
let goalTopSrt = goalTopFull.slice(0, -2);
let goalTop = parseInt(goalTopSrt);

let leftPosition = 395;
let topPosition = 245;

let enemyOneTopFull = enemyOne.style.top;
let enemyOneTopStr = enemyOneTopFull.slice(0, -2);
let enemyOneTop = parseInt(enemyOneTopStr);

let enemyOneLeftFull = enemyOne.style.left;
let enemyOneLeftStr = enemyOneLeftFull.slice(0, -2);
let enemyOneLeft = parseInt(enemyOneLeftStr);

let enemyTwoTopFull = enemyTwo.style.top;
let enemyTwoTopStr = enemyTwoTopFull.slice(0, -2);
let enemyTwoTop = parseInt(enemyTwoTopStr);

let enemyTwoLeftFull = enemyTwo.style.left;
let enemyTwoLeftStr = enemyTwoLeftFull.slice(0, -2);
let enemyTwoLeft = parseInt(enemyTwoLeftStr);

let playerTouchBad = false;

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let died = false;

function drawGrid() {
    ctx.strokeStyle = "Black";
    ctx.moveTo(0, 50);
    ctx.lineTo(500, 50);
    ctx.stroke();

    ctx.moveTo(0, 50);
    ctx.lineTo(0, 300);
    ctx.stroke();

    ctx.moveTo(500, 50);
    ctx.lineTo(500, 300);
    ctx.stroke();

    ctx.moveTo(500, 300);
    ctx.lineTo(0, 300);
    ctx.stroke();

    for (let index = 50; index < 500; index += 50) {
        ctx.moveTo(index, 50);
        ctx.lineTo(index, 500);
        ctx.stroke();
    }
    for (let index = 50; index < 300; index += 50) {
        ctx.moveTo(0, index);
        ctx.lineTo(500, index);
        ctx.stroke();

    }




}

drawGrid();


// sound track
let BGMusic = document.createElement("audio");
BGMusic.src = "mp3/BGMusic.mp3";
BGMusic.preload = "auto";
BGMusic.controls = false;
BGMusic.volume = 0.5;
BGMusic.style.display = "none";
BGMusic.loop = true;
document.body.appendChild(BGMusic);
let sound = 1;


function music() {
    sound++;
    if (sound % 2 === 0) {
        BGMusic.play();
        mutedSound.innerText = "Music Un-Muted"

    } else {
        BGMusic.pause();
        mutedSound.innerText = "Music Muted"
    }

}



function playerMoveRight() {
    if (leftPosition < 845) {
        leftPosition += 50;
        playerPosition.style.left = leftPosition + "px";
    }
    badOneMove();
}

function playerMoveLeft() {
    if (leftPosition > 395) {
        leftPosition -= 50;
        playerPosition.style.left = leftPosition + "px";
    }
    badOneMove();
}

function playerMoveUp() {

    if (topPosition > 245) {
        topPosition -= 50;
        playerPosition.style.top = topPosition + "px";
    }
    badOneMove();
}

function playerMoveDown() {
    if (topPosition < 415) {
        topPosition += 50;
        playerPosition.style.top = topPosition + "px";
    }
    badOneMove();
}

function badOneMove() {
    let direction1 = badOneRandom();
    let direction2 = badTwoRandom();
    if (direction1 == 1 && enemyOneTop > 245) {
        enemyOneTop -= 50;
        enemyOne.style.top = enemyOneTop + "px";
    } else if (direction1 == 2 && enemyOneTop < 405) {
        enemyOneTop += 50;
        enemyOne.style.top = enemyOneTop + "px";
    } else if (direction1 == 3 && enemyOneLeft < 845) {
        enemyOneLeft += 50;
        enemyOne.style.left = enemyOneLeft + "px";
    } else if (direction1 == 4 && enemyOneLeft > 395) {
        enemyOneLeft -= 50;
        enemyOne.style.left = enemyOneLeft + "px";
    }

    if (direction2 == 1 && enemyTwoTop > 245) {
        enemyTwoTop -= 50;
        enemyTwo.style.top = enemyTwoTop + "px";
    } else if (direction2 == 2 && enemyTwoTop < 405) {
        enemyTwoTop += 50;
        enemyTwo.style.top = enemyTwoTop + "px";
    } else if (direction2 == 3 && enemyTwoLeft < 845) {
        enemyTwoLeft += 50;
        enemyTwo.style.left = enemyTwoLeft + "px";
    } else if (direction2 == 4 && enemyTwoLeft > 395) {
        enemyTwoLeft -= 50;
        enemyTwo.style.left = enemyTwoLeft + "px";
    }

    if (playerExit() == true) {
        location.href = "win.html"
    } else if (leftPosition == enemyOneLeft && topPosition == enemyOneTop) {
        //alert("You Died!")
        location.href = "died.html";
    } else if (leftPosition == enemyTwoLeft && topPosition == enemyTwoTop) {
        //alert("You Died!")
        location.href = "died.html";
    }


}

function badOneRandom() {
    let answerOne = Math.floor(Math.random() * 4) + 1;
    return answerOne;

}

function badTwoRandom() {
    let answerTwo = Math.floor(Math.random() * 4) + 1;
    return answerTwo;
}

function playerDie() {
    if (playerTouchBad == true) {
        alert("you died");
    }
}

function playerExit() {
    if (leftPosition == goalLeft + 7 && topPosition == goalTop - 4) {
        return true;
    } else {
        return null;
    }
}