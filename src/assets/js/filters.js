import utils from './utils'

/**
 * 通过tab获取文字标签
 * @param {string} tab分类
 * @param {bool} 是否精华帖
 * @param {bool} 是否置顶帖 
 */
exports.getTabStr = (tab, good, top) => {
	let str = '';

	if (top) {
		str = '置顶'
	} else if (good) {
		str = '精华';
	} else {
		switch (tab) {
			case 'ask':
				str = '问答';
				break;
			case 'share':
				str = '分享';
				break;
			case 'job':
				str = '招聘';
				break;
			default:
				str = '暂无';
		}
	}
	return str;
}

/**格式化时间
 *  @param {string} date 需要格式化的时间
 */
exports.getLastTimeStr = (date) => {
    let msd  = new Date() - new Date(date);
    let time = parseFloat(msd) / 1000;
    let str  = '';

    if (time != null && time != '') {

        if (time > 60 && time < 3600) {
            str = parseInt(time / 60.0) + ' 分钟前';
        }
        else if (time >= 3600 && time < 86400) {
            str = parseInt(time / 3600.0) + ' 小时前';
        }
        else if (time >= 86400 && time < 86400*30) {
            str = parseInt(time / 86400.0) + ' 天前';
        }
        else if (time >= 86400*30 && time < 86400*365) {
            str = parseInt(time / (86400.0*30)) + ' 个月前';
        } 
        else if(time >= 86400*365){
            str = parseInt(time / (86400.0*365)) + ' 年前';
        }
        else {
            str = parseInt(time) + ' 秒前';
        }
    }
    return str;
}
