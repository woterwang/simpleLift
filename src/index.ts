/*
 * @Author: hqwx.com
 * @Date: 2022-08-05 22:21:08
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 22:29:25
 * @😍: 😃😃
 */
import Lift from '@/components/lift/lift';
const config = {
	bodyWeight: 10,//乘客重量
	maxFloor: 10,//最高楼层
	minFloor: -10,//最低楼层
	storeyHeight: 10,//楼层高度
	waitTime: 10,//等待时间(ms)
	closeBtnTapWaitTime: 10,//按下关门按钮后的等待时间(ms)
	carMaxload: 2000,//最大承重(kg)
	maxCapacity: 10,//最大容量(pcs)

}
Lift(config)