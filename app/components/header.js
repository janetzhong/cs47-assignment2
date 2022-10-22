import { StyleSheet, Image, Text, View } from 'react-native';
import { Themes } from '../../assets/Themes';

export default function Header () {
    return(
        <View style={styles.topNavBar}>
            <Image style={styles.icons}
            source={require("../../assets/Icons/menu_light.png")}/>
            <Text style={styles.topText}>ensom</Text>
            <Image style={styles.icons}
            source={require("../../assets/Icons/sun.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
  
    // Stuff in top box
    topText: {
      fontWeight: 'bold',
      fontSize: 32,
      fontFamily: 'SydneyBold'
    },
    icons: {
      width: 40, 
      height: 40
    }
  });
