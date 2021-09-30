import React, { Component } from 'react'
import { Text, View , TouchableOpacity , FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
export class App10 extends Component {
    constructor(props){
        super(props);
        this.state = {
        data:[]

        }
    }
  
  componentDidMount(){
      //this.getData();
      this.getDataCollection();
  }
  
  
  
  
    getData = async ()=>{
   const user  = await firestore().collection('Users').doc('GusNando').get();
   console.log(user.data());
   //const data = user.data(); 
//console.log(data)
    }
    getData1 = async ()=>{
        const user  = await firestore().collection('Users').doc('paste disini').get();
        console.log(user.data());
     
     
         }


    getDataCollection = async () =>{
        const user = await firestore().collection('Users').get();
        const AllData = user.docs.map((doc) => doc.data());
        //this.setState({data:allData});
        console.log(user.data())
        console.log((doc) => doc.data() );
        console.log(AllData)


    }
    render() {
        return (
            <View style = {{flex : 1}}>
            <TouchableOpacity onPress={()=>this.AddData()}><Text>Input Data</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setData()}><Text>Set Data</Text></TouchableOpacity>
            <FlatList
        data={this.state.data}
        renderItem={({item,index}) => 
        <View style ={{backgroundColor: '#212121' , marginVertical: 10 , borderRadius: 3}}>
            <Text style = {{color: '#ffffff'}}>{item.name}</Text>
            <Text style = {{color: '#ffffff'}}>{item.alamat}</Text>
            <Text style = {{color: '#ffffff'}}>{item.age}</Text>
        </View>}
        keyExtractor={item => item.id}
      />

        </View>
        )
    }
}

export default App10
