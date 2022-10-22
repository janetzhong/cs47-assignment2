import { StyleSheet, Image, ImageBackground, Text, View } from 'react-native';
import { Themes } from '../../assets/Themes';

export default function Body () {
    return(
        <View style={styles.centralBox}>
            <View style={styles.profileBox}>
            <ImageBackground style={[styles.profileImage, styles.shadows]}
                source={require("../../assets/Profiles/mtl.jpg")} imageStyle={{borderRadius: 15}}>
            <Text style={styles.profileTextName}>{Profiles.mtl.name}</Text>
            <Text style={styles.profileTextDistance}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
            </View>
            <View style={[styles.musicBarandText, styles.shadows]}>
            <Text style={styles.musicText}>My hottest take</Text>
            <View style={styles.musicBar}>
                <Image style={styles.musicBarButton}
                source={require("../../assets/Icons/player_light.png")}/>
                <Image style={styles.audioWave}
                source={require("../../assets/Icons/audio_waveform_light.png")}/>
            </View>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    centralBox: {
      flex: 6,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: Themes.light.bg,
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
    }
  });
