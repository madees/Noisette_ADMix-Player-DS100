# Noisette_ADMix-Player-DS100
Example file for Chataigne DS100 module, mapping of ADMix Player objects positions.

A simple routing of ADMix Player parameters to DS100.
The ADM-OSC module is input only, receiving OSC "/track/" x, y, z of sound objects.

ADMixplayer is a free ADM .BWF player, that can playback 64 channels of audio (usually connected to DS100 thru Dante Virtual Soundcard https://www.audinate.com/products/software/dante-virtual-soundcard ) and their encoded objects positions.

To know more and download ADMix https://forum.ircam.fr/projects/detail/admix/

## ADM
is for Audio Definition Model, an open source metadata model that allows the format and content of audio files to be reliably described. 
Among other parameters, it allows to specify locations of sound sources.
Learn more by reading the ITU standard : https://www.itu.int/dms_pubrec/itu-r/rec/bs/R-REC-BS.2076-2-201910-I!!PDF-E.pdf
ADM .BWF Files can be produced by ADmix tools, directly by DAW like Nuendo, or tools like Dolby Atmos Production Suite...

## How to setup
1. First install DS100 OSC module (in Chataigne/Files menu/Community module manager...). You can also download the module folder from https://github.com/madees/dbaudio-DS100-Chataigne-Module/archive/master.zip and manually unzip and copy the DS100 OSC module master folder in your ..Chataigne/modules/ folder).
2. Next, copy files in the same folder
3. Launch Chataigne, load the .noisette, and check DS100 IP settings
4. If you have a Warning, first check in ADM-OSC module that in its script container, the file is pointing to your location of ADM-OSC.js file (should do if you have copied it in the same folder as your .noisette).
5. Press play in ADMix, dont forget to activate "send" in ADMix GUI OSC container !

## More to come
For global support on how to use Chataigne and its modules, or this example project, please join us on Discord : https://discord.com/invite/ngnJ5z 

If you need any help, my contact on Discord is also "madees". Any feedback or ideas on improvements or features are welcome !