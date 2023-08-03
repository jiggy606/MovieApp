import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import MovieList from '../components/movieList'
import Loading from '../components/loading'

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavorite, toggleIsFavorite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);
    const [loading, setLoading] = useState(false);
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'rgba(23,23,23,1)' }}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            {/* back button */}
            <SafeAreaView style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16, paddingRight: 16, zIndex: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 4, borderRadius: 10, backgroundColor: '#eab308' }}>
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleIsFavorite(!isFavorite)}>
                    <HeartIcon size='35' color={isFavorite ? 'cyan' : "white"} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details */}
            {
                loading ? (
                    <Loading />
                ) : (
                   <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', shadowColor: 'gray', shadowRadius: 40, shadowOffset: {width: 0, height: 5}, shadowOpacity: 1}}>
                        <View style={{ alignItems: 'center', borderRadius: 999, overflow: 'hidden', height: 288, width: 288, borderWidth: 1, borderColor: 'gray' }}>
                            <Image
                                source={require('../assets/images/linda.jpg')}
                                style={{height: height*0.43, width: width*0.74}}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 24 }}>
                        <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, color: 'white' }}>Linda Ronstadt</Text>
                        <Text style={{ textAlign: 'center', fontSize: 22, color: 'gray' }}>
                            Lagos, Nigeria.
                        </Text>
                    </View>

                    <View style={{ marginLeft: 12, marginRight: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'darkgray', borderRadius: 999, padding: 16, marginTop: 24 }}>
                        <View style={{borderRightWidth: 4, borderRightColor: 'black', paddingLeft: 8, paddingRight: 8, alignItems: 'center'}}>
                            <Text style={{ color: 'white', fontWeight: 600 }}>Gender</Text>
                            <Text style={{color: 'black', fontSize: 14}}>Male</Text>
                        </View>
                        <View style={{borderRightWidth: 4, borderRightColor: 'black', paddingLeft: 8, paddingRight: 8, alignItems: 'center'}}>
                            <Text style={{ color: 'white', fontWeight: 600 }}>Birthday</Text>
                            <Text style={{color: 'black', fontSize: 14}}>Oct 3, 1999</Text>
                        </View>
                        <View style={{borderRightWidth: 4, borderRightColor: 'black', paddingLeft: 8, paddingRight: 8, alignItems: 'center'}}>
                            <Text style={{ color: 'white', fontWeight: 600 }}>Known for</Text>
                            <Text style={{color: 'black', fontSize: 14}}>Deity</Text>
                        </View>
                        <View style={{paddingLeft: 8, paddingRight: 8, alignItems: 'center'}}>
                            <Text style={{ color: 'white', fontWeight: 600 }}>Popularity</Text>
                            <Text style={{color: 'black', fontSize: 14}}>99.99</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 24, marginBottom: 24, paddingTop: 8, paddingBottom: 8, marginLeft: 16, marginRight: 16 }}>
                        <Text style={{ color: 'white', fontSize: 30 }}>Biography</Text>
                        <Text style={{ color: 'lightgray', letterSpacing: 2 }}>
                            Linda Maria Ronstadt is an American singer who performed and recorded in diverse genres including rock, country, light opera, the Great American Songbook, and Latin music. She has earned 11 Grammy Awards, three American Music Awards, two Academy of Country Music awards, an Emmy Award, and an ALMA Award.
                        </Text>
                    </View>

                    {/* movies */}
                    <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
                </View>     
                )
            }
            
        </ScrollView>
    );
}