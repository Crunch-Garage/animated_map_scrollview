import { 
    Animated,
    View
 } from 'react-native';
import MapView from 'react-native-maps';
import { COLORS, SIZES } from '../constants';

const MarkerRing = ({...props}) => {

    const { marker, scaleStyle, opacityStyle} = props;


    const coords = {
        latitude: marker.location.latitude,
        longitude: marker.location.longitude
    };

    const colorArray = [
        {
            type: "Apartment",
            color: COLORS.purple,
        },
        {
            type: "Home",
            color: COLORS.orange,
        },
        {
            type: "Mansion",
            color: COLORS.red,
        },
        
    ]

    const getRingColor = colorArray.find(item => item.type === marker.type).color;

    return(
        <MapView.Marker coordinate={coords}>
              
        <Animated.View
          style={[{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }, opacityStyle]}
        >
          <Animated.View
            style={[{
              width: 35,
              height: 35,
              borderRadius: 50,
              backgroundColor: "rgba(130,4,150, 0.3)",
              position: "absolute",
              borderWidth: 1,
              borderColor: "rgba(130,4,150, 0.5)",
            }, scaleStyle]} />
          <View style={{
            width: SIZES.radius *0.5,
            height: SIZES.radius *0.5, 
            borderRadius: 50,
            backgroundColor: getRingColor,
          }} />
        </Animated.View>

      </MapView.Marker>
    )
}

export default MarkerRing;