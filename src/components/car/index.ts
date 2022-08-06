/*
 * @Author: hqwx.com
 * @Date: 2022-08-05 21:52:21
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 22:27:06
 * @😍: 😃😃
 */
import AudioManger from '@/libs/audioClass';
import FloorSelector from '@/components/callingBoard/boardWithCar';
import CarDoor from '@/components/landingDoor/carDoor';
import { PersonI, CarDoorI, FloorSelectorI, CarI } from "@/interface/base";
class Car {
	public FloorSelectorI
	public CarDoor
	private Persons = [] as PersonI[]
	private AudioManger = AudioManger
	constructor(private carConfig: CarI) {
		this.FloorSelectorI = new FloorSelector({
			maxFloor: carConfig.maxFloor,//最高楼层
			minFloor: carConfig.minFloor,//最低楼层
			storeyHeight: carConfig.storeyHeight,//楼层高度(m)
		})

		this.CarDoor = new CarDoor({
			waitTime: carConfig.waitTime,
			closeBtnTapWaitTime: carConfig.closeBtnTapWaitTime,
		})

		this.initCar()
	}

	/* 增加乘客 */
	getOn (persons: PersonI[]) {
		this.Persons = this.Persons.concat(persons)
		this.checkOverWeight()
		this.checkOvercrowding()
	}

	/* 减少乘客 */
	getOff (count: number) {
		this.Persons.splice(0, count)
		this.checkOverWeight()
		this.checkOvercrowding()
	}

	/* 运行中 */
	runing () {
		this.AudioManger.play({
			url: require('@/audio/runing.mp3'),
			loop: true,
		})
	}

	/* 停车 */
	stop () {
		this.AudioManger.pauseAudio()
	}

	/* 到达楼层 */
	arriveFloor () {
		this.AudioManger.play({
			url: require('@/audio/dida.mp3'),
			loop: false,
		})
	}

	/* 超重 */
	overweight () {
		console.log("🚀 ~ file: index.ts ~ line 69 ~ Car ~ overweight ~ overweight", '超重了')
		this.AudioManger.play({
			url: require('@/audio/warning_01.mp3'),
			loop: true,
		})
	}

	/* 检查超重 */
	checkOverWeight () {
		// let countWeight = this.Persons.reduce((a,b) => {
		// 	return a.bodyWeight + b.bodyWeight
		// })
		let countWeight = 0
		this.Persons.forEach(v => {
			countWeight += v.bodyWeight
		})
		if (this.carConfig.carMaxload < countWeight) {
			this.overweight()
		}
	}

	/* 超员 */
	overcrowding () {
		console.log("🚀 ~ file: index.ts ~ line 69 ~ Car ~ overcrowding ~ overcrowding", '超员了')
		this.AudioManger.play({
			url: require('@/audio/warning_01.mp3'),
			loop: true,
		})
	}

	/* 检查超员 */
	checkOvercrowding () {
		if (this.carConfig.maxCapacity < this.Persons.length) {
			this.overcrowding()
		} else {
			this.AudioManger.pauseAudio()
		}
	}

	/* 紧急情况 */
	emergencyStop () {
		if (this.carConfig.carMaxload < this.carConfig.maxCapacity) {
			this.overcrowding()
		} else {
			this.AudioManger.pauseAudio()
		}
	}

	/* 初始化骄箱 */
	initCar () {
		let getOnBtn = document.createElement('button')
		let getOffBtn = document.createElement('button')

		getOnBtn.textContent = '上车'
		getOnBtn.addEventListener('click', () => {
			let person: PersonI = {
				bodyWeight: Math.floor(Math.random() * 200)
			}
			this.getOn([person])
		})

		getOffBtn.textContent = '下车'
		getOffBtn.addEventListener('click', () => {
			let person: PersonI = {
				bodyWeight: Math.floor(Math.random() * 200)
			}
			this.getOff(1)
		})

		// document.body.appendChild.apply(document,[getOnBtn,getOffBtn])
		document.body.appendChild(getOnBtn)
		document.body.appendChild(getOffBtn)
	}

	init () {
		// 	this.runing()
		// 	setTimeout(() => {
		// 		this.arriveFloor()
		// 	}, 5000);
	}
}

function car (param: CarI) {
	return new Car(param)
}

export default Car;