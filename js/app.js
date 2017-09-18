var info = "Paste any text here and click the SPEAK button below to convert the text in to speech.";

var speakHello = function(){
    //  responsiveVoice.speak(info, "UK English Male", {volume: 1});  // volume
    //  responsiveVoice.speak(info, "UK English Male", {rate: 1.5});  // speed
    //  responsiveVoice.speak(info, "UK English Male", {pitch: 0.9}); //pitch
    // 	responsiveVoice.speak(info);        
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
