import { Image, StyleSheet, View } from "react-native";
import { ICategory } from "./Category";
import { Text } from "react-native";



export default function Item({ label, image }: ICategory) {

    return (
        <View style={styles.container}>
            <View style={styles.image} >
                <Image style={styles.image_item} resizeMode="contain" source={require('../../../assets/images/app/duocpham.png')} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        marginHorizontal: 10,
        width: 70,
        height: 100,
        marginVertical: 20
    },
    label: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    image: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 50
    },
    image_item: {
        width: 70,
    }
})