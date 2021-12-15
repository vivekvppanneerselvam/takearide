import React from "react";
import { Text, Image } from "react-native";
import { Footer, FooterTab, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
const micro = require("../../assets/img/micro.png");
const sedan = require("../../assets/img/sedan.png");
const suv = require("../../assets/img/suv.png");
const mini = require("../../assets/img/mini.png");
export const FooterComponent =  ({logo})=>{

	//tab bar items
	const tabs = [{
		title:"Micro",
		subTitle:"",
		icon:"micro"
	},
	{
		title:"Sedan/Prime",
		subTitle:"",
		icon:"sedan"
	},
	{
		title:"SUV",
		subTitle:"",
		icon:"suv"
	},{
		title:"Mini",
		subTitle:"",
		icon:"mini"
	}];

	return (
		<Footer>
			<FooterTab style={styles.footerContainer} >

				{
					tabs.map((obj, index)=>{
						return (
							<Button key={index}>
								{obj.icon === 'micro' && <Image resizeMode="contain" style={styles.logo} source={micro}/>}
								{obj.icon === 'mini' && <Image resizeMode="contain" style={styles.logo} source={mini}/>}
								{obj.icon === 'suv' && <Image resizeMode="contain" style={styles.logo} source={suv}/>}
								{obj.icon === 'sedan' && <Image resizeMode="contain" style={styles.logo} source={sedan}/>}
								<Text style={{fontSize:12, color:(index === 0) ? "#FF5E3A" : "grey"}}>{obj.title}</Text>
								<Text style={styles.subText}>{obj.subTitle}</Text>
							</Button>

						)
					})
				}

			</FooterTab>
		</Footer>
	);
}

export default FooterComponent;

const styles = {
	footerContainer:{
		backgroundColor:"#fff",	 
		width: '100%', 		
		backgroundColor: '#FF9800', 
		position: 'absolute',
		bottom: 0
	},
	subText:{
		fontSize:8
	},
	logo:{
		width:50,
		height:40
	}

};