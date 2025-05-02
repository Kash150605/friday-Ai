//element

const startBtn=document.querySelector("#start");
const stopBtn=document.querySelector("#stop");
const speakBtn=document.querySelector("#speak");


    

//speech recognition setup

const SpeechRecognition=
window.SpeechRecognition||window.webkitSpeechRecognition;


const recognition=new SpeechRecognition();

//sr start
recognition.onstart=function(){
    console.log("vr active");
};
//sr result
recognition.onresult=function(event){
    let current=event.resultIndex;
    let transcript=event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    console.log('my words:${transcript}');
    if(transcript.includes("hello friday")){
        readOut("hello sir");
    }
    if(transcript.includes("open youtube")){
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/");
    }
    if(transcript.includes("open google")){
        readOut("opening google sir");
        window.open("https://www.google.com/");
    }
    //google search
    if(transcript.includes("searchfor")){
    readOut("here's are the result");
    let input=transcript.split("");
    input.splice(0,11);
    input.pop();
    input=input.join("").split(" ").join("+");
    console.log(input);
    window.open('https://www.google.com/search?q=${input}');
}
    if(transcript.includes("open calculator")){
            readOut("opening calculator sir");
            window.open("https://www.calculator.com/");
          }
        if(transcript.includes("open whatsapp")){
            readOut("opening whatsapp sir");
            window.open("https://www.whatsapp.com/");
        }
        if(transcript.includes("open instagram")){
            readOut("opening instagram sir");
            window.open("https://www.instagram.com/");
        }
        if(transcript.includes("open telegram")){
            readOut("opening telegram sir");
            window.open("https://www.telegram.com/");
        }
       
};

//sr stop
recognition.onend=function(){
    console.log("vr deactive");
    
};

//sr continues
recognition.continuous=true;


startBtn.addEventListener("click",()=>{
recognition.start();
});
stopBtn.addEventListener("click",()=>{
    recognition.stop();
    });

    //friday speech
    function readOut(message){
        const speech=new SpeechSynthesisUtterance();
        //different voices
        //const allVoices=speechSynthesis.getVoices();
        speech.text=message;
        //speech.voice=allVoices[36];
        speech.volume=1;
        window.speechSynthesis.speak(speech);
        console.log("speaking out");
    }
    

    





