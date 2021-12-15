import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Text, Image, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import { View, Button } from "native-base";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get("window");

export const DriverFooterProfile = (props) => {
    const { profilePic, rating, vehicle } = props.driverInfo || "";

    useEffect(() => {

    }, [])

    function onPressContact() {

    }
    function onPressCancel() {

    }
    return (
        <View style={styles.footerContainer}>
            <View style={styles.container}>
                <View style={{ flex: 60, borderRightColor: '1px solid black', borderRightWidth: 1, justifyContent: "center", alignItems: "center", paddingTop: 0 }}>
                    <View style={styles.imageContainer}>
                        <Image resizemode="contain" style={styles.driverPic} source={require('../../../assets/img/person.png')} />
                    </View>
                    <Text>{props.driverInfo.firstName} {props.driverInfo.lastName}</Text>
                    <View style={styles.ratingContainer}>
                        <StarRating
                            starSize={20}
                            disabled={true}
                            maxStars={5}
                            rating={rating}
                            starColor="#FF5E3A"
                        />
                    </View>
                </View>
                <View style={{ flex: 60, justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.vehicleContainer}>
                        <Image resizemode="contain" style={styles.vehiclePic} source={require('../../../assets/img/front_view2.png')} />
                    </View>
                    <Text>{vehicle && vehicle.plateNumber}</Text>
                    <Text>OTP:{props.booking.otp}</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableHighlight style={styles.btn} onPress={onPressContact}>
                    <Text>Contact</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={onPressCancel}>
                    <Text>Cancel</Text>
                </TouchableHighlight>
            </View>
        </View>

    );
}
const mapStateToProps = (state) => {
    return {
        booking: state.home.booking || {}
    }
}
const mapActionCreators = {

}
export default connect(mapStateToProps, mapActionCreators)(DriverFooterProfile);

const styles = {
    footerContainer: {
        width: width,
        height: 200,
        padding: 10,
        backgroundColor: "white"
    },
    imageContainer: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    vehicleContainer: {
        width: 150,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    ratingContainer: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "#5C5C5C",
        fontSize: 50
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
    vehiclePic: {
        borderColor: "#ffffff",
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.8
    },
    btn: {
        flex: 1,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: "#1abc9c",
        borderColor: '#009387',
        border: '1px solid transparent'
        // backgroundImage: linear-gradient('141deg', '#9fb8ad 0%', '#1fc8db 51%', '#2cb5e8 75%')
    },
    container: {
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    }
};