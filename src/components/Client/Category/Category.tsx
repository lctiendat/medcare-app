import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./Item";


export interface ICategory {
    label: string;
    image?: string;
}

export default function Category() {

    const categories: ICategory[] = [
        {
            label: 'Dược phẩm',
            image: '../../../assets/images/app/duocpham.png'
        },
        {
            label: 'Chăm sóc sức khoẻ',
            image: '../../../assets/images/app/duocpham.png'
        },
        {
            label: 'Làm đẹp',
            image: '../../../assets/images/app/duocpham.png'
        },
        {
            label: 'TP chức năng',
            image: '../../../assets/images/app/duocpham.png'
        },
        {
            label: 'Chăm sóc cá nhân',
            image: '../../../assets/images/app/duocpham.png'
        },
        {
            label: 'Sản phẩm tiện lợi',
            image: '../../../assets/images/app/duocpham.png'
        },
        {
            label: 'Thiết bị y tế',
            image: '../../../assets/images/app/duocpham.png'
        },

    ]

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Danh mục sản phẩm</Text>
            <FlatList data={categories} horizontal renderItem={({ item }) => <Item label={item.label} image={item.image} />} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 10

    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})