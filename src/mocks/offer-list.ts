import { OfferItem } from '../types/offer';

const offerList: OfferItem[] = [
  {
    id: "a1",
    title: "Stylish Private Room Near Amsterdams Attractions",
    type: "private room",
    price: 370,
    previewImage: '/img/ap1.jpg',
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
  },
  {
    id: "a2",
    title: "Cozy flat near the central station",
    type: "apartment",
    price: 120,
    previewImage: "/img/ap2.jpg",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.9413,
      longitude: 6.9583,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
  },
  {
    id: "a3",
    title: "Modern loft in the heart of Hamburg",
    type: "apartment",
    price: 250,
    previewImage: "/img/ap3.jpg",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.5753,
        longitude: 10.0153,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.57610000000004,
      longitude: 10.019342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
  },
  {
    id: "a4",
    title: "Modern apartment with city view",
    type: "apartment",
    price: 450,
    previewImage: "/img/ap4.jpg",
    city: {
      name: "Brussels",
      location: {
        latitude: 50.8503,
        longitude: 4.34878,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.855,
      longitude: 4.3501,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
  },
  {
    id: "a5",
    title: "Cool Cooler",
    type: "private room",
    price: 555,
    previewImage: '/img/ap3.jpg',
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.470216,
      longitude: 4.595168,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.579,
  },
];

export { offerList };