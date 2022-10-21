import AppLoading from 'expo-app-loading';
import { StyleSheet, Image, ImageBackground, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import reactDom from 'react-dom';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.topNavBar}>
        <Image style={styles.icons}
         source={require("./assets/Icons/menu_light.png")}/>
        <Text style={styles.topText}>ensom</Text>
        <Image style={styles.icons}
          source={require("./assets/Icons/sun.png")}/>
      </View>

      <View style={styles.centralBox}>
        <View style={styles.profileBox}>
          <ImageBackground style={[styles.profileImage, styles.shadows]}
            source={require("./assets/Profiles/mtl.jpg")} imageStyle={{borderRadius: 15}}>
          <Text style={styles.profileTextName}>{Profiles.mtl.name}</Text>
          <Text style={styles.profileTextDistance}>{Profiles.mtl.caption}</Text>
          </ImageBackground>
        </View>
        <View style={[styles.musicBarandText, styles.shadows]}>
          <Text style={styles.musicText}>My hottest take</Text>
          <View style={styles.musicBar}>
            <Image style={styles.musicBarButton}
            source={require("./assets/Icons/player_light.png")}/>
            <Image style={styles.audioWave}
            source={require("./assets/Icons/audio_waveform_light.png")}/>
          </View>
        </View>  
      </View>

      <View style={styles.botIconBar}>
        <View style={styles.botIconBox}>
          <Image style={styles.icons}
          source={require("./assets/Icons/discover_light.png")}/>
          <Text style={styles.botText}>Discover</Text>
        </View>
        <View style={styles.botIconBox}>
          <Image style={styles.icons}
          source={require("./assets/Icons/heart_light.png")}/>
          <Text style={styles.botText}>Matches</Text>
        </View>
        <View style={styles.botIconBox}>
          <Image style={styles.icons}
            source={require("./assets/Icons/messages_light.png")}/>
          <Text style={styles.botText}>DMs</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },

  // Colour for testing boxes
  // backgroundColor: '#a3bcff',

  // Main boxes
  topNavBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Themes.light.bg,
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: "8%"
  },
  centralBox: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Themes.light.bg,
  },
  botIconBar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Themes.light.navigation,
  },

  // Stuff in top box
  topText: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'SydneyBold'
  },
  icons: {
    width: 40, 
    height: 40
  },


  // Stuff in middle box
  profileBox: {
    justifyContent: 'space-around',
    height: 350
  },

  profileImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 350, 
    height: 350,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  profileTextName: {
    fontFamily: 'Sydney',
    fontSize: 32,
    color: Themes.light.textSecondary,
    justifyContent: 'flex-start',
    margin:10
  },
  profileTextDistance: {
    fontFamily: 'Sydney',
    fontSize: 18,
    color: Themes.light.textSecondary,
    justifyContent: 'flex-end',
    margin:10
  },

  musicBarandText: {
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 25,
    width: 350, 
    height: 150
  },
  musicText:{
    fontFamily: 'Sydney',
    fontSize: 25,
    color: Themes.light.text,
    marginHorizontal:20,
    marginTop:20
  },
  musicBar: {
    flex:1,
    flexDirection: 'row',
  },
  musicBarButton: {
    flex:1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginHorizontal:10
  },
  audioWave: {
    flex:5,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginRight:10
  },

  // Stuff in bottom box
  botIconBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  botText: {
    fontFamily: 'Sydney',
    fontSize: 18,
    color: Themes.light.textSecondary,
    paddingTop: 7
  },

  // Shadows
  shadows: {
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    elevation: 4
  },
});
