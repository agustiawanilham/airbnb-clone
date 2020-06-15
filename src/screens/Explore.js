import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageMini from '../components/ImageMini';
import HomeComponent from '../components/HomeComponent';

export default class Explore extends Component {
  render() {
    return (
      <SafeAreaView style={styles.flexFull}>
        <View style={styles.flexFull}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <Icon
                name="md-search"
                size={25}
                color="grey"
                style={styles.searchLogo}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Jakarta"
                placeholderTextColor="grey"
                style={styles.fontSearch}
              />
            </View>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>
                Jakarta
              </Text>
              <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>
                Yogyakarta
              </Text>
            </View>
          </View>
          <View style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}>
            <ScrollView scrollEventThrottle={16}>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                What can we help you find, Ilham ?
              </Text>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <ImageMini
                    name="Homes"
                    imageUrl={require('../images/home.jpg')}
                  />
                  <ImageMini
                    name="Experiences"
                    imageUrl={require('../images/experiences.jpg')}
                  />
                  <ImageMini
                    name="Restaurant"
                    imageUrl={require('../images/restaurant.jpg')}
                  />
                </ScrollView>
              </View>
              <View style={{flex: 2, padding: 20}}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginVertical: 10,
                  }}>
                  Introducing AirBnb Plus
                </Text>
                <Text style={{marginBottom: 20, fontSize: 14}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 250,
                      width: 350,
                      paddingLeft: 30,
                    }}
                    source={require('../images/home.jpg')}
                  />
                </View>
              </View>
              <View style={{padding: 20}}>
                <Text style={{fontSize: 20, padding: 10, fontWeight: '700'}}>
                  Homes Around the World
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <HomeComponent
                    imageUrl={require('../images/home.jpg')}
                    title="PRIVATE ROOM - 2 BEDS"
                    description={'The Cozy Room'}
                    price={'1.250.000'}
                  />
                  <HomeComponent
                    imageUrl={require('../images/restaurant.jpg')}
                    title="PRIVATE ROOM - 2 BEDS"
                    description={'Ruangan Bersama keluarga'}
                    price={'2.000.000'}
                  />
                  <HomeComponent
                    imageUrl={require('../images/home.jpg')}
                    title="PRIVATE ROOM - 2 BEDS"
                    description={'The Cozy Room'}
                    price={'1.250.000'}
                  />
                  <HomeComponent
                    imageUrl={require('../images/experiences.jpg')}
                    title="PRIVATE ROOM - 2 BEDS"
                    description={'The Cozy Room'}
                    price={'1.250.000'}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  searchLogo: {
    paddingLeft: 10,
    margin: 5,
  },
  searchContainer: {
    height: 100,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    elevation: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  fontSearch: {
    flex: 1,
    fontWeight: '700',
    fontSize: 16,
    backgroundColor: 'white',
  },
});
