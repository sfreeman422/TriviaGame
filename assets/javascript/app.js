$(document).ready(function(){
//Questions array that holds all of the question objects. 
var questions = [
	question1 = {
		question: "<h4>What is Notorious B.I.G's full name?</h4>",
		option1: "<div class='option' id = 'option1'>Sean Combs</div>",
		option2: "<div class='option' id = 'option2'>Christopher Wallace</div>",
		option3: "<div class='option' id = 'option3'>Jeffrey Williams</div>",
		option4: "<div class='option' id = 'option4'>Marshall Mathers</div>",
		correctAnswerDisplay: "<p>Christopher Wallace, better known by his stage names The Notorious B.I.G, Biggie, or Biggie Smalls, was an American rapper. He is consistently ranked as one of the greatest and most influential rappers of all time. Wallace was raised in the Brooklyn borough of New York City. When he released his debut album Ready to Die in 1994, he became a central figure in the East Coast hip hop scene and increased New York's visibility in the genre at a time when West Coast hip hop was dominant in the mainstream. The following year, Wallace led his childhood friends to chart success through his protégé group, Junior M.A.F.I.A. While recording his second album, Wallace was heavily involved in the growing East Coast–West Coast hip hop feud. On March 9, 1997, Wallace was killed by an unknown assailant in a drive-by shooting in Los Angeles.</p>",
		correctAnswer: 2,
		image: "../images/biggie.jpg"
	},
	question2 = {
		question: "<h4>Who were the original 9 members of the Wu Tang Clan?</h4>",
		option1: "<div class='option' id = 'option1'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, U-God, Method Man</div>",
		option2: "<div class='option' id = 'option2'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, Cappadonna, Method Man</div>",
		option3: "<div class='option' id = 'option3'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, U-God, Raekwon da Chef, Cappadonna, Method Man</div>",
		option4: "<div class='option' id = 'option4'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Kill, Raekwon da Chef, Sonny Cheeba, Method Man</div>",
		correctAnswerDisplay: "<p>The Wu-Tang Clan is an American hip hop group from New York City, originally composed of East Coast rappers RZA, GZA, Method Man, Raekwon, Ghostface Killah, Inspectah Deck, U-God, Masta Killa, and Ol' Dirty Bastard. The group was formed in and is associated with the New York City borough of Staten Island. The Wu-Tang Clan has released seven gold and platinum studio albums with worldwide sales of more than 40 million albums, including members' solo projects, since 1992. Its debut album, Enter the Wu-Tang (36 Chambers), is considered to be one of the greatest albums in hip-hop history and it is said to have been groundbreaking for hip-hop and one of the most important albums of the hip-hop golden age</p>",
		correctAnswer: 1,
		image: "../images/wutangclan.jpg"
	},
	question3 = {
		question: "<h4>What sub-genre of rap do rappers Young Thug, Rich Homie Quan and Future fall under?</h4>",
		option1: "<div class='option' id = 'option1'>Mumble Rap</div>",
		option2: "<div class='option' id = 'option2'>Party Rap</div>",
		option3: "<div class='option' id = 'option3'>Trap Rap</div>",
		option4: "<div class='option' id = 'option4'>R&B</div>",
		correctAnswerDisplay: "<p>Mumble rap is a style of rapping in which the rappers are hard to understand. They focus on emotion and melody moreso than lyrical content and have been criticized as a bastardizaiton of the rap genre as a whole.</p>",
		correctAnswer: 1,
		image: "../images/thugga.jpg"
	},
	question4 = {
		question: "<h4>What does each letter stand for in KRS-ONE's name?</h4>",
		option1: "<div class='option' id = 'option1'>Krishna's Regarded Son 1</div>",
		option2: "<div class='option' id = 'option2'>Krips Run Supreme Over Nearly Everyone</div>",
		option3: "<div class='option' id = 'option3'>Knowledge Reigns Supreme Over Nearly Everyone</div>",
		option4: "<div class='option' id = 'option4'>Krazy Righteous Super One</div>",
		correctAnswerDisplay: "<p>KRS-One AKA Lawrence Parker was born in The Bronx, New York in 1965. Parker left home at 16 to become an MC, coming to live at a homeless shelter in the South Bronx where he was dubbed 'Krisna' by residents because of his interest in the Hare Krishna spirituality of some of the antipoverty workers. By the time he met youth counselor Scott Sterling, he was also writing graffiti as KRS-One (Knowledge Reigns Supreme Over Nearly Everyone). Together he and Sterling, a.k.a. DJ Scott La Rock eventually created Boogie Down Productions, releasing their debut album, Criminal Minded, in 1987.</p>",
		correctAnswer: 3,
		image: "../images/KRS.jpg"
	},
	question5 = {
		question: "<h4>What does C.R.E.A.M stand for?</h4>",
		option1: "<div class='option' id = 'option1'>Crips Run Everything And More</div>",
		option2: "<div class='option' id = 'option2'>Cash Rules Everything Around Me</div>",
		option3: "<div class='option' id = 'option3'>Criminal Rights East And Maple</div>",
		option4: "<div class='option' id = 'option4'>Cash Robbery Extortion And Money</div>",
		correctAnswerDisplay: "<p>'Cash Rules Everything Around Me! CREAM! Get the money, dolla dolla bill ya'll'- Wu Tang Clan</p>",
		correctAnswer: 2, 
		image: "../images/cream.jpg",
		song: "../sounds/cream.mp3"
	},
	question6 = {
		question: "<h4>What two famous rappers starred in the stoner classic 'How High'?</h4>",
		option1: "<div class='option' id = 'option1'>Jay-z & Ice Cube</div>",
		option2: "<div class='option' id = 'option2'>Method Man and Red Man</div>",
		option3: "<div class='option' id = 'option3'>Biggie Smalls and Tupac</div>",
		option4: "<div class='option' id = 'option4'>Snoop Dogg & Ice Cube</div>",
		correctAnswerDisplay: "<p>Method Man and Redman starred in the stoner classic 'How High', a movie about smoking your friends ashes to work your way into an Ivy League school.</p>",
		correctAnswer: 2, 
		image: "../images/howhigh.jpg"
	},
	question7 = {
		question: "<h4>Which rap group was the movie Straight Outta Compton about?</h4>",
		option1: "<div class='option' id = 'option1'>Wu Tang Clan</div>",
		option2: "<div class='option' id = 'option2'>Young Money</div>",
		option3: "<div class='option' id = 'option3'>A Tribe Called Quest</div>",
		option4: "<div class='option' id = 'option4'>NWA</div>",
		correctAnswerDisplay: "<p>Straight Outta Compton is a 2015 American biographical film directed by F. Gary Gray, depicting the career of gangsta rap group N.W.A. Titled after N.W.A's 1988 debut studio album, the film focuses on members Eazy-E, Ice Cube, and Dr. Dre. Members of N.W.A were involved in making the film: Ice Cube and Dr. Dre were among its producers, as was Eazy-E's widow, Tomica Woods-Wright, while MC Ren and DJ Yella served as creative consultants. Ice Cube is portrayed by his son, O'Shea Jackson, Jr., with Corey Hawkins as Dr. Dre and Jason Mitchell as Eazy-E. Paul Giamatti also stars as N.W.A's manager Jerry Heller.</p>",
		correctAnswer: 4, 
		image: "../images/nwa.jpg"
	},
	question8 = {
		question: "<h4>Who is Marshall Mathers?</h4>",
		option1: "<div class='option' id = 'option1'>Young Thug</div>",
		option2: "<div class='option' id = 'option2'>Lil Wayne</div>",
		option3: "<div class='option' id = 'option3'>Lil Dickie</div>",
		option4: "<div class='option' id = 'option4'>Eminem</div>",
		correctAnswerDisplay: "<p>Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, record producer, and actor from Detroit, Michigan. In addition to his solo career, he is a member of D12, and with Royce da 5'9 is one half of the hip-hop duo Bad Meets Evil. Eminem is the best-selling artist of the 2000s in the United States. Rolling Stone ranked him 83rd on its list of 100 Greatest Artists of All Time, calling him the King of Hip Hop. Including his work with D12 and Bad Meets Evil, Eminem has had ten number-one albums on the Billboard 200. He has sold more than 172 million albums, making him one of the world's best-selling artists</p>",
		correctAnswer: 4, 
		image: "../images/eminem.jpg"	
	},
	question9 = {
		question: "<h4>What drug is commonly associated with and mentioned in Southern Rap lyrics?</h4>",
		option1: "<div class='option' id = 'option1'>Weed</div>",
		option2: "<div class='option' id = 'option2'>Cocaine</div>",
		option3: "<div class='option' id = 'option3'>Lean</div>",
		option4: "<div class='option' id = 'option4'>Heroin</div>",
		correctAnswerDisplay: "<p>Purple drank or lean is a slang term for a concoction which includes a prescription-strength cough syrup used in a manner inconsistent with its labeling, thus making it a recreational drug. The mixture became popular in the hip hop community in the southern United States, originating in Houston. The prescription-strength cough syrup used in purple drank contains codeine and promethazine (not to be confused with dextromethorphan; DXM). The cough syrup, used in doses much higher than medically recommended, is typically mixed with ingredients such as the soft drinks Sprite or Mountain Dew and optionally, a Jolly Rancher hard fruit candy thrown in for extra sweetness. The purplish hue of purple drank comes from dyes in the cough syrup. The amount of cough syrup used can exceed up to 25 times the recommended dose. The concoction is typically consumed out of Styrofoam cups.</p>",
		correctAnswer: 3,
		image: "../images/lean.jpg"
	},
	question10 = {
		question: "<h4>Who released an album titled Flockaveli?</h4>",
		option1: "<div class='option' id = 'option1'>Chief Keef</div>",
		option2: "<div class='option' id = 'option2'>Dr Dre</div>",
		option3: "<div class='option' id = 'option3'>Waka Flocka Flame</div>",
		option4: "<div class='option' id = 'option4'>Gucci Mane</div>",
		correctAnswerDisplay: "<p>Flockaveli is the 2010 debut studio album by American rapper Waka Flocka Flame. Its title was taken after the Italian political theorist Machiavelli, and inspired by American rapper Tupac Shakur, whose final stage name and pseudonym before his death was Makaveli. The album was recorded at Next Level Studios in Houston, Nightbird Studios in Los Angeles, and S-Line Ent. in Atlanta. Released by Asylum Records on October 5, 2010, Flockaveli received generally positive reviews from critics, who complimented its musical intensity, brazen lyrics, and gangsta rap ethos. It debuted at number six on the Billboard 200, with first-week sales of 37,000 copies, and, as of August 15, 2011, has sold 285,000 copies in the United States.</p>",
		correctAnswer: 3,
		image: "../images/flocka.jpg"
	}
]
//Variable that tracks which question number we are on. 
var questionNumber = 0;

//Variable to track which open has been chosen by the user.  
var optionChosen = 0; 

//When Start button is clicked, run the questionGen function.
	$('.start').on("click", function(){
		questionGen(questionNumber)}
	);

//Code to take note of which option the user has chosen before they hit final answer.
	$('#option1').on("click", function(){
		optionChosen = 1; 
	});
	$('#option2').on("click", function(){
		optionChosen = 2; 
	});
	$('#option3').on("click", function(){
		optionChosen = 3; 
	});
	$('#option4').on("click", function(){
		optionChosen = 4; 
	});

//Code to confirm whether or not the answer was correct. 
$('#finalAnswer').on('click', function(){
	console.log("Final answer has been hit.")
	finalAnswer(optionChosen, questionNumber);
});



//FUNCTIONAL DECLARATIONS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Generates a question based on the number in questionNumber. This questionNumber variable is used to track which question we are on as we work through the questions array. 
function questionGen(questionNumber){
	$('.jumbotron').empty();
	$('.jumbotron').css('background-image', questions[questionNumber].image);
	$('.question').empty();
	$('.answerArea').empty();
	$('#questionZone').show();
	$('.question').html((questions[questionNumber]).question);
	$('.answerArea').append((questions[questionNumber]).option1);
	$('.answerArea').append((questions[questionNumber]).option2);
	$('.answerArea').append((questions[questionNumber]).option3);
	$('.answerArea').append((questions[questionNumber]).option4);
	$('.answerArea').append("<button class = 'btn btn-success' id = 'finalAnswer'>Final Answer?</button>"); 
}

//Checks whether or not the answer that was chosen is in fact the correct answer, then push the proper screen out to the DOM. 
function finalAnswer(option, questionNo){
	 if(option == 0){
	 	$('.error').html("<p id = 'errorMessage'>Please choose an answer!</p>");
	 }
	 else if(option == questions[questionNo].correctAnswer){
	 	//Go to correct answer screen
	 }
	 else{
	 	//Go to incorrect answer screen
	 }
	questionNumber++;
	console.log(questionNumber);
}
});