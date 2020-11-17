<template>
	<view class="news_detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间:{{detail.add_time | formatDate}}</text>
			<text>浏览:{{detail.click}}</text>
		</view>
		<view class="content" >
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		methods: {
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: "/api/getnew/" + this.id
				})
				console.log(res)
				this.detail = res.data.message[0]
			}
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.getNewsDetail()

		}
	}
</script>

<style lang="scss">
	.news_detail {
		font-size: 30rpx;
		padding: 0 20rpx;

		.title {
			text-align: center;
			// width: 710rpx;
			width: 100%;
			display: block;
			margin: 0 20rpx;
		}

		.info {
			display: flex;
			justify-content: space-between
		}
	}
</style>
