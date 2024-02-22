import { Image, StyleSheet, Text, View } from "react-native";
import Item from "./Item";


export interface IProduct {
    name: string,
    image: string,
    price: number,
    discount?: number,
    price_sub?: number
}

const products: IProduct[] = [
    {
        name: 'Product Name',
        image: 'https://via.placeholder.com/150',
        price: 100000,
        discount: 100,
        price_sub: 100000
    },
    {
        name: 'Product Name',
        image: 'https://via.placeholder.com/150',
        price: 100000,
        discount: 100,
        price_sub: 100000
    },
    {
        name: 'Product Name',
        image: 'https://via.placeholder.com/150',
        price: 100000,
        discount: 100,
        price_sub: 100000
    },
    {
        name: 'Product Name',
        image: 'https://via.placeholder.com/150',
        price: 100000,
        discount: 100,
        price_sub: 100000
    },
]

export default function PopularProduct() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Popular Product</Text>
            {Array.isArray(products) && products.map((product, index) => (
                <Item key={index} name={product.name} image={product.image} discount={product.discount} price={product.price} price_sub={product.price_sub} />
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00e6ac',
        paddingHorizontal: 10
    },
    heading: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: 'darkorange',
        width: '80%',
        textAlign: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 5
    },
})