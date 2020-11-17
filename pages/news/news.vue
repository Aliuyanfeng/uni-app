<template>
	<view class="news">
		<newslist :list="newslist" @itemClick="getDetail"></newslist>
	</view>
</template>

<script>
	import newslist from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newslist: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				// console.log(res)
				this.newslist = res.data.message
			},
			getDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		components: {
			newslist
		}
	}
</script>

<style lang="scss">
	.news {}
</style>
