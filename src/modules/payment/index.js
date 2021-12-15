import React, {useState ,useEffect}from 'react'
import { View, StyleSheet } from 'react-native';
import connectToState from "./component/connecttostate";
import CCF from "./component/creditcardinput";
import LiteCCF from "./component/litecreditcardinput";
import CV from "./component/cardview";
export const CreditCardInput = connectToState(CCF);
export const LiteCreditCardInput = connectToState(LiteCCF);

function Payment(props){
    return(
        <View>
            {/* <CV/> */}
            {/* <LiteCreditCardInput/> */}
             <CreditCardInput/>
        </View>
    )
}

export default Payment

/* export const CreditCardInput = connectToState(CCF);
export const LiteCreditCardInput = connectToState(LiteCCF);
export const CardView = CV; */