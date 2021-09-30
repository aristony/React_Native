import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class App8 extends Component {
    state = {
        nama = "Joko",
        email = "Joko@gmail.com",
        detail :{
            'umur':25,
            'statue': single,
        }
    }

    ganti_Data=()=>{
            this.setState({nama : " Eko "});
            this.setState({email : "eko@gmail.com"})
            this.setState({detail : {'umur' : '18' , 'status': 'menikah'}})
    }
    render() {
        return (
            <View style= {styles.wraper}>
                <Text style = {styles.tulisan}>Nama Saya : {this.state.nama}</Text>
                <Text style = {styles.tulisan}>Nama Saya : {this.state.email}</Text>
                <Text style = {styles.umur}>Umur saya : {this.state.umur}</Text>
                <Text style = {styles.tulisan}>Umur saya : {this.state.detail.status} </Text>
                <Button
                onPress={this.ganti_Data}
                title = "Ubah Data"
                />
            </View>
        )
    }
}

export default App8


const styles = StyleSheet.create ({
wraper : {
    flex : 1 ,
    justifyContent: 'center',
    alignItems: 'center'
},
tulisan : {
    fontSize: 25
}





})

