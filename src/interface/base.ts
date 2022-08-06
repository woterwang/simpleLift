/*
 * @Author: hqwx.com
 * @Date: 2022-08-06 10:52:53
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-06 11:35:56
 * @😍: 😃😃
 */
/* html element */
interface HtmlElementI {
	[attr: string]: string | number,
}

interface AudioElementI extends HtmlElementI {
	src: string,
	// loop?:boolean,
}

interface aa extends HTMLElement{

}

interface eventMap{
	[prop:string]:string
}