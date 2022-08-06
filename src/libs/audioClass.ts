/*
 * @Author: hqwx.com
 * @Date: 2022-08-06 10:48:21
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 22:28:38
 * @😍: 😃😃
 */
interface AudioI {
	url: string,
	loop?: boolean,
	autoPlay?: boolean,
	onEnd?: (e: any) => void,
}
class audioManger {
	private audioInstance: HTMLAudioElement = new Audio()

	constructor() {
		// this.init(config)
	}

	addEvent (eventNameList: string[], allback: () => void) {
		eventNameList.forEach(eventName => {
			document.addEventListener(eventName, allback, false)
		})
	}

	removeEvent (eventNameList: string[], allback: () => void) {
		eventNameList.forEach(eventName => {
			document.removeEventListener(eventName, allback, false)
		})
	}

	pauseAudio () {
		if (this.audioInstance.played) {
			this.audioInstance.pause()
		} else {
			console.log('audio no playing');
		}
	}

	play (config: AudioI) {
		let params = Object.assign({
			loop: false,
			autoPlay: true,
			onEnd (e: any) {
				console.log('audio play end')
			}
		}, config)

		this.audioInstance.loop = params.loop
		this.audioInstance.autoplay = params.autoPlay
		this.audioInstance.src = params.url
		this.audioInstance.oncanplay = e => {
			this.audioInstance.play().then(s => {
				console.log('auto play success');
			}).catch(err => {
				let eventMap = ['click', 'doubclick', 'keydown']
				new Promise((a, b) => {
					let eventOver = () => {
						a(e)
						this.removeEvent(eventMap, eventOver)
					}
					this.addEvent(eventMap, eventOver)
				}).then(res => {
					this.audioInstance.play()
				})
			})
		}
		this.audioInstance.onended = (e: Event) => {
			params.onEnd(this.audioInstance)
		}

		this.audioInstance.onplaying = (e: Event) => {
		}

	}
}
const AudioManger = new audioManger()

export default AudioManger
