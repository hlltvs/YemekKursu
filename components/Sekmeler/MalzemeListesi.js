import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RNCheckboxCard from 'react-native-checkbox-card';

export default function MalzemeListesi() {
  // https://reactnative.dev/docs/checkbox
  //https://reactnativeexample.com/checkbox-card-is-customizable-and-animated-built-in-check-state-integration/

  const styles = StyleSheet.create({
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
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 2 }}>
      {MalzemeListe.map((item) => {
        return (
          <View>
            <View style={styles.checkboxContainer}>
              <RNCheckboxCard
                darkMode
                text={item.malzeme}
                quantity={item.sayi}
                enableQuantityText
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}