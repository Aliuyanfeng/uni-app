<template>
	<view class="">
		<view class="news_item" v-for="(item,i) in list" :key="i" @click="navigator(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间:{{item.add_time | formatDate}}</text>
					<text>浏览次数:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: ['list'],
		filters: {
			formatDate(date) {
				console.log(date)
				const nDate = new Date(date)
				console.log(nDate)
				const year = nDate.getFullYear()
				const month = (nDate.getMonth() + 1).toString().padStart(2, 0)
				const day = nDate.getDay().toString().padStart(2, 0)
				console.log(year, month, day)
				return year + '年' + month + '月' + day + '日'
			}
		},
		methods: {
			navigator(id) {
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;

		image {
			width: 200rpx;
			max-width: 200rpx;
			min-width: 200rpx;
			height: 150rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tit {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
