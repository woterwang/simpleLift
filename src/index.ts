/*
 * @Author: hqwx.com
 * @Date: 2022-08-05 22:21:08
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 02:47:06
 * @😍: 😃😃
 */
import Car from '@/components/car/index';
// const Car = require('@/components/car/index');
console.log("🚀 ~ file: index.ts ~ line 10 ~ Car", Car)
let liftCar = Car({})
console.log("🚀 ~ file: index.ts ~ line 12 ~ liftCar.floorSelector", liftCar)
liftCar.joinPerson({weight:100,[Symbol()]:10})