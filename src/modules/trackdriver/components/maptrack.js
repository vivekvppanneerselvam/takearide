import React, {useState, useEffect} from "react";
import { View } from "native-base";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import {getRoutePoints} from '../../home/action'
import { connect } from "react-redux";
import MapViewDirections from 'react-native-maps-directions';
var width = Dimensions.get("window").width; //full width

export const MapTrack = (props)=>{

	const { selectedPickUp, selectedDropOff } = props.selectedAddress || {};
	const [state, setState] = useState({});
	useEffect(() => {
		props.getRoutePoints(state.origin, state.destination);
	}, [])

	useEffect(() => {
		if (selectedPickUp && selectedDropOff) {
			let origin = selectedPickUp.latitude + ',' + selectedPickUp.longitude, destination = selectedDropOff.latitude + ',' + selectedDropOff.longitude
			props.getRoutePoints(origin, destination);
		}
	}, [props.selectedAddress])
	
	useEffect(() => {
		if (props.route_points) {
			setState(props.route_points)
		}
	}, [props.route_points])

	return(
		<View style={styles.container}>
			<MapView
				provider={MapView.PROVIDER_GOOGLE}
				style={styles.map}
				region={props.region}
			>

				{ selectedPickUp &&
					<MapView.Marker
						coordinate={{latitude:selectedPickUp.latitude, longitude:selectedPickUp.longitude}}
						pinColor="green"

					/>	
				}
				{ selectedDropOff &&
					<MapView.Marker
						coordinate={{latitude:selectedDropOff.latitude, longitude:selectedDropOff.longitude}}
						pinColor="blue"

					/>	
				}
				{ props.showCarMaker &&
					<MapView.Marker
						coordinate={{latitude:props.driverLocation.coordinate.coordinates[1], longitude:props.driverLocation.coordinate.coordinates[0]}}
						image={props.carMarker}

					/>	
				}
				{(selectedPickUp && selectedDropOff) && <MapViewDirections
					origin={{ latitude: selectedPickUp.latitude, longitude: selectedPickUp.longitude }}
					destination={{ latitude: selectedDropOff.latitude, longitude: selectedDropOff.longitude }}
					apikey={'Ajfr4PZQDQEuJgGWbAD39XbfQsYbc0zrpKY8B2aYzFxfs0h7dkvF-oGJyV0HS-H-'}
					strokeWidth={3}
					strokeColor="hotpink"
				/>
				}
				{/*used to drae line on rout point of locations*/}
				{(selectedPickUp && selectedDropOff) && < MapView.Polyline
					coordinates={state.coords}
					strokeWidth={2}
				/>}

			</MapView>
		</View>
	)
}

const mapStateToProps = (state) => {
	return {		
		route_points: state.home.route_points || {}
	}
}

export default connect(mapStateToProps, { getRoutePoints })(MapTrack) ;




const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    inputWrapper:{
        top:0,
        position:"absolute",
        backgroundColor:"#fff",
        width:width
    },
    inputSearch:{
        backgroundColor:"#fff"
    }
};