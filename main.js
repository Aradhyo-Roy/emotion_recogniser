Webcam.set({

width:350,

height:300,

image_format:"RAW",

RAW_quality:90

});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML="<img id='captured_image src='"+data_uri+">";

    });

}

console.log('ml5_version', ml5.version);

classifier=ml5.image_Classifier('https://teachablemachine.withgoogle.com/models/rkTlEcnvk/model.json',modelLoaded);

function modelLoaded(){

    console.log("Model_Loaded!");

}

function speak(){
    var synth=window.speechSynthesis;

    speak_data_1="The first prediction is"+prediction_1;

    speak_data_2="The second prediction is"+prediction_2;

    var Utter_this=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);

    synth.speak(Utter_this);

}