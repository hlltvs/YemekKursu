import * as React from 'react';
import { FlatList, Text, View, SectionList, StyleSheet } from 'react-native';
//import {  HStack, Checkbox } from 'native-base';
//import CheckboxFormX from 'react-native-checkbox-form';
//import CheckBox from 'react-native-check-box';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import RNCheckboxCard from 'react-native-checkbox-card';
import { Card } from "react-native-elements";
//import ImagedCardView from "react-native-imaged-card-view";


function AnaSayfa() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AnaSayfa!</Text>
    </View>
  );
}

function YapilanTarifler() {
const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something fosur"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

  return (
    <View>
     <FlatList
        data={data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={null}
              image={{ url: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 160 }}
              onPress={(elements)=> {console.log(elements)}}
            >
              <Text style={{ marginBottom: 10 }}>
                {rowData.title}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

function YapilacakTarifler() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Çorba', data: ['Mantar Çorbası'] },
          { title: 'Ana Yemek', data: ['Perde Pilavı'] },
          { title: 'Salata', data: ['Sezar Salata'] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
/*
function MalzemeListesi() {
  //https://reactnativeexample.com/checkbox-card-is-customizable-and-animated-built-in-check-state-integration/
  const [checked, setChecked] = React.useState(false);
  //const data= [{ id: 1, name: 'Green Book' }, { id: 2, name: 'Bohemian Rhapsody' }]
  // const mockData = [
  //   {
  //     label: 'label1',
  //     RNchecked: true,
  //   },
  //   {
  //     label: 'label2',
  //     RNchecked: false,
  //   },
  // ];

  return (
    <RNCheckboxCard
      darkMode
      text="Banana"
      quantity="x2"
      enableQuantityText
      onPress={(checked: boolean) => console.log('Checked: ', checked)}
    />
  );
}
*/


function YapilanTarifler() {
    const styles = StyleSheet.create({
      container: {
        //flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    });
  
  // return <List.AccordionGroup>
  //     <List.Accordion title="Accordion 1" id="1">
  //       <List.Item title="Item 1" />
  //     </List.Accordion>
  //     <List.Accordion title="Accordion 2" id="2">
  //       <List.Item title="Item 2" />
  //     </List.Accordion>
  //     <View>
  //       <Text>
  //         List.Accordion can be wrapped because implementation uses React.Context.
  //       </Text>
  //       <List.Accordion title="Accordion 3" id="3">
  //         <List.Item title="Item 3" />
  //       </List.Accordion>
  //     </View>
  //   </List.AccordionGroup>
    
    return <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>

    
    {YapilanTariflerListesi.map((item) => {
      return (
  
        <View style={styles.container} >
        <List.Section>
          <List.Accordion
            title={item.Tarih}
            left={(props) => <List.Icon {...props} icon="folder" />}>
            {item.Icerik.map((detayItem) => {
              return (
                <List.Item
                  title={detayItem.Ad}
                  description={detayItem.Tur}
                  // left={(props) => <List.Icon {...props} icon="folder" />}
                  onPress={() => {}}
                />
              );
            })}
          </List.Accordion>
        </List.Section>
         </View>
      )
  
      
    })
    }
    </ScrollView>
  }


  function MalzemeListesi() {
    // https://reactnative.dev/docs/checkbox
    //https://reactnativeexample.com/checkbox-card-is-customizable-and-animated-built-in-check-state-integration/
    const [isSatis, setSatis] = React.useState(false);
    const [isYavsak, setYavsak] = React.useState(false);
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
    });
    const MalzemeListe = [
      {
        malzeme: 'Elma',
        sayi: '2 adet',
      },
      {
        malzeme: 'Soğan',
        sayi: '2 adet',
      },
      {
        malzeme: 'Kuzu But',
        sayi: '2 kg',
      },
    ];
    return <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>

    
    {
    MalzemeListe.map((item) => {
      return <View>
        <View style={styles.checkboxContainer}>
          <RNCheckboxCard
            darkMode
            text={item.malzeme}
            quantity={item.sayi}
            enableQuantityText
            onPress={() => setSatis(!isSatis)}
          />
        </View>
      </View>
    })
}
    </ScrollView>
  }


function MalzemeListesi() {
  // https://reactnative.dev/docs/checkbox
  //https://reactnativeexample.com/checkbox-card-is-customizable-and-animated-built-in-check-state-integration/
  const [isSatis, setSatis] = React.useState(false);
  const [isYavsak, setYavsak] = React.useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },

    label: {
      margin: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <RNCheckboxCard
          darkMode
          text="Satisli misin?"
          //quantity="x2"
          enableQuantityText
          onPress={() => setSatis(!isSatis)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <RNCheckboxCard
          darkMode
          text="Yavsakli misin?"
          //quantity="x2"
          enableQuantityText
         onPress={() => setYavsak(!isYavsak)}
        />
      </View>
      <Text>Is Yavsak selected: {isYavsak ? '👍' : '👎'}</Text>
      <Text>Is Satis selected: {isSatis ? '👍' : '👎'}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="AnaSayfa"
          component={AnaSayfa}
          options={{
            title: 'AnaSayfa',
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name="md-home"
                size={tabInfo.focused ? 26 : 20}
                color={tabInfo.tintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="YapilanTarifler"
          component={YapilanTarifler}
          options={{
            title: 'Yapılan Tarifler',
            tabBarIcon: (tabInfo) => (
              <Ionicons
                name="calendar"
                size={tabInfo.focused ? 26 : 20}
                color={tabInfo.tintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="YapilacakTarifler"
          component={YapilacakTarifler}
          options={{
            title: 'Yapılacak Tarifler',
            tabBarIcon: (tabInfo) => (
              <Foundation
                name="clipboard-notes"
                size={tabInfo.focused ? 26 : 20}
                color={tabInfo.tintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MalzemeListesi"
          component={MalzemeListesi}
          options={{
            title: 'Malzeme Listesi',
            tabBarIcon: (tabInfo) => (
              <AntDesign
                name="checksquareo"
                size={tabInfo.focused ? 26 : 20}
                color={tabInfo.tintColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
