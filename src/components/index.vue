<template>
	<div class="topic-list">
		<ul>
			<li class="topic-item"
				v-for="topic in topics">

				<div class="flex-between">
					<span class="topic-type mr10" 
						:class="topic.tab">
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
							<time class="create-at">{{ topic.create_at }}</time>
							<time class="last-reply-at">{{ topic.last_reply_at }}</time>
						</p>
					</div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		data () {
			return {
				topics: []
			}
		},
		mounted () {
			this.$nextTick(() => {
				let params = {
					page: 1,
					limit: 20
				}
				this.$http.get('topics', {params}).then((res) => {
					this.topics = res.data.data;
				})
			})
		}
	}
</script>

<style scoped>
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