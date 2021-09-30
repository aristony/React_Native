import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
export class App11 extends Component {
getDataCollection = async()=>{
    const user = await firestore().collection('Users').get();
    const AllData =  user.docs.map((doc)=>Object.assign({id:doc.id}, doc.data()))



}

getUpdate = async(id)=>{
    const user = await firestore().collection('Users').doc(id).update({age : 21 , name: 'Gus'}).then(()=>console.log('Sukses update'))



}




    render() {
        return (
            <View style = {{flex : 1}}>
            <TouchableOpacity onPress={()=>this.AddData()}><Text>Input Data</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setData()}><Text>Set Data</Text></TouchableOpacity>
            <FlatList
        data={this.state.data}
        renderItem={({item,index}) => 
        <TouchableOpacity style ={{backgroundColor: '#212121' , marginVertical: 10 , borderRadius: 3}} onPress = {()=>this.getUpdate(item.id)}>
            
            <Text style = {{color: '#ffffff'}}>{item.id}</Text>
            <Text style = {{color: '#ffffff'}}>{item.name}</Text>
            <Text style = {{color: '#ffffff'}}>{item.alamat}</Text>
            <Text style = {{color: '#ffffff'}}>{item.age}</Text>
        </TouchableOpacity>}
        keyExtractor={item => item.id}
      />

        </View>
        )
    }
}

export default App11
