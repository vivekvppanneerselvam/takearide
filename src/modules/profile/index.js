import React, { Component, useState } from 'react';
import { TextInputMask, RadioButton } from 'react-native-paper';
import { Container, Content, Form } from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'

function Profile(props) {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        middlename: '',
        mobileno: '',
        address:'',
        address2:'',
        gender:''
    })
    const [checked, setChecked] = useState('first');
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.name}>Profile</Text>
                </View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                    </View>
                    <Form>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}>First Name</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 6 }}
                                label="First Name" type='flat' value={form.firstname}
                                onChangeText={text => setForm((prevState) => { prevState.firstname = text; return ({ ...prevState }) })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}>Middle Name</Text>
                            <TextInput label="Last Name" type='flat' value={form.middlename} style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 6 }}
                                onChangeText={text => setForm((prevState) => { prevState.middlename = text; return ({ ...prevState }) })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}>Last Name</Text>
                            <TextInput label="Last Name" type='flat' value={form.lastname} style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 6 }}
                                onChangeText={text => setForm((prevState) => { prevState.lastname = text; return ({ ...prevState }) })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}>Gender</Text>
                            <View style={{ flex: 2 }}>
                                <Text>Male</Text>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ flex: 2 }}>Female</Text>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}>Mobile No</Text>
                            <TextInput label="Mobile No" type='flat' style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 6 }}
                                value={form.mobileno}
                                onChangeText={text => setForm((prevState) => { prevState.mobileno = text; return ({ ...prevState }) })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}>Address</Text>
                            <TextInput label="Address" type='flat' style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 6 }}
                                value={form.mobileno}
                                onChangeText={text => setForm((prevState) => { prevState.address = text; return ({ ...prevState }) })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 2 }}></Text>
                            <TextInput label="Address" type='flat' style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 6 }}
                                value={form.mobileno}
                                onChangeText={text => setForm((prevState) => { prevState.address2 = text; return ({ ...prevState }) })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>State : TN Country: IND</Text>                           
                        </View>
                    </Form>
                </View>
            </View>

        </Container>
    );
}
export default Profile

const styles = StyleSheet.create({

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
        marginBottom: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        marginBottom: 40,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});





