var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Basurero = /** @class */ (function (_super) {
        __extends(Basurero, _super);
        function Basurero(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var basurero = game.add.sprite(x, y, frame);
            _this.setBasurero(basurero);
            _this.getBasurero().name = frame;
            game.physics.enable(_this.getBasurero(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getBasurero().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.centerX, game.world.top, 5);
            _this.setEmitterBasureros(emitter);
            _this.getEmitterBasureros().width = game.world.width;
            _this.getEmitterBasureros().makeParticles(frame, null, 1, true);
            _this.getEmitterBasureros().setYSpeed(100, 500);
            _this.getEmitterBasureros().setXSpeed(-5, 5);
            _this.getEmitterBasureros().start(false, 1600, 1, 0);
            return _this;
            //Para agregar el objeto al juego
            //game.add.existing(this);
        }
        Basurero.prototype.setEmitterBasureros = function (value) {
            this.emitterBasureros = value;
        };
        Basurero.prototype.getEmitterBasureros = function () {
            return this.emitterBasureros;
        };
        Basurero.prototype.setBasurero = function (value) {
            this.basurero = value;
        };
        Basurero.prototype.getBasurero = function () {
            return this.basurero;
        };
        return Basurero;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Basurero = Basurero;
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        function Bonus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bonus;
    }(Phaser.Sprite));
    JuegoCostanera.Bonus = Bonus;
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Personaje = /** @class */ (function (_super) {
        __extends(Personaje, _super);
        function Personaje(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.height = 200;
            _this.width = 100;
            game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.body.gravity.y = 500;
            _this.body.setSize(20, 32, 5, 16);
            _this.animations.add('left', [0, 1, 2, 3], 10, true);
            _this.animations.add('turn', [4], 20, true);
            _this.animations.add('right', [5, 6, 7, 8], 10, true);
            _this.setOrientacion('left');
            _this.setPuntos(0);
            _this.setVidas(3);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.getPuntos = function () {
            return this.puntos;
        };
        Personaje.prototype.setPuntos = function (value) {
            this.puntos = value;
        };
        Personaje.prototype.getVidas = function () {
            return this.vidas;
        };
        Personaje.prototype.setVidas = function (value) {
            this.vidas = value;
        };
        Personaje.prototype.setOrientacion = function (value) {
            this.orientacion = value;
        };
        Personaje.prototype.getOrientacion = function () {
            return this.orientacion;
        };
        return Personaje;
    }(Phaser.Sprite));
    JuegoCostanera.Personaje = Personaje;
})(JuegoCostanera || (JuegoCostanera = {}));
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Hamburguesa = /** @class */ (function (_super) {
        __extends(Hamburguesa, _super);
        function Hamburguesa(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var hamburguesa = game.add.sprite(x, y, frame);
            _this.setHamburguesa(hamburguesa);
            _this.getHamburguesa().name = frame;
            game.physics.enable(_this.getHamburguesa(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getHamburguesa().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.width, game.world.bottom - 100, 5);
            _this.setEmitterHamburguesas(emitter);
            _this.getEmitterHamburguesas().makeParticles(frame, null, 1, true);
            _this.getEmitterHamburguesas().setYSpeed(-100, 0);
            _this.getEmitterHamburguesas().setXSpeed(-1000, -500);
            _this.getEmitterHamburguesas().gravity.y = -100;
            _this.getEmitterHamburguesas().start(false, 1600, 1, 0);
            return _this;
            //Para agregar el objeto al juego
            //game.add.existing(this);
        }
        Hamburguesa.prototype.setEmitterHamburguesas = function (value) {
            this.emitterHamburguesas = value;
        };
        Hamburguesa.prototype.getEmitterHamburguesas = function () {
            return this.emitterHamburguesas;
        };
        Hamburguesa.prototype.setHamburguesa = function (value) {
            this.hamburguesa = value;
        };
        Hamburguesa.prototype.getHamburguesa = function () {
            return this.hamburguesa;
        };
        return Hamburguesa;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Hamburguesa = Hamburguesa;
})(JuegoCostanera || (JuegoCostanera = {}));
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var UnaVida = /** @class */ (function (_super) {
        __extends(UnaVida, _super);
        function UnaVida(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var unaVida = game.add.sprite(x, y, frame);
            _this.setUnaVida(unaVida);
            _this.getUnaVida().name = frame;
            game.physics.enable(_this.getUnaVida(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getUnaVida().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.centerX, game.world.top, 5);
            _this.setEmitterUnaVida(emitter);
            _this.getEmitterUnaVida().width = game.world.width;
            _this.getEmitterUnaVida().makeParticles(frame, null, 1, true);
            _this.getEmitterUnaVida().setYSpeed(100, 500);
            _this.getEmitterUnaVida().setXSpeed(-5, 5);
            _this.getEmitterUnaVida().start(false, 15000, 1, 0);
            return _this;
            //Para agregar el objeto al juego
            //game.add.existing(this);
        }
        UnaVida.prototype.setEmitterUnaVida = function (value) {
            this.emitterUnaVida = value;
        };
        UnaVida.prototype.getEmitterUnaVida = function () {
            return this.emitterUnaVida;
        };
        UnaVida.prototype.setUnaVida = function (value) {
            this.unaVida = value;
        };
        UnaVida.prototype.getUnaVida = function () {
            return this.unaVida;
        };
        return UnaVida;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.UnaVida = UnaVida;
})(JuegoCostanera || (JuegoCostanera = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Basurero.ts" />
/// <reference path="./Hamburguesa.ts" />
/// <reference path="./Bonus.ts" />
/// <reference path="./UnaVida.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Costanera = /** @class */ (function () {
        function Costanera(ancho, alto) {
            this.setGame(new Phaser.Game(ancho, alto, Phaser.CANVAS, 'content', {
                preload: this.preload,
                create: this.create,
                update: this.update,
                setGame: this.setGame,
                getGame: this.getGame,
                setAncho: this.setAncho,
                getAncho: this.getAncho,
                setAlto: this.setAlto,
                getAlto: this.getAlto,
                setPersonaje: this.setPersonaje,
                getPersonaje: this.getPersonaje,
                setBasurero: this.setBasurero,
                getBasurero: this.getBasurero,
                setUnaVida: this.setUnaVida,
                getUnaVida: this.getUnaVida,
                setHamburguesa: this.setHamburguesa,
                getHamburguesa: this.getHamburguesa,
                setCursores: this.setCursores,
                getCursores: this.getCursores,
                setSaltarBtn: this.setSaltarBtn,
                getSaltarBtn: this.getSaltarBtn,
                collisionBasurero: this.collisionBasurero,
                collisionUnaVida: this.collisionUnaVida,
                collisionHamburguesa: this.collisionHamburguesa,
                listener: this.listener,
                listenerJump: this.listenerJump,
                listenerLeft: this.listenerLeft,
                listenerRight: this.listenerRight,
                getTextoPuntos: this.getTextoPuntos,
                setTextoPuntos: this.setTextoPuntos,
                getTextoVidas: this.getTextoVidas,
                setTextoVidas: this.setTextoVidas,
                setJump: this.setJump,
                getJump: this.getJump,
                setLeft: this.setLeft,
                getLeft: this.getLeft,
                setRight: this.setRight,
                getRight: this.getRight,
                goFull: this.goFull
            }));
        }
        //--	------------------setters y getters --------------------------------------
        Costanera.prototype.setGame = function (game) {
            this.game = game;
        };
        Costanera.prototype.getGame = function () {
            return this.game;
        };
        Costanera.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Costanera.prototype.getAncho = function () {
            return this.ancho;
        };
        Costanera.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Costanera.prototype.getAlto = function () {
            return this.alto;
        };
        Costanera.prototype.setJump = function (value) {
            this.jump = value;
        };
        Costanera.prototype.getJump = function () {
            return this.jump;
        };
        Costanera.prototype.setLeft = function (value) {
            this.left = value;
        };
        Costanera.prototype.getLeft = function () {
            return this.left;
        };
        Costanera.prototype.setRight = function (value) {
            this.right = value;
        };
        Costanera.prototype.getRight = function () {
            return this.right;
        };
        Costanera.prototype.setPersonaje = function (personaje) {
            this.personaje = personaje;
        };
        Costanera.prototype.getPersonaje = function () {
            return this.personaje;
        };
        Costanera.prototype.setBasurero = function (value) {
            this.basurero = value;
        };
        Costanera.prototype.getBasurero = function () {
            return this.basurero;
        };
        Costanera.prototype.setUnaVida = function (value) {
            this.unaVida = value;
        };
        Costanera.prototype.getUnaVida = function () {
            return this.unaVida;
        };
        Costanera.prototype.setHamburguesa = function (value) {
            this.hamburguesa = value;
        };
        Costanera.prototype.getHamburguesa = function () {
            return this.hamburguesa;
        };
        Costanera.prototype.setCursores = function (cursores) {
            this.cursores = cursores;
        };
        Costanera.prototype.getCursores = function () {
            return this.cursores;
        };
        Costanera.prototype.setSaltarBtn = function (saltarBtn) {
            this.saltarBtn = saltarBtn;
        };
        Costanera.prototype.getSaltarBtn = function () {
            return this.saltarBtn;
        };
        Costanera.prototype.getTextoPuntos = function () {
            return this.textoPuntos;
        };
        Costanera.prototype.setTextoPuntos = function (value) {
            this.textoPuntos = value;
        };
        Costanera.prototype.getTextoVidas = function () {
            return this.textoVidas;
        };
        Costanera.prototype.setTextoVidas = function (value) {
            this.textoVidas = value;
        };
        Costanera.prototype.preload = function () {
            // add our logo image to the assets class under the
            // key 'logo'. We're also setting the background colour
            // so it's the same as the background colour in the image
            this.getGame().load.image('basurero', 'assets/basurero.png');
            this.getGame().load.image('unavida', 'assets/unavida.png');
            this.getGame().load.image('bonus', 'assets/hamburguesa.png');
            this.getGame().load.spritesheet('player', 'sprites/dude.png', 32, 48);
            this.getGame().load.image('costanera', "assets/costanera.jpg");
            this.getGame().load.image('gameover', "assets/gameover.jpg");
            //Botones
            this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png', 64, 64);
            this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png', 96, 64);
            this.getGame().load.spritesheet('buttonjump', 'assets/button-round.png', 96, 96);
        };
        Costanera.prototype.create = function () {
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
            if (!this.getGame().device.desktop) {
                this.getGame().input.onDown.add(this.goFull, this);
            }
            var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
            logo.x = 0;
            logo.y = 0;
            logo.height = this.getGame().height;
            logo.width = this.getGame().width;
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.getGame().time.desiredFps = 60;
            this.getGame().physics.arcade.gravity.y = 250;
            //Personaje
            var personaje = new JuegoCostanera.Personaje(this.getGame(), this.getGame().world.centerX, this.getGame().world.top, 'player');
            this.setPersonaje(personaje);
            //Basurero
            var basurero = new JuegoCostanera.Basurero(this.getGame(), 300, 50, 'basurero');
            this.setBasurero(basurero);
            this.getGame().physics.enable(this.getBasurero(), Phaser.Physics.ARCADE);
            //Vida
            var unaVida = new JuegoCostanera.UnaVida(this.getGame(), 300, 50, 'unavida');
            this.setUnaVida(unaVida);
            this.getGame().physics.enable(this.getUnaVida(), Phaser.Physics.ARCADE);
            //Hamburguesa
            var hamburguesa = new JuegoCostanera.Hamburguesa(this.getGame(), 300, 50, 'bonus');
            this.setHamburguesa(hamburguesa);
            hamburguesa.name = 'bonus';
            this.getGame().physics.enable(hamburguesa, Phaser.Physics.ARCADE);
            //Click event
            logo.inputEnabled = true;
            logo.events.onInputDown.add(this.listener, this);
            this.setCursores(this.getGame().input.keyboard.createCursorKeys());
            this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
            //  Puntos
            var scoreString = 'Puntos: ';
            var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
            this.setTextoPuntos(scoreText);
            //  Vidas
            var vidasString = 'Vidas: ';
            var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
            this.setTextoVidas(vidasText);
            // create our virtual game controller buttons 
            //Boton de salto
            var buttonjump = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttonjump', null, this, 0, 1, 0, 1); //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
            buttonjump.fixedToCamera = true; //our buttons should stay on the same place  
            buttonjump.events.onInputOver.add(this.listenerJump, this, 0, true);
            buttonjump.events.onInputOut.add(this.listenerJump, this, 0, false);
            buttonjump.events.onInputDown.add(this.listenerJump, this, 0, true);
            buttonjump.events.onInputUp.add(this.listenerJump, this, 0, false);
            //Boton izquierda
            var buttonleft = this.getGame().add.button(30, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonleft.fixedToCamera = true;
            buttonleft.events.onInputOver.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputOut.add(this.listenerLeft, this, 0, false);
            buttonleft.events.onInputDown.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputUp.add(this.listenerLeft, this, 0, false);
            //Boton derecha
            var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonright.fixedToCamera = true;
            buttonright.events.onInputOver.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputOut.add(this.listenerRight, this, 0, false);
            buttonright.events.onInputDown.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputUp.add(this.listenerRight, this, 0, false);
        };
        Costanera.prototype.update = function () {
            this.getGame().physics.arcade.collide(this.getBasurero().getEmitterBasureros(), this.getPersonaje(), this.collisionBasurero, null, this);
            this.getGame().physics.arcade.collide(this.getHamburguesa().getEmitterHamburguesas(), this.getPersonaje(), this.collisionHamburguesa, null, this);
            this.getGame().physics.arcade.collide(this.getUnaVida().getEmitterUnaVida(), this.getPersonaje(), this.collisionUnaVida, null, this);
            this.getPersonaje().body.velocity.x = 0;
            if (this.getCursores().left.isDown || this.getLeft()) {
                this.getPersonaje().body.velocity.x = -500;
                if (this.getPersonaje().getOrientacion() != 'left') {
                    this.getPersonaje().animations.play('left');
                    this.getPersonaje().setOrientacion('left');
                }
            }
            else if (this.getCursores().right.isDown || this.getRight()) {
                this.getPersonaje().body.velocity.x = 500;
                if (this.getPersonaje().getOrientacion() != 'right') {
                    this.getPersonaje().animations.play('right');
                    this.getPersonaje().setOrientacion('right');
                }
            }
            else {
                if (this.getPersonaje().getOrientacion() != 'idle') {
                    this.getPersonaje().animations.stop();
                    if (this.getPersonaje().getOrientacion() == 'left') {
                        this.getPersonaje().frame = 0;
                    }
                    else {
                        this.getPersonaje().frame = 5;
                    }
                    this.getPersonaje().setOrientacion('idle');
                }
            }
            if ((this.getSaltarBtn().isDown || this.getJump()) && (this.getPersonaje().body.onFloor())) {
                this.getPersonaje().body.velocity.y = -550;
            }
            if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse) {
                this.setRight(false);
                this.setLeft(false);
                this.setJump(false);
            }
        };
        Costanera.prototype.collisionHamburguesa = function (hamburguesa, personaje) {
            hamburguesa.kill();
            personaje.kill();
            //  Reduce the lives
            this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
            this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
            //this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
            //this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();		
        };
        Costanera.prototype.collisionBasurero = function (basurero, personaje) {
            personaje.kill();
            //  Increase the score
            this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 1);
            this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
            if ((this.getPersonaje().getPuntos() % 10) == 0) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
            }
            //this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
            //this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();	
        };
        Costanera.prototype.collisionUnaVida = function (unaVida, personaje) {
            personaje.kill();
            //  Increase the score
            this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
            this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
        };
        Costanera.prototype.listener = function () {
            if (this.getPersonaje().getVidas() == 0) {
                var logo = this.getGame().add.image(this.getGame().world.centerX, this.getGame().world.centerY, 'gameover');
                logo.x = 0;
                logo.y = 0;
                logo.height = this.getGame().height;
                logo.width = this.getGame().width;
                this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
            }
            else {
                this.getPersonaje().revive();
            }
        };
        //some useful functions
        Costanera.prototype.goFull = function () {
            this.getGame().scale.startFullScreen(false);
        };
        Costanera.prototype.listenerJump = function (key, arg, arg2) {
            this.setJump(arg2);
        };
        Costanera.prototype.listenerLeft = function (key, arg, arg2) {
            this.setLeft(arg2);
        };
        Costanera.prototype.listenerRight = function (key, arg, arg2) {
            this.setRight(arg2);
        };
        return Costanera;
    }());
    JuegoCostanera.Costanera = Costanera;
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
