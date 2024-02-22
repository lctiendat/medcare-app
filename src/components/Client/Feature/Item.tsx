import { StyleSheet, Text, View } from "react-native";
import { IFeature } from "./Feature";
import Icon from "react-native-vector-icons/Ionicons";


export default function Item({
    label,
    icon, length }: IFeature) {


    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name={icon ? icon : 'calendar'} size={30} color="gray" />
            <Text style={styles.label}>{label ? label : 'Label'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // padding: 20,
        borderRadius: 10,
        width: '20%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: 'darkblue',
        fontSize: 35

    },
    label: {
        fontSize: 13,
        color: 'black',
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10
    }
})