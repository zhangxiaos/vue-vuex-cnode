<template>
	<div class="topic">
		<h2 class="topic-title">{{ topic.title }}</h2>
		<div class="topic-info flex align-to-both">
			<ul>
				<li><img class="avatar" :src="topic.author.avatar_url"></li>
				<li class="color83">{{ topic.author.loginname }}</li>
			</ul>
			<ul>
				<li class="pd8 tright">
					<span class="topic-type" 
						:class="getTabClassName(topic.tab, topic.good, topic.top)">

						{{ topic.tab | getTabStr(topic.good, topic.top)}}
					</span>
				</li>
				<li class="color83 pt8">·发布于 {{ topic.create_at | getLastTimeStr }} ·{{ topic.visit_count }} 次浏览</li>
			</ul>
		</div>

		<div v-html="topic.content" class="markdown-body"></div>

		<section class="reply" v-if="topic.replies.length">
			<p class="reply-count">{{ topic.replies.length }} 回复</p>	
 			<div class="reply-item"
				v-for="(item, index) in topic.replies">

 				<div class="flex">
 					<img class="avatar mr10 reply-avatar" :src="item.author.avatar_url">
					<ul class="flex1 align-to-both">
						<li>
							<span class="mr10">{{ item.author.loginname }}</span>
							<span class="linkcolor">{{ index+1 }}楼·{{ item.create_at | getLastTimeStr }}</span>
						</li>
						<li>
							<span>{{ item.ups.length }}<i class="iconfont icon-appreciatefill"></i></span>
						</li>
					</ul>
 				</div>
 				<div class="reply-content" v-html="item.content"></div>
 			</div>
 		</section>
	</div>
</template>

<script>
	export default {
		computed: {
			topic_id () {
				return this.$route.params.id;
			}
		},
		data () {
			return {
				topic: {
					author: {},
					replies: []
				},
			}
		},
		mounted () {
			this.$http.get(`topic/${this.topic_id}`).then(res => {
				this.topic = res.data.data;
			});
		},
		methods: {
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
	.topic {
		overflow-x: hidden;
		padding: 0 15px 20px;
	}
	.topic-title {
		padding: 15px 0;
		line-height: 28px;
	}
	.topic-info {
		margin: 0 0 15px;
		width: 100%;
	}
	.topic-type {
		padding: 3px 7px;
		border-radius: 3px;
		color: #fff;
		line-height: 1.4;
	}
	.reply-item {
		padding: 10px 0;
		border-top: 1px solid #f0f0f0;
	}
	.reply-count {
		padding: 20px 0 10px;
		text-indent: 4px;
		color: #979797;
	}
	.reply-content {
		line-height: 22px;
	}
</style>