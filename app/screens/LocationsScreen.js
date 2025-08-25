import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { markers } from "../constants/ubicationsMap/ubications.js";

export const LocationsScreen = () => {
  const initialRegion = {
    latitude: 24.1314817,
    longitude: -110.3250219,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 24.1314817,
          longitude: -110.3250219,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        zoomEnabled
        scrollEnabled
        rotateEnabled
        pitchEnabled
        zoomControlEnabled
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            title={marker.title}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          >
           {/*  <Callout tooltip>
              <View style={styles.callout}>
                <Text style={styles.calloutText}>{marker.title}</Text>
              </View>
            </Callout> */}
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  callout: {
    backgroundColor: "white",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    elevation: 2,
  },
  calloutText: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
});