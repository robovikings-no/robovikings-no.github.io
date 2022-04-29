//Lukker dropdownen inni menyen når man laster inn siden for første gang 
document.getElementById('dropdownContent').style.display = 'none';

//Lukker/viser dropdownContent når man trykker på sponsorer
function dropdown() {
  var x = document.getElementById('dropdownContent'); //Lagrer dropdownContent i variablen x. Dette scriptet skjer når man trykker på knappen sponsorer
  if (window.getComputedStyle(x).display === "none"){ // Hvis dropdownmenyen ikke vises ender javascriptet css koden til display = block
    document.getElementById('dropdownContent').style.display = 'block';
} else { // Hvis dropdownmenyen allerede er vist blir den nå lukket
    document.getElementById('dropdownContent').style.display = 'none';
}
  document.getElementById("arrow").classList.toggle("fa-angle-double-up");
  // Bytter veien pilen peker
}

//Skjuler menyen på scroll ned, og viser den på scroll oppover
var prevScrollpos = window.pageYOffset; //Setter variablen prevScrollpos til avstanden fra toppen av siden
window.onscroll = function() { //Når brukeren scroller kjøres funksjonen
  var currentScrollPos = window.pageYOffset; //En ny variabel med den nåværende avstanden fra toppen av siden 
  if (prevScrollpos > currentScrollPos) { // Hvis den gamle scrolleposisjonen er større enn den nåværende har man scrollet opp, og menyen vises
    document.getElementById("top").style.top = "0";
} else { //Hvis ikke har man scrollet ned, og menyen skjules
    document.getElementById("top").style.top = "-120px";
}
  prevScrollpos = currentScrollPos; //Til slutt endres precScrollpos til den nåværende avstanden fra toppen av siden
}

//Lukker Dropdown når menyen lukkes i smalt vindu-modus, og når musen ikke lenger er over dropdown-contetet i bredvindu modus
function closeDropInMenu(){ 
  var x = document.getElementById('dropdownContent');  //Lagrer dropdownContent i variablen x. Dette skjer når menyen lukkes
  if (window.getComputedStyle(x).display === "block"){  //Hvis dropdown-menyen er åpen lukkes den og arrowen peker i motsatt retning
    document.getElementById("arrow").classList.toggle("fa-angle-double-up");
    document.getElementById('dropdownContent').style.display = 'none';
  }
}

var slideIndex = 0; //Viser hvilken slide som vises
showSlides(); //Kjører funksjonen

function showSlides() {
  var i; //Tellevariabel til bruk i for-loopen
  var slides = document.getElementsByClassName("slide"); //Variablen slides blir alle elementer som inneholder "slide".
   for (i = 0; i < slides.length; i++) { //Tellevariablen begynner på null, og så lenge den er mindre enn antall slides kjører loopen. Tellevariablen økes med en hver gang loopen kjører
    slides[i].style.display = "none"; //Skjuler sliden
  }
  slideIndex++; //Øker telleneren for slides med en
  if (slideIndex > slides.length) {slideIndex = 1} //Hvis tellevariablen blir høyere enn antall slides
  slides[slideIndex-1].style.display = "block"; //Viser slide
  setTimeout(showSlides, 5000); // Bytter bilde hvert 5 sekund
}

function vmTrophy(){
  var x = document.getElementById('vmTrophy');
  if (window.getComputedStyle(x).display === "none"){   
    document.getElementById('vmTrophy').style.display = 'block';
    document.getElementById("trophyTxt").innerHTML = "Trykk igjen for å skjule bildet for å skjule bildet. Under er et bilde av <b>nesten</b> alle prisene vi har vunnet (et eldre lagmedlem har en teknologipris fra Oslo-mesterskapet. Her er en oversikt;";
} else {
    document.getElementById('vmTrophy').style.display = 'none';
    document.getElementById("trophyTxt").innerHTML ="Trykk her for å se et nærbilde av pokalen vi vant i VM. Under er et bilde av <b>nesten</b> alle prisene vi har vunnet (et eldre lagmedlem har en teknologipris fra Oslo-mesterskapet. Her er en oversikt;";
}}