/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const util = {
	random(min = 0, max) {
		return min + (max - min) * Math.random();
	},
	extend(origin, ...arg) {
		arg.forEach(item => {
			for (let key in item) {
				origin[key] = item[key];
			}
		});
		return origin;
	},

	//ms => 帧
	transTime(time, defult) {
		return +time / 1000 * 60 | 0 || defult;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);



const width = 360;
const height = 600;

//与时间有关的设置均为毫秒数，本文件底部会自动转化为帧数。
// 大多属性都设有默认值，都可以不用修改   一般只需要修改中文文字
// 所有的文字暂时都不支持换行，字数多的请自行分为多段话。

const config = function () {

	return {
		// 整体宽高
		width: width, //---不建议改动
		height: height, //---不建议改动
		//canvas
		canvases: ['fall', 'bg', 'firework', 'dialogue'], //---不建议改动
		// 飘落微粒产生间隔
		snowInterval: 60,
		heartInterval: 15,
		// 飘落微粒属性
		snow: {
			x: undefined,
			y: undefined,
			minSize: 5,
			maxSize: 10,
			size: undefined,
			speed: 0.5,
			opacity: 0.8
		},
		heart: {
			x: undefined,
			y: undefined,
			minSize: 15,
			maxSize: 20,
			size: undefined,
			speed: 1
		},
		// 飘落的类型('snow', 'heart', 'mix')
		fallType: 'snow',

		// 阶段一
		dialogueOpt: {
			interval: 2000, //两句话的间隔时间
			speed: 100, //语速
			color1: '#ff00ff',
			font1: '14px Arial',
			color2: '#f97afb',
			color3: 'red',
			color4: '#ffff00',
			color5: '#00ff00',
			color6: '#00ffff',
			color7: '#fff'
		},
		// type对应上面的color与font  若没有对应的 则默认为color1或font1
		dialogue: [{ type: 6, name: '男子', txt: '快过年了，我们去放烟花吧！' }, { type: 2, name: '女子', txt: '天还这么亮，现在放烟花也不好看。' }, { type: 2, name: '女子', txt: '再说你那有烟花吗？' }, { type: 6, name: '男子', txt: '我当然有烟花啦。' }, { type: 6, name: '男子', txt: '你那有打火机吗？' }, { type: 2, name: '女子', txt: '没有呀～' }, { type: 6, name: '男子', txt: '那你是怎么点燃我的心的？' }, { type: 2, name: '女子', txt: '。。。' }, { type: 2, name: '女子', txt: '可是我的心还没有被你点燃呀。' }, { type: 6, name: '男子', txt: '别慌，我去买个打火机先。' }, { type: 2, name: '女子', txt: '打火机可点不燃我的心。' }, { type: 6, name: '男子', txt: '天快黑了，我要为你点燃整片天空。' }],
		// 阶段二
		sunset: 8000, // 天黑时间

		// 阶段三
		fireworkInterval: [60, 240], // 烟花产生间隔 //---不建议改动
		//烟花的属性
		fireworks: {
			x: undefined,
			y: height,
			xEnd: undefined,
			yEnd: undefined,
			size: 2,
			radius: 2, //烟花半径
			velocity: 3, //速率
			opacity: 0.8,
			count: 300, //炸裂后粒子数
			wait: undefined, //消失后 => 炸裂  等待时间
			color: undefined //烟花颜色
		},
		fireWords: '你的眼睛|真好看|里面有|日月冬夏|晴雨山川|但是|我的眼睛|更好看|因为|里面有你', // '|' 为分隔符
		// hue:210 lightness 0
		skyColor: 'hsla({hue}, 60%, {lightness}%, 0.2)',
		fireOpt: {
			wordInterval: 3000 //每段话出现的间隔时间
		},

		//阶段四
		titleWords: '一不小心|就和你|到了白头', // '|' 为分隔符
		titleOpt: {
			gap: 4,
			size: 70, //最后字的大小
			pSize: 8,
			delay: 4000, //
			distance: 120, //行间距
			e: 5000 //速率
		},

		/*******均不建议改动********/
		//字的参数
		shape: {
			mini: 1, //组成字的粒子数  mini越大 粒子数越少
			gap: 2 //粒子的间隔数 必须能被width整除
		},
		word: {
			size: 70,
			y: 120
		}

	};
}();

//ms => 帧
config.dialogueOpt.interval = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.dialogueOpt.interval, 120);
config.dialogueOpt.speed = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.dialogueOpt.speed, 18);

config.sunset = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.sunset, 600);

config.fireOpt.wordInterval = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.fireOpt.denseTime, 600);

config.titleOpt.delay = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.titleOpt.delay, 240);
config.titleOpt.e = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].transTime(config.titleOpt.e, 240);

Object(__WEBPACK_IMPORTED_MODULE_0__resize__["a" /* default */])(config.width, config.height, config.canvases);

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__particle__ = __webpack_require__(3);



// 继承微粒类


class Snowflake extends __WEBPACK_IMPORTED_MODULE_2__particle__["a" /* default */] {
	constructor({ x, y, minSize = 5, maxSize = 7.5, size, speed = 0.5, opacity = 0.8 } = {}) {
		super({ x, y, minSize, maxSize, size });
		this.opacity = __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(opacity, 1);
		this.speed = speed * (1 + Math.random());
		this.direction = Math.random() > 0.5 ? 0.5 : -0.5;
	}

	fall() {
		this.x += Math.random() * this.direction;
		this.y += this.speed;
	}

	render(ctx) {
		this.fall();

		if (this.outOfBounds()) return false;

		this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
		this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
		this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
		ctx.beginPath();
		ctx.fillStyle = this.g;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		ctx.fill();
		return true;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Snowflake);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util_js__ = __webpack_require__(0);



//微粒类
class Particle {
	constructor({ x, y, minSize = 5, maxSize = 7.5, size, opacity = 1 } = {}) {
		this.size = size ? size : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(minSize, maxSize);
		this.x = x ? x : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(0, __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].width - this.size);
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	outOfBounds(height = __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].height, width = __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].width) {
		if (this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size) return false;

		return true;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Particle);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snowflake__ = __webpack_require__(2);
const random = Math.random;


class Heart extends __WEBPACK_IMPORTED_MODULE_0__snowflake__["a" /* default */] {
	constructor({ x = 0, y = 0, minSize = 15, maxSize = 20, size, speed = 1 } = {}) {
		super({ minSize, maxSize, x, y, size, speed });
		this.color = `hsla(${random() * 360}, 90%, 65%, 1)`;
	}
	render(ctx) {
		this.fall();
		if (this.outOfBounds()) return false;

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
		ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, this.y + 0.6 * this.size, this.x + 0.5 * this.size, this.y + 0.9 * this.size);
		ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * this.size, this.x + 0.9 * this.size, this.y, this.x + 0.5 * this.size, this.y + 0.3 * this.size);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

		return true;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Heart);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fall_particle__ = __webpack_require__(3);


class FireworkParticle extends __WEBPACK_IMPORTED_MODULE_0__fall_particle__["a" /* default */] {
	constructor({ x, y, size = 1.5, radius }) {
		super({ x, y, size });
		this.rate = Math.random();
		this.angle = Math.PI * 2 * Math.random();

		// radius = (1 - Math.pow(Math.random(), 6)) * radius;

		this.vx = radius * Math.cos(this.angle) * this.rate;
		this.vy = radius * Math.sin(this.angle) * this.rate;
	}

	go() {
		this.x += this.vx;
		this.y += this.vy;
		this.vy += 0.02;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	render(ctx) {
		this.go();
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fill();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (FireworkParticle);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_imgList__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__other_imgLoader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fall_snowflake__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fall_heart__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_shape__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TitleParticle__ = __webpack_require__(16);
/**
* version v0.1
*/

// 基础配置



// 读取图片



// 飘落装饰



//烟花



//最后


(function () {
	class Canvas {
		constructor() {
			//初始化属性
			this.initProperty();

			this.initAudio();

			//加载图片
			__WEBPACK_IMPORTED_MODULE_3__other_imgLoader__["a" /* default */].load(__WEBPACK_IMPORTED_MODULE_2__config_imgList__["a" /* default */]).then(imgs => {
				document.querySelector('#loading').style.display = 'none';
				//bg
				this.imgs = this.dealImgs(imgs);
				this.init();
			}).catch(err => {
				console.log(err);
			});
		}
		initAudio() {
			const audio = new Audio();
			audio.src = __webpack_require__(17);
			audio.loop = true;
			audio.play();
			audio.volume = 0.5;
			const music = document.querySelector('#music');

			document.addEventListener("WeixinJSBridgeReady", function () {
				audio.play();
			}, false);

			music.onclick = function () {
				const cla = this.getAttribute('class');
				if (cla == 'on') {
					this.setAttribute('class', 'off');
					audio.pause();
				} else {
					this.setAttribute('class', 'on');
					audio.play();
				}
			};
		}
		//创建本例属性
		initProperty() {
			//画布宽高
			this.height = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height;
			this.width = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width;

			//获取画笔
			//fall、bg、fireworks、mb
			__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].canvases.forEach(canvasId => {
				this[canvasId + 'Ctx'] = document.querySelector(`#${canvasId}`).getContext('2d');
			});

			/*********通用*********/
			// 飘落微粒
			this.fallDots = [];
			// 飘落的类型('snow', 'heart', 'mix')
			this.fallType = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fallType,
			//动画的时间
			this.time = 0;
			//当前执行的状态
			this.status = 1;

			/*********阶段一（对话）*********/
			// 对话的参数
			this.dialogueOpt = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].extend({}, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].dialogueOpt);
			// 话的文字
			this.dialogue = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].dialogue.shift();

			/*********阶段二（天黑）*********/
			this.sunsetTime = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].sunset;

			/*********阶段三（烟花）*********/
			//天空颜色
			this.skyColor = {
				hue: 210,
				lightness: 0
			};
			//烟花的数组
			this.fireworks = [];
			this.fireworkTime = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(...__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireworkInterval) | 0;

			this.fireWords = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireWords.split('|');
			this.fireOpt = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].extend({
				end: false,
				time: 600,
				showWords: false
			}, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireOpt);

			/*********阶段四（点题）*********/
			this.titleOpt = {
				current: -1,
				start: false,
				ctx: [],
				end: false
			};
			//大标题
			this.titleWords = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleWords.split('|');
			//组成字的微粒数组
			this.titleDots = [];
		}
		go(currentStatus) {
			switch (currentStatus) {
				case 1:
					this.dialogueOpt = null;
					this.dialogue = null;
					this.dialogueCtx.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height);
					++this.status;
					break;
				case 2:
					this.sunsetTime = null;
					++this.status;
					break;
				case 3:
					__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].word.y -= __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.distance;
					this.fireOpt = null;
					this.fireWords = null;
					++this.status;
					break;
				case 4:
					this.titleOpt = null;
					this.titleWords = null;
					this.titleDots = null;
					++this.status;
					break;
			}
		}
		init() {
			//画背景图
			this.drawBg(this.bgCtx, this.imgs.bg);

			//文字形状maker
			this.shapeMaker = new __WEBPACK_IMPORTED_MODULE_7__other_shape__["a" /* default */](this.width, this.height);

			//测试代码块
			this.test();

			// 循环体
			this.loop();
		}

		test() {}

		testLoop() {}
		//动画效果
		loop() {
			//下一帧继续调用loop;
			requestAnimationFrame(this.loop.bind(this));
			// console.time('label');

			// 动画的时间
			++this.time >= 60000 ? 0 : this.time;

			// 渲染飘落装饰
			this.renderFall();

			switch (this.status) {
				case 1:
					//对话阶段
					this.renderDialogue();
					break;
				case 2:
					//天黑过程
					this.sunset();
					break;
				case 3:
					// 放烟花
					this.controlFire();
					this.renderFireworks();
					break;
				case 4:
					this.renderTitle();
					this.renderFireworks();
					break;
				case 5:
					this.end();
					this.renderFireworks();
					break;
			}

			this.testLoop();
			// console.timeEnd('label');

		}
		//飘落的装饰
		renderFall() {
			this.fallCtx.clearRect(0, 0, this.width, this.height);
			// 控制飘落装饰类型
			switch (this.fallType) {
				case 'snow':
					this.time % __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].snowInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_4__fall_snowflake__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].snow));
					break;
				case 'heart':
					this.time % __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].heartInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_5__fall_heart__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].heart));
					break;
				case 'mix':

					this.time % __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].snowInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_4__fall_snowflake__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].snow));
					this.time % __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].heartInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_5__fall_heart__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].heart));
					break;
			}
			// 雪花飘落
			for (let i = this.fallDots.length - 1; i >= 0; --i) {
				!this.fallDots[i].render(this.fallCtx) && this.fallDots.splice(i, 1);
			}
		}

		// 渲染对话
		renderDialogue() {
			const ctx = this.dialogueCtx;
			ctx.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height);

			ctx.fillStyle = this.dialogueOpt['color' + this.dialogue.type] || this.dialogueOpt.color1;
			ctx.font = this.dialogueOpt['font' + this.dialogue.type] || this.dialogueOpt.font1;

			//说话
			this.dialogue.current = this.dialogue.current || 0;
			if (--this.dialogueOpt.speed <= 0) {
				this.dialogueOpt.speed = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].dialogueOpt.speed;
				++this.dialogue.current;
			}

			ctx.fillText(`${this.dialogue.name}：${this.dialogue.txt.slice(0, this.dialogue.current)}`, 20, 50);

			//下一段话
			if (this.dialogue.current >= this.dialogue.txt.length && --this.dialogueOpt.interval <= 0) {
				if (__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].dialogue.length == 0) {
					return this.go(1);
				}
				this.dialogue = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].dialogue.shift();
				this.dialogueOpt.interval = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].dialogueOpt.interval;
			}
		}
		// 天黑
		sunset() {
			if (--this.sunsetTime <= 0) {
				return this.go(2);
			}
			this.fireworkCtx.fillStyle = `hsla(210, 60%, 5%, ${0.01 * (20 - 20 * (this.sunsetTime / __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].sunset))})`;
			this.fireworkCtx.fillRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height);
		}

		//控制烟花的逻辑
		controlFire() {
			--this.fireOpt.time;
			if (this.fireOpt.time == 0) {
				this.createDenseFire();
			}
			if (this.fireOpt.time <= -180) {
				!this.fireOpt.end && this.showFireworkWords();
			}
			if (this.fireOpt.time == -60) {
				this.fireOpt.end && this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */]({
					x: __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 2,
					yEnd: __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height / 8,
					count: 600,
					radius: 5
				}));
			}
			if (this.fireOpt.time == -360) {
				this.fireOpt.end && this.go(3);
			}
		}
		//放文字烟花
		showFireworkWords() {
			if (this.fireWords.length == 0) {
				this.fireOpt.end = true;
				this.fireOpt.time = 180;
				return;
			}
			if (--this.fireOpt.wordInterval <= 0) {
				// 第二个参数控制是否产生烟花
				this.getDotsPostion(this.fireWords.shift(), true);
				this.fireOpt.wordInterval = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireOpt.wordInterval;
			}
		}
		//创建密集的烟花
		createDenseFire() {
			for (let i = 0; i < 10; i++) {
				setTimeout(() => {
					this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireworks));
				}, i * 100);
			}
		}
		//渲染烟花
		renderFireworks() {
			this.fireworkCtx.fillStyle = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].skyColor.replace('{lightness}', 5 + this.skyColor.lightness * 15).replace('{hue}', this.skyColor.hue);
			this.fireworkCtx.fillRect(0, 0, this.width, this.height);
			//随机创建烟花
			this.createFireworks();

			this.skyColor = {
				lightness: 0,
				hue: 210
			};
			for (let i = this.fireworks.length - 1; i >= 0; --i) {
				this.skyColor = this.skyColor.lightness >= this.fireworks[i].getSkyColor().lightness ? this.skyColor : this.fireworks[i].getSkyColor();
				!this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i, 1);
			}
		}

		// 随机创建烟花
		createFireworks() {
			if (--this.fireworkTime <= 0) {
				this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireworks));
				this.fireworkTime = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(...__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].fireworkInterval) | 0;
			}
		}

		// 渲染最后 文字的动作
		renderTitle() {
			this.createCanvas();
			this.createTitleDots();
			if (!this.titleOpt) return;
			const ctx = this.titleOpt.ctx[this.titleOpt.current];
			ctx.clearRect(0, 0, this.width, this.height);
			for (let i in this.titleDots) {
				this.titleDots[i].render(ctx);
			}
			if (--this.titleOpt.time <= 0) {
				this.titleOpt.start = false;
			}
		}
		createCanvas() {
			if (this.titleOpt.start) return;
			++this.titleOpt.current;
			const canvas = document.createElement('canvas');
			canvas.setAttribute('class', 'title');
			canvas.id = this.titleOpt.current;
			canvas.setAttribute('width', __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width);
			canvas.setAttribute('height', __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height);
			document.body.appendChild(canvas);
			this.titleOpt.ctx.push(canvas.getContext('2d'));
		}
		createTitleDots() {
			if (this.titleOpt.start) return;
			if (this.titleWords.length == 0) {
				return this.go(4);
			}
			this.titleDots = [];
			this.titleOpt.start = true;
			this.titleOpt.time = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.e + __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.delay;

			__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].shape.gap = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.gap;
			__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].word.size = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.size;
			__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].word.y += __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.distance;

			const dots = this.getDotsPostion(this.titleWords.shift());
			dots.forEach(dot => {
				const option = {
					x: dot.x,
					y: dot.y,
					xStart: __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(0, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width),
					yStart: __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(-100, 0),
					size: __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.pSize,
					e: __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].titleOpt.e
				};
				this.titleDots.push(new __WEBPACK_IMPORTED_MODULE_8__TitleParticle__["a" /* default */](option));
			});
			this.fallType = 'mix';
		}

		end() {
			this.fallType = 'mix';
			this.time % 600 == 0 && this.createDenseFire();
		}

		//获取所有的dots集合。
		getDotsPostion(wordsArr, showFireworks) {
			const words = typeof wordsArr == 'string' ? wordsArr.split('') : wordsArr.shift().split('');
			const length = words.length;
			const size = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].word.size;
			const y = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].word.y;
			const dotsArr = [];

			words.forEach((item, index) => {
				let x;
				//文字居中
				length % 2 == 0 ? x = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 2 + (index - length / 2) * size + 1 / 2 * size : x = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 2 + (index - Math.floor(length / 2)) * size;
				this.shapeMaker.write({ txt: item, x, y, size });
				const dots = this.shapeMaker.getDots(__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].shape);
				dotsArr.push(...dots);

				const prtOption = {};
				showFireworks && this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */]({ wait: 30, radius: 2, x, yEnd: y, dots, prtOption }));
			});

			return dotsArr;
		}

		//画背景
		drawBg(ctx, img) {
			ctx.drawImage(img, 0, 0, this.width, this.height);
		}
		//处理图片为需要的对象类型[] => {};
		dealImgs(imgs) {
			const obj = {};
			imgs.forEach(item => {
				obj[item.key] = item.img;
			});

			return obj;
		}
	}

	new Canvas();
})();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function resize(width, height, canvases) {
	if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		const body = document.querySelectorAll('body')[0];
		body.style.width = width + 'px';
		body.style.height = height + 'px';
	}

	canvases.forEach(canvasId => {
		const el = document.querySelector(`#${canvasId}`);
		el.setAttribute('width', width);
		el.setAttribute('height', height);
	});
}

/* harmony default export */ __webpack_exports__["a"] = (resize);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imgList = {
	bg: __webpack_require__(9),
	musicon: __webpack_require__(10),
	musicoff: __webpack_require__(11)
};
/* harmony default export */ __webpack_exports__["a"] = (imgList);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg2.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/musicon.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/musicoff.png";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 读取图片
class ImgLoader {
	// 读取单个图片
	static loadImg(url, key) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = function () {
				resolve({ key, img });
			};
			img.onerror = reject;
			img.src = url;
		});
	}

	// 读取图片数组
	static load(imgs) {
		const promises = [];

		for (let key in imgs) {
			promises.push(this.loadImg(imgs[key], key));
		}

		return Promise.all(promises);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ImgLoader);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fireworkParticle__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fireworkWords__ = __webpack_require__(14);






const GRAVITY = 0.002;

class Firework {
	constructor({ x, y = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height, xEnd, yEnd, size = 2, radius = 1.2, velocity = 3, opacity = 0.8, count = 200, wait, color, dots, prtOption = {} } = {}) {
		//自身属性
		this.x = x ? x : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 8, __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width * 7 / 8);
		this.y = y;
		this.xEnd = xEnd ? xEnd : this.x;
		this.yEnd = yEnd ? yEnd : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height / 8, 3 * __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height / 8);

		this.size = size;
		this.opacity = opacity;
		this.velocity = -Math.abs(velocity);
		this.wait = wait ? wait : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(30, 60);

		this.radius = radius;
		this.GRAVITY = GRAVITY;

		this.hue = 360 * Math.random() | 0;
		this.color = color ? color : `hsla(${this.hue},80%,60%,1)`;
		this.status = 1;
		if (!dots) {
			this.count = count;
			this.particles = [];
			this.createParticles();
			this.type = 'normal';
		} else {
			this.type = 'words';
			const option = { xStart: this.xEnd, yStart: this.yEnd };
			this.particles = dots.map(dot => new __WEBPACK_IMPORTED_MODULE_3__fireworkWords__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].extend({}, dot, option, prtOption)));
		}
	}
	createParticles() {
		for (let i = 0; i < this.count; ++i) {
			this.particles.push(new __WEBPACK_IMPORTED_MODULE_2__fireworkParticle__["a" /* default */]({ x: this.xEnd, y: this.yEnd, radius: this.radius }));
		}
	}
	getSkyColor() {
		const skyColor = {
			lightness: this.status == 3 ? this.opacity : 0,
			hue: this.hue
		};
		return skyColor;
	}
	render(ctx) {
		switch (this.status) {
			case 1:
				ctx.save();
				ctx.beginPath();
				ctx.globalCompositeOperation = 'lighter';
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x, this.y);
				ctx.scale(0.8, 2.3);
				ctx.translate(-this.x, -this.y);
				ctx.fillStyle = this.color;
				ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.restore();

				this.rise();
				return true;
				break;

			case 2:

				if (--this.wait <= 0) {

					this.opacity = 1;
					this.status = 3;
				}
				return true;
				break;

			case 3:
				ctx.save();
				ctx.globalCompositeOperation = 'lighter';
				ctx.globalAlpha = this.opacity;
				ctx.fillStyle = this.color;
				for (let i = 0; i < this.particles.length; ++i) {
					this.particles[i].render(ctx);
				}
				ctx.restore();

				this.opacity -= 0.01;
				return this.opacity > 0;
				break;
		}
	}
	rise() {
		this.y += this.velocity * 1;
		this.velocity += this.GRAVITY;
		if (this.y - this.yEnd <= 50) {
			this.opacity = (this.y - this.yEnd) / 50;
		}
		if (this.y <= this.yEnd) {
			this.status = 2;
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Firework);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fireworkParticle__ = __webpack_require__(5);

class FireworkWords extends __WEBPACK_IMPORTED_MODULE_0__fireworkParticle__["a" /* default */] {
	constructor({ x, y, size = 1, circle = 1, xStart, yStart }) {
		super({ x, y, size, circle });

		const e = 80;
		this.dx = (x - xStart) / e;
		this.dy = (y - yStart) / e;
		this.xStart = xStart;
		this.yStart = yStart;
	}

	go() {
		this.xStart += this.dx;
		this.yStart += this.dy;
	}

	render(ctx) {
		this.go();
		ctx.beginPath();
		ctx.arc(this.xStart, this.yStart, this.size, 0, Math.PI * 2, false);
		ctx.fill();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (FireworkWords);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Shape {
	constructor(width = 375, height = 667) {
		// 缓存画布
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');

		this.ctx.fillStyle = 'red';
		this.ctx.textBaseline = 'middle';
		this.ctx.textAlign = 'center';
	}

	//写入想要渲染的字
	write({ txt, size = 50, fontFamily = 'Arial', x = this.canvas.width / 2, y = 100 } = {}) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.font = `bold ${size}px ${fontFamily}`;
		this.ctx.fillText(txt, x, y);

		//记录的当前字的坐标
		this.x = x;
		this.y = y;
		this.size = size;
	}

	getPosition() {
		return {
			x: this.x,
			y: this.y
		};
	}

	//获取字的坐标点集合。
	getDots({ mini = 1, gap = 5 } = {}) {
		const data = this.ctx.getImageData(0, this.y - this.size / 2, this.canvas.width, this.y + this.size / 2).data;
		let dots = [],
		    x = 0,
		    y = this.y - this.size / 2,
		    count = 0;
		for (let i = 0, len = data.length; i <= len; i += 4 * gap) {
			if (data[i + 3] > 0) {
				++count % mini == 0 && dots.push({ x, y: y });
			}
			x += gap;
			if (x >= this.canvas.width) {
				x = 0;
				y += gap;
				i += gap * 4 * this.canvas.width;
			}
		}
		return dots;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Shape);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fall_heart__ = __webpack_require__(4);


class TitleParticle extends __WEBPACK_IMPORTED_MODULE_0__fall_heart__["a" /* default */] {
	constructor({ xStart, yStart, x, y, minSize, maxSize, size, e = 240 }) {
		super({ x: xStart, y: yStart, minSize, maxSize, size });
		this.yEnd = y;
		this.xEnd = x;
		this.e = e;
		this.dx = (this.xEnd - this.x) / this.e;
		this.dy = (this.yEnd - this.y) / this.e;

		this.status = 1;
	}
	go() {
		if (--this.e < 0) {
			this.x = this.xEnd;
			this.y = this.yEnd;
			return true;
		}
		this.x += this.dx;
		this.y += this.dy;
		return false;
	}
	render(ctx) {
		this.go();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
		ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, this.y + 0.6 * this.size, this.x + 0.5 * this.size, this.y + 0.9 * this.size);
		ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * this.size, this.x + 0.9 * this.size, this.y, this.x + 0.5 * this.size, this.y + 0.3 * this.size);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

		return true;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (TitleParticle);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.mp3";

/***/ })
/******/ ]);