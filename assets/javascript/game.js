$(document).ready(function() {
	var spiderman = {
		healthPoint: 100,
		attackPower: 15,
		cAttackPower: 5
	}

	var batman = {
		healthPoint: 120,
		attackPower: 8,
		cAttackPower: 12
	}

	var ironman = {
		healthPoint: 150,
		attackPower: 6,
		cAttackPower: 19
	}

	var superman = {
		healthPoint: 180,
		attackPower: 4,
		cAttackPower: 25
	}

	var myChar=0;
	var enemyChar=0;

	var attackCnt=0;
	var enemyCnt=0;

	var init = function () {
		$(".spidermanImg").css("display", "inline");
		$(".batmanImg").css("display", "inline");
		$(".ironmanImg").css("display", "inline");
		$(".supermanImg").css("display", "inline");

		$(".spidermanImg>img").css("background-color", "white");
		$(".spidermanImg>p").css("color", "black");
		$(".batmanImg>img").css("background-color", "white");
		$(".batmanImg>p").css("color", "black");
		$(".ironmanImg>img").css("background-color", "white");
		$(".ironmanImg>p").css("color", "black");
		$(".supermanImg>img").css("background-color", "white");
		$(".supermanImg>p").css("color", "black");

		$(".spidermanImg").appendTo(".selectDiv");
		$(".batmanImg").appendTo(".selectDiv");
		$(".ironmanImg").appendTo(".selectDiv");
		$(".supermanImg").appendTo(".selectDiv");
		spiderman.healthPoint = 100;
		batman.healthPoint = 120;
		ironman.healthPoint = 150;
		superman.healthPoint = 180;
		$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
		$(".batmanImg>.remainingLife").text(batman.healthPoint);
		$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
		$(".supermanImg>.remainingLife").text(superman.healthPoint);

		myChar=0;
		enemyChar=0;
		attackCnt=0;
		enemyCnt=0;

		$(".infoDiv").html("");
		$(".restartDiv").css("display", "none");

	}


$(".spidermanImg").on("click", function(){
	if (myChar == 0) {
		$(".spidermanImg").appendTo(".yourCharDiv");
		$(".batmanImg>img").css("background-color", "red");
		$(".ironmanImg>img").css("background-color", "red");
		$(".supermanImg>img").css("background-color", "red");
		$(".batmanImg").appendTo(".enemyCharDiv");
		$(".ironmanImg").appendTo(".enemyCharDiv");
		$(".supermanImg").appendTo(".enemyCharDiv");
		myChar=1;
	}
	else if (enemyChar ==0 && myChar != 1) {
		$(".spidermanImg").appendTo(".defenderDiv");
		$(".spidermanImg>img").css("background-color", "black");
		$(".spidermanImg>p").css("color", "white");
		enemyChar =1;
	}
});


$(".batmanImg").on("click", function(){
	if (myChar == 0) {
		$(".batmanImg").appendTo(".yourCharDiv");
		$(".spidermanImg>img").css("background-color", "red");
		$(".ironmanImg>img").css("background-color", "red");
		$(".supermanImg>img").css("background-color", "red");
		$(".spidermanImg").appendTo(".enemyCharDiv");
		$(".ironmanImg").appendTo(".enemyCharDiv");
		$(".supermanImg").appendTo(".enemyCharDiv");
		myChar=2;
	}
	else if (enemyChar ==0 && myChar != 2) {
		$(".batmanImg").appendTo(".defenderDiv");
		$(".batmanImg>img").css("background-color", "black");
		$(".batmanImg>p").css("color", "white");
		enemyChar =2;
	}
});


$(".ironmanImg").on("click", function(){
	if (myChar == 0) {
		$(".ironmanImg").appendTo(".yourCharDiv");
		$(".batmanImg>img").css("background-color", "red");
		$(".spidermanImg>img").css("background-color", "red");
		$(".supermanImg>img").css("background-color", "red");
		$(".batmanImg").appendTo(".enemyCharDiv");
		$(".spidermanImg").appendTo(".enemyCharDiv");
		$(".supermanImg").appendTo(".enemyCharDiv");
		myChar=3;
	}
	else if (enemyChar ==0 && myChar != 3) {
		$(".ironmanImg").appendTo(".defenderDiv");
		$(".ironmanImg>img").css("background-color", "black");
		$(".ironmanImg>p").css("color", "white");
		enemyChar =3;
	}
});


$(".supermanImg").on("click", function(){
	if (myChar == 0) {
		$(".supermanImg").appendTo(".yourCharDiv");
		$(".batmanImg>img").css("background-color", "red");
		$(".ironmanImg>img").css("background-color", "red");
		$(".spidermanImg>img").css("background-color", "red");
		$(".batmanImg").appendTo(".enemyCharDiv");
		$(".ironmanImg").appendTo(".enemyCharDiv");
		$(".spidermanImg").appendTo(".enemyCharDiv");
		myChar=4;
	}
	else if (enemyChar ==0 && myChar != 4) {
		$(".supermanImg").appendTo(".defenderDiv");
		$(".supermanImg>img").css("background-color", "black");
		$(".supermanImg>p").css("color", "white");
		enemyChar =4;
	}
});


$("#attackBtnId").on("click", function(){

if (enemyCnt == 3) {}
else {
	if (myChar==0){
		$(".infoDiv").html("Plase select a super hero to start.");
	}

	else if (enemyChar==0){
		$(".infoDiv").html("Plase select an enemy.");
	}

	if (myChar==1) {
		if (enemyChar==2){
			attackCnt++;
			batman.healthPoint = batman.healthPoint - (spiderman.attackPower*attackCnt);
			$(".batmanImg>.remainingLife").text(batman.healthPoint);
			if(batman.healthPoint<=0) {
				$(".batmanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Batman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				spiderman.healthPoint= spiderman.healthPoint - batman.cAttackPower;
				$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
				$(".infoDiv").html("You attacked Batman for "+ (spiderman.attackPower*attackCnt)+ " damage.<br>The Batman attacked you back for "+ batman.cAttackPower + "damage.");

				
				if (spiderman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}

		}


		if (enemyChar==3){
			attackCnt++;
			ironman.healthPoint = ironman.healthPoint - (spiderman.attackPower*attackCnt);
			$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
			if(ironman.healthPoint<=0) {
				$(".ironmanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Ironman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				spiderman.healthPoint= spiderman.healthPoint - ironman.cAttackPower;
				$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
				$(".infoDiv").html("You attacked Ironman for "+ (spiderman.attackPower*attackCnt)+ " damage.<br>The Ironman attacked you back for "+ ironman.cAttackPower + "damage.");

				
				if (spiderman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}

		}

		if (enemyChar==4){
			attackCnt++;
			superman.healthPoint = superman.healthPoint - (spiderman.attackPower*attackCnt);
			$(".supermanImg>.remainingLife").text(superman.healthPoint);
			if(superman.healthPoint<=0) {
				$(".supermanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Superman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				spiderman.healthPoint= spiderman.healthPoint - superman.cAttackPower;
				$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
				$(".infoDiv").html("You attacked Superman for "+ (spiderman.attackPower*attackCnt)+ " damage.<br>The Superman attacked you back for "+ superman.cAttackPower + "damage.");

				
				if (spiderman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}
	}

	if (myChar==2) {
		if (enemyChar==1){
			attackCnt++;
			spiderman.healthPoint = spiderman.healthPoint - (batman.attackPower*attackCnt);
			$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
			if(spiderman.healthPoint<=0) {
				$(".spidermanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Spiderman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				batman.healthPoint= batman.healthPoint - spiderman.cAttackPower;
				$(".batmanImg>.remainingLife").text(batman.healthPoint);
				$(".infoDiv").html("You attacked Spiderman for "+ (batman.attackPower*attackCnt)+ " damage.<br>The Spiderman attacked you back for "+ spiderman.cAttackPower + "damage.");

				if (batman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}

		if (enemyChar==3){
			attackCnt++;
			ironman.healthPoint = ironman.healthPoint - (batman.attackPower*attackCnt);
			$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
			if(ironman.healthPoint<=0) {
				$(".ironmanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Ironman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				batman.healthPoint= batman.healthPoint - ironman.cAttackPower;
				$(".batmanImg>.remainingLife").text(batman.healthPoint);
				$(".infoDiv").html("You attacked Ironman for "+ (batman.attackPower*attackCnt)+ " damage.<br>The Ironman attacked you back for "+ ironman.cAttackPower + "damage.");

				
				if (batman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}

		}

		if (enemyChar==4){
			attackCnt++;
			superman.healthPoint = superman.healthPoint - (batman.attackPower*attackCnt);
			$(".supermanImg>.remainingLife").text(superman.healthPoint);
			if(superman.healthPoint<=0) {
				$(".supermanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Superman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				batman.healthPoint= batman.healthPoint - superman.cAttackPower;
				$(".batmanImg>.remainingLife").text(batman.healthPoint);
				$(".infoDiv").html("You attacked Superman for "+ (batman.attackPower*attackCnt)+ " damage.<br>The Superman attacked you back for "+ superman.cAttackPower + "damage.");

				
				if (batman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}
	}


	if (myChar==3) {
		if (enemyChar==1){
			attackCnt++;
			spiderman.healthPoint = spiderman.healthPoint - (ironman.attackPower*attackCnt);
			$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
			if(spiderman.healthPoint<=0) {
				$(".spidermanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Spiderman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				ironman.healthPoint= ironman.healthPoint - spiderman.cAttackPower;
				$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
				$(".infoDiv").html("You attacked Spiderman for "+ (ironman.attackPower*attackCnt)+ " damage.<br>The Spiderman attacked you back for "+ spiderman.cAttackPower + "damage.");

				if (ironman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}

		if (enemyChar==2){
			attackCnt++;
			batman.healthPoint = batman.healthPoint - (ironman.attackPower*attackCnt);
			$(".batmanImg>.remainingLife").text(batman.healthPoint);
			if(batman.healthPoint<=0) {
				$(".batmanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Batman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				ironman.healthPoint= ironman.healthPoint - batman.cAttackPower;
				$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
				$(".infoDiv").html("You attacked Batman for "+ (ironman.attackPower*attackCnt)+ " damage.<br>The Batman attacked you back for "+ batman.cAttackPower + "damage.");

				if (ironman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}

		}

		if (enemyChar==4){
			attackCnt++;
			superman.healthPoint = superman.healthPoint - (ironman.attackPower*attackCnt);
			$(".supermanImg>.remainingLife").text(superman.healthPoint);
			if(superman.healthPoint<=0) {
				$(".supermanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Superman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				ironman.healthPoint= ironman.healthPoint - superman.cAttackPower;
				$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
				$(".infoDiv").html("You attacked Superman for "+ (ironman.attackPower*attackCnt)+ " damage.<br>The Superman attacked you back for "+ superman.cAttackPower + "damage.");

				if (ironman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}
	}


	if (myChar==4) {
		if (enemyChar==1){
			attackCnt++;
			spiderman.healthPoint = spiderman.healthPoint - (superman.attackPower*attackCnt);
			$(".spidermanImg>.remainingLife").text(spiderman.healthPoint);
			if(spiderman.healthPoint<=0) {
				$(".spidermanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Spiderman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				superman.healthPoint= superman.healthPoint - spiderman.cAttackPower;
				$(".supermanImg>.remainingLife").text(superman.healthPoint);
				$(".infoDiv").html("You attacked Spiderman for "+ (superman.attackPower*attackCnt)+ " damage.<br>The Spiderman attacked you back for "+ spiderman.cAttackPower + "damage.");

				if (superman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}

		if (enemyChar==2){
			attackCnt++;
			batman.healthPoint = batman.healthPoint - (superman.attackPower*attackCnt);
			$(".batmanImg>.remainingLife").text(batman.healthPoint);
			if(batman.healthPoint<=0) {
				$(".batmanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Batman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				superman.healthPoint= superman.healthPoint - batman.cAttackPower;
				$(".supermanImg>.remainingLife").text(superman.healthPoint);
				$(".infoDiv").html("You attacked Batman for "+ (superman.attackPower*attackCnt)+ " damage.<br>The Batman attacked you back for "+ batman.cAttackPower + "damage.");

				if (superman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}

		}

		if (enemyChar==3){
			attackCnt++;
			ironman.healthPoint = ironman.healthPoint - (superman.attackPower*attackCnt);
			$(".ironmanImg>.remainingLife").text(ironman.healthPoint);
			if(ironman.healthPoint<=0) {
				$(".ironmanImg").css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated Ironman, please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				superman.healthPoint= superman.healthPoint - ironman.cAttackPower;
				$(".supermanImg>.remainingLife").text(superman.healthPoint);
				$(".infoDiv").html("You attacked Ironman for "+ (superman.attackPower*attackCnt)+ " damage.<br>The Ironman attacked you back for "+ ironman.cAttackPower + "damage.");

				if (superman.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
		}
	}
}

});

$(".restartBtnStyle").on("click",function(){
	init();
});




});