import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Category, Feature, Footer, PopularProduct, PostHome } from "../../components/Client";
import { CarouselCPN } from "../../components/Client";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={styles.header_input} placeholder='Tìm kiếm thuốc hoặc nhà thuốc' placeholderTextColor={'darkblue'} />
                <View style={styles.header_icon}>
                    <Icon style={styles.header_icon__item} name="notifications-outline" size={30} color="gray" />
                    <Icon style={styles.header_icon__item} name="cart-outline" size={30} color="gray" />
                </View>
            </View>
            <View style={{ flex: 9 }}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Feature />
                    <Category />
                    <PopularProduct />
                    <PostHome />
                    <Footer />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        height: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    header_input: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
        flex: 2,
        borderWidth: 0.5,
        borderColor: 'darkblue',
        fontSize: 12,
    },
    header_icon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    header_icon__item: {
        padding: 5,
        color: 'darkblue',
        fontSize: 25,
        borderWidth: 0.5,
        borderRadius: 50,
    }
})