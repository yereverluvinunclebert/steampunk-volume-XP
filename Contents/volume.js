//===========================================================================
// Steampunk Volume widget  1.0.2
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patience from Harry Whitfield
//
//===========================================================================var mainWindowwidthDefault = mainWindow.width;
var Scale = Number(preferences.maxWidthPref.value) / 100;
var oldVol = system.volume;
var oldMute = system.mute;
var perc=0;
//resizing variables
var mainWindowwidthDefault = mainWindow.width;
var mainWindowheightDefault = mainWindow.height;

var cableWheelSethoffsetDefault = cableWheelSet.hoffset;
var cableWheelSetvoffsetDefault = cableWheelSet.voffset;
var cableWheelSetwidthDefault = cableWheelSet.width;
var cableWheelSetheightDefault = cableWheelSet.height;

var cablehoffsetDefault = cable.hoffset;
var cablevoffsetDefault = cable.voffset;
var cablewidthDefault = cable.width;
var cableheightDefault = cable.height;

var pipeshoffsetDefault = pipes.hoffset;
var pipesvoffsetDefault = pipes.voffset;
var pipeswidthDefault = pipes.width;
var pipesheightDefault = pipes.height;

var bellhoffsetDefault = bell.hoffset;
var bellvoffsetDefault = bell.voffset;
var bellwidthDefault = bell.width;
var bellheightDefault = bell.height;

var indicatorRedhoffsetDefault = indicatorRed.hoffset;
var indicatorRedvoffsetDefault = indicatorRed.voffset;
var indicatorRedwidthDefault = indicatorRed.width;
var indicatorRedheightDefault = indicatorRed.height;

var speakerhoffsetDefault = speaker.hoffset;
var speakervoffsetDefault = speaker.voffset;
var speakerwidthDefault = speaker.width;
var speakerheightDefault = speaker.height;

var barhoffsetDefault = bar.hoffset;
var barvoffsetDefault = bar.voffset;
var barwidthDefault = bar.width;
var barheightDefault = bar.height;

var sliderSethoffsetDefault = sliderSet.hoffset;
var sliderSetvoffsetDefault = sliderSet.voffset;
var sliderSetwidthDefault = sliderSet.width;
var sliderSetheightDefault = sliderSet.height;

var buzzer = "Resources/buzzer.mp3";
var zzzz = "Resources/zzzz.mp3";
var tingingSound = "Resources/ting.mp3";
var currIcon = "Resources/volume-dock.png";

//===========================================
// this function runs on startup
//===========================================
function startup() {
    mainScreen();                     //check the widget is on-screen
    resize();                         // resize if required
    startVolume();                    // check the start volume levels
    setmenu();                        // build the menu
    settooltip();                     // build the tooltips
    buildVitality(currIcon, perc);    // build the dock vitality
}
//=====================
//End function
//=====================


//===========================================
// Function to slide the size slider
//===========================================
function sizeSliderDrag() {
    var rightmost,
        leftmost,
        sliderwidth,
        currpos;
    sliderSet.hOffset = system.event.hOffset - (35 * Scale);
    rightmost = bar.hOffset + bar.width - (100 * Scale); //leftmost limit
    leftmost = bar.hOffset + (25 * Scale); // rightmost limit
    if (sliderSet.hOffset >= rightmost) { //568
        sliderSet.hOffset = rightmost;
    }
    if (sliderSet.hOffset <= leftmost) { //262
        sliderSet.hOffset = leftmost;
    }
    cable.hOffset = sliderSet.hOffset + (72 * Scale);
    cable.width = (cableWheelSet.hOffset - (28 * Scale)) - (sliderSet.hOffset);
    sliderwidth = rightmost - leftmost;
    currpos = sliderSet.hOffset - leftmost;
    perc = parseInt((currpos / sliderwidth) * 100);
    if (perc < 0) {
        perc = 0;
    }
    //log ("system.volume in % = " + perc);
    if (preferences.soundpref.value === "enable") {
                play(zzzz, false);
    }
    system.volume = perc * 0.16;
    //log ("system.volume = " + system.volume);
}
//=====================
//End function
//=====================


//===========================================
// Function to determine what happens when the mouse is pressed on the size slider
//===========================================
function sizeSliderMouseDown() {
    //      log("Running function sizeSliderMouseDown");
    clicked = true;
    //      log("Leaving function sizeSliderMouseDown " +clicked);
}
//=====================
//End function
//=====================

//===========================================
// Function to determine what happens when the mouse is lifted from the size slider
//===========================================
function sizeSliderMouseUp() {
    if (clicked === true) {
        clicked = false;
        sliderSet.onMouseMove = null;
    }
    //log("Running function sizeSliderMouseUp clicked is now "+ clicked);
}
//=====================
//End function
//=====================

//=========================================================
// Function to determine the system sound levels at startup
//=========================================================
function startVolume() {
        log("running start volume");
	if ( system.mute == 1 )
	{
             indicatorRed.src = "Resources/indicatorRed.png";
        }else{
             indicatorRed.src = "Resources/indicatorGreen.png"
	}

        sliderSet.hOffset = (60  + (system.volume*6.25)) * Scale;
        cable.hOffset = sliderSet.hOffset + (72 * Scale);
        cable.width = (cableWheelSet.hOffset - (28 * Scale)) - (sliderSet.hOffset);
        perc = parseInt(system.volume *6.25);
}
//=====================
//End function
//=====================

//======================================================================
// Function to check the volume level set by other tools, run by a timer
//======================================================================
function checkVolume() {
  if (oldMute != system.mute) {
	if ( system.mute == 1 )
	{
             indicatorRed.src = "Resources/indicatorRed.png";
        }else{
             indicatorRed.src = "Resources/indicatorGreen.png"
	}
	oldMute = system.mute;
        buildVitality(currIcon, perc);    // build the dock vitality
 }
 if (oldVol != system.volume) {
	if ( sliderSet.hOffset != 17 + (system.volume) ) {

		sliderSet.hOffset = (60  + (system.volume*6.25)) * Scale;
                cable.hOffset = sliderSet.hOffset + (72 * Scale);
                cable.width = (cableWheelSet.hOffset - (28 * Scale)) - (sliderSet.hOffset);
	}
	oldVol = system.volume;
        buildVitality(currIcon, perc);    // build the dock vitality
 }
}
//=====================
//End function
//=====================

//=========================================================
// Function to update the mute after the buzzer has played
//=========================================================
function updateMute() {
        system.mute = 1;
        muteTimer.ticking =false;
}
//=====================
//End function
//=====================

//======================================================================================
