var helloSpeaker = {};
var speakWord = "Hello";
function speak(name) {
   console.log(speakWord + "" + name);
	}
	helloSpeaker.speak = function speak(name) {
	console.log(speakWord + " " +name )
};
