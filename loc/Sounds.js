/***************************/
//@Author: Ryan Corradini
//@website: www.buyog.com
//@email: ryancorradini@yahoo.com
//@license: Free to use & modify, but please keep this credits message
/***************************/
dojo.provide("loc.Sounds");

/* (note: requires soundmanager2 to already be loaded) */
/*
dojo.declare("loc.Sounds", null, {
    constructor: function sounds_init(args){
        soundManager.url = '/code/sndmgr/swf/';
        soundManager.onload = this.init_sounds;
    },

    init_sounds: function init_sounds() {
        console.log("init_sounds (this:",this,")");
        
        this.title = soundManager.createSound({
          id: 'title',
          url: ('loc/res/snd/titleStart.mp3'),
          volume: 50,
          stream: true
        });
        this.title.load();

        this.bgmStart = soundManager.createSound({
          id: 'bgmStart',
          url: ('loc/res/snd/bgmStart.mp3'),
          volume: 50,
          stream: true,
          onfinish: loopBgm
        });

        this.bgm = soundManager.createSound({
          id: 'bgm',
          url: ('loc/res/snd/bgm.mp3'),
          volume: 50,
          stream: true,
          onfinish: loopBgm
        });

        this.dungeonBgm = soundManager.createSound({
          id: 'dungeonBgm',
          url: ('loc/res/snd/dungeonBgm.mp3'),
          volume: 50,
          stream: true,
          onfinish: loopDungeonBgm
        });

        this.gameover = soundManager.createSound({
          id: 'gameover',
          url: ('loc/res/snd/gameover.mp3'),
          volume: 50,
          stream: true,
          onfinish: loopGameover
        });

        this.item = soundManager.createSound({
          id: 'item',
          stream: false,
          url: ('loc/res/snd/item.mp3')
        });
        this.item.load();

        this.sword = soundManager.createSound({
          id: 'sword',
          stream: false,
          url: ('loc/res/snd/sword.mp3')
        });
        this.sword.load();

        this.swordshoot = soundManager.createSound({
          id: 'swordshoot',
          url: ('loc/res/snd/sword2.mp3')
        });

        this.heart = soundManager.createSound({
          id: 'heart',
          url: ('loc/res/snd/heart.mp3')
        });
        this.heart.load();

        this.hit = soundManager.createSound({
          id: 'hit',
          url: ('loc/res/snd/hit.mp3')
        });
        this.hit.load();

        this.kill = soundManager.createSound({
          id: 'kill',
          url: ('loc/res/snd/kill.mp3')
        });
        this.kill.load();

        this.die = soundManager.createSound({
          id: 'die',
          url: ('loc/res/snd/die.mp3'),
          volume: 50,
          stream: true
        });
        //this.die.load();

        this.hurt = soundManager.createSound({
          id: 'hurt',
          url: ('loc/res/snd/hurt.mp3')
        });
        this.hurt.load();

        this.rupee = soundManager.createSound({
          id: 'rupee',
          url: ('loc/res/snd/rupee.mp3')
        });
        this.rupee.load();

        this.special = soundManager.createSound({
          id: 'special',
          url: ('loc/res/snd/fairy.mp3')
        });
        this.special.load();

        this.arrow = soundManager.createSound({
          id: 'arrow',
          url: ('loc/res/snd/arrow.mp3')
        });
        //this.arrow.load();

        this.boomerang = soundManager.createSound({
          id: 'boomerang',
          url: ('loc/res/snd/boomer.mp3')
        });
        //this.boomerang.load();

        this.bombDrop = soundManager.createSound({
          id: 'bombDrop',
          url: ('loc/res/snd/bombDrop.mp3')
        });

        this.bombBoom = soundManager.createSound({
          id: 'bombBoom',
          url: ('loc/res/snd/bombBoom.mp3')
        });

        this.candle = soundManager.createSound({
          id: 'candle',
          url: ('loc/res/snd/candle.mp3')
        });

        this.wand = soundManager.createSound({
          id: 'wand',
          url: ('loc/res/snd/wand.mp3')
        });

        this.whistle = soundManager.createSound({
          id: 'whistle',
          url: ('loc/res/snd/flute.mp3'),
          onfinish: spawnWhirlwind
        });

        this.title.play();
    },

    loopTitle: function loopTitle() {
        this.title.play();
    },
    loopBgm: function loopBgm() {
        this.bgm.play();
    },
    loopDungeonBgm: function loopDungeonBgm() {
        this.dungeonBgm.play();
    },
    loopGameover: function loopGameover() {
        this.gameover.play();
    },
    whistleDone: function whistleDone() {
        dojo.publish("whistle.onSummonWind", []);
    }
});
*/

// setup sound manager
function init_sounds() {
    soundManager.url = '/code/sndmgr/swf/';
    soundManager.onload = function() {
      var snd = soundManager.createSound({
        id: 'title',
        url: ('loc/res/snd/titleStart.mp3'),
        volume: 50,
        stream: true
      });

      snd = soundManager.createSound({
        id: 'bgmStart',
        url: ('loc/res/snd/bgmStart.mp3'),
        volume: 50,
        stream: true,
        onfinish: loopBgm
      });

      snd = soundManager.createSound({
        id: 'bgm',
        url: ('loc/res/snd/bgm.mp3'),
        volume: 50,
        stream: true,
        onfinish: loopBgm
      });

      snd = soundManager.createSound({
        id: 'dungeonBgm',
        url: ('loc/res/snd/dungeonBgm.mp3'),
        volume: 50,
        stream: true,
        onfinish: loopDungeonBgm
      });

      snd = soundManager.createSound({
        id: 'gameover',
        url: ('loc/res/snd/gameover.mp3'),
        volume: 50,
        stream: true,
        onfinish: loopGameover
      });

      snd = soundManager.createSound({
        id: 'item',
        stream: false,
        url: ('loc/res/snd/item.mp3')
      });

      snd = soundManager.createSound({
        id: 'sword',
        stream: false,
        url: ('loc/res/snd/sword.mp3')
      });

      snd = soundManager.createSound({
        id: 'swordshoot',
        url: ('loc/res/snd/sword2.mp3')
      });

      snd = soundManager.createSound({
        id: 'heart',
        url: ('loc/res/snd/heart.mp3')
      });

      snd = soundManager.createSound({
        id: 'hit',
        url: ('loc/res/snd/hit.mp3')
      });

      snd = soundManager.createSound({
        id: 'kill',
        url: ('loc/res/snd/kill.mp3')
      });

      snd = soundManager.createSound({
        id: 'die',
        url: ('loc/res/snd/die.mp3'),
        volume: 50,
        stream: true
      });

      snd = soundManager.createSound({
        id: 'hurt',
        url: ('loc/res/snd/hurt.mp3')
      });

      snd = soundManager.createSound({
        id: 'rupee',
        url: ('loc/res/snd/rupee.mp3')
      });

      snd = soundManager.createSound({
        id: 'special',
        url: ('loc/res/snd/fairy.mp3')
      });

      snd = soundManager.createSound({
        id: 'arrow',
        url: ('loc/res/snd/arrow.mp3')
      });

      snd = soundManager.createSound({
        id: 'boomerang',
        url: ('loc/res/snd/boomer.mp3')
      });

      snd = soundManager.createSound({
        id: 'bombDrop',
        url: ('loc/res/snd/bombDrop.mp3')
      });

      snd = soundManager.createSound({
        id: 'bombBoom',
        url: ('loc/res/snd/bombBoom.mp3')
      });

      snd = soundManager.createSound({
        id: 'candle',
        url: ('loc/res/snd/candle.mp3')
      });

      snd = soundManager.createSound({
        id: 'wand',
        url: ('loc/res/snd/wand.mp3')
      });

      snd = soundManager.createSound({
        id: 'whistle',
        url: ('loc/res/snd/flute.mp3'),
        onfinish: onWhistleEnd
      });

      soundManager.play('title');
    }
}

function loopTitle() {
    soundManager.play('title');
}
function loopBgm() {
    soundManager.play('bgm');
}
function loopDungeonBgm() {
    soundManager.play('dungeonBgm');
}
function loopGameover() {
    soundManager.play('gameover');
}
function onWhistleEnd() {
    dojo.publish("whistle.onEnd", []);
}

// init now
init_sounds();
