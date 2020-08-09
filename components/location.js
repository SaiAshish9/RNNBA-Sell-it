import React, {useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import GetLocation from 'react-native-get-location';

const Geo = () => {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        setCoords({
          lat: location.latitude,
          long: location.longitude,
        });
        console.log(location);
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  return (
    <View>
      <Text>latitude : {coords && coords.lat}</Text>
      <Text>longitude : {coords && coords.long}</Text>
    </View>
  );
};

export default Geo;
