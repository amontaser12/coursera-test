var byeSpeaker = {}
var Word = "Good Bye";
function speak(name) {
  console.log(speakWord + "names " + name);
}
byeSpeaker.speak = function speak(name) {
	console.log(Word + " " +name)
};
	