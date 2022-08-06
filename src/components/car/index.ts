/*
 * @Author: hqwx.com
 * @Date: 2022-08-05 22:21:08
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 15:14:09
 * @😍: 😃😃
 */
import AudioClass from '@/libs/audioClass';
interface FloorSelectorI {
	max: number,
	min: number,
}

interface CarI {
	maxWeight: number,
}

interface PersonI {
	[length: symbol]: number,
	weight: number,
}

class FloorSelector {
	constructor(param: FloorSelector) {

	}
}

class CarDoor {
	constructor(params: Object) {

	}
}

class Car {
	public floorSelector
	public carDoor
	private persons = [] as PersonI[]
	private AudioManger = {}
	constructor(param: Object) {
		this.floorSelector = new FloorSelector(param)
		this.carDoor = new CarDoor(param)
		this.init()
	}

	/* 增加乘客 */
	joinPerson (person: PersonI) {
		this.persons.push(person)
	}

	/* 减少乘客 */
	getOff (person: PersonI) {
		this.persons.splice(0,1)
	}

	/* 运行中 */
	runing () {
		this.AudioManger = AudioClass({
			url: require('@/audio/runing.mp3'),
			loop: true,
		})
	}

	/* 到达楼层 */
	arriveFloor(){
		this.AudioManger = AudioClass({
			url: require('@/audio/dida.mp3'),
			loop: false,
		})
	}

	init () {
		this.runing()
		setTimeout(() => {
			this.arriveFloor()
		}, 5000);
	}
}

function car (param: Object) {
	return new Car(param)
}

export default car;