import * as React from 'react';
import {
  Pressable,
  FlatList,
  Text,
  View,
  SectionList,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import RNCheckboxCard from 'react-native-checkbox-card';
import { Card } from 'react-native-elements';
import ReorderableList, {
  ReorderableListRenderItemInfo,
  ReorderableListReorderEvent,
} from 'react-native-reorderable-list';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  List,
} from 'react-native-paper';

/**
 * TODO List
 * 1) + butonları eklenecek
 * 2) componentlere ayrılacak
 * 3) Proje ismi güncellenecek
 */

// dialog denemeleri
function AnaSayfa() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}

// function DialogEkrani(item) {
//   const [visible, setVisible] = React.useState(false);

//   const showDialog = () => setVisible(true);

//   const hideDialog = () => setVisible(false);
//   return (
//     <Provider>
//       <View>
//         <Button onPress={showDialog}>Show Dialog</Button>
//         <Portal>
//           <Dialog visible={visible} onDismiss={hideDialog}>
//             <Dialog.Title>Alert</Dialog.Title>
//             <Dialog.Content>
//               <Paragraph>This is simple dialog {item}</Paragraph>
//             </Dialog.Content>
//             <Dialog.Actions>
//               <Button onPress={hideDialog}>Done</Button>
//             </Dialog.Actions>
//           </Dialog>
//         </Portal>
//       </View>
//     </Provider>
//   );
// }

const YapilanTariflerListesi = [
  {
    GunId: '1',
    Tarih: '13.03.2022',
    Icerik: [
      {
        TarifId: '1',
        Tur: 'Ana Yemek',
        Ad: 'Perde Pilavı',
      },
      {
        TarifId: '2',
        Tur: 'Çorba',
        Ad: 'Mantar Çorbası',
      },
      {
        TarifId: '3',
        Tur: 'Salata',
        Ad: 'Coleslaw',
      },
    ],
  },
  {
    GunId: '2',
    Tarih: '20.03.2022',
    Icerik: [
      {
        TarifId: '4',
        Tur: 'Ana Yemek',
        Ad: 'Topkapı Piliç',
      },
      {
        TarifId: '5',
        Tur: 'Çorba',
        Ad: 'Mercimek Çorbası',
      },
      {
        TarifId: '6',
        Tur: 'Salata',
        Ad: 'Kaşık Salata',
      },
    ],
  },
  {
    GunId: '3',
    Tarih: '27.03.2022',
    Icerik: [
      {
        TarifId: '7',
        Tur: 'Ana Yemek',
        Ad: 'Yağlama',
      },
      {
        TarifId: '8',
        Tur: 'Çorba',
        Ad: 'Arabaşı',
      },
      {
        TarifId: '9',
        Tur: 'Salata',
        Ad: 'Patates Salatası',
      },
    ],
  },
];

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

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
      {YapilanTariflerListesi.map((item) => {
        return (
          <View style={styles.container}>
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
        );
      })}
    </ScrollView>
  );
}

function YapilanTarifler2() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
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

  function MalzemeListesi() {
    // https://reactnative.dev/docs/checkbox
    //https://reactnativeexample.com/checkbox-card-is-customizable-and-animated-built-in-check-state-integration/

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
    return <ScrollView contentContainerStyle={{paddingHorizontal: 2}}>

    
    {
    MalzemeListe.map((item) => {
      return <View>
        <View style={styles.checkboxContainer}>
          <RNCheckboxCard
            darkMode
            text={item.malzeme}
            quantity={item.sayi}
            enableQuantityText
          />
        </View>
      </View>
    })
}
    </ScrollView>
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
