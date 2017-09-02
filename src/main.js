import './main.sass'

var member = [
	{
		name: '羅于晴',
		work: '工作分配,簡報', 
		skills: '金工,木工,皮革 , SW, Rhions',
		msg: '感恩的心',
		imgUrl: './img/member0.png'
	},
	{
		name: '蔡帛融',
		work: '網站架設,資料視覺化', 
		skills: '繪畫、影片剪輯',
		msg: '我要回美國～',
		imgUrl: './img/member1.png'
	},
	{
		name: '李雨珊',
		work: '文化與觀光嚮導', 
		skills: ' Ai,威力導演',
		msg: '全盤端走～',
		imgUrl: './img/member2.png'
	},
	{
		name: '張家瑜',
		work: '攝影、影片剪輯', 
		skills: '日文、智財相關法規',
		msg: '回家倒垃圾',
		imgUrl: './img/member3.png'
	},
	{
		name: '黃昱豪',
		work: '田野調查 , 口頭報告', 
		skills: 'Ps、口說',
		msg: '我家還沒搬完',
		imgUrl: './img/member4.png'
	},
	{
		name: '陳靜淳',
		work: '繪畫，展版製作', 
		skills: 'Ai、Ps、平面繪畫、SW',
		msg: '我有事先走了',
		imgUrl: './img/member5.png'
	},
	{
		name: '尤威理',
		work: '簡報,資訊圖像化', 
		skills: '簡報設計,資訊設計',
		msg: '很臭，不要',
		imgUrl: './img/member6.png'
	},
	{
		name: '邱芊頻',
		work: '排版編輯、文字內容', 
		skills: ' Ai, Id, 攝影,日文',
		msg: '從缺',
		imgUrl: './img/member7.png'
	},	
	{
		name: '連建榮',
		work: '攝影,影片剪輯', 
		skills: 'Ai, Ps, 土木',
		msg: '我要晾衣服',
		imgUrl: './img/member8.png'
	},
	{
		name: '林亞逸',
		work: '會議記錄,財務管理', 
		skills: 'Ai, Ps, 土木',
		msg: '....XD',
		imgUrl: './img/member9.png'
	},
	{
		name: '林菀婷',
		work: '簡報,企劃發想', 
		skills: '簡報設計,創意思考',
		msg: '我要玩楓之谷',
		imgUrl: './img/member10.png'
	},
]

var app = new Vue({
		el: "#app",
		data: {
			mainBoardCss: {
				logo: {
					marginTop: '0px'
				},
				puzzleBox: {
					marginTop: '200px'
				},
				experienceBox: {
					marginLeft: '0px'
				},
				picnicBox: {
					marginRight: '0px'
				}
			},
			members: member
		},
		methods: {
			move() {
				let scrollY = body.scrollTop 
				let width = window.innerWidth //get screen width
				let experienceMove = (scrollY / 200)*(width*0.5*0.2)
				let picnicMove = (scrollY / 200)*(width*0.5*0.4)
				if( scrollY <= 200){
					this.mainBoardCss.logo.marginTop = `${scrollY*1.5}px`
					this.mainBoardCss.puzzleBox.marginTop = `${200-scrollY*0.8}px`
					this.mainBoardCss.experienceBox.marginLeft = `${experienceMove}px`
					this.mainBoardCss.picnicBox.marginRight = `${picnicMove}px`
				}else if(scrollY <= 250 && scrollY > 200){
					// to asure these block move to the end 
					this.mainBoardCss.picnicBox.marginRight = `${width*0.5*0.4}px`
					this.mainBoardCss.experienceBox.marginLeft = `${width*0.5*0.2}px`
				}
			}
		}
	})

const body = document.querySelector('body')

window.addEventListener("scroll",app.move)