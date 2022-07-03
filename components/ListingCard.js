import {
  View,
  Text,
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { convertNumber } from "../utils/helper";


const ListingCard = ({ ...props }) => {

  const { marker} = props;

  return (
    <View>

      <Text style={{
        ...FONTS.semiBoldFont,
        color: COLORS.gray,
        fontSize: 14,
        lineHeight: 18,
        marginHorizontal: 10,
      }}>{marker?.type.toUpperCase()}</Text>

      <View
        style={{
          marginTop: SIZES.radius * 0.25,
          elevation: 2,
          backgroundColor: 'transaparent',
          borderRadius: 8,
          marginHorizontal: 10,
          shadowColor: "#000",
          // shadowRadius: 5,
          //shadowOpacity: 0.3,
          //shadowOffset: { x: 2, y: -2 },
          overflow: "hidden",
        }}
      >

        <Image
          source={marker?.avatar}
          style={{
            width: SIZES.width * 0.45,
            height:SIZES.height * 0.33,
            alignSelf: "center",
            borderRadius: 8,
          }}
          resizeMode="cover" />

        <View style={{ flexDirection: 'row', marginHorizontal: SIZES.radius * 0.25 }}>

          <View
            style={{

              position: 'absolute',
              bottom: 5,
              marginHorizontal: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: "#FF2D55"
            }}>
            <Text
              style={{
                ...FONTS.semiBoldFont,
                color: '#FFFFFF',
                fontSize: 16,
                lineHeight: 22,
                padding:SIZES.radius *0.125,
                textAlign: 'center',
                marginHorizontal: 10
              }}>{`KES ${convertNumber(marker?.price)}`}</Text>

          </View>

        </View>

      </View>

      <Text style={{
        ...FONTS.semiBoldFont,
        color: COLORS.white,
        width: SIZES.width * 0.45,
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'left',
        marginHorizontal: 10,
        marginTop: SIZES.radius * 0.24
      }}
        numberOfLines={3}
      >{marker?.description}</Text>
    </View>

  )
}

export default ListingCard;