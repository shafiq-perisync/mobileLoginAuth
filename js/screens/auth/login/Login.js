import { View, Text, Platform, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { borderWidth, flex, fontSize, margin, marginPosition, padding, paddingPoistion, radius, screenHeight, screenWidth, styles } from '../../../styles/Styles'
import { TextInput } from 'react-native-gesture-handler'
import { ButtonComponent, ScreenViewComponent } from '../../../components'
import DeviceInfo from 'react-native-device-info';
import Lottie from "lottie-react-native";
// DeviceNumber.get().then((res) => {
//     console.log("lkhajbsdcjhads", res);
// });

export const LoginScreen = () => {
    const [phoneNum, setPhoneNum] = useState("");
    // console.log("phoneNum", phoneNum);

    const [enteredPhone, setEnteredPhone] = useState("")
    // console.log("enteredPhone", enteredPhone)

    const [showOtpInput, setShowOtpInput] = useState(false)

    const [otp, setOtp] = useState("");
    // console.log("otp12", otp);

    const sendPhoneNumber = async () => {

        const hasPhoneStatePermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        );
        const hasReadSMSPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_SMS,
        );

        if (
            hasPhoneStatePermission === PermissionsAndroid.RESULTS.GRANTED &&
            hasReadSMSPermission === PermissionsAndroid.RESULTS.GRANTED
        ) {
            const phoneNumber = await DeviceInfo.getPhoneNumber();
            console.log("phoneNumber", phoneNumber)
            setPhoneNum(phoneNumber)
            if (phoneNumber) {
                await api.sendPhoneNumber(phoneNumber);
            }
        }
    }

    const finalNum = "+91" + enteredPhone;
    console.log("finalNum", finalNum);

    const handleSubmit = () => {
        if (phoneNum == finalNum) {
            alert("You have successfully Logged in!");
        } else {
            if (enteredPhone.length < 10) {
                alert("Enter correct phone number");
            } else {
                setShowOtpInput(true);
            }
        }
    }

    const handleOtp = () => {
        if (otp === "1234") {
            alert("You have successfully logged in");               
        } else {
            alert("Invalid Otp");
        }
    }

    useEffect(() => {
        sendPhoneNumber();
    }, []);

    return (
        <ScreenViewComponent style={[flex(1), styles.centerVertical, padding(25), styles.bgWhite]}> 
            <View style={[styles.allCenter]}> 
                {/* <LottieView source={require("../../../../assets/login.json")} autoPlay loop style={{ width: '100%', height: 200 }} />  */} 
                <Lottie source={require("../../../../assets/login.json")} style={{width: "100%", height: 300}} autoPlay loop/>
            </View> 
            <Text style={[fontSize(34), { fontWeight: "600" }, styles.black]}>Let's </Text> 
            <Text style={[fontSize(34), { fontWeight: "600" }, styles.black]}>Get <Text style={styles.blue}>Started</Text></Text> 
            <TextInput style={[padding(0, 25, 20), marginPosition(20, 0, 10, 0), styles.black, radius(15), styles.bgGray, { width: "100%" }]} placeholder='Phone Number' placeholderTextColor={"lightgray"} keyboardType='numeric' onChangeText={(text) => setEnteredPhone(text)} maxLength={10} value={enteredPhone}/>
            {
                showOtpInput && <TextInput style={[padding(0, 25, 20), marginPosition(10, 0, 10, 0), styles.black, radius(15), styles.bgGray, { width: "100%" }]} placeholder='Enter OTP' placeholderTextColor={"lightgray"} keyboardType='numeric' onChangeText={(text) => setOtp(text)} />
            }
            <ButtonComponent style={[styles.bgBlue, padding(20), radius(30), margin(0, 10), { width: "100%" }]} title="Continue" onPress={() => showOtpInput ? handleOtp() : handleSubmit()} />
        </ScreenViewComponent>
    )
}

