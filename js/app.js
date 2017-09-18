var info = "Paste any text here and click the SPEAK button below to convert the text in to speech.";
var nativeVoice = 1, voices, speechSpeed = 0.8;
var setSpeed = function(x) {
    var x = document.getElementById("select-speed").value;
    speechSpeed = x;
}
var setVoice = function() {
    voices = document.getElementById("select-voice");
    nativeVoice = voices.options[voices.selectedIndex].value;
    setSpeed();
    switch(nativeVoice){
        case "1":
            responsiveVoice.speak(info, "UK English Female",{rate: speechSpeed});
            break;
        case "2":
            responsiveVoice.speak(info, "UK English Male", {rate: speechSpeed});
            break;
        case "3":
            responsiveVoice.speak(info, "US English Female", {rate: speechSpeed});
            break;
        case "4":            
            responsiveVoice.speak(info, "US English Male", {rate: speechSpeed});
            break;
        case "5":
            responsiveVoice.speak(info, "Australian Female", {rate: speechSpeed});
            break;
        case "6":
            responsiveVoice.speak(info, "Dutch Female", {rate: speechSpeed});
            break;
        case "7":
            responsiveVoice.speak(info, "Hindi Female", {rate: speechSpeed});
            break;
        case "8":
            responsiveVoice.speak(info, "Japanese Female", {rate: speechSpeed});
            break;
        case "9":
            responsiveVoice.speak(info, "Korean Female", {rate: speechSpeed});
            break;
    }
}


var speakHello = function(){
        setVoice();      
};

var stopSpeech = function() {
    responsiveVoice.cancel();
}

var checkSupport = function() {
    if(responsiveVoice.voiceSupport()) {
        responsiveVoice.speak("Your browser supports Text To Speech conversion.");
    }
    else{
        alert("Sorry ! Your browser doesn't support Text To Speech conversion.");
    }    
}
