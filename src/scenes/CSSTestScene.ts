import Phaser from 'phaser';
import Panel from './Panel';
import FeedItem from './FeedItem';
import {Client} from "@heroiclabs/nakama-js";
import Tabs from './Tabs';

let clicksLeft = 10;
const fameLeft = 0;
const clickIncreaseRate = 0.003;
const fameIncreaseRate = 1;

export default class CSSTestScene extends Phaser.Scene
{

  constructor() {
    super('css-scene')
  }

  preload() {
    this.load.image('button1', 'assets/button.jpg');
    this.load.image('spark0', 'assets/sparkle1.png');
    this.load.audio('music-1', ['assets/yourethetop.mp3']);
    this.load.audio('ding', ['assets/ding.mp3']);
  }

  create() //to tackle - server code and setup for typescript!
  {
    var useSSL = false; // Enable if server is run with an SSL certificate.
    var client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);

    async function connectToServer(session)
    {
      var socket = client.createSocket();
      session = await socket.connect(session);
      console.info("Socket connected.");
    }

    async function authenticatePlayer(email, password)
    {
      const session = await client.authenticateEmail(email, password, true);

      console.log('session Created ' + session.created);
      console.log('session AuthToken ' + session.auth_token);
      console.log('session UserId ' + session.user_id);
      console.log('session Username ' + session.username);

      if(session.created === false)
      {
          console.log('account already exists');
      }
      else
      {
        localStorage.nakamaAuthToken = session.token;
        console.info("Authenticated successfully. User id:", session.user_id);

        //set up first time elements (client side not ideal)

        const objects = [{
          "collection": "collection",
          "key": "key1",
          "value": {"jsonKey": "jsonValue"}
        }, {
          "collection": "collection",
          "key": "key2",
          "value": {"jsonKey": "jsonVal"}
        }];
        const storageWriteAck = await client.writeStorageObjects(session, objects);
        console.info("Storage write was successful:", storageWriteAck);
      }

      const account = await client.getAccount(session);
      const user = account.user;
      console.info("User id '%o' and username '%o' and password '%o'.", user.id, user.username, user.password);

      connectToServer(session);

      const response = await client.rpc(session, "healthcheck", {});
      console.log(response.payload);
    }

    let { width, height } = this.sys.game.canvas
    console.log(width)
    console.log('css-demo-scene')

    const game = document.getElementsByTagName('canvas')[0]
    game.style.setProperty('position', 'absolute');
    //game.style.setProperty('pointer-events', 'none');

    const music = this.sound.add('music-1', {loop: true});
    const ding = this.sound.add('ding', {loop: false});
    music.setVolume(0.1);
    music.play();

    var emitter0 = this.add.particles('spark0').createEmitter({
        x: 400,
        y: 300,
        speed: { min: -800, max: 800 },
        angle: { min: 0, max: 360 },
        scale: { start: 0.2, end: 0 },
        blendMode: 'SCREEN',
        on: false,
        lifespan: 600,
        gravityY: 1800
    });

    this.input.on('pointerdown', function (pointer) {
      if(clicksLeft >= 1)
      {
        emitter0.setPosition(pointer.x, pointer.y);
        emitter0.on = true;
        emitter0.explode();
        ding.setVolume(0.05);
        ding.play();
        let element = document.elementsFromPoint(pointer.x, pointer.y)[1];
        console.log(element);
        element.click();
      }
    });

    // const button = document.createElement('div')
    // button.className = "button is-primary is-large"
    // button.innerText = "Click Me"

    // this.add.dom(400,300, PlayButton('Press here') as HTMLElement)
    // .addListener('click').once('click',() => {
    //   this.scene.start('hello-world')
    // })

    // document.addEventListener('DOMContentLoaded', () => {
    //   (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    //     const $notification = $delete.parentNode;
    //
    //     $delete.addEventListener('click', () => {
    //       $notification.parentNode.removeChild($notification);
    //     });
    //   });
    // });

    const thing = this.add.dom(width/2,0, Panel('Press here', 'Hall and Burty') as HTMLElement)

    //const img = this.add.image(900, 100, 'button1')


    //p[0].style.setProperty('value', val0);
    //thing.setOrigin(0.5, 0.5)
    // var style = thing.node.style;
    // style.width = 300 + 'px';
    // style.height = 300 + 'px';
    // thing.updateSize();

    //const close = thing.getChildByName('close')
    const newItem = thing.getChildByName('newFeedItem')
    const loginButton = thing.getChildByName('loginButton')
    const notification = thing.getChildByName('mainNotification')
    const emailField = thing.getChildByName('emailField')
    const passwordField = thing.getChildByName('passwordField')
    const teams = thing.node.querySelectorAll('#team');
    console.log("clicked couple" + teams.length);

    // CLOSE BUTTON
    // close.onclick = () => {
    //   console.log('close')
    //   thing.visible = false
    // }
    //
    // close.onmouseenter = () => { console.log('mouseenter_close')}
    // close.onmouseleave = () => { console.log('mouseleave_close')}

    // need to track in javascript the number of elements in the feed

    newItem.onclick = () => {
      console.log('new item')
      //const x = this.add.dom(0,0, FeedItem('TITLE', 'THE SHAPELY BODY') as HTMLElement)
      const b = document.getElementById('insertnewitems');
      const y = FeedItem('TITLE ' + b.childNodes.length, 'THE SHAPELY BODY') as HTMLElement;

      //b.appendChild(x.node);
      b.prepend(y);

      // const feedcount = b.childNodes.length;
      // console.log(feedcount);
      // //x.width = b.width;
      // x.setPosition(x.width/2, ((feedcount-1)*x.height) + x.height/2);
    }

    loginButton.onclick = () => {
      console.log(emailField.value + " " + passwordField.value);
      authenticatePlayer(emailField.value, passwordField.value);
    }

    //clicksLeft = 0;
    //fameLeft = 0;
    const clicksCounter = document.getElementById('clicksText');
    const fameCounter = document.getElementById('fameText');

    for(var i=0; i< teams.length; i++)
    {
      const el = teams[i]
      teams[i].onclick = () => {
        const progBar = el.previousSibling;
        if(clicksLeft>= 1)
        {
          if(progBar.value > 3)
          {
            console.log("clicked couple 1 " + clicksLeft);
            progBar.value += 5;
            if(clicksLeft<1)
            {
              clicksLeft = 0;
            }
            else
            {
              clicksLeft -= 1;
            }
          }
        }
      }
    }

    // <button name='press' class="button is-primary is-large">
    //   <span>{ text }</span>
    // </button>

    // PRESS BUTTON

    // const press = thing.getChildByName('press')
    // press.onclick = () => { console.log('press')}
    // press.onmouseenter = () => { console.log('mouseenter_press')}
    // press.onmouseleave = () => { console.log('mouseleave_press')}


    // const tabs = this.add.dom(400,400, Tabs() as HTMLElement)
    // var style = tabs.node.style
    // style.width = '400px'
    // tabs.updateSize()

    thing.setPosition(width/2, thing.height/2)

    this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) =>
    {
      console.log(gameSize)
      var width = gameSize.width;
      var height = gameSize.height;

      //this.cameras.resize(width, height);
      console.log(thing.height)
      thing.setPosition(width/2, thing.height/2)

    } );

  }

  // resize = (gameSize, baseSize, displaySize, resolution) =>
  // {
  //     var width = gameSize.width;
  //     var height = gameSize.height;
  //
  //     this.cameras.resize(width, height);
  //
  //     this.bg.setSize(width, height);
  //     this.logo.setPosition(width / 2, height / 2);
  // }

  update()
  {
    clicksLeft += clickIncreaseRate;
    var clicksLeftRounded = Math.floor(clicksLeft);

    const clicksCounter = document.getElementById('clicksText');
    const fameCounter = document.getElementById('fameText');
    clicksText.innerHTML = clicksLeftRounded.toString();
    fameText.innerHTML = fameLeft.toString();;

    var val0 = 0.03;
    var elements = document.getElementsByClassName('progress');

    for(var i=0; i< elements.length; i++)
    {
        elements[i].value -= val0;
        elements[i].value = Math.min(Math.max(elements[i].value, 3), 100);
        if(elements[i].value >= 50)
        {
          elements[i].className = 'progress is-success';
          elements[i].parentNode.childNodes[1].className = 'floater'
        }
        else if(elements[i].value < 50 && elements[i].value >= 25)
        {
          elements[i].className = 'progress is-warning';
          elements[i].parentNode.childNodes[1].className = 'pulse'
        }
        else if(elements[i].value < 25 && elements[i].value >= 4)
        {
          elements[i].className = 'progress is-danger';
          elements[i].parentNode.childNodes[1].className = 'heartbeat'
        }
        else if(elements[i].value <=3)
        {
          // if possible lose life! Go back to 50% health.

          elements[i].className = 'progress';
          elements[i].parentNode.childNodes[1].className = 'lessOpacity'
        }
        // clamp?
        // change the colour by changing the class
    }
  }
}
