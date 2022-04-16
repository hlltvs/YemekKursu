import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  List,
} from 'react-native-paper';


  
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

export default function YapilanTarifler() {
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
  });

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

// export default function YapilanTarifler2() {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//       padding: 20,
//       marginVertical: 8,
//       marginHorizontal: 16,
//     },
//     title: {
//       fontSize: 32,
//     },
//   });

//   const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];

//   const Item = ({ item, onPress, backgroundColor, textColor }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//       <Text style={[styles.title, textColor]}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   const [selectedId, setSelectedId] = React.useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => {
//           setSelectedId(item.id);
//         }}
//         backgroundColor={{ backgroundColor }}
//         textColor={{ color }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// }