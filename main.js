import './style.css'
import { Application, Sprite, Texture } from 'pixi.js';

const app = new Application();
document.querySelector('#app').appendChild(app.view);

const child = app.stage.addChild(new Sprite(Texture.WHITE));
child.position.set(app.screen.width / 2, app.screen.height / 2);
child.scale.set(10);
child.tint = 0xff0000;
child.anchor.set(0.5);
