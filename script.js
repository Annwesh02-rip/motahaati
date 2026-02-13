function showScreen(id){
document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

let askMusic = document.getElementById("askMusic");
let loveMusic = document.getElementById("loveMusic");

function checkPass(){
let val = document.getElementById("passInput").value;

if(val === "091222"){
showScreen("proposalScreen");
askMusic.currentTime = 0;
askMusic.play().catch(()=>{});
}
else{
document.getElementById("error").innerText = "So you don't know when I became yours 😌";
}
}

// GIF change only on NO click
let gifStage = 1;
let proposalGif = document.getElementById("proposalGif");

let noBtn=document.getElementById("noBtn");
let yesBtn=document.getElementById("yesBtn");

let runawayMode=false;

noBtn.addEventListener("click", function(){

if(gifStage < 5){
gifStage++;
proposalGif.src = "assets/gifs/bubu"+gifStage+".gif";

// YES grows downward
yesBtn.style.transform="scale("+(1+gifStage*0.5)+")";
}

if(gifStage === 5){
runawayMode=true;
noBtn.innerText="You can't catch me anyway";
}
});

// Runaway mode
noBtn.addEventListener("mouseenter", function(){
if(runawayMode){
let maxX = window.innerWidth - noBtn.offsetWidth;
let maxY = window.innerHeight - noBtn.offsetHeight;
noBtn.style.position="fixed";
noBtn.style.left=Math.random()*maxX+"px";
noBtn.style.top=Math.random()*maxY+"px";
}
});

// YES
yesBtn.addEventListener("click", function(){

askMusic.pause();
loveMusic.currentTime = 0;
loveMusic.play().catch(()=>{});

showScreen("poemScreen");
startPoem();

setTimeout(()=>{
showScreen("galleryScreen");
startGallery();
},25000);

});

// POEM
function startPoem(){
let poem=`
You came quietly into my life,<br>
But stayed like you belonged.<br>
In chaos you became my calm,<br>
In silence you were my song.<br>
Through laughter and storms,<br>
Through every passing day,<br>
I found my home in your heart,<br>
And there I chose to stay.
`;
document.getElementById("poemText").innerHTML=poem;
}

// GALLERY
let photos=[
"assets/photos/photo1.jpg.jpg",
"assets/photos/photo2.jpg.jpg",
"assets/photos/photo3.jpg.jpg",
"assets/photos/photo4.jpg.jpg",
"assets/photos/photo5.jpg.jpg",
"assets/photos/photo6.jpg.webp",
"assets/photos/photo7.jpg.jpg",
"assets/photos/photo8.jpg.jpg"
];

let galleryImage=document.getElementById("galleryImage");
let letter=document.getElementById("finalLetter");

function startGallery(){

let index=0;
galleryImage.src=photos[index];

let slideInterval=setInterval(()=>{

index++;

if(index < photos.length){
galleryImage.src=photos[index];
}
else{
clearInterval(slideInterval);
fadeToLetter();
}

},5000);

}

// LETTER TRANSITION
function fadeToLetter(){

galleryImage.style.opacity="0";

setTimeout(()=>{

galleryImage.style.display="none";

// Show glass letter box
document.getElementById("finalLetter").style.opacity="1";

// Fill the letter
let letterText = `
Maybe love doesn’t always arrive with fireworks.<br>
Maybe sometimes… it just walks in quietly,<br>
sits beside you,<br>
and suddenly the world feels softer.<br><br>

You didn’t come into my life like a storm.<br>
You came like calm.<br>
Like the kind of peace I didn’t even know I was searching for.<br><br>

Somewhere between the random laughs,<br>
the unnecessary fights,<br>
the silly inside jokes,<br>
and the moments we didn’t even talk —<br>
you became my favourite part of everyday life.<br><br>

It’s strange, isn’t it?<br>
How someone who was once just a person,<br>
becomes the place you feel safest in.<br><br>

There are days I wish distance didn’t exist.<br>
Days I wish I could just reach out<br>
and pull you into a hug<br>
without needing time, plans, or a screen.<br><br>

Because sometimes,<br>
all I want<br>
is to be close enough<br>
to rest my forehead against yours<br>
and say nothing at all.<br><br>

But even from miles away,<br>
you still manage to make everything feel lighter.<br>
You still make bad days better,<br>
and good days unforgettable.<br><br>

And if loving someone means<br>
choosing them again and again,<br>
even on the quiet days,<br>
even on the difficult ones,<br>
then I choose you.<br><br>

Not just today.<br>
Not just when it’s easy.<br>
But always.<br><br>

Forever yours,<br>
Annwesh ❤️
`;

document.getElementById("letterText").innerHTML = letterText;

},2000);


// AFTER READING → SHOW PHOTO 9
setTimeout(()=>{

document.getElementById("finalLetter").style.opacity="0";

galleryImage.style.display="block";
galleryImage.src="assets/photos/photo9.jpg.jpg";
galleryImage.style.opacity="1";

startFinalZoom();

},32000);

}


// PHOTO 9 ZOOM
function startFinalZoom(){

// Make image full screen layer
galleryImage.style.position = "fixed";
galleryImage.style.top = "50%";
galleryImage.style.left = "50%";
galleryImage.style.transform = "translate(-50%, -50%) scale(0.3)";
galleryImage.style.zIndex = "20";
galleryImage.style.maxWidth = "none";
galleryImage.style.maxHeight = "none";

let scale = 0.3;

let zoomInterval = setInterval(()=>{

scale += 0.05;

galleryImage.style.transform =
"translate(-50%, -50%) scale("+scale+")";

if(scale >= 1){
clearInterval(zoomInterval);
}

},500);

}

