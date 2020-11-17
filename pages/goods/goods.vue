<template>
	<view>
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		<view class="isOver" v-if="flag">
			------我是有底线的------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		methods: {
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				console.log(res)
				this.goods = [...this.goods, ...res.data.message]
				// uni.stopPullDownRefresh()
				callback && callback()
			}, 
			//跳转到导航商品详情
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			console.log(this.goods.length)
			if (this.goods.length < this.pageindex * 10) return this.flag = true
			console.log('触底')
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
			this.pageindex = 1
			this.goods = []
			this.flag = false
			// this.getGoodsList()
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		},
		components: {
			goodsList
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}

	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background-color: #fff;
		font-size: 28rpx;
	}
</style>
