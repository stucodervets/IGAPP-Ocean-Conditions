import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import findElement from '../findElement'

const watertemp = (props) => {
  var waterTemp = findElement(props.waterTemp[0], '"sea_water_temperature (F)"');
  if (props.fetchingWT) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Water Temp = {waterTemp}ºF</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7098d8"
  },
})

const mapStateToProps = (state) => {
	return {
		waterTemp: state.waterTemp,
		fetchingWT: state.fetchingWT,
	}
}

export default connect(mapStateToProps)(watertemp)