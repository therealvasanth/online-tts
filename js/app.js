var nativeVoice = 1, voices, speechSpeed = 0.8,info;

var setInput = function() {
    var a = document.getElementById("ttsInput").value;
    if(a !== "") {
        info = a;
    }
    else {
        info = "Yo... Whazzzup ??? Paste anything here, and press the speak button to convert text into speech !!!";
    }
}

var setSpeed = function(x) {
    var b = document.getElementById("select-speed").value;
    speechSpeed = b;
}

var startSpeech = function() {
    setInput();
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
//        case "7":
//          responsiveVoice.speak(info, "Hindi Female", {rate: speechSpeed});
//          break;
        case "8":
            responsiveVoice.speak(info, "Japanese Female", {rate: speechSpeed});
            break;
        case "9":
            responsiveVoice.speak(info, "Korean Female", {rate: speechSpeed});
            break;
    }
}

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

Mousetrap.bind('i', function() { 
    var x = document.getElementById("ttsInput");
    x.focus();
});

Mousetrap.bind(['command+enter', 'ctrl+enter'], function(e) {
    startSpeech();
});

Mousetrap.bind(['command+c', 'ctrl+c'], function(e) {
    stopSpeech();
});