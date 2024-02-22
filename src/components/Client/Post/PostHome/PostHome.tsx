import { Image, StyleSheet, Text, View } from "react-native";



export default function PostHome() {
    return (
        <View style={styles.container}>
            <View style={styles.heading} >
                <Text style={styles.heading_label}>Gợi ý sức khoẻ</Text>
                <Text style={styles.heading_more}>Xem tất cả</Text>
            </View>
            <View style={styles.post_wrap}>
                   <View style={styles.post}>
                       <View style={styles.post_image}> 
                         <Image style={styles.post_image_item} resizeMode="contain"  source={require('../../../../assets/images/app/duocpham.png')} />
                       </View>   
                       <View style={styles.post_detail}> 
                           <Text style={styles.post_detail_category}>Product Name</Text>
                           <Text style={styles.post_detail_title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad ipsum aliquam sequi eum, .</Text>
                       </View>
                   </View>
                   <View style={styles.post}>
                       <View style={styles.post_image}> 
                         <Image style={styles.post_image_item} resizeMode="contain"  source={require('../../../../assets/images/app/duocpham.png')} />
                       </View>   
                       <View style={styles.post_detail}> 
                           <Text style={styles.post_detail_category}>Product Name</Text>
                           <Text style={styles.post_detail_title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad ipsum aliquam sequi eum, .</Text>
                       </View>
                   </View>
                   <View style={styles.post}>
                       <View style={styles.post_image}> 
                         <Image style={styles.post_image_item} resizeMode="contain"  source={require('../../../../assets/images/app/duocpham.png')} />
                       </View>   
                       <View style={styles.post_detail}> 
                           <Text style={styles.post_detail_category}>Product Name</Text>
                           <Text style={styles.post_detail_title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad ipsum aliquam sequi eum, .</Text>
                       </View>
                   </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },
    heading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    heading_label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    heading_more: {
        fontSize: 13,
        color: 'blue',
    },
    post_wrap: {
        flex: 1,
        width: '100%',
    },
    post : {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 5
    },
    post_image: {
        flex: 1,
        justifyContent: 'center',
    },
    post_image_item: {
        width: 100,
        height: 100
    },
    post_detail: {
        flex: 2,
        justifyContent: 'center',
    },
    post_detail_category: {
        fontSize: 12,
        color: 'darkblue',
        
    },
    post_detail_title: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
        fontWeight: 'bold',

    }

})