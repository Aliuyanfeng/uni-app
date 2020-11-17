<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view class="" @click="phone">
				联系电话：400-618-9090（点击拨打）
			</view>
			<view class="">
				联系地址：浙江省杭州市下沙经济技术开发区4号大街187号
			</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.363172,
				latitude: 30.312212,
				scale: 11,
				markers: [{
					longitude: 120.363172,
					latitude: 30.312212,
					iconPath: '../../static/hmlogo.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber:"400-618-9090"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		image {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 60rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
