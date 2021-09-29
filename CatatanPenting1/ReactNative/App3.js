import React from 'react'
import { View, Text ,TouchableOpacity } from 'react-native'

function App3() {
    return (
        <View>
           <TouchableOpacity  onPress = {colek_aku()}  style = {{backgroundCollor: 'red' , padding : 5}}>
           <Text style = {{color: '#FFF' , textAlign : 'center'}}>Colek Aku Juga</Text>
           </TouchableOpacity>
        </View>
    )
}

export default App3
