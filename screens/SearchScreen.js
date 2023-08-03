import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Loading from '../components/loading';

var { width, height } = Dimensions.get('window');


export default function SearchScreen() {
    const navigation = useNavigation();
    const [results, setResults] = useState([1, 2, 3, 4]);
    const [loading, setLoading] = useState(false);
    let movieName = 'Vinland Saga'
    return (
        <SafeAreaView style={{ backgroundColor: 'rgba(23,23,23,1)', flex: 1 }}>
            <View style={{ marginLeft: 16, marginRight: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: 'white', borderRadius: 999,  borderWidth: 1}}>
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'darkgray'}
                    style={{ paddingBottom: 4, paddingLeft: 24, color: 'white', flex: 1, letterSpacing: 1 }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{borderRadius: 999, padding: 12, margin: 4, backgroundColor: 'gray'}}
                >
                    <XMarkIcon size='25' color='white' />
                </TouchableOpacity>
            </View>

            {/* results */}
            {
                loading ? (
                    <Loading />
                ) : 
                results.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        style={{paddingTop: 12, paddingBottom: 12}}
                    >
                        <Text style={{ color: 'white', fontWeight: 'semibold', marginLeft: 4 }}>Results ({results.length})</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {
                        results.map((item, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={() => navigation.push('Movie', item)}
                                >
                                    <View style={{ paddingBottom: 8, paddingTop: 8, marginBottom: 16 }}>
                                        <Image
                                            style={{ borderRadius: 14, width: width*0.44, height: height*0.3 }}
                                            source={require('../assets/images/linda.jpg')}
                                        />
                                        <Text style={{ color: 'lightgray', marginLeft: 4 }}>
                                            {
                                                movieName.length>27? movieName.slice(0,22)+'...': movieName
                                            }
                                        </Text>
                                    </View>
                                    
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </View>
                    </ScrollView>
                ):(
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>
                            <Image
                                style={{ height: 384, width: 384 }}
                                source={require('../assets/images/noble.png')}
                            />
                        </View>     
                )
            }
        </SafeAreaView>
    );
}