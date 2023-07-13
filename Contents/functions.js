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
    mainWindow.onContextMenu = function() {
        var items = [];
        items[1] = new MenuItem();
        items[1].title = "Online Help";
        items[1].onSelect = function() {
            widgethelp();
        };
        items[2] = new MenuItem();
        items[2].title = "Donate with Paypal";
        items[2].onSelect = function() {
            donate();
        };
        items[3] = new MenuItem();
        items[3].title = "Donate with Amazon";
        items[3].onSelect = function() {
            amazon();
        };
        items[4] = new MenuItem();
        items[4].title = "Vote on Rocketdock";
        items[4].onSelect = function() {
            rocketdock();
        };
        items[5] = new MenuItem();
        items[5].title = "";
        items[5].onSelect = function() {
            nullfunction();
        };
        items[6] = new MenuItem();
        items[6].title = "See More Steampunk Widgets";
        items[6].onSelect = function() {
            otherwidgets();
        };
        items[7] = new MenuItem();
        items[7].title = "Download Latest Version";
        items[7].onSelect = function() {
            update();
        };
        items[11] = new MenuItem();
        items[11].title = "Contact Support";
        items[11].onSelect = function() {
            contact();
        };
        mainWindow.contextMenuItems = items;
    };
}
//=====================
//End function
//=====================
//===========================================
// this function opens the online help file
//===========================================
function widgethelp() {
    var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/instructions-for-the-steampunk-volume-widget.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens other widgets URL
//===========================================
function otherwidgets() {
    var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/steampunk-widgets.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the URL for paypal
//===========================================
function donate() {
    var answer = alert("Help support the creation of more widgets like this, send us a beer! This button opens a browser window and connects to the Paypal donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        //openURL("https://www.paypal.com/uk/cgi-bin/webscr?cmd=_flow&SESSION=CHFojKaws7BH7Nnavk7M3I8M369MmoGfUxkSu_lfOygjH_Qm9e2ZDao7Fs4&dispatch=5885d80a13c0db1f8e263663d3faee8d14f86393d55a810282b64afed84968ec");
        openURL("http://lightquick.co.uk/donate-a-beer.html?Itemid=269");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens my Amazon URL wishlist
//===========================================
function amazon() {
    var answer = alert("Help support the creation of more widgets like this. Buy me a small item on my Amazon wishlist! This button opens a browser window and connects to my Amazon wish list page). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.amazon.co.uk/gp/registry/registry.html?ie=UTF8&id=A3OBFB6ZN4F7&type=wishlist");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the rocketdock URL
//===========================================
function rocketdock() {

    var answer = alert("Log in and vote for the widget on Rocketdock. This button opens a browser window and connects to the Rocketdock page where you can give the widget a 5 star rating... Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://rocketdock.com/addon/icons/45428");
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
        openURL("http://lightquick.co.uk/downloads/steampunk-volume-widget.html?Itemid=264");
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
        openURL("http://lightquick.co.uk/contact.html?Itemid=3");
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

//======================================================================================
// Function to perform commands
//======================================================================================
function performCommand() {
    if ( preferences.imageCmdPref.value == "" )
    {
        var answer = alert("This widget has not been assigned a double-click function yet - You need to open the preferences and set a function for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
        if (answer === 1) {
                   showWidgetPreferences();
        }
    }
    if (preferences.soundpref.value === "enable") {
        play(tingingSound, false);
    }

    if (system.platform === "windows") {
        runCommandInBg(taskcommand, "running task");
    }
    if (system.platform === "macintosh") {
        filesystem.open(taskcommand);
    }
}
//=====================
//End function
//=====================