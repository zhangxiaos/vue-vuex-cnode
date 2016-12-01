<template>
	<header class="header">
		<ul class="header-list flex align-to-around">
			<li v-for="(item, index) in types"
				:class="{active: isCur==index}"
				@click="changeTab(index, item.tab)">

				{{ item.name }}
			</li> 		
		</ul>
 	</header>
</template>

<script>
	export default {
		data () {
			return {
				isCur: 0,
				types: [{
						tab: 'all', 
						name: '全部'
					},{
						tab: 'good', 
						name: '精华'
					},{
						tab: 'share', 
						name: '分享'
					},{
						tab: 'ask', 
						name: '问答'
					},{
						tab: 'job', 
						name: '招聘'
				}]
			}
		},
		methods: {
			changeTab (index, tab) {
				this.isCur = index;
				this.$emit('changeTab', tab);
			} 
		}
	}
</script>

<style scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		font-size: 16px;
		border-bottom: 1px solid #ebebeb;
		background: #fff;
	}
	.header-list {
		height: 50px;
	}
	.header-list li {
		padding: 0 10px;
		height: 28px;
		line-height: 28px;
		border-radius: 4px;
	}
	.active {
		color: #fff;
		background: #80bd01;
	}
</style>
