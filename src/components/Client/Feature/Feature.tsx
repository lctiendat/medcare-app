import { StyleSheet, View } from "react-native";
import Item from "./Item";



export interface IFeature {
    label: string;
    icon: string;
    length?: number
}

export default function Feature() {

    const features: IFeature[] = [
        {
            label: 'Đặt lịch khám',
            icon: 'calendar-outline'
        },
        {
            label: 'Tìm nhà thuốc',
            icon: 'locate-outline'
        },
        {
            label: 'Tư vấn trực tiếp',
            icon: 'medkit-outline'
        },
        {
            label: 'Kiểm tra sức khoẻ',
            icon: 'medkit-outline'
        }
    ]

    return (
        <View style={styles.container}>
            {Array.isArray(features) && features.map((item, index) => <Item key={index} label={item.label} icon={item.icon} length={item.length} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
})
