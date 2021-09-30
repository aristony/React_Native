import React from 'react'
import { View, Text  , StyleSheet} from 'react-native'

const app7 = () => {
    return (
        <View style = {style.area}>
            <View style = {styles.kotak_merah}></View>
            <View style = {styles.kotak_kuning}></View>
            <View style = {styles.kotak_hijau}></View>
        </View>
    )
}
 {/*flex-direction untuk mengatur arah dari flex  'coulumn-reverse'(kolom kebalikan) 'row' (mendatar) 'row-reverse' (mendatar - kebalikan nya)*/}
 {/* justifyContent = center / akan kebagian tengah   justifyContent = flexEnd /merapat ke sebelah kanan   justifyContent = flexStart / merapat ke sebelah kiri*/}
 {/* justifyContent = spacearound / berjarak memenuhu baris */}
 {/*justifyContent = 'space-evenly' */}
 {/*justifyContent = 'space-betwen' berjarak  */}

const styles = StyleSheet.create({
area : {
    flexDirection: 'column' ,
    justifyContent:'center'
},
kotak_merah : {
    width:100,
    height:100,
    backgroundColor:'red'
},
kotak_kuning : {
    width:100,
    height:100,
    backgroundColor:'red'


},
kotak_hijau : {
    width:100,
    height:100,
    backgroundColor:'green'




}


})








export default app7
