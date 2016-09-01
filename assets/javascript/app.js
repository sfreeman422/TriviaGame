$(document).ready(function(){

//Carousel is a function for bootstraps javascript. It allows for the background carousel to function. 
$('.carousel').carousel();

//Questions array that holds all of the question objects. 
var questions = [
	question1 = {
		question: "<h2>What is Notorious B.I.G's full name?</h2>",
		option1: "<div class='option' id = 'option1'><p>Sean Combs</p></div>",
		option2: "<div class='option' id = 'option2'><p>Christopher Wallace</p></div>",
		option3: "<div class='option' id = 'option3'><p>Jeffrey Williams</p></div>",
		option4: "<div class='option' id = 'option4'><p>Marshall Mathers</p></div>",
		correctAnswerDisplay: "<p>Christopher Wallace, better known by his stage names The Notorious B.I.G, Biggie, or Biggie Smalls, was an American rapper. He is consistently ranked as one of the greatest and most influential rappers of all time. Wallace was raised in the Brooklyn borough of New York City. When he released his debut album Ready to Die in 1994, he became a central figure in the East Coast hip hop scene and increased New York's visibility in the genre at a time when West Coast hip hop was dominant in the mainstream. The following year, Wallace led his childhood friends to chart success through his protege group, Junior M.A.F.I.A. While recording his second album, Wallace was heavily involved in the growing East Coast West Coast hip hop feud. On March 9, 1997, Wallace was killed by an unknown assailant in a drive-by shooting in Los Angeles.</p>",
		correctAnswer: 2,
		image: "assets/images/biggie.jpg"
	},
	question2 = {
		question: "<h2>Who were the original 9 members of the Wu Tang Clan?</h2>",
		option1: "<div class='option' id = 'option1'><p>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, U-God, Method Man</div>",
		option2: "<div class='option' id = 'option2'><p>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, Cappadonna, Method Man</div>",
		option3: "<div class='option' id = 'option3'><p>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, U-God, Raekwon da Chef, Cappadonna, Method Man</div>",
		option4: "<div class='option' id = 'option4'><p>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Kill, Raekwon da Chef, Sonny Cheeba, Method Man</div>",
		correctAnswerDisplay: "<p>The Wu-Tang Clan is an American hip hop group from New York City, originally composed of East Coast rappers RZA, GZA, Method Man, Raekwon, Ghostface Killah, Inspectah Deck, U-God, Masta Killa, and Ol' Dirty Bastard. The group was formed in and is associated with the New York City borough of Staten Island. The Wu-Tang Clan has released seven gold and platinum studio albums with worldwide sales of more than 40 million albums, including members' solo projects, since 1992. Its debut album, Enter the Wu-Tang (36 Chambers), is considered to be one of the greatest albums in hip-hop history and it is said to have been groundbreaking for hip-hop and one of the most important albums of the hip-hop golden age</p>",
		correctAnswer: 1,
		image: "assets/images/wutangclan.jpg"
	},
	question3 = {
		question: "<h2>What sub-genre of rap do rappers Young Thug, Rich Homie Quan and Future fall under?</h2>",
		option1: "<div class='option' id = 'option1'><p>Mumble Rap</p></div>",
		option2: "<div class='option' id = 'option2'><p>Party Rap</p></div>",
		option3: "<div class='option' id = 'option3'><p>Trap Rap</p></div>",
		option4: "<div class='option' id = 'option4'><p>R&B</p></div>",
		correctAnswerDisplay: "<p>Mumble rap is a style of rapping in which the rappers are hard to understand. They focus on emotion and melody moreso than lyrical content and have been criticized as a bastardizaiton of the rap genre as a whole.</p>",
		correctAnswer: 1,
		image: "assets/images/thugga.jpg"
	},
	question4 = {
		question: "<h2>What does each letter stand for in KRS-ONE's name?</h2>",
		option1: "<div class='option' id = 'option1'><p>Krishna's Regarded Son 1</p></div>",
		option2: "<div class='option' id = 'option2'><p>Krips Run Supreme Over Nearly Everyone</p></div>",
		option3: "<div class='option' id = 'option3'><p>Knowledge Reigns Supreme Over Nearly Everyone</p></div>",
		option4: "<div class='option' id = 'option4'><p>Krazy Righteous Super One</p></div>",
		correctAnswerDisplay: "<p>KRS-One AKA Lawrence Parker was born in The Bronx, New York in 1965. Parker left home at 16 to become an MC, coming to live at a homeless shelter in the South Bronx where he was dubbed 'Krisna' by residents because of his interest in the Hare Krishna spirituality of some of the antipoverty workers. By the time he met youth counselor Scott Sterling, he was also writing graffiti as KRS-One (Knowledge Reigns Supreme Over Nearly Everyone). Together he and Sterling, a.k.a. DJ Scott La Rock eventually created Boogie Down Productions, releasing their debut album, Criminal Minded, in 1987.</p>",
		correctAnswer: 3,
		image: "assets/images/KRS.jpg"
	},
	question5 = {
		question: "<h2>What does C.R.E.A.M stand for?</h2>",
		option1: "<div class='option' id = 'option1'><p>Crips Run Everything And More</p></div>",
		option2: "<div class='option' id = 'option2'><p>Cash Rules Everything Around Me</p></div>",
		option3: "<div class='option' id = 'option3'><p>Criminal Rights East And Maple</p></div>",
		option4: "<div class='option' id = 'option4'><p>Cash Robbery Extortion And Money</p></div>",
		correctAnswerDisplay: "<p>'Cash Rules Everything Around Me! CREAM! Get the money, dolla dolla bill ya'll'- Wu Tang Clan</p>",
		correctAnswer: 2, 
		image: "assets/images/cream.jpg"
	},
	question6 = {
		question: "<h2>What two famous rappers starred in the stoner classic 'How High'?</h2>",
		option1: "<div class='option' id = 'option1'><p>Jay-z & Ice Cube</p></div>",
		option2: "<div class='option' id = 'option2'><p>Method Man and Red Man</p></div>",
		option3: "<div class='option' id = 'option3'><p>Biggie Smalls and Tupac</p></div>",
		option4: "<div class='option' id = 'option4'><p>Snoop Dogg & Ice Cube</p></div>",
		correctAnswerDisplay: "<p>Method Man and Redman starred in the stoner classic 'How High', a movie about smoking your friends ashes to work your way into an Ivy League school.</p>",
		correctAnswer: 2, 
		image: "assets/images/howhigh.JPG"
	},
	question7 = {
		question: "<h2>Which rap group was the movie Straight Outta Compton about?</h2>",
		option1: "<div class='option' id = 'option1'><p>Wu Tang Clan</p></div>",
		option2: "<div class='option' id = 'option2'><p>Young Money</p></div>",
		option3: "<div class='option' id = 'option3'><p>A Tribe Called Quest</p></div>",
		option4: "<div class='option' id = 'option4'><p>NWA</p></div>",
		correctAnswerDisplay: "<p>Straight Outta Compton is a 2015 American biographical film directed by F. Gary Gray, depicting the career of gangsta rap group N.W.A. Titled after N.W.A's 1988 debut studio album, the film focuses on members Eazy-E, Ice Cube, and Dr. Dre. Members of N.W.A were involved in making the film: Ice Cube and Dr. Dre were among its producers, as was Eazy-E's widow, Tomica Woods-Wright, while MC Ren and DJ Yella served as creative consultants. Ice Cube is portrayed by his son, O'Shea Jackson, Jr., with Corey Hawkins as Dr. Dre and Jason Mitchell as Eazy-E. Paul Giamatti also stars as N.W.A's manager Jerry Heller.</p>",
		correctAnswer: 4, 
		image: "assets/images/nwa.jpg"
	},
	question8 = {
		question: "<h2>Who is Marshall Mathers?</h2>",
		option1: "<div class='option' id = 'option1'><p>Young Thug</p></div>",
		option2: "<div class='option' id = 'option2'><p>Lil Wayne</p></div>",
		option3: "<div class='option' id = 'option3'><p>Lil Dickie</p></div>",
		option4: "<div class='option' id = 'option4'><p>Eminem</p></div>",
		correctAnswerDisplay: "<p>Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, record producer, and actor from Detroit, Michigan. In addition to his solo career, he is a member of D12, and with Royce da 5'9 is one half of the hip-hop duo Bad Meets Evil. Eminem is the best-selling artist of the 2000s in the United States. Rolling Stone ranked him 83rd on its list of 100 Greatest Artists of All Time, calling him the King of Hip Hop. Including his work with D12 and Bad Meets Evil, Eminem has had ten number-one albums on the Billboard 200. He has sold more than 172 million albums, making him one of the world's best-selling artists</p>",
		correctAnswer: 4, 
		image: "assets/images/eminem.jpg"

	},
	question9 = {
		question: "<h2>What drug is commonly associated with and mentioned in Southern Rap lyrics?</h2>",
		option1: "<div class='option' id = 'option1'><p>Weed</p></div>",
		option2: "<div class='option' id = 'option2'><p>Cocaine</p></div>",
		option3: "<div class='option' id = 'option3'><p>Lean</p></div>",
		option4: "<div class='option' id = 'option4'><p>Heroin</p></div>",
		correctAnswerDisplay: "<p>Purple drank or lean is a slang term for a concoction which includes a prescription-strength cough syrup used in a manner inconsistent with its labeling, thus making it a recreational drug. The mixture became popular in the hip hop community in the southern United States, originating in Houston. The prescription-strength cough syrup used in purple drank contains codeine and promethazine (not to be confused with dextromethorphan; DXM). The cough syrup, used in doses much higher than medically recommended, is typically mixed with ingredients such as the soft drinks Sprite or Mountain Dew and optionally, a Jolly Rancher hard fruit candy thrown in for extra sweetness. The purplish hue of purple drank comes from dyes in the cough syrup. The amount of cough syrup used can exceed up to 25 times the recommended dose. The concoction is typically consumed out of Styrofoam cups.</p>",
		correctAnswer: 3,
		image: "assets/images/lean.jpg"
	},
	question10 = {
		question: "<h2>Who released an album titled Flockaveli?</h2>",
		option1: "<div class='option' id = 'option1'><p>Chief Keef</p></div>",
		option2: "<div class='option' id = 'option2'><p>Dr Dre</p></div>",
		option3: "<div class='option' id = 'option3'><p>Waka Flocka Flame</p></div>",
		option4: "<div class='option' id = 'option4'><p>Gucci Mane</p></div>",
		correctAnswerDisplay: "<p>Flockaveli is the 2010 debut studio album by American rapper Waka Flocka Flame. Its title was taken after the Italian political theorist Machiavelli, and inspired by American rapper Tupac Shakur, whose final stage name and pseudonym before his death was Makaveli. The album was recorded at Next Level Studios in Houston, Nightbird Studios in Los Angeles, and S-Line Ent. in Atlanta. Released by Asylum Records on October 5, 2010, Flockaveli received generally positive reviews from critics, who complimented its musical intensity, brazen lyrics, and gangsta rap ethos. It debuted at number six on the Billboard 200, with first-week sales of 37,000 copies, and, as of August 15, 2011, has sold 285,000 copies in the United States.</p>",
		correctAnswer: 3,
		image: "assets/images/flocka.jpg"
	}
]
//Variable that tracks which question number we are on. 
var questionNumber = 0;

//Variable to track which open has been chosen by the user.  
var optionChosen = 0; 

//Variable to track the number of correct answers you provided.
var correct = 0; 

//Variable to track the number of incorrect answers you provided.
var incorrect = 0; 

//Variable to set number counter to 5 seconds.
var startAt = 15;

//Variable that displays the time remaining on screen. 
var number = startAt;

//Variable to indicate whether or not we are on a win/loss screen
var winLossIndicator = false; 

//Variable to account for correct sound.
var yay = new Audio("assets/sounds/yay.mp3");
yay.volume = 0.3; 

//Variable to account for incorrect/time out sound. 
var boo = new Audio("assets/sounds/fail.mp3");
boo.volume = 0.3; 
//Variable to declare theme
var millionaire = new Audio("assets/sounds/millionaire.mp3");

//Function to loop theme
function playMusic(millionaire){
	millionaire.addEventListener('ended', function(){
	this.currentTime = 0; 
	this.play();
}, false);
millionaire.play(); 
}


//When Start button is clicked, run the questionGen function.
	$('.start').on("click", function(){
		questionGen(questionNumber)
		playMusic(millionaire);
	});

//All possible on click actions. Is there a way to clean this up??
	$('.jumbotron').on("click", '#option1', function(){
		optionChosen = 1; 
		changeColors(optionChosen);
	});
	$('.jumbotron').on("click", '#option2', function(){
		optionChosen = 2; 
		changeColors(optionChosen);
	});
	$('.jumbotron').on("click", '#option3', function(){
		optionChosen = 3; 
		changeColors(optionChosen);
	});
	$('.jumbotron').on("click", '#option4', function(){
		optionChosen = 4;
		changeColors(optionChosen);
	});
	$('.jumbotron').on("click", "#next", function(){
		nextQuestion(questionNumber);
	})
	$('.jumbotron').on("click", "#reset", function(){
		questionNumber = 0;
		optionChosen = 0; 
		correct = 0; 
		incorrect = 0; 
		questionGen(questionNumber);
	})

//Code to confirm whether or not the answer was correct. 
$('.jumbotron').on('click', '#final', function(){
	if(optionChosen != 0){
		stop();
	}
	
	finalAnswer(optionChosen, questionNumber)
});


//FUNCTION DECLARATIONS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Generates a question based on the number in questionNumber. This questionNumber variable is used to track which question we are on as we work through the questions array. 
function questionGen(questionNumber){
	$('.jumbotron').empty();
	$('.jumbotron').append((questions[questionNumber]).question);
	$('.jumbotron').append((questions[questionNumber]).option1);
	$('.jumbotron').append((questions[questionNumber]).option2);
	$('.jumbotron').append((questions[questionNumber]).option3);
	$('.jumbotron').append((questions[questionNumber]).option4);
	$('.jumbotron').append("<br><div class = 'text-center'><button class = 'btn btn-success' id = 'final'>Final Answer?</button></div>"); 
	$('.jumbotron').append("<br><div class = timer></div>")
	winLossIndicator = false; 
	displayNumber();
	runTimer();
}

//Checks whether or not the answer that was chosen is in fact the correct answer, then push the proper screen out to the DOM. 
function finalAnswer(option, questionNo){
	 if(option == 0){
	 }
	 else if(option == questions[questionNo].correctAnswer){
	 	//Go to correct answer screen
	 	$('.jumbotron').empty();
	 	$('.jumbotron').html("<h2 id = 'correct'>Correct!</h2><img src = '"+questions[questionNo].image+"' class = 'pic-screen'><p>"+questions[questionNo].correctAnswerDisplay+"</p>");
	 	$('.jumbotron').append("<div class = 'timer text-center'><p>Next Question Available In: 15</p></div>");
	 	yay.play();
	 	questionNumber++;
	 	optionChosen = 0;  
	 	correct++;
	 	winLossIndicator = true; 
	 	runTimer();
	 }
	 else if(option == 5){
	 	$('.jumbotron').empty();
	 	$('.jumbotron').html("<h2 id = 'error'>Out of time!</h2><img src = '"+questions[questionNo].image+"' class = 'pic-screen'><p>"+questions[questionNo].correctAnswerDisplay+"</p>");
	 	$('.jumbotron').append("<div class = 'timer text-center'><p>Next Question Available In: 15</p></div>");
	 	boo.play();
	 	questionNumber++;
	 	optionChosen = 0;
	 	incorrect++;
	 	winLossIndicator = true; 
	 	runTimer();
	 }
	 else{
	 	$('.jumbotron').empty();
	 	$('.jumbotron').html("<h2 id = 'error'>Wrong!</h2><img src = '"+questions[questionNo].image+"' class = 'pic-screen'><p>"+questions[questionNo].correctAnswerDisplay+"</p>");
	 	$('.jumbotron').append("<div class = 'timer text-center'><p>Next Question Available In: 15</p></div>");
	 	boo.play();
	 	questionNumber++;
	 	optionChosen = 0;
	 	incorrect++;
	 	winLossIndicator = true; 
	 	runTimer();
	 }
}

//After reviewing the winning screen information, this moves us forward to the next question. 
function nextQuestion(questionNumber){
	if(questionNumber < questions.length){
		$('.jumbotron').empty();
		questionGen(questionNumber);
		winLossIndicator = false; 
	}
	else{
		$('.jumbotron').empty();
		$('.jumbotron').append("<div class = 'end'><p>Congratulations! You got "+correct+" right and "+incorrect+" wrong!</p></div>");
		$('.jumbotron').append("<div class = 'end'><p>Would you like to play again?</p></div>");
		$('.jumbotron').append("<div class = 'text-center'><button class = 'btn btn-success' id ='reset'>New Game</button></div>");
	}

}

//Pushes the number to the screen to show the user where they are at in the timer. 
function displayNumber(){
	if(winLossIndicator == false){
		$('.timer').html('<p>Time Remaining: '+number+'</p>');
	}
	else if(winLossIndicator == true){
		$('.timer').html('<p>Next Question Available In: '+number+'</p>');
	}
}

//Begins the timer and is called each time that a new quetsion is generated. 
function runTimer(){
	counter = setInterval(decrement, 1000);
}

//Decrements the number on screen based on runTimer's settings. This is what is used to show the user the countdown.
function decrement(){
	displayNumber();
	number--;
	console.log(number);
	displayNumber();
	if(number == 0 && winLossIndicator == false){
		stop();
		option = 5; 
		finalAnswer(option, questionNumber);
	}
	else if(number == 0 && winLossIndicator == true){
		stop();
		$('.timer').html("<button class = 'btn btn-success' id = 'next'>Next Question</button>"); 
	}
}

//Stops and clears the timer to get ready for the next question. 5 is being used as an option to show that an option was not chosen. Since wek now there are only 4 options per question, five will only show if the timer runs out
function stop(){
	clearInterval(counter);
	number = startAt; 
}

//Function to check which answer was chosen and then change the background of that option AND ONLY that option to green. 
function changeColors(option){
	for(var i = 1; i <= 4; i++){
		console.log('#option'+i);
		if(option == i){
			$('#option'+i).css('background-color', 'rgba(35, 255, 46, 0.54)');
		}
		else{
			$('#option'+i).css('background-color', 'rgba(0, 0, 0, 0)');
		}
	}
}
});