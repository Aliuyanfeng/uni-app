import Vue from 'vue'
import App from './App'
import {
	myRequest
} from "./util/api.js"

import 'static/fonts/iconfont.css'

Vue.prototype.$myRequest = myRequest

Vue.filter('formatDate', (date) => {
	// console.log(date)
	const nDate = new Date(date)
	// console.log(nDate)
	const year = nDate.getFullYear()
	const month = (nDate.getMonth() + 1).toString().padStart(2, 0)
	const day = nDate.getDay().toString().padStart(2, 0)
	console.log(year, month, day)
	return year + '年' + month + '月' + day + '日'
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
