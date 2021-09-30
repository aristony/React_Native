import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class App12 extends Component {
    Delete = async(id)=>{
        const user = await firestore().collection('Users').doc(id).delete().then(()=>console.log('Sukses didelete'))
    
    
    
    }
    
    

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default App12
