import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  Text,
  View
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import {
 
  BarChart,
  
} from "react-native-chart-kit";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";





const App = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fajar, setfajar] = useState("");
  const [zohar, setzohar] = useState("");
  const [asar, setasar] = useState("");
  const [mag, setmag] = useState("");
  const [esha, setesha] = useState("");


  const onDateChange = (date, type) => {

    setfajar(null);
    setzohar(null);
    setasar(null);
    setmag(null);
    setesha(null);
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
    
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
            Salah App
        </Text>
        <CalendarPicker
          startFromMonday={true}

          //allowRangeSelection={true}

          minDate={new Date(2018, 1, 1)}
          maxDate={new Date()}
          previousTitle="Previous"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
     
          textStyle={{
            fontFamily: 'Cochin',
            color: 'black',
            alignSelf: 'center',

          }}
          onDateChange={onDateChange}
        
        />
        <View style={styles.textStyle}>
          <Text style={styles.textStyle}>
            Selected Start Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
         

        </View>
        <View style={styles.pray}>

          <View  style={styles.prop} >

            <Image
              style={styles.pic}
              source={require("./assets/fajrprayer.png")}
            ></Image>

            <RadioButtonGroup

              selected={fajar}
              containerStyle={{ flexDirection: "row" }}
              onSelected={(value) => setfajar(value)}
              radioBackground="blue">
              <RadioButtonItem  value="fajarof" label={<Text style={{marginRight:60}}>Offered</Text>
              } />
              <RadioButtonItem value="fajarnotof" label={
                <Text >Not Offered</Text>
              } />
            </RadioButtonGroup>

          </View >
          <View style={styles.prop} >

            <Image
              style={styles.pic}
              source={require("./assets/zuhar.png")}
            ></Image>

            <RadioButtonGroup

              selected={zohar}
              containerStyle={{ flexDirection: "row" }}
              onSelected={(value) => setzohar(value)}
              radioBackground="blue">
              <RadioButtonItem value="zoharof" label={<Text style={{marginRight:60}} >Offered</Text>
              } />
              <RadioButtonItem value="zoharnotof" label={
                <Text >Not Offered</Text>
              } />
            </RadioButtonGroup>

          </View >
          <View style={styles.prop} >

            <Image
              style={styles.pic}
              source={require("./assets/asar.png")}
            ></Image>

            <RadioButtonGroup

              selected={asar}
              containerStyle={{ flexDirection: "row" }}
              onSelected={(value) => setasar(value)}
              radioBackground="blue">
              <RadioButtonItem value="asarof" label={<Text style={{marginRight:60}} >Offered</Text>
              } />
              <RadioButtonItem value="asarnotof" label={
                <Text >Not Offered</Text>
              } />
            </RadioButtonGroup>

          </View >
          <View style={styles.prop} >

            <Image
              style={styles.pic}
              source={require("./assets/magrab.png")}
            ></Image>

            <RadioButtonGroup

              selected={mag}
              containerStyle={{ flexDirection: "row" }}
              onSelected={(value) => setmag(value)}
              radioBackground="green">
              <RadioButtonItem value="magof" label={<Text style={{marginRight:60}}>Offered</Text>
              } />
              <RadioButtonItem value="magnotof" label={
                <Text >Not Offered</Text>
              } />
            </RadioButtonGroup>

          </View >
          <View style={styles.prop} >

            <Image
              style={styles.pic}
              source={require("./assets/esha.png")}
            ></Image>

            <RadioButtonGroup

              selected={esha}
              containerStyle={{ flexDirection: "row" }}
              onSelected={(value) => setesha(value)}
              radioBackground="blue">
              <RadioButtonItem value="eshaof" label={<Text style={{marginRight:60}}>Offered</Text>
              } />
              <RadioButtonItem value="eshanotof" label={
                <Text >Not Offered</Text>
              } />
            </RadioButtonGroup>

          </View >

        </View>
        <View style={styles.MainContainer}>
          <Text style={{color:'blue',fontSize:30,fontWeight:'bold',marginBottom:40}}>Previous Record</Text>

<BarChart
  data={{

    labels: ['Fajar', 'Zohar', 'Asar', 'Magrib', 'Esha'],
    datasets: [{ data: [3, 5, 7, 4, 5] }],
  }}
  width={800}
  height={450}
  yAxisLabel={''}
  horizontalLabelRotation={false}

  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: 'black',
    backgroundGradientTo: 'purple',

    decimalPlaces: false,
    color: (opacity = 255) => '#ECEFF1',
    style: {
      borderRadius: 20, padding: 10
    },
  }}
  
/>
</View>
       
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  MainContainer: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 20,
    
    
  },
  checkbox: {
    alignSelf: 'center',
    height: 20,
    marginLeft: 40,
    width: 20
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    marginBottom: 40,
    marginTop:20,
    fontWeight:'bold',
    color:'blue'
  },
  pray: {
    height: 500,
    width: 500,
    alignItems: 'center',

    marginTop: 10
  },
  prop: {
    backgroundColor:'orange',
    height: 80,
    width: 500,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
   
  
  },
  pic: {
    height: 70,
    marginLeft: 50,
    marginRight: 30,
    width: 70,
  }
  ,
  text_off: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    alignSelf: 'center'
  },
 

});