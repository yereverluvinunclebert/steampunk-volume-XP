//===========================================================================
// Steampunk Volume widget  1.0.2
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patience from Harry Whitfield
//
//===========================================================================var mainWindowwidthDefault = mainWindow.width;

//======================================================================================
// Function to move the main_window onto the main screen
//======================================================================================
function mainScreen() {
    // if the widget is off screen then move into the viewable window
    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 32) {
        mainWindow.vOffset = 32; // avoid Mac toolbar
    }
}
//=====================
//End function
//=====================
//===============================
// function to resize all layers
//===============================
function resize() {
    var Scale = Number(preferences.maxWidthPref.value) / 100;
    log("Resizing: preferences.maxWidthPref.value: " + preferences.maxWidthPref.value);
    log("Scale: " + Scale);
    mainWindow.width = mainWindowwidthDefault * Scale;
    mainWindow.height = mainWindowheightDefault * Scale;

    cableWheelSet.hoffset = cableWheelSethoffsetDefault * Scale;
    cableWheelSet.voffset = cableWheelSetvoffsetDefault * Scale;
    cableWheelSet.width = cableWheelSetwidthDefault * Scale;
    cableWheelSet.height = cableWheelSetheightDefault * Scale;

    cable.hoffset = cablehoffsetDefault * Scale;
    cable.voffset = cablevoffsetDefault * Scale;
    cable.width = cablewidthDefault * Scale;
    cable.height = cableheightDefault * Scale;

    pipes.hoffset = pipeshoffsetDefault * Scale;
    pipes.voffset = pipesvoffsetDefault * Scale;
    pipes.width = pipeswidthDefault * Scale;
    pipes.height = pipesheightDefault * Scale;

    bell.hoffset = bellhoffsetDefault * Scale;
    bell.voffset = bellvoffsetDefault * Scale;
    bell.width = bellwidthDefault * Scale;
    bell.height = bellheightDefault * Scale;

    indicatorRed.hoffset = indicatorRedhoffsetDefault * Scale;
    indicatorRed.voffset = indicatorRedvoffsetDefault * Scale;
    indicatorRed.width = indicatorRedwidthDefault * Scale;
    indicatorRed.height = indicatorRedheightDefault * Scale;

    speaker.hoffset = speakerhoffsetDefault * Scale;
    speaker.voffset = speakervoffsetDefault * Scale;
    speaker.width = speakerwidthDefault * Scale;
    speaker.height = speakerheightDefault * Scale;

    bar.hoffset = barhoffsetDefault * Scale;
    bar.voffset = barvoffsetDefault * Scale;
    bar.width = barwidthDefault * Scale;
    bar.height = barheightDefault * Scale;

    sliderSet.hoffset = sliderSethoffsetDefault * Scale;
    sliderSet.voffset = sliderSetvoffsetDefault * Scale;
    sliderSet.width = sliderSetwidthDefault * Scale;
    sliderSet.height = sliderSetheightDefault * Scale;
    mainWindow.visible = true;
}
//=====================
//End function
//=====================


//=========================================================================
// this function assigns translations to preference descriptions and titles
//=========================================================================
function setmenu() {
    mainWindow.onContextMenu = function () {
        var items = [], mItem, sItem;

        mItem = new MenuItem();
        mItem.title = "Donate a Coffee with Ko-Fi";
        mItem.onSelect = function () {
            donate();
        };
        items.push(mItem);
      
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function () {
            nullfunction();
        };
        items.push(mItem);

        mItem = new MenuItem();
        mItem.title = "Volume Control Help";
        mItem.onSelect = function () {
            tankHelpShow();
        };
        items.push(mItem);

        mItem = new MenuItem();
        mItem.title = "Online Help and other online options";
        items.push(mItem);

              sItem = new MenuItem();
              sItem.title = "See More Steampunk Widgets";
              sItem.onSelect = function () {
                  otherWidgets();
              };
              mItem.appendChild(sItem);

              sItem = new MenuItem();
              sItem.title = "Download Latest Version";
              sItem.onSelect = function () {
                  update();
              };
              mItem.appendChild(sItem);

              sItem = new MenuItem();
              sItem.title = "Contact Support";
              sItem.onSelect = function () {
                  widgetHelp();
              };
              mItem.appendChild(sItem);

              sItem = new MenuItem();
              sItem.title = "Chat about Steampunk Widgets on Facebook";
              sItem.onSelect = function() {
                  facebookChat();
              };
             mItem.appendChild(sItem);

        mItem = new MenuItem();
        mItem.title = "Display Licence Agreement...";
        mItem.onSelect = function () {
            displayLicence();
        };
        items.push(mItem);
      
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function() {
            nullfunction();
        };
        items.push(mItem);
      
              mItem = new MenuItem();
              mItem.title = "Reveal Widget in Windows Explorer";
              mItem.onSelect = function() {
                  findWidget();
              };
        items.push(mItem);

              mItem = new MenuItem();
              mItem.title = "";
              mItem.onSelect = function() {
                  nullfunction();
              };
        items.push(mItem);

              mItem = new MenuItem();
              mItem.title = "Reload Widget (F5)";
              mItem.onSelect = function () {
                  reloadWidget();
              };
              items.push(mItem);

            if (preferences.imageEditPref.value != "" && debugFlg === "1") {
                mItem = new MenuItem();
                mItem.title = "Edit Widget using " + preferences.imageEditPref.value ;
                mItem.onSelect = function () {
                    editWidget();
                };
                items.push(mItem);
             }

          mainWindow.contextMenuItems = items;
    };
}
//=====================
//End function
//=====================




//===========================================
// this function opens the browser at the contact URL
//===========================================
function facebookChat() {
    var answer = alert("Visiting the Facebook chat page - this button opens a browser window and connects to our Facebook chat page.). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.facebook.com/profile.php?id=100012278951649");
    }
}
//=====================
//End function
//=====================


//===========================================
// this function opens the online help file
//===========================================
function widgetHelp() {
    var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("https://www.facebook.com/profile.php?id=100012278951649");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens other widgets URL
//===========================================
function otherWidgets() {
    var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("https://www.deviantart.com/yereverluvinuncleber/gallery/59981269/yahoo-widgets");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the URL for paypal
//===========================================
function donate() {
    var answer = alert("Help support the creation of more widgets like this, send us a coffee! This button opens a browser window and connects to the Kofi donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

    if (answer === 1) {
        openURL("https://www.ko-fi.com/yereverluvinunclebert");
    }
}
//=====================
//End function
//=====================

//===========================================
// this function opens the download URL
//===========================================
function update() {
    var answer = alert("Download latest version of the widget - this button opens a browser window and connects to the widget download page where you can check and download the latest zipped .WIDGET file). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("https://github.com/yereverluvinunclebert/steampunk-volume-XP");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the browser at the contact URL
//===========================================
function contact() {
    var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.facebook.com/profile.php?id=100012278951649");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function allows a spacer in the menu
//===========================================
function nullfunction() {}
//=====================
//End function
//=====================

//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function changePrefs() {
    log("preferences Changed");
    savePreferences();				/// <<<<<<<<<<<<<
    sleep(1000);
    reloadWidget();
}
//=====================
//End function
//=====================
//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function settooltip() {
    if ( preferences.widgetTooltip.value != "" )
    {
        cableWheelSet.tooltip = preferences.widgetTooltip.value;
        cable.tooltip = preferences.widgetTooltip.value;
        pipes.tooltip = preferences.widgetTooltip.value;
        bell.tooltip = preferences.widgetTooltip.value;
        indicatorRed.tooltip = preferences.widgetTooltip.value;
        speaker.tooltip = preferences.widgetTooltip.value;
        bar.tooltip = preferences.widgetTooltip.value;
    } else {
        if ( preferences.imageCmdPref.value == "" ) {
            cableWheelSet.tooltip = "Double click on me to assign a double-click function to this widget";
            cable.tooltip = "Double click on me to assign a double-click function to this widget";
            pipes.tooltip = "Double click on me to assign a double-click function to this widget";
            bell.tooltip = "Double click on me to assign a double-click function to this widget";
            indicatorRed.tooltip = "Double click on me to assign a double-click function to this widget";
            speaker.tooltip = "Double click on me to assign a double-click function to this widget";
            bar.tooltip = "Double click on me to assign a double-click function to this widget";
        } else {
            cableWheelSet.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            cable.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            pipes.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            bell.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            indicatorRed.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            speaker.tooltip = "Current command is - " + preferences.imageCmdPref.value;
            bar.tooltip = "Current command is - " + preferences.imageCmdPref.value;
        }
    }
}
//=====================
//End function
//=====================






//===========================================
// this function edits the widget
//===========================================
function editWidget() {
    //var answer = alert("Editing the widget. Proceed?", "Open Editor", "No Thanks");
    //if (answer === 1) {
        //uses the contents of imageEditPref to initiate your default editor
        performCommand("menu");
    //}

}
//=====================
//End function
//=====================



//=====================
// function to carry out a command
//=====================
function performCommand(method) {
    var answer;

    if (preferences.soundPref.value === "enabled") {
        play(ting, false);
    }

    if (system.event.altKey) { // filesystem.open() call
        if (preferences.openFilePref.value === "") {
            answer = alert("This widget has not been assigned an alt+double-click function. You need to open the preferences and select a file to be opened. Do you wish to proceed?", "Open Preferences", "No Thanks");
            if (answer === 1) {
                showWidgetPreferences();
            }
            return;
        }
        filesystem.open(preferences.openFilePref.value);
    } else { // runCommandInBg() call
        if (preferences.imageCmdPref.value === "") {
            answer = alert("This widget has not been assigned a double-click function. You need to open the preferences and enter a run command for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
            if (answer === 1) {
                showWidgetPreferences();
            }
            return;
        }
        print("method "+method);
        if (method === "menu") {
            runCommandInBg(preferences.imageEditPref.value, "runningTask");        		
        } else {
            runCommandInBg(preferences.imageCmdPref.value, "runningTask");        	
        }
    }
}
//=====================
//End function
//=====================




//===============================================================
// this function defines the keyboard events captured
//===============================================================
mainWindow.onKeyDown = function(event) {
                if (system.event.keyCode==116) {
                    print("pressing "+system.event.keyCode);
                    reloadWidget();
                }
   };
//=====================
//End function
//=====================



//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {

 // temporary development version of the widget
    var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
    var alertString = "The widget folder is: \n";
    if (filesystem.itemExists(widgetFullPath)) {
        alertString += system.userWidgetsFolder + " \n\n";
        alertString += "The widget name is: \n";
        alertString += widgetName + ".\n ";

        alert(alertString, "Open the widget's folder?", "No Thanks");

        filesystem.reveal(widgetFullPath);
    } else {
        widgetFullPath = resolvePath(".");   
        filesystem.reveal(widgetFullPath);
        print("widgetFullPath " + widgetFullPath);
    }
}
//=====================
//End function
//=====================


function tankHelpShow() {
    helpWindow.visible = true;
    if (preferences.soundPref.value !== "disabled") {
        play(till, false);
    }
}

volumeHelp.onMouseDown = function () {
    helpWindow.visible = false;
    if (preferences.soundPref.value !== "disabled") {
        play(ting, false);
    }
};