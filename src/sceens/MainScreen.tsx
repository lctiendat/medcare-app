import { Image, Text, View } from "react-native";

export default function MainScreen(params: any) {

     return (
          <View
               style={{
                    flex: 1,
                    backgroundColor: 'white'
               }}
          >
               <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    height: 50,
                    backgroundColor: 'green'
               }}>
                    <Image style={{
                         width: 30,
                         height: 30
                    }} source={require('../assets/images/app/icon-fire.png')} />
                    <Text style={{
                         fontSize: 20,
                         color: 'red'
                    }} >Đấm nhau k nga lê</Text>
                    <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/app/question.png')} style={{
                         width: 20,
                         height: 20,
                         tintColor: 'black',
                    }} />
               </View>
               </View>
               
          </View>
     )
}