/*
 * @Author: hqwx.com
 * @Date: 2022-08-06 10:52:53
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 21:42:20
 * @😍: 😃😃
 */
/* 乘客 */
export interface PersonI {
	bodyWeight: number,//乘客重量
}

/* 楼层选择面板 */
export interface FloorSelectorI {
	maxFloor: number,//最高楼层
	minFloor: number,//最低楼层
	storeyHeight: number,//楼层高度
}

/* 轿箱门 */
export interface CarDoorI {
	waitTime: number,//等待时间(ms)
	closeBtnTapWaitTime: number,//按下关门按钮后的等待时间(ms)
}

/* 轿箱 */
export interface CarI extends PersonI, FloorSelectorI, CarDoorI {
	carMaxload: number,//最大承重(kg)
	maxCapacity: number,//最大容量(pcs)
}