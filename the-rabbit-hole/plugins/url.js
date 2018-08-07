/*判断环境使用不同接口*/
export let baseurl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';