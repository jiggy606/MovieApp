import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {LinearGradient} from 'expo-linear-gradient'

import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'

import { useNavigation } from '@react-navigation/native'
import { theme } from '../theme'
import { styled } from 'nativewind'
import Cast from '../components/cast'
import MovieList from '../components/movieList'
import Loading from '../components/loading'

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-3';

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavorite, toggleIsFavorite] = useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    let movieName = 'Vinland Saga';
    useEffect(() => {
        console.log('itemid: ', item.id);
    }, [item])
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            style={{flex: 1, backgroundColor: 'rgba(23,23,23,1)'}}
        >
            {/* back button and movie poster */}
            <View style={{width: '100%'}}>
                <SafeAreaView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16, paddingRight: 16, position: 'absolute', zIndex: 20}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: 4, borderRadius: 10, backgroundColor: '#eab308'}}>
                        <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleIsFavorite(!isFavorite)}>
                        <HeartIcon size='35' color={isFavorite? theme.heart : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>

                {
                    loading ? (
                        <Loading />
                    ) : (
                       <View>
                            <Image
                                source={require('../assets/images/dunk.png')}
                                style={{width, height: height*0.55}}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(23,23,23,0.9)', 'rgba(23,23,23,1)']}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                style={{bottom: 0, height: height*0.40, position: 'absolute', width}}
                            />
                        </View>     
                    )
                }
                
            </View>  
            
            {/* movie details */}
            <View style={{marginTop: -(height*0.09), paddingBottom: 12, paddingTop: 12}}>
                {/* title */}
                <Text style={{color: 'white', textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: 2, paddingBottom: 4}}>
                    {movieName}
                </Text>
                {/* status, release, runtime */}
                <Text style={{color: 'lightgray', fontWeight: 400, fontSize: 16, textAlign: 'center', paddingBottom: 4}}>
                    Released * 2020 * 170 mins
                </Text>

                {/* genres */}
                <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: 12, marginRight: 12, paddingLeft: 12, paddingRight: 12}}>
                    <Text style={{color: 'lightgray', fontWeight: 400, fontSize: 14, textAlign: 'center', marginRight: 4}}>
                        Adventure  * 
                    </Text>
                    <Text style={{color: 'lightgray', fontWeight: 400, fontSize: 14, textAlign: 'center', marginRight: 4}}>
                        Historical  * 
                    </Text>
                    <Text style={{color: 'lightgray', fontWeight: 400, fontSize: 14, textAlign: 'center'}}>
                        Epic
                    </Text>
                </View>

                {/* desc */}
                <Text style={{marginLeft: 12, marginRight: 12, letterSpacing: 1, color: 'white', paddingTop: 8}}>
                    In 1013 AD, the young Thorfinn works for Askeladd in the hopes of challenging him to a duel and killing him in revenge for his father Thors' death, when they were attacked by him on a journey to England. Askeladd's company finds employment as mercenaries under King Sweyn in the Danish invasion of London by the British and Thorkell the Tall, Thorfinn's uncle who served with Thors in the Jomsvikings. When Thorkell takes Sweyn's son Prince Canute captive, Askeladd's company capture the prince with the intent of selling him to either side for a profit. Askeladd changes his plan to act on his personal agenda as a descendant of Artorius, to secure his mother's homeland of Wales from being invaded.
                </Text>
            </View>

            {/* cast */}
            <Cast navigation={navigation} cast={cast} />

            {/* similar movies */}
            {/* <MovieList title="Similar Movies" hideSeeAll data={similarMovies} /> */}
        </ScrollView>
    );
}

