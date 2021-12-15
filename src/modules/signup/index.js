
import React, { useState, useEffect } from 'react';
import { Map, List } from 'immutable'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { insertUser } from './action'
import { connect } from 'react-redux';

function SignUp(props) {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const onClickListener = (viewId) => {
        if (viewId == "signup") {
            let obj = {
                name: state.name,
                email: state.email,
                password: state.password
            }
            console.log(obj)
            props.insertUser(obj);
        } else
            Alert.alert("Alert", "Button pressed " + viewId);
    }

    useEffect(() => {
        if (!props.insert_user_loading) {
            if (!props.insert_user.toJS().error) {
                alert("sucessfully inserted the record")
            } else {
                alert(JSON.stringify(props.insert_user.toJS().data))
            }
        }
    }, [props.insert_user_loading])


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Full name"
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => setState((prevState) => { prevState['name'] = value; return ({ ...prevState }) })} />
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png' }} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => setState((prevState) => { prevState['email'] = value; return ({ ...prevState }) })} />
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png' }} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => setState((prevState) => { prevState['password'] = value; return ({ ...prevState }) })} />
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/40/000000/password.png' }} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => setState((prevState) => { prevState['confirmPassword'] = value; return ({ ...prevState }) })} />
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/40/000000/password.png' }} />
            </View>

            <TouchableOpacity style={styles.btnByRegister} onPress={() => onClickListener('restore_password')}>
                <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickListener('signup')}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonContainer} onPress={() => onClickListener('register')}>
                <Text style={styles.btnText}>Have an account?</Text>
            </TouchableOpacity>
        </View>
    );

}
const mapStateToProps = (state) => {
    return {
        insert_user_loading: state.SignUpReducer.getIn(['insert_user', 'loading'], true),
        insert_user: state.SignUpReducer.getIn(['insert_user'], Map())
    }
}
export default connect(mapStateToProps, { insertUser })(SignUp)
const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnByRegister: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: "#FF4DFF",
        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: "white",
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    textByRegister: {
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});  
