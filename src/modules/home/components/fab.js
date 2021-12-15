import React from "react";
import {Text} from "react-native";
import { View, Button } from "native-base";

export const Fab = ({onPressAction})=>{
	return (
		<Button style={styles.fabContainer} onPress={onPressAction}>
			<Text style={styles.btnText}> Book </Text>
		</Button>

	);
}

export default  Fab;

const styles = {
    fabContainer: {
        borderColor: "#fff",
        borderWidth: 1,
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 100,
        right:20,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor:"#FF5E3A"
    },
    disabledState:{       
        backgroundColor: "#D7D7D7",
    },
    activeState: {
        backgroundColor:"#FF5E3A",
    },
    btnText: {
        fontSize: 16,
        color:"#fff",
    },
    amount:{
        fontWeight:"bold",
        fontSize: 12
    }
};
