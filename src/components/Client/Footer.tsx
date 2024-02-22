import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

interface IContent {
    title: string,
    desc: string,
    icon: string
}

const content = [
    {
        title: 'Thuốc chính hãng',
        desc: 'Pharmacy description',
        icon: 'shield-checkmark-outline'
    },
    {
        title: 'Đổi trả trong 30 ngày',
        desc: 'Pharmacy description',
        icon: 'cube-outline'
    },
    {
        title: 'Cam kết 100%',
        desc: 'Pharmacy description',
        icon: 'thumbs-up-outline'
    },
    {
        title: 'Miễn phí vận chuyển',
        desc: 'Pharmacy description',
        icon: 'rocket-outline'
    },

]

export default function Footer() {
    return (
        <View style={styles.container}>
            <FlatList data={content} numColumns={2}  renderItem={({ item }) => <View style= {styles.wrap}>
                   <Icon name={item.icon} size={30} color="gray" />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.desc}</Text>
            </View>} />
             <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/app/family.png')} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30
    },
    wrap : {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    icon : {
        fontSize: 30
    },
    title : {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    desc : {
        fontSize: 13,
        color: 'gray'
    },
    image : {
        height: 300
    }
})