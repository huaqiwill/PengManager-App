import request from '@/utils/requestUtil'

export default {
	getHome(params) {
		return request({
			url: "https://www.example.com/request",
			method: "GET",
			params
		})
	},
	homeAdd(data) {
		return request({
			url: "https://www.example.com/request",
			method: "GET",
			data
		})
	},
	itemList() {
		return request({
			url: "http://localhost:8080/api/test",
			method: "GET",
		})
	}
}