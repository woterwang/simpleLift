/*
 * @Author: hqwx.com
 * @Date: 2022-08-06 21:25:10
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 21:47:54
 * @😍: 😃😃
 */
import Car from '../car/index';
import { PersonI, CarDoorI, FloorSelectorI, CarI } from "@/interface/base";
class Lift {
	private Car;
	constructor(config: CarI) {
		this.Car = new Car(config)
		this.init()
	}

	init () {
		// this.Car.runing()
	}
}
function lift (config: CarI) {
	return new Lift(config)
}
export default lift
