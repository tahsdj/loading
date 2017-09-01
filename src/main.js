import './main.sass'

var member = [
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
	},
	{
		name: 'tsai'
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