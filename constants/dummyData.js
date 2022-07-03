import images from "./images";

export const propertyData = [
    {
        id: 1,
        avatar: images.one,
        city: 'Nairobi',
        Country: 'Kenya',
        type: 'Apartment',
        price: 695200,
        description: 'Seafront apartment in Nairobi',
        location: {
            latitude: -1.3031934,
            longitude: 36.5671905,
        },
    },
    {
        id: 2,
        avatar: images.two,
        city: 'Mombasa',
        Country: 'Kenya',
        type: 'Home',
        price: 105225,
        description: 'Luxurious home 55m away from the beach',
        location: {
            latitude: -4.0351767,
            longitude: 39.5261739,
        },
    },
    {
        id: 3,
        avatar: images.three,
        city: 'Kilifi',
        Country: 'Kenya',
        type: 'Mansion',
        price: 130000,
        description: 'Seafront mansion in Nairobi',
        location: {
            latitude: -3.5372587,
            longitude: 39.7565466,
        },
    },
    {
        id: 4,
        avatar: images.four,
        city: 'Vipingo',
        Country: 'Kenya',
        type: 'Apartment',
        description: 'Seafront apartment in Nairobi',
        price: 900000,
        location: {
            latitude: -3.821782,
            longitude: 39.7149236,
        },
    },
    {
        id: 5,
        avatar: images.five, 
        city: 'Kigali',
        Country: 'Rwanda',
        type: 'Home',
        price: 68000,
        description: 'Luxurious home 55m away from the beach',
        location: {
            latitude: -1.9297648,
            longitude: 29.9871552,
        },
    },
    {
        id: 6,
        avatar: images.six, 
        city: 'Zanzibar',
        Country: 'Tanzania',
        type: 'Apartment',
        price: 250000,
      description:  'Luxurious home 55m away from the beach',
        location: {
            latitude: -6.1645897,
            longitude: 39.1606314,
        },
    },
    {
        id: 7,
        avatar: images.seven, 
        city: 'Diani',
        Country: 'Kenya',
        type: 'Mansion',
        price: 43000,
        description: 'Seafront mansion in Nairobi',
        location: {
            latitude: -4.2769567,
            longitude: 39.5860147,
        },
    }
]

const dummyData = {
    propertyData,
}

export default dummyData;