import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { IProduct } from "./PopularProduct";

export default function Item({ name, image, discount, price, price_sub }: IProduct) {
    return (
        <View style={styles.product}>
            <Image style={styles.product_image} source={require('../../../assets/images/app/duocpham.png')} />
            <View style={styles.product_detail}>
                <Text style={styles.product_detail_name}>Product Name</Text>
                <Text style={styles.product_detail_price}>1.000.000 đ / Hộp</Text>
                <Text style={styles.product_detail_price_sub}>1.000.000 đ</Text>

                <View style={styles.product_detail_action}>
                    <Icon style={styles.product_detail_action_icon} name="heart-outline" />
                    <Icon style={styles.product_detail_action_icon} name="add-circle-outline" />
                </View>
            </View>
            <View style={styles.product_discount}>
                <Text style={styles.product_discount_text}>-10%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        flex: 1,
        flexDirection: 'row',
        height: 120,
        alignContent: 'center',
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        position: 'relative',
        marginVertical: 10
    },
    product_image: {
        flex: 3,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        width: 100,
        height: 100
    },
    product_detail: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    product_detail_name: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    product_detail_price: {
        fontSize: 14,
        color: 'darkblue',
        fontWeight: 'bold'
    },
    product_detail_action: {
        flexDirection: 'row',
        textAlign: 'right',
        justifyContent: 'flex-end',
    },
    product_detail_action_icon: {
        marginHorizontal: 10,
        color: 'gray',
        fontSize: 23
    },
    product_detail_price_sub: {
        fontSize: 12,
        color: 'gray',
        textDecorationLine: 'line-through',
    },
    product_discount: {
        position: 'absolute',
        backgroundColor: 'red',
        borderTopLeftRadius: 10,
        padding: 5,
        left: 0,
        top: 0,
        zIndex: 10,
        borderBottomRightRadius: 10
    },
    product_discount_text: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold'
    }
})