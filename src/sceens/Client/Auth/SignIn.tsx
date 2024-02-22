import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function SignIn({ navigation }: any) {
    return (
        <View style={styles.container} >
            <View style={styles.banner}>
                <Text style={styles.banner_text}>Welcome Back !</Text>
                <Image style={styles.banner_image} source={require('../../../assets/images/app/login.png')} />
            </View>
            <View style={styles.form}>
                <View style={styles.form_input_group}>
                    <TextInput style={styles.form_input} placeholder='email@email.com' placeholderTextColor={'gray'} />
                    <Icon style={styles.form_input_icon} name="mail-outline" size={25} color="gray" />
                </View>
                <View style={styles.form_input_group}>
                    <TextInput style={styles.form_input} placeholder='********' placeholderTextColor={'gray'} secureTextEntry />
                    <Icon style={styles.form_input_icon} name="lock-closed-outline" size={25} color="gray" />
                </View>
                <View style={styles.form_button}>
                    <TouchableOpacity style={styles.form_button__btn} onPress={() => navigation.navigate('HomeClient')}><Text style={styles.form_button__btn__text}>Login</Text></TouchableOpacity>
                    <Text style={styles.form_button__text}>Forgot Password?</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footer_text}>Or Login With</Text>
                    <View style={styles.footer_icon}>
                        <Icon style={styles.footer_icon__item} name="logo-facebook" size={30} color="blue" />
                        <Icon style={styles.footer_icon__item} name="logo-google" size={30} color="red" />
                    </View>
                    <Text style={styles.footer_text}>Don't have an account? <Text style={styles.footer_text__link}>Sign Up</Text></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20
    },
    banner: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    banner_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    banner_text: {
        fontSize: 30,
        color: 'darkblue',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    form: {
        flex: 4,
        marginHorizontal: 30,
        marginTop: 30
    },
    form_input: {
        width: '100%',
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        color: 'black',
        paddingLeft: 40,
        marginVertical: 10
    },
    form_input_group: {
        position: 'relative',
    },
    form_input_icon: {
        position: 'absolute',
        left: 5,
        top: 20,
        zIndex: 1,
    },
    form_button: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10
    },
    form_button__btn: {
        flex: 1,
        backgroundColor: 'darkblue',
        height: 45,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    form_button__btn__text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    form_button__text: {
        color: 'darkblue',
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        marginVertical: 10
    },
    footer: {
        flex: 1
    },
    footer_icon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    footer_icon__item: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderColor: '#ccc',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    footer_text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    footer_text__link: {
        color: 'darkblue',
        fontWeight: 'bold'
    }
})