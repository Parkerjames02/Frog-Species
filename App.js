import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  UseState,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

function FrogCroaking() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Frog-Croaking.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
      await sound.setIsLoopingAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

function Waterfall() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Waterfall.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
      await sound.setIsLoopingAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

function IntroScreen({ navigation }) {
  FrogCroaking();
  Waterfall();
  return (
    <View>
      <View>
        <ImageBackground
          source={require('./assets/Forest-Waterfall.gif')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 753,
          }}></ImageBackground>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 55,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Image
          source={require('./assets/Circle.png')}
          style={{
            width: 287,
            height: 287,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 130,
          left: 0,
          right: 30,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Image
          source={require('./assets/Animated-Frog.gif')}
          style={{
            width: 312,
            height: 159,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 370,
          left: 35,
          right: 30,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Cochin',
            fontSize: 29,
            fontWeight: 'bold',
            letterSpacing: 0.3,
            textAlign: 'center',
            textDecorationLine: 'underline',
            textShadowColor: 'black',
            textShadowOffset: { width: 4, height: 0 },
            textShadowRadius: 10,
          }}>
          15 Amazing Frog Species
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 550,
          left: 35,
          right: 30,
          bottom: 0,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            margin: 5,
            borderRadius: 10,
            backgroundColor: '#fff',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Species')}>
          <Text style={{ textAlign: 'center' }}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SpeciesScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={require('./assets/Tropical-Jungle-Night.jpg')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 1149,
          }}></ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 55,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Glassfrog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 380,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Bare-Hearted Glass Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 500,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Paedophryne-Amauensis.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 825,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Paedophryne Amauensis
          </Text>
        </View>
        <ImageBackground
          source={require('./assets/Tropical-Jungle-Night.jpg')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 1149,
          }}></ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 925,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Desert-Rain-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 1250,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Desert Rain Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 1350,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Ornate-Horned-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 1675,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Ornate Horned Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 1770,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Hairy-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 2090,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Hairy Frog
          </Text>
        </View>
        <ImageBackground
          source={require('./assets/Tropical-Jungle-Night.jpg')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 1149,
          }}></ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 2180,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Vietnamese-Mossy-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 2505,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Vietnamese Mossy Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 2590,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Golden-Poison-Dart-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 2915,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Golden Poison Dart Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 3020,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Indian-Bullfrog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 3340,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Indian Bullfrog
          </Text>
        </View>
        <ImageBackground
          source={require('./assets/Tropical-Jungle-Night.jpg')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 1149,
          }}></ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 3440,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Brazilian-Horned-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 3765,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Brazilian Horned Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 3860,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Wallace-Flying-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 4190,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Wallace's Flying Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 4275,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Venezuela-Pebble-Toad.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <ImageBackground
          source={require('./assets/Tropical-Jungle-Night.jpg')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 1149,
          }}></ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 4600,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Venezuela Pebble Toad
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 4690,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Surinam-Toad.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5015,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Surinam Toad
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5100,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Purple-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5425,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Purple Frog
          </Text>
        </View>
        <ImageBackground
          source={require('./assets/Tropical-Jungle-Night.jpg')}
          style={{
            alignItems: 'center',
            width: 390,
            height: 600,
          }}></ImageBackground>
        <View
          style={{
            position: 'absolute',
            top: 5510,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Malagasy-Rainbow-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5840,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Malagasy Rainbow Frog
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5930,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/Malayan-Horned-Frog.jpg')}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 6260,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Cochin',
              fontSize: 29,
              fontWeight: 'bold',
              letterSpacing: 0.3,
              textAlign: 'center',
              textShadowColor: 'black',
              textShadowOffset: { width: 4, height: 0 },
              textShadowRadius: 10,
            }}>
            Malayan Horned Frog
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro Screen">
        <Stack.Screen name="Intro Screen" component={IntroScreen} />
        <Stack.Screen name="Species" component={SpeciesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// http://clipart-library.com/frog-graphics.html
// https://www.treehugger.com/bizarre-frog-species-4864048
