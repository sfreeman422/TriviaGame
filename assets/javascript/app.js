$(document).ready(function(){
//Questions array that holds all of the question objects. 
var questions = [
	question1 = {
		question: "<h4>What is Notorious B.I.G's full name?</h4>",
		option1: "<div class='option' id = '1'>Sean Combs</div>",
		option2: "<div class='option' id = '2'>Christopher Wallace</div>",
		option3: "<div class='option' id = '3'>Jeffrey Williams</div>",
		option4: "<div class='option' id = '4'>Marshall Mathers</div>",
		correctAnswerDisplay: "<p>Christopher Wallace, better known by his stage names The Notorious B.I.G, Biggie, or Biggie Smalls, was an American rapper. He is consistently ranked as one of the greatest and most influential rappers of all time. Wallace was raised in the Brooklyn borough of New York City. When he released his debut album Ready to Die in 1994, he became a central figure in the East Coast hip hop scene and increased New York's visibility in the genre at a time when West Coast hip hop was dominant in the mainstream. The following year, Wallace led his childhood friends to chart success through his protégé group, Junior M.A.F.I.A. While recording his second album, Wallace was heavily involved in the growing East Coast–West Coast hip hop feud. On March 9, 1997, Wallace was killed by an unknown assailant in a drive-by shooting in Los Angeles.</p>",
		image: "../images/biggie.jpg"
	},
	question2 = {
		question: "<h4>Who were the original 9 members of the Wu Tang Clan?</h4>",
		option1: "<div class='option' id = '1'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, U-God, Method Man</div>",
		option2: "<div class='option' id = '2'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, Cappadonna, Method Man</div>",
		option3: "<div class='option' id = '3'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, U-God, Raekwon da Chef, Cappadonna, Method Man</div>",
		option4: "<div class='option' id = '4'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Kill, Raekwon da Chef, Sonny Cheeba, Method Man</div>",
		correctAnswerDisplay: "<p>The Wu-Tang Clan is an American hip hop group from New York City, originally composed of East Coast rappers RZA, GZA, Method Man, Raekwon, Ghostface Killah, Inspectah Deck, U-God, Masta Killa, and Ol' Dirty Bastard. The group was formed in and is associated with the New York City borough of Staten Island. The Wu-Tang Clan has released seven gold and platinum studio albums with worldwide sales of more than 40 million albums, including members' solo projects, since 1992. Its debut album, Enter the Wu-Tang (36 Chambers), is considered to be one of the greatest albums in hip-hop history and it is said to have been groundbreaking for hip-hop and one of the most important albums of the hip-hop golden age</p>",
		image: "../images/biggie.jpg"
	},
	question3 = {
		question: "<h4>Who were the original 9 members of the Wu Tang Clan?</h4>",
		option1: "<div class='option' id = '1'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, U-God, Method Man</div>",
		option2: "<div class='option' id = '2'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Killa, Raekwon da Chef, Cappadonna, Method Man</div>",
		option3: "<div class='option' id = '3'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, U-God, Raekwon da Chef, Cappadonna, Method Man</div>",
		option4: "<div class='option' id = '4'>The RZA, The GZA, Ol' Dirty Bastard, Inspectah Deck, Ghostface Killa, Masta Kill, Raekwon da Chef, Sonny Cheeba, Method Man</div>",
		correctAnswerDisplay: "<p>The Wu-Tang Clan is an American hip hop group from New York City, originally composed of East Coast rappers RZA, GZA, Method Man, Raekwon, Ghostface Killah, Inspectah Deck, U-God, Masta Killa, and Ol' Dirty Bastard. The group was formed in and is associated with the New York City borough of Staten Island. The Wu-Tang Clan has released seven gold and platinum studio albums with worldwide sales of more than 40 million albums, including members' solo projects, since 1992. Its debut album, Enter the Wu-Tang (36 Chambers), is considered to be one of the greatest albums in hip-hop history and it is said to have been groundbreaking for hip-hop and one of the most important albums of the hip-hop golden age</p>",
		image: "../images/biggie.jpg"
	}
]
//Variable that tracks which question number we are on. 
var questionNumber = 0;
//Variable to track which open has been chosen by the user.  
var optionChosen = 0; 
$('.start').on("click", function(){
	questionGen(questionNumber)}
	);
$('.finalAnswer').on('click', finalAnswer(optionChosen));


//Generates a question based on the number in questionNumber. This questionNumber variable is used to track which question we are on as we work through the questions array. 
function questionGen(questionNumber){
	$('.jumbotron').empty();
	$('.jumbotron').css('background-image', questions[questionNumber].image);
	$('.question').empty();
	$('.answerArea').empty();
	$('.question').html((questions[questionNumber]).question);
	$('.answerArea').append((questions[questionNumber]).option1);
	$('.answerArea').append((questions[questionNumber]).option2);
	$('.answerArea').append((questions[questionNumber]).option3);
	$('.answerArea').append((questions[questionNumber]).option4);
	$('.answerArea').append("<button class = 'btn btn-success finalAnswer'>Final Answer?</button>");
	questionNumber++; 
}

//Checks whether or not the answer that was chosen is in fact the correct answer, then push the proper screen out to the DOM. 
function finalAnswer(option){
	//Code if- answer == correct answer, show the correct answer screen. Else show the incorrect screen. 
}
});