interface TouristSpot {
  name: string;
  description: string;
  image: string;
}

interface Province {
  id: number;
  name: string;
  lat: number;
  lng: number;
  region: string;
  touristSpots: TouristSpot[];
}

export const provinces: Province[] = [
  // Luzon
  {
    id: 1,
    name: 'Manila',
    lat: 14.5995,
    lng: 120.9842,
    region: 'NCR',
    touristSpots: [
      { name: 'Intramuros', description: 'Historic walled city with Spanish colonial architecture', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400' },
      { name: 'Rizal Park', description: 'Large urban park honoring national hero Jose Rizal', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Manila Ocean Park', description: 'Oceanarium and marine-themed park', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 2,
    name: 'Batangas',
    lat: 13.7565,
    lng: 121.0583,
    region: 'Calabarzon',
    touristSpots: [
      { name: 'Taal Volcano', description: 'Active volcano on an island within a lake', image: 'https://images.unsplash.com/photo-1580274655877-957d95b24916?w=400' },
      { name: 'Anilao', description: 'Premier diving destination with marine biodiversity', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
      { name: 'Batangas Beaches', description: 'Beautiful beaches and coastal resorts', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
    ]
  },
  {
    id: 3,
    name: 'Laguna',
    lat: 14.2691,
    lng: 121.4113,
    region: 'Calabarzon',
    touristSpots: [
      { name: 'Pagsanjan Falls', description: 'Stunning waterfalls accessible by boat', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
      { name: 'Hot Springs', description: 'Natural hot springs and resorts', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400' },
      { name: 'Enchanted Kingdom', description: 'Theme park with rides and attractions', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400' },
    ]
  },
  {
    id: 4,
    name: 'Cavite',
    lat: 14.4791,
    lng: 120.8970,
    region: 'Calabarzon',
    touristSpots: [
      { name: 'Corregidor Island', description: 'Historic island fortress from WWII', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Tagaytay', description: 'Cool highland city with Taal Lake view', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Aguinaldo Shrine', description: 'Historical mansion and museum', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
    ]
  },
  {
    id: 5,
    name: 'Rizal',
    lat: 14.6037,
    lng: 121.3084,
    region: 'Calabarzon',
    touristSpots: [
      { name: 'Hinulugang Taktak', description: 'Historic waterfall and national park', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400' },
      { name: 'Pinto Art Museum', description: 'Contemporary art gallery in gardens', image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400' },
      { name: 'Masungi Georeserve', description: 'Conservation area with rope courses', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    ]
  },
  {
    id: 6,
    name: 'Quezon',
    lat: 14.0223,
    lng: 122.1219,
    region: 'Calabarzon',
    touristSpots: [
      { name: 'Villa Escudero', description: 'Cultural plantation resort with waterfall dining', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400' },
      { name: 'Mount Banahaw', description: 'Sacred mountain for pilgrims', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Beaches of Quezon', description: 'Pristine beaches and island hopping', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 7,
    name: 'Bulacan',
    lat: 14.7942,
    lng: 120.8797,
    region: 'Central Luzon',
    touristSpots: [
      { name: 'Barasoain Church', description: 'Historic church of Philippine independence', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'Biak-na-Bato', description: 'National park with caves and rivers', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
      { name: 'Angat Dam', description: 'Major dam with scenic views', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    ]
  },
  {
    id: 8,
    name: 'Pampanga',
    lat: 15.0794,
    lng: 120.6200,
    region: 'Central Luzon',
    touristSpots: [
      { name: 'Mount Pinatubo', description: 'Active volcano with stunning crater lake', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Nayong Pilipino', description: 'Cultural theme park', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400' },
      { name: 'San Fernando', description: 'Giant Lantern capital of the Philippines', image: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=400' },
    ]
  },
  {
    id: 9,
    name: 'Bataan',
    lat: 14.6417,
    lng: 120.4818,
    region: 'Central Luzon',
    touristSpots: [
      { name: 'Dambana ng Kagitingan', description: 'Memorial shrine honoring WWII heroes', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Las Casas Filipinas', description: 'Heritage resort with Spanish colonial houses', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400' },
      { name: 'Mount Samat', description: 'Historic mountain with cross monument', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    ]
  },
  {
    id: 10,
    name: 'Zambales',
    lat: 15.5084,
    lng: 119.9695,
    region: 'Central Luzon',
    touristSpots: [
      { name: 'Anawangin Cove', description: 'Beach with pine trees and camping', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Nagsasa Cove', description: 'Secluded beach accessible by boat', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Subic Bay', description: 'Former US naval base with beaches and activities', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
    ]
  },
  {
    id: 11,
    name: 'Baguio',
    lat: 16.4023,
    lng: 120.5960,
    region: 'CAR',
    touristSpots: [
      { name: 'Burnham Park', description: 'Central park with lake and gardens', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=400' },
      { name: 'Mines View Park', description: 'Scenic viewpoint overlooking mountains', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Baguio Cathedral', description: 'Pink cathedral with beautiful gardens', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
    ]
  },
  {
    id: 12,
    name: 'La Union',
    lat: 16.6159,
    lng: 120.3209,
    region: 'Ilocos',
    touristSpots: [
      { name: 'San Juan Surf Beach', description: 'Popular surfing destination', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400' },
      { name: 'Tangadan Falls', description: 'Multi-tiered waterfall in jungle', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
      { name: 'Poro Point', description: 'Scenic lighthouse and coastal area', image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400' },
    ]
  },
  {
    id: 13,
    name: 'Ilocos Norte',
    lat: 18.1713,
    lng: 120.7119,
    region: 'Ilocos',
    touristSpots: [
      { name: 'Paoay Church', description: 'UNESCO World Heritage baroque church', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'Bangui Windmills', description: 'Iconic windmill farm by the sea', image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400' },
      { name: 'Kapurpurawan Rock Formation', description: 'Unique white rock formations', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    ]
  },
  {
    id: 14,
    name: 'Ilocos Sur',
    lat: 17.5649,
    lng: 120.3845,
    region: 'Ilocos',
    touristSpots: [
      { name: 'Vigan Heritage Village', description: 'UNESCO World Heritage Spanish colonial town', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400' },
      { name: 'Bantay Bell Tower', description: 'Historic watchtower with views', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Calle Crisologo', description: 'Cobblestone street with colonial houses', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400' },
    ]
  },
  {
    id: 15,
    name: 'Pangasinan',
    lat: 15.8949,
    lng: 120.2863,
    region: 'Ilocos',
    touristSpots: [
      { name: 'Hundred Islands', description: '124 islands and islets for island hopping', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Bolinao Falls', description: 'Beautiful waterfalls and natural pools', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
      { name: 'Enchanted Cave', description: 'Cave with underground pool', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
    ]
  },

  // Visayas
  {
    id: 16,
    name: 'Cebu',
    lat: 10.3157,
    lng: 123.8854,
    region: 'Central Visayas',
    touristSpots: [
      { name: 'Magellan\'s Cross', description: 'Historic cross planted by Ferdinand Magellan', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'Kawasan Falls', description: 'Three-tiered turquoise waterfalls', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
      { name: 'Oslob Whale Sharks', description: 'Swim with gentle whale sharks', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 17,
    name: 'Bohol',
    lat: 9.8500,
    lng: 124.1435,
    region: 'Central Visayas',
    touristSpots: [
      { name: 'Chocolate Hills', description: '1,200+ cone-shaped hills', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Tarsier Sanctuary', description: 'See the world\'s smallest primates', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400' },
      { name: 'Loboc River Cruise', description: 'Scenic river cruise with buffet', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
    ]
  },
  {
    id: 18,
    name: 'Aklan',
    lat: 11.9804,
    lng: 122.0091,
    region: 'Western Visayas',
    touristSpots: [
      { name: 'Boracay White Beach', description: 'World-famous 4km white sand beach', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Puka Shell Beach', description: 'Quieter beach with puka shells', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Ariel\'s Point', description: 'Cliff diving and island activities', image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400' },
    ]
  },
  {
    id: 19,
    name: 'Palawan',
    lat: 9.8349,
    lng: 118.7384,
    region: 'Mimaropa',
    touristSpots: [
      { name: 'El Nido', description: 'Limestone cliffs, lagoons, and pristine beaches', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Underground River', description: 'UNESCO World Heritage underground river', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
      { name: 'Coron', description: 'Shipwreck diving and stunning lakes', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 20,
    name: 'Leyte',
    lat: 11.2499,
    lng: 124.9953,
    region: 'Eastern Visayas',
    touristSpots: [
      { name: 'MacArthur Landing Memorial', description: 'WWII historical site', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Kalanggaman Island', description: 'Sandbar island with crystal waters', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Sohoton Cove', description: 'Cave and lagoon adventure', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
    ]
  },

  // Mindanao
  {
    id: 21,
    name: 'Davao',
    lat: 7.1907,
    lng: 125.4553,
    region: 'Davao',
    touristSpots: [
      { name: 'Mount Apo', description: 'Highest mountain in the Philippines', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Philippine Eagle Center', description: 'Conservation center for Philippine Eagles', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400' },
      { name: 'Eden Nature Park', description: 'Mountain resort with nature activities', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    ]
  },
  {
    id: 22,
    name: 'Surigao del Norte',
    lat: 9.8562,
    lng: 126.0469,
    region: 'Caraga',
    touristSpots: [
      { name: 'Siargao Cloud 9', description: 'World-class surfing waves', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400' },
      { name: 'Sohoton Cove', description: 'Enchanting lagoon with jellyfish', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Sugba Lagoon', description: 'Clear blue lagoon for swimming', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    ]
  },
  {
    id: 23,
    name: 'Camiguin',
    lat: 9.1733,
    lng: 124.7297,
    region: 'Northern Mindanao',
    touristSpots: [
      { name: 'White Island', description: 'Uninhabited white sandbar', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Sunken Cemetery', description: 'Underwater cemetery marked by cross', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
      { name: 'Katibawasan Falls', description: '250-foot waterfall', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
    ]
  },
  {
    id: 24,
    name: 'Bukidnon',
    lat: 8.0542,
    lng: 124.8042,
    region: 'Northern Mindanao',
    touristSpots: [
      { name: 'Dahilayan Adventure Park', description: 'Asia\'s longest dual zipline', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Monastery of Transfiguration', description: 'Modern Benedictine monastery', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'Kaamulan Festival', description: 'Cultural tribal festival', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400' },
    ]
  },
];
