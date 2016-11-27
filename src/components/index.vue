<template>
	<div class="list-container">
		<header-component></header-component>
		<div ref="wrap" v-on:scroll="scrollHandle" class="topic-wrap">
			<ul ref="box">
				<li class="topic-item"
					v-for="topic in topics">

					<div class="flex-between">
						<span class="topic-type mr10" 
							:class="getTabClassName(topic.tab, topic.good, topic.top)">

							{{ topic.tab | getTabStr(topic.good, topic.top)}}
						</span>
						<h3 class="topic-title flex1 font-ellip">{{ topic.title }}</h3>
					</div>
					<div class="flex pt8">
						<img class="avator user-avator mr10" :src="topic.author.avatar_url">
						<div class="info flex1">
							<p class="flex-between">
								<span class="author">{{ topic.author.loginname }}</span>
								<span class="reply-count"><b>{{ topic.reply_count }}</b> /{{ topic.visit_count }}</span>
							</p>
							<p class="flex-between">
								<time class="create-at">{{ topic.create_at | getLastTimeStr }}创建</time>
								<time class="last-reply-at">{{ topic.last_reply_at | getLastTimeStr }}回复</time>
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import HeaderComponent from './partials/header'

	export default {
		components: {
			HeaderComponent
		},
		data () {
			return {
				topics: [],
				page: 1,
				limit: 20
			}
		},
		mounted () {
			this.getData();		
		},
		methods: {
			scrollHandle () {
				let winH = this.$refs.wrap.offsetHeight;
				let conH = this.$refs.box.offsetHeight;

				if (this.$refs.wrap.scrollTop + winH == conH + 50) {
					this.page++;
					setTimeout(() => {
						this.getData();
					}, 200);
				}
			},
			getData () {
				let params = {
					page: this.page,
					limit: this.limit
				}
				this.$http.get('topics', {params}).then((res) => {
					this.topics = this.topics.concat(res.data.data);
				})
			},
			getTabClassName (tab, good, top) {
				let className = '';

			    if (top) {
			    	className = 'top';
			    } else if (good) {
			    	className = 'good';
			    } else {
			    	switch (tab) {
			    		case 'ask': 
			    			className = 'ask';
			    			break;
			    		case 'share':
			    			className = 'share';
			    			break;
			    		case 'job': 
			    			className = 'job';
			    			break;
			    		default: 
			    			className = 'default';
			    	}
			    }

			    return className;
			}
		}
	}
</script>

<style scoped>
	.list-container {
		height: 100%;
	}	
	.topic-wrap {
		padding-top: 50px;
		height: 100%;
		overflow-y: auto;
	}
	.topic-item {
		padding: 10px 15px;
		border-bottom: 1px solid #d5dbdb;
	}
	.topic-type {
		padding: 3px 7px;
		border-radius: 3px;
		color: #fff;
		line-height: 1.4;
	}
	.topic-title {
		line-height: 1.5;
	}
	.info p {
		padding: 2px 0;
		font-size: 12px;
	}
</style>