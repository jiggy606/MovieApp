import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'


export default function Cast({ cast, navigation }) {
    let personName = 'Keanu Reeves';
    let characterName = 'John Wick'; 
  return (
    <View style={{marginTop: 24, marginBottom: 24}}>
          <Text style={{ color: 'white', fontSize: 20, marginLeft: 16, marginRight: 16,marginBottom: 20}}>Top Cast</Text>
          <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 15}}
          >
              {
                  cast && cast.map((person, index) => {
                      return (
                          <TouchableOpacity
                              key={index}
                              style={{ marginRight: 20, alignItems: 'center' }}
                              onPress={() => navigation.navigate('Person', person)}
                          >
                              <View style={{ overflow: 'hidden', borderRadius: 999, height: 80, width: 80, alignItems: 'center', borderColor: 'pink', }}>
                                    <Image
                                        style={{ height: 96, width: 80, borderRadius: 20 }}
                                        source={require('../assets/images/linda.jpg')}
                                    />
                              </View>
                              
                              <Text style={{ color: 'white', fontSize: 10, marginTop: 4 }}>
                                  {
                                      characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName
                                  }
                              </Text>
                              <Text style={{ color: 'white', fontSize: 10, marginTop: 4 }}>
                                  {
                                      personName.length > 10 ? personName.slice(0, 10) + '...' : personName
                                  }
                              </Text>
                          </TouchableOpacity>
                      )
                  })
              }
          </ScrollView>
    </View>
  )
}