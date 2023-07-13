# steampunk-volume-XP
 
Steampunk Volume Control Yahoo Widget for XP ONLY, written in Javascript and XML 
for the Yahoo Widget (Konfabulator) Engine. Created for XP as well as the Apple 
Mac OSX prior to Catalina. 

![media-player-help](https://github.com/yereverluvinunclebert/steampunk-volume-XP/assets/2788342/c215f302-f580-4078-a446-001b87c7ad92)

Does NOT function on Windows Vista and above.

NOTE: There is an identical widget that works beautifully on Vista/Win7, 8, 10+, 
it is the Xwidget version here: LINK TO COME.

![volume](https://github.com/yereverluvinunclebert/steampunk-volume-XP/assets/2788342/4c635320-3219-4f95-aeba-98634e88f811)

This Steampunk Volume Control is an attractive and functional Yahoo widget for 
your XP desktop. It is a simple Volume Control for your XP desktop/laptop. 
Functional and gorgeous at the same time. This Widget is a moveable widget that 
you can move anywhere around the desktop as you require.

![Uploading volumePlaque.png…]()

The widget can be resized - Hover the cursor over the widget. Press the CTRL key 
and use your mousewheel up or down. The widget will resize dynamically.

You can control the volume level of your PC/Mac desktop by moving the slider or 
clicking on the mute button. Double-clicking on the widget will cause a 
personalised Windows/Mac application to fire up. The first time you run it there 
will be no assigned function and so it will state as such - then it will pop up 
the preferences so that you can enter the command of your choice. The widget 
takes command line-style commands for windows or Mac OS/X

All javascript widgets need an engine to function, in this case the widget uses 
the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
creates the widget according to the XML description and using the images you 
provide. 

Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/ 
	Adobe Photoshop CS ver 8.0 (2003)  https://www.adobe.com/uk/products/photoshop/free-trial-download.html  
	Yahoo Widgets SDK: engine (Konfabulator), runtime, debugger & documentation

Tested on :
  
	Windows XP SP3 32bit on Intel    
  
Dependencies:
 
 o A windows-alike o/s such as Windows XP or Apple Mac OSX prior to Catalina.    	
 
 o Installation of the yahoo widget SDK runtime engine  
 
	Yahoo widget engine for Windows - http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg
	Yahoo Widgets SDK: engine (Konfabulator), debugger & documentation

Running the widget using a javascript engine frees javascript from running only 
within the captivity of a browser, you will now be able to run these widgets on 
your Windows desktop as long as you have the correct widget engine installed.

 
Instructions for running Yahoo widgets on Windows
=================================================

1. Install yahoo widget SDK runtime engine
2. Download the gauge from this repo.
3. Unzip it
4. Double-click on the resulting .KON file and it will install and run

Instructions for running Yahoo widgets on Mac OS/X ONLY
========================================================

1. Install yahoo widget SDK runtime engine for Mac
2. Download the gauge from this repo.
3. Unzip it
4. For all all recent versions of Mac OS/X up to and including Mojave, edit the following 
file:

com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
for these lines: 
   
	<key>DockOpen</key>  
	<string>false</string>  

Change to false if it is true.

5. Double-click on the widgets .KON file and it will install and run

Wit these instructions you should be able to start Yahoo! Widgets and the 
menubar item should appear. Widgets can then be started from the menubar or by 
double-clicking on the KON file in the usual way.



LICENCE AGREEMENTS:

Copyright 2023 Dean Beedell

In addition to the GNU General Public Licence please be aware that you may use
any of my own imagery in your own creations but commercially only with my
permission. In all other non-commercial cases I require a credit to the
original artist using my name or one of my pseudonyms and a link to my site.
With regard to the commercial use of incorporated images, permission and a
licence would need to be obtained from the original owner and creator, ie. me.
