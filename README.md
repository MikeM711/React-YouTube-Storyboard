# React-YouTube-Storyboard

**Work in progress**

A React app that will take a YouTube video and create a storyboard out of it, using screenshots and captions

## What it solves
Instead of watching a whole entire YouTube video to get some information, we can quickly gather video information using screenshots and the transcripts provided by YouTube.

## What it does

The application does the following:
1. Downloads the YouTube video
2. Takes the downloaded YouTube video and splits it into images at each second
3. Gets the caption text and caption time from the YouTube video
4. Creates a storyboard using the caption info and the split images

## Future Ideas

1. A Universal picture size "switch" which can:
    * a) Dictate the size of the screenshot
    * b) Dictate the time between new storyboards (default: no less than 5 seconds)
    * c) Dictate the storyboard display: (ie: 1 col, 2 cols, 3 cols, etc.)
        * Another idea: Have a full horizontal display
2. Every single screenshot (every video second) will be shown inside the application
    * Where the subtitle begins and ends will have very large screenshots
    * The intermittent time will have very small screenshots that a user can click on to make bigger if they wish
3. Have the full transcript at the very bottom (or use collapsible component)
4. Have all screenshots at the very bottom (or use collapsible component)
    * All small and of the same size
5. Have storyboard pictures side-by-side if user browser allows it?
    * This can also be a "switch" option
6. Show total video time and also the time at each subtitle line