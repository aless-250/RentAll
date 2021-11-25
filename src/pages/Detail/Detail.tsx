import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather , Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ReactStars from 'react-stars';




import SwiperComponent from "../../components/Swiper";
import styles from './StyleDetail';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View>
            
            <View style={styles.headerContent}>
                <View style={{ width: '65%' }}>
                    <Text>Casa Florida</Text>
                </View>
            
                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    
                    </View>
                </View>
            </View>

            <Text style={styles.price}>
                US$ 1200.00
            </Text>
            <Text style={styles.description}>
                Casa confortavel com estilo moderno, segurança e privacidade
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 40}}>
                <View style={styles.slide}>
                    <Image
                    source={require('../../assets/house1.1.jpeg')}
                    style={{width: 90, height: 90}}
                    />
                </View>

                <View style={styles.slide}>
                    <Image
                    source={require('../../assets/house1.2.jpeg')}
                    style={{width: 90, height: 90}}
                    />
                </View>

                <View style={styles.slide}>
                    <Image
                    source={require('../../assets/house1.3.jpeg')}
                    style={{width: 90, height: 90}}
                    />
                </View>

                <View style={styles.slide}>
                    <Image
                    source={require('../../assets/house1.4.jpeg')}
                    style={{width: 90, height: 90}}
                    />
                </View>
            </ScrollView>

        </View>
    );
}

/*<ReactStars
default={4}
count={5}
half={true}
starsSize={20}
fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle} /> }
emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} /> }
halfStar={ <Ionicons name="md-star-half" size={24} style={styles.myStarStyle} /> }
/>*/