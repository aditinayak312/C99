var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function begin(){
    document.getElementById("textBox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    speak();
}
 function speak(){
     var synth=window.speechSynthesis;
    speakData=document.getElementById("textBox").value;

    var UtterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(UtterThis);
    Webcam.attach("#camera");
 }
 Webcam.set({
     width:360,
     height:300,
     image_format:'png',
     png_quality:100
 });
 var cam=document.getElementById("camera");
