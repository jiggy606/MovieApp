import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { Styles } from '../theme'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'

import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb'

export default function HomeScreen() {
    const navigation = useNavigation();
    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTrendingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    }, [])

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        // console.log('got trending: ', data);
        if (data && data.results) setTrending(data.results);
        setLoading(false);
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        // console.log('got upcoming: ', data);
        if (data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        // console.log('got trending: ', data);
        if (data && data.results) setTopRated(data.results);
    }
    return (
        <View style={styles.cotainer}>
            <SafeAreaView style={styles.holder}>
                <StatusBar style='light' />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 18, marginRight: 18 }}>
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
                        <Text style={{color: "#eab308"}}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"  />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {
                loading ? (
                    <Loading />
                ) : (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 10}}
                    >
                        {/* Trending Movies Carousel */}
                        { trending.length > 0 && <TrendingMovies data={trending} /> }

                        {/* Upcoming Movies Row */}
                        <MovieList title="Upcoming" data={upcoming} />

                        {/* Top Rated Movies Row */}
                        <MovieList title="Top Rated" data={topRated} />
                    </ScrollView>  
                )
            }

            
        </View>
    );
}

const styles = StyleSheet.create({
  cotainer: {
        flex: 1,
        backgroundColor: 'gray',
    },
    
    holder: {
        marginBottom: Platform.OS === 'ios' ? 8 : 12, 
    }
})