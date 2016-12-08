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
	import Bus from 'assets/js/bus'
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapMutations } from 'vuex'

	export default {
		computed: {
			...mapState({
				isCur: state => state.list.isCur,
				types: state => state.list.types,
			})
		},
		methods: {
			changeTab (index, tab) {
				this.$store.dispatch('setCur', index);
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
