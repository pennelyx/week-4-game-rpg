$(document).ready(function() {
	var spiderman = {
		name: "Spiderman",
		healthPoint: 100,
		attackPower: 15,
		cAttackPower: 5
	}

	var batman = {
		name: "Batman",
		healthPoint: 120,
		attackPower: 8,
		cAttackPower: 12
	}

	var ironman = {
		name: "Ironman",
		healthPoint: 150,
		attackPower: 6,
		cAttackPower: 19
	}

	var superman = {
		name: "Superman",
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

	var fight =function (myHero, myHP, enemyHero, enemyHeroImg, enemyHP) {
			attackCnt++;
			enemyHero.healthPoint = enemyHero.healthPoint - (myHero.attackPower*attackCnt);
			$(enemyHP).text(enemyHero.healthPoint);
			if(enemyHero.healthPoint<=0) {
				$(enemyHeroImg).css("display", "none");
				enemyCnt++;
				if (enemyCnt<3) {
					enemyChar=0;
					$(".infoDiv").html("You have defeated " + enemyHero.name +" , please choose another enemy");
				}
				else {
					$(".infoDiv").html("You won! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}
			else {
				myHero.healthPoint= myHero.healthPoint - enemyHero.cAttackPower;
				$(myHP).text(myHero.healthPoint);
				$(".infoDiv").html("You attacked " + enemyHero.name +" for "+ (myHero.attackPower*attackCnt)+ " damage.<br>The " + enemyHero.name +" attacked you back for "+ enemyHero.cAttackPower + " damage.");

				
				if (myHero.healthPoint<=0) {
					enemyCnt=3;
					$(".infoDiv").html("You lost! Game Over!");
					$(".restartDiv").css("display", "inline");
				}
			}

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
			fight(spiderman, ".spidermanImg>.remainingLife", batman, ".batmanImg", ".batmanImg>.remainingLife");
		}

		if (enemyChar==3){
			fight(spiderman, ".spidermanImg>.remainingLife", ironman, ".ironmanImg", ".ironmanImg>.remainingLife");
		}

		if (enemyChar==4){
			fight(spiderman, ".spidermanImg>.remainingLife", superman, ".supermanImg", ".supermanImg>.remainingLife");
		}
	}

	if (myChar==2) {
		if (enemyChar==1){
			fight(batman, ".batmanImg>.remainingLife", spiderman, ".spidermanImg", ".spidermanImg>.remainingLife");
		}

		if (enemyChar==3){
			fight(batman, ".batmanImg>.remainingLife", ironman, ".ironmanImg", ".ironmanImg>.remainingLife");
		}

		if (enemyChar==4){
			fight(batman, ".batmanImg>.remainingLife", superman, ".supermanImg", ".supermanImg>.remainingLife");
		}
	}


	if (myChar==3) {
		if (enemyChar==1){
			fight(ironman, ".ironmanImg>.remainingLife", spiderman, ".spidermanImg", ".spidermanImg>.remainingLife");
		}

		if (enemyChar==2){
			fight(ironman, ".ironmanImg>.remainingLife", batman, ".batmanImg", ".batmanImg>.remainingLife");
		}

		if (enemyChar==4){
			fight(ironman, ".ironmanImg>.remainingLife", superman, ".supermanImg", ".supermanImg>.remainingLife");
		}
	}


	if (myChar==4) {
		if (enemyChar==1){
			fight(superman, ".supermanImg>.remainingLife", spiderman, ".spidermanImg", ".spidermanImg>.remainingLife");
		}

		if (enemyChar==2){
			fight(superman, ".supermanImg>.remainingLife", batman, ".batmanImg", ".batmanImg>.remainingLife");
		}

		if (enemyChar==3){
			fight(superman, ".supermanImg>.remainingLife", ironman, ".ironmanImg", ".ironmanImg>.remainingLife");
		}
	}
}

});

$(".restartBtnStyle").on("click",function(){
	init();
});

});