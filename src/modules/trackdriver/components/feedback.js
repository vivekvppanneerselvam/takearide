import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    StyleSheet, View, Platform, Text, Image,
    Button, TouchableOpacity
} from 'react-native';
import { RadioButton } from 'react-native-paper';

function FeedBack(props) {
    const [checked, setChecked] = React.useState('first');
    const [state, setState] = useState({ Default_Rating: 1, Max_Rating: 5 })
    const { profilePic, rating, vehicle } = props.driverInfo || "";

    //Filled Star. You can also give the path from local
    let Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    //Empty Star. You can also give the path from local
    let Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    function UpdateRating(key) {
        //Keeping the Rating Selected in state
        setState((prevState) => {
            prevState.Default_Rating = key
            return ({ ...prevState })
        });
    }

    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= state.Max_Rating; i++) {
        React_Native_Rating_Bar.push(
            <TouchableOpacity
                activeOpacity={0.0}
                key={i}
                onPress={() => UpdateRating(i)}>
                <Image
                    style={styles.StarImage}
                    source={
                        i == state.Default_Rating ? { uri: Star } : { uri: Star_With_Border }
                    }
                />
            </TouchableOpacity>
        );
    }


    return (
        <View style={styles.MainContainer}>
            <Text style={styles.textStyle}>Complete Trip</Text>
            <Text >Thanks for the Payment</Text>
            <Text style={{ fontWeight: 'bold' }}>Rs. 249</Text>
            <View style={styles.imageContainer}>
                <Image resizemode="contain" style={styles.driverPic} source={require('../../../assets/img/person.png')} />
            </View>
            <Text>Taxi No: {vehicle && vehicle.plateNumber}</Text>
           {/*  <Text>{props.driverInfo.firstName} {props.driverInfo.lastName}</Text> */}
            {/*View to hold our Stars*/}
            <View style={styles.childView}>{React_Native_Rating_Bar}</View>
            <Text style={styles.textStyle}>
                {/*To show the rating selected*/}
                {state.Default_Rating} / {state.Max_Rating}
            </Text>
            <Text style={styles.textStyleSmall}>How would you rate your overall experience</Text>
            <Text style={styles.textStyleSmall}>with our service?</Text>
            <View style={{flexDirection:'row'}}>
                <RadioButton value="Very Good" status={checked === 'Very Good' ? 'checked' : 'unchecked'} onPress={() => setChecked('Very Good')} /> 
                <RadioButton value="Good" status={checked === 'Good' ? 'checked' : 'unchecked'} onPress={() => setChecked('Good')}/>
                <RadioButton value="Fair" status={checked === 'Fair' ? 'checked' : 'unchecked'} onPress={() => setChecked('Fair')}/>
                <RadioButton value="Poor" status={checked === 'Poor' ? 'checked' : 'unchecked'} onPress={() => setChecked('Poor')}/>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        booking: state.home.booking || {}
    }
}
const mapActionCreators = {

}
export default connect(mapStateToProps, mapActionCreators)(FeedBack)



const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        marginBottom:10
    },
    imageContainer: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    driverPic: {
        borderColor: "#ffffff",
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    StarImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000'        
    },
});