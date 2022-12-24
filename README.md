# Setting Up
Setting up this bot isn't hard. But there are few things that you should remember.
First of all, the version of discord.js that should be installed is v12, currently master branch **(not stable)**.
Also, this bot requires the following modules, installable by npm:
  - discord.js(v12)
  - node-opus or opusscript
  - node-lame; remember that node-lame requires installing LAME, see in the "Lame" paragraph
  - hjson
Other modules are included in package.json but not required, and you can install them if you want.  
  
I recommend using Node v10.2.1(because that's the version that I used to test). But it should work too on newer versions, like Node v.11.15.0 or v12.4.0.
I don't know tho on older Node versions.

# Lame installation
As node-lame's documentation says, you can install Lame in different ways per OS.
#### Install on Debian
```$ sudo apt-get install lame```

#### Install on MacOS with brew
```$ brew install lame```

#### Install on Windows with choco
```$ choco install lame```

#### Install on Windows without choco
1. Go to the [official Lame page](https://lame.buanzo.org/#lamewindl) and download the .EXE or .ZIP file.
2. Navigate to the directory Lame was installed in (most commonly C:\Program Files (x86)\Lame For Audacity).
3. Add the directory to your `PATH` Environment Variable.

# Usage
**Default bot prefix: `v!`(not editable for now).**

**Bot voice message length limit: 15 minutes.**

**To use this bot, you must have direct messages enabled in the server you've added it. This bot uses a lot direct messages.**

**Also, to fully use this bot, give him administrator permissions.**

## How to use the bot

### Using the bot - first way(recommended)
In the channel where you want to send your voice message, use the command `v!voicemessage`.\
This command will create a voice channel in the very first position of the channel list.\
When you'll join this voice channel, after a second, the bot will start recording your voice.\
When you'll leave it, then, the bot will stop recording automatically and send the voice message in the channel where you used the command.\
This way is better than the second because it's easier, more orthodox, faster and more mobile-friendly.

### Using the bot - second way(if you don't like that the bot creates new channels)
Join a voice channel, use the command `v!record`, the bot will join the voice channel too. \
Do what the bot says and start talking when he says you can.\
When you've finished, stop talking, use the command `v!stop` in the text channel you want, and he'll send your voice message there.

## Commands

#### v!help
Lists commands and talks about the bot, in DM.
#### v!voicemessage
This command basically is the core of the bot.\
When you use it, the bot creates a voice channel in the first position of the channel list, and, when you join that voice channel, the bot will join too.\
Then, you can start talking. The bot will record everything you say.\
When you leave the channel, the bot will send your recorded voice message in the channel where you used this command.
#### v!record
Using this command when in a voice channel, basically, makes the bot join it to hear your voice and start recording it.\
Use this command in the channel where you want to send your voice message, because it'll be sent there.\
It will automatically tell you when to start talking, so follow the instructions in the chat sent by the bot.\
When you've finished recording, you can use `v!stop`.\
If you leave the voice channel mid-recording, the bot will leave the voice channel too.
#### v!stop
Just stops recording your voice, if you've started recording with `v!record`.\
Only the one who started recording, can stop recording.

#### If bot is stuck: v!stuck
Only for emergency cases.\
Please, don't abuse this command, because if you do, your server will be banned from the bot, and you won't never be able to invite it anymore.\
This command basically should unstuck bot from weird situations or uncaught bugs, like when the bot says he's recording when he isn't.\
When this command is used, bot leaves his voice channel, removes his custom-made voice channels and should then unstuck.
