# Installation
This new version of the Multitool does not have to be in a specific place.

# Usage
First - Once you've opened up the tool, expand "Setup Filepaths" at the top.
Now click on "Select Path" and choose either your "Borderlands2.exe" or "BorderlandsPreSequel.exe", depending on which button you clicked.

Once you've setup the path(s) the icon(s) should no longer be grayscaled.

You can now click on the games icon you want to patch.

Select your desired changes and hit the "Apply" button in the top-right-corner.
That should be everything!


FAQ:
Q: What is the Spacetrigger?

A: The default is 39. This means, once you buy the last backpack SDU, and therefore reaching 39 backpackslots, that's the point where you'll have the chosen Max Slots instead.
   Meaning - if you choose 24 as a Spacetrigger, you'll get your chosen Max Slots once your purchased SDUs would get you 24 slots. Then 24 will be the point where you'll have your chosen slots at.
   Note: Lowering the Spacetrigger from 39 will most likely increase your Slots --TEMPORARILY-- when purchasing another backpack SDU. So these extra-slots will be gone after reopening the game.

Q: What is the Array-Limit?

A: This is usually not needed. However, people that come across this limit now have an automatic way of patching. 
   Example here: https://github.com/c0dycode/BL2ModStuff/tree/master/Hexediting#removing-the-100-element-limit

Q: Why is there no Sanity Check Bypass for Items yet?

A: I haven't found a way to make it patchable yet. Patching them, makes the game no longer bootable. If you want/need this, use the Cheat Engine Table to use this bypass.

Q: BabyRage ?

A: BabyRage indeed BabyRage


Changelog:
# v1.3
- Recompiled this version with .NET Framework 4.5 instead of 4.6.1

# v1.2
- Fixed an issue with trying to Load the Patching-UI when Path(s) have been set up for the first time.
- Added checks for all Patches, so unchanged values are not being patched again
- Added a MessageBox after applying the patch(es) - since you guys love that so much :P
- Added this Readme