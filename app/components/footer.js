import { StyleSheet, Image, Text, View } from 'react-native';
import { Themes } from '../../assets/Themes';

export default function Footer () {
    return (
        <View style={styles.botIconBar}>
            <View style={styles.botIconBox}>
            <Image style={styles.icons}
            source={require("../../assets/Icons/discover_light.png")}/>
            <Text style={styles.botText}>Discover</Text>
        </View>
        <View style={styles.botIconBox}>
            <Image style={styles.icons}
            source={require("../../assets/Icons/heart_light.png")}/>
            <Text style={styles.botText}>Matches</Text>
        </View>
        <View style={styles.botIconBox}>
            <Image style={styles.icons}
            source={require("../../assets/Icons/messages_light.png")}/>
            <Text style={styles.botText}>aDMs</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {
        width: 40, 
        height: 40
      },

    botIconBar: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: Themes.light.navigation,
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
    }
  });
