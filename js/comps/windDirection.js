import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const windDirection = (props) => {
  var windDir = findElement(props.wind[0], '"wind_from_direction (degree)"');
  if (props.fetchingWind) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }

return (
  <View style={styles.container}>
  
    <Text style={styles.text}>{windDir}º</Text>
    
  </View>
)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: null,
  height: null,
},
text: {
  fontWeight: 'bold',
  justifyContent: "flex-end",
  alignItems: "center",
  // marginBottom: 15,
  fontSize: 20
  
},

})

const mapStateToProps = (state) => {
	return {
		wind: state.wind,
		fetchingWind: state.fetchingWind,
	}
}

export default connect(mapStateToProps)(windDirection)