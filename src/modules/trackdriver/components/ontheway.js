import React from "react";
import {Text, Image, StyleSheet, Dimensions} from "react-native";
import { View, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
var width = Dimensions.get("window").width; //full width

export const DriverOnTheWayFooter = ({ driverInfo, distanceFromDriver})=>{
	const { vehicle } = driverInfo || {};
	const { duration } = distanceFromDriver.rows[0].elements[0] || "";
	return (
		<View style={styles.footerContainer}>
			<View style={styles.iconContainer}>
				<Icon name="window-minimize" style={styles.icon}/>
				<Text style={styles.distanceText}>{(duration.value < 100) ? "Your driver has arrived" : duration.text}</Text>
				<Text style={styles.onWayText}>Your driver is on the way</Text>
				<Text style={styles.vehicleText}>{vehicle && vehicle.plateNumber} {vehicle && vehicle.model}</Text>

			</View>

		</View>

	);
}

export default DriverOnTheWayFooter;


const styles = {
    footerContainer:{
        backgroundColor:"#ffffff",
        height:90,
        padding:0
    },
    iconContainer:{
        padding:0,
        marginTop:0,
        width:width,
        alignItems: "center",
    },
    icon:{
        color:"#E7E7E7",
        fontSize:15
    },
    distanceText:{
        marginTop:5,
        color:"#FF5E3A",
        fontWeight:"bold",
        fontSize:16
    },
    onWayText:{
        marginTop:5,
        color:"#636363",
        fontSize:15
    },
    vehicleText:{
        marginTop:5,
        color:"#636363",
        fontSize:12
    }
};