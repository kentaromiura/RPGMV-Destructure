# RPGMV-Destructure
Splits RPGMaker MV files in single files

========================================

How to use this:
================

just place the any rpg maker MV exported folder inside this project and run ./execute

How does this work
==================
It uses Reshape to gather any files starting with rpg_ and it tries to split them in a sane manner
An output folder will be created containing multiple files so that it's easier to read/grep

What's next?
============

It would be possible (but not in my high pri right now) to generate a commonjs folder
so that the original could be replaced, as I believe nw supports requires,
even if it doesn't it's easy enough to use browserify/wrapup/webpack to regenerate a browser ready output.
