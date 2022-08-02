
const focusPage = (pageName) =>{
  return  `

  <div class="message-container">
    <p class="message">
      “I hated every minute of training, but I said, Don&#39;t quit. Suffer now and live the rest of your life as a champion.'” 
        -Muhammad Ali
        </p>
        <br />
          <p class="pg-name"> So ${pageName} can wait :) </p>
          <br />    
          <p class="message">
          "We don&#39;t want to tell our dreams. We want to show them."
        -Cristiano Ronaldo
    </p>
</div>
  <div class="night">
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
    <div class="shooting_star"></div>
  </div>

`;
}




const focusPageStyle = () => {
return `
<style>
body {
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
height: 100vh;
overflow: hidden;
display: flex;
font-family: &#39;
Anton&#39;
, sans-serif;
justify-content: center;
align-items: center;
}

.message-container{
  position:absolute;
  top: 20%;
}
.message{
  align-items:center;
  justify-content:center;
  text-align:center;
  font-size: 1.5em;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:grey;
}
.pg-name{
  color:white;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-size: 1em;
  font-weight:700;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


.night {
position: relative;
width: 100%;
height: 100%;
transform: rotateZ(45deg);
}
.shooting_star {
position: absolute;
left: 50%;
top: 50%;
height: 2px;
background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
border-radius: 999px;
filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
.shooting_star::before {
content: &#39;
&#39;
;
position: absolute;
top: calc(50% - 1px);
right: 0;
height: 2px;
background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
transform: translateX(50%) rotateZ(45deg);
border-radius: 100%;
animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
content: &#39;
&#39;
;
position: absolute;
top: calc(50% - 1px);
right: 0;
height: 2px;
background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
transform: translateX(50%) rotateZ(45deg);
border-radius: 100%;
animation: shining 3000ms ease-in-out infinite;
transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
top: calc(50% - 157px);
left: calc(50% - 243px);
animation-delay: 1288ms;
}
.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after {
animation-delay: 1288ms;
}
.shooting_star:nth-child(2) {
top: calc(50% - 87px);
left: calc(50% - 68px);
animation-delay: 5858ms;
}
.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after {
animation-delay: 5858ms;
}
.shooting_star:nth-child(3) {
top: calc(50% - -133px);
left: calc(50% - 145px);
animation-delay: 9691ms;
}
.shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after {
animation-delay: 9691ms;
}
.shooting_star:nth-child(4) {
top: calc(50% - -186px);
left: calc(50% - 153px);
animation-delay: 2847ms;
}
.shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after {
animation-delay: 2847ms;
}
.shooting_star:nth-child(5) {
top: calc(50% - -11px);
left: calc(50% - 239px);
animation-delay: 3348ms;
}
.shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after {
animation-delay: 3348ms;
}
.shooting_star:nth-child(6) {
top: calc(50% - 22px);
left: calc(50% - 142px);
animation-delay: 2675ms;
}
.shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after {
animation-delay: 2675ms;
}
.shooting_star:nth-child(7) {
top: calc(50% - -31px);
left: calc(50% - 239px);
animation-delay: 756ms;
}
.shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after {
animation-delay: 756ms;
}
.shooting_star:nth-child(8) {
top: calc(50% - 42px);
left: calc(50% - 155px);
animation-delay: 7730ms;
}
.shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after {
animation-delay: 7730ms;
}
.shooting_star:nth-child(9) {
top: calc(50% - 25px);
left: calc(50% - 55px);
animation-delay: 5570ms;
}
.shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after {
animation-delay: 5570ms;
}
.shooting_star:nth-child(10) {
top: calc(50% - 190px);
left: calc(50% - 264px);
animation-delay: 7048ms;
}
.shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after {
animation-delay: 7048ms;
}
.shooting_star:nth-child(11) {
top: calc(50% - -28px);
left: calc(50% - 107px);
animation-delay: 9509ms;
}
.shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after {
animation-delay: 9509ms;
}
.shooting_star:nth-child(12) {
top: calc(50% - 187px);
left: calc(50% - 214px);
animation-delay: 2231ms;
}
.shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after {
animation-delay: 2231ms;
}
.shooting_star:nth-child(13) {
top: calc(50% - 26px);
left: calc(50% - 144px);
animation-delay: 1203ms;
}
.shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after {
animation-delay: 1203ms;
}
.shooting_star:nth-child(14) {
top: calc(50% - 133px);
left: calc(50% - 101px);
animation-delay: 8077ms;
}
.shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after {
animation-delay: 8077ms;
}
.shooting_star:nth-child(15) {
top: calc(50% - -12px);
left: calc(50% - 291px);
animation-delay: 8847ms;
}
.shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after {
animation-delay: 8847ms;
}
.shooting_star:nth-child(16) {
top: calc(50% - 32px);
left: calc(50% - 195px);
animation-delay: 8447ms;
}
.shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after {
animation-delay: 8447ms;
}
.shooting_star:nth-child(17) {
top: calc(50% - -198px);
left: calc(50% - 17px);
animation-delay: 2752ms;
}
.shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after {
animation-delay: 2752ms;
}
.shooting_star:nth-child(18) {
top: calc(50% - -43px);
left: calc(50% - 54px);
animation-delay: 4627ms;
}
.shooting_star:nth-child(18)::before, .shooting_star:nth-child(18)::after {
animation-delay: 4627ms;
}
.shooting_star:nth-child(19) {
top: calc(50% - -52px);
left: calc(50% - 270px);
animation-delay: 1049ms;
}
.shooting_star:nth-child(19)::before, .shooting_star:nth-child(19)::after {
animation-delay: 1049ms;
}
.shooting_star:nth-child(20) {
top: calc(50% - 151px);
left: calc(50% - 92px);
animation-delay: 6962ms;
}
.shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after {
animation-delay: 6962ms;
}
@keyframes tail {
0% {
  width: 0;
}
30% {
  width: 100px;
}
100% {
  width: 0;
}
}
@keyframes shining {
0% {
  width: 0;
}
50% {
  width: 30px;
}
100% {
  width: 0;
}
}
@keyframes shooting {
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(300px);
}
}
@keyframes sky {
0% {
  transform: rotate(45deg);
}
100% {
  transform: rotate(405deg);
}
}    
</style>`;
}

switch(window.location.hostname)
{
case "www.youtube.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Youtube");
  break;

case "www.facebook.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Facebook");
  break;

case "twitter.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Twitter");
  break;

case "www.pinterest.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Pinterest");
  break;

case "www.instagram.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Instagram");
  break;

case "www.flickr.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Flickr");
  break;

case "www.snapchat.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Snapchat");
  break;

case "www.reddit.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Reddit");    
  break;

case "www.tiktok.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Tik Tok");
  break;  

case "www.netflix.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Netflix");
  break;  

case "www.primevideo.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Prime Video");
  break;  

case "www.disneyplus.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Disney +");
  break;

case "www.voot.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Voot");
  break;

case "www.zee5.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Zee5");
  break;

case "www.sonyliv.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("SonyLiv");
  break;

case "www.mxplayer.in":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("MX Player");
  break;

case "www.jiocinema.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Jio Cinema");     
  break;

case "erosnow.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("EROS Now");
  break;    
  
case "www.altbalaji.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Alt Balaji");
  break;

case "discord.com":
document.head.innerHTML= focusPageStyle();    
document.body.innerHTML= focusPage("Discord");
  break;
}

