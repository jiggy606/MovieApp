import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/moviedb';


// import tw from 'twrnc'
var { width, height } = Dimensions.get('window');
export default function MovieList({ title, data, hideSeeAll }) {
    let movieName = 'Vinland Saga';
    const navigation = useNavigation(); 
    return (
        <View style={{ marginBottom: 32, paddingTop: 16, paddingBottom: 16 }}>
            <View style={{ marginLeft: 16, marginRight: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 30 }}>{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={{ color: "#eab308", fontSize: 20 }}>See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            {/* movie row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.push('Movie', item)}
                            >
                                <View style={{ paddingTop: 4, paddingBottom: 4, marginRight: 16, alignItems: 'center' }}>
                                    <Image
                                        // source={require('../assets/images/zeus.png')}
                                        source={{uri: image185(item.poster_path)}}
                                        style={{ borderRadius: 12, width: width * 0.33, height: height * 0.22 }}
                                    />
                                    <Text style={{ color: 'white', marginLeft: 4 }}>
                                        {
                                            item.title.length > 14 ? item.title.slice(0,14)+'...' : item.title
                                        }
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}