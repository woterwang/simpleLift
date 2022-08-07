/*
 * @Author: hqwx.com
 * @Date: 2022-08-07 17:51:58
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2022-08-07 18:21:05
 * @😍: 😃😃
 */
class indexDB {
	private DB
	constructor() {
		this.open()
	}

	open (name: string, ver: number) {
		return new Promise((a: any, b: any) => {
			const openRes: IDBOpenDBRequest = window.indexedDB.open(name, ver)
			openRes.onsuccess = (e: any) => {

			}

			openRes.onupgradeneeded = (e: any) => {
				let db = e.target.result
				let store = db.crateObjectStore('testStore', {
					keyPath: 'id',
					autoIncrement: true,
				})
				store.createIndex("key1", "key1", { unique: false })
				store.createIndex("key2", "key2", { unique: false })
				store.createIndex("key3", "key3", { unique: false })
			}

			openRes.onerror = (err: any) => {

			}
		})
	}
}

export