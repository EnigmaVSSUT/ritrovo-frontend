import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/700.css'

const typography = {
	fontFamily: "Poppins",
	htmlFontSize: 16,
	fontSize: 16,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 700,
	head: {
        flexGrow: "1",
        cursor: "pointer",
        fontSize:'32px',
        fontWeight:'600',
        lineHeight:'48px',
        fontFamily:"poppins"
        },
		text:{
			fontFamily:"poppins"
		},
		sub:{
			position:'relative',
			fontSize:25,
			lineHeight:4,
			fontWeight:600,
			right:50,
		  fontFamily:"poppins",
		  marginLeft:'2px',
				  
		},
		sub1:{
				position:"relative",
				top:-40,
				right:30,
				cursor:"crosshair",		
		}
		,
		title:{
			position:'relative',
			flexGrow: "1",
			fontSize:20,
			fontWeight:'600',
			paddingBottom: "10px",
			top:'130px',
			lineHeight:'30px',
			fontFamily:"poppins"
		},
		title1: {
			position:'relative',
			flexGrow: "1",
			fontSize:20,
			fontWeight:'400',
			paddingBottom: "10px",
			top:'90px',
			lineHeight:'20px',
			fontFamily:"poppins",
			left:'160px'
			},
			title3: {
				flexGrow: "1",
				cursor: "pointer",
				fontSize:'28px',
				fontWeight:'900',
				paddingBottom: "10px",
				marginLeft:'20px',
				marginTop:'10px',
				},
				
	    title4: {
			position:"relative",
		textDecoration: "none",
		fontWeight:'700',
		fontSize:'54px',
		top:30,
		left: 32,
		fontFamily:"poppins",
		marginBottom :"65px",
	  },
	  stitle: {
		position:"relative",
		fontWeight:'500',
		fontSize:'18px',
		top:40,
		left: 32,
		fontFamily:"poppins"
	  },
	  stitle1: {
		position:"relative",
		fontWeight:'600',
		fontSize:'20px',
		top:68,
		left: 32,
		fontFamily:"poppins"
	  },
	  stitle3: {
		position:"relative",
		fontWeight:'600',
		fontSize:'20px',
		top:95,
		left: 32,
		fontFamily:"poppins"
	  },
	  stitle2: {
		position:"relative",
		fontWeight:'500',
		fontSize:'18px',
		top:130,
		left: 32,
		fontFamily:"poppins"
	  },
	  nav: {
		textDecoration: "none",
		fontWeight: '600',
		fontSize: '20px',
		marginTop: 20,
		marginRight: 32,
		marginLeft: 56,
		marginBottom: 16,
		},
		nav1: {
			textDecoration: "none",
			borderRadius: '15px',
			fontWeight: '500',
			fontSize: '20px',
			paddingTop: 8,
			paddingLeft: 32,
			paddingBottom: 8,
			paddingRight: 32,
			marginTop: 12,
			marginRight: 32,
			marginLeft: 56,
			marginBottom: 16,
			
		},
		logo: {
			flexGrow: "1",
			cursor: "pointer",
			fontSize: '28px',
			fontWeight: 900,
			paddingBottom: "10px",
			marginLeft: '20px',
			marginTop: "10px"
		},
		drawer: {
			textDecoration: "none",
			fontWeight: '600',
			fontSize: '20px',
			marginTop: 20,
			marginBottom:16,
		  },
		  drawer1: {
			position: "relative",
			right: "8px",
			textDecoration: "none",
			borderRadius: '15px',
			fontWeight: '500',
			fontSize: '17.5px',
			paddingTop: 8,
			paddingLeft:32,
			paddingBottom: 8,
			paddingRight:32,
			marginTop: 12,
			marginBottom: 16,
		  },
}

export default typography
