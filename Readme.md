# Preview
![UI](./Images/UI.png)

# Installation
This new version of the Multitool does not have to be in a specific place.

NOTE: If you have used any standalone tools that are outdated, such as "Backpack-Customizer" or old Multitools (if your tool has the "Backpack Testpatch" you should be fine), you may want to consider
	  either reverting these patches with these tools, or redownload the games exe via steam (only BL2) to avoid possible issues.

# Usage
First - Once you've opened up the tool, expand "Setup Filepaths" at the top.
Now click on "Select Path" and choose either your "Borderlands2.exe" or "BorderlandsPreSequel.exe", depending on which button you clicked.

Once you've setup the path(s) the icon(s) should no longer be grayscaled.

You can now click on the games icon you want to patch.

Select your desired changes and hit the "Apply" button in the top-right-corner.
That should be everything!


# FAQ:
Q: What is the Spacetrigger?

A: The default is 39. This means, once you buy the last backpack SDU, and therefore reaching 39 backpackslots, that's the point where you'll have the chosen Max Slots instead.
   Meaning - if you choose 24 as a Spacetrigger, you'll get your chosen Max Slots once your purchased SDUs would get you 24 slots. Then 24 will be the point where you'll have your chosen slots at.
   Note: Lowering the Spacetrigger from 39 will most likely increase your Slots --TEMPORARILY-- when purchasing another backpack SDU. So these extra-slots will be gone after reopening the game.

Q: What is the Array-Limit?

A: This is usually not needed. However, people that come across this limit now have an automatic way of patching. 
   Example here: https://github.com/c0dycode/BL2ModStuff/tree/master/Hexediting#removing-the-100-element-limit

Q: My Paths are not saving, what should I do?

A: Go to "%localappdata%\BorderlandsHexMultitool" and delete the subfolders, then try again!
   If that also doesn't solve your problem, try running the tool as administrator. Should that also not work, please contact me!

Q: BabyRage ?

A: BabyRage indeed BabyRage


# Changelog:
## v1.10
- Fixed an issue with enable/disable of the weapon sanity check bypass, caused by the changes made in v1.9

## v1.9
- Changed a bit of code, that should improve the speed of reading and writing all the needed data

## v1.8
- Fixed showing the status of the Sanity Check Bypasses and Array-Limit
- Added a small messagebox to inform the user that the tool is doing work

## v1.7
- Fixed the Array-Limit Patch-detection

## v1.6
- Added the option to decide whether or not you want to apply the basic Hexediting (to use UCP for example) during startup.

## v1.5
- Added the Sanity Check Bypass for Items to both games. A quick test kept the weapons in my inventory and game ran fine so far. Please test! :)

## v1.4
- Added Tooltips to "Enable" in "Console and Set Command", "Spacetrigger" in "Backpack" and "Array-Limit"
- Added the possibility to set "Custom" ConsoleKeys. To activate, rightclick the Combobox where "F6" and "Tilde" are listed and check "Custom". 
  The Combobox will turn into a textbox, where you'll type in your own Key. You can still type in F6 or Tilde ofc.
- By adding the "custom" ConsoleKeys, I saw that setting ConsoleKeys was most likely not working for TPS. Sorry about that. It's fixed now :)

## v1.3
- Recompiled this version with .NET Framework 4.5 instead of 4.6.1

## v1.2
- Fixed an issue with trying to Load the Patching-UI when Path(s) have been set up for the first time.
- Added checks for all Patches, so unchanged values are not being patched again
- Added a MessageBox after applying the patch(es) - since you guys love that so much :P
- Added this Readme

# Credits:
- TechnoJackers: Sanity Check Patterns
- Shadowevil1996: Patterns that are needed to patch the console commands and a key-location that made the Levelpatching possible

# Used NuGet Packages/Assemblies:
- Caliburn.Mirco
- Costura.Fody
- Extended.Wpf.Toolkit
- Fody
- Ini.Net

# Support
If you enjoy my work and would like to support me, feel free to do so here :)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CRVHLK9MURS9Q)