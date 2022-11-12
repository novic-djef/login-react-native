import { View, Text, Dimensions, FlatList, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import MainContainer from "../components/Container/MainContainer";





const Searchbar = () => {

    useEffect(() => {
        fetchPosts();
        return () => {

        }
    }, [])

  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState('');
  const [search, setsearch] = useState([]);


  const fetchPosts = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL).then((response) => response.json()).then((responseJson) => {
       setFilterData(responseJson);
       setMasterData(responseJson);
    }).catch((error) => {
        console.log(error)
    })  
  }

const searchFilter = (text) => {
  if(text){
    const newData = masterData.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf > -1;
    });
    setFilterData(newData);
    setsearch(text);
  } else {
    setFilterData(masterData);
    setsearch(text)
  }
}

  const ItemView = ({item}) => {
    return(
        <Text style={ styles.itemStyle } >
            {item.id}{'. '}{item.title.toUpperCase()}
        </Text>
    )
  }
  const ItemSeparatorView = () =>{
    return(
      <View  
      style={{height: 0.5, width:'100%', backgroundColor: '#c8c8c8'}}
      
      />
    )
  }
 
  return (
    <MainContainer>
   
        <TextInput 
            style={ styles.textInputStyle}
            value={search}
            placeholder= 'effectuer votre recherche'
            onChangeText={(text) => searchFilter(text)}
            // content={<SearchIcon className="bg-[#050505]" />}
         />
       
       <DashboardCard
        cardTitle="Balance"
        totalAmount={"57,000.00 Frs"}
        dateText="07-08-2022"
        icon={<ChartBarIcon color="#008D96" size={60} />}
      />
  
    </MainContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 15
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 22,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
       
    }
})

export default Searchbar;
