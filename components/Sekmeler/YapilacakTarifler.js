import * as React from 'react';
import {
  Text,
  View,
  SectionList,
  StyleSheet,
} from 'react-native';

export default function YapilacakTarifler() {
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