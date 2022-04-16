import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AnaSayfa from './Sekmeler/Anasayfa';
import YapilanTarifler from './Sekmeler/YapilanTarifler';
import YapilacakTarifler from './Sekmeler/YapilacakTarifler';
import MalzemeListesi from './Sekmeler/MalzemeListesi';

/**
 * TODO List
 * 1) + butonları eklenecek
 * 2) componentlere ayrılacak
 * 3) Proje ismi güncellenecek
 */

/**
 * Tab eklerken:
 * 1) Alttaki Tab.Screen'e eklenecek
 * 2) sekmeler klasörüne .js dosyası oluşturulacak
 * 3) .js import edilecek
 * 4) .js'in içi export default class olarak oluşturulacak
 *    (function olursa hata alır) 
 */


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
