import utils from './utils'

/**
 * 通过tab获取文字标签
 *
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

/** 
 * 获取标签样式
 * @param {string} tab分类
 * @param {bool} 是否是精华帖
 * @param {bool} 是否是置顶帖
 */
exports.getTabClassName = (tab, good, top) => {
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

