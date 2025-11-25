// Regional tourist spots data organized by region

export interface TouristSpot {
  name: string;
  description: string;
  image: string;
  province: string;
}

export interface RegionData {
  id: number;
  region: string;
  lat: number;
  lng: number;
  color: string;
  boundaries: [number, number][]; // Polygon coordinates for the region
  touristSpots: TouristSpot[];
}

export const regionalData: RegionData[] = [
  {
    id: 1,
    region: 'NCR',
    lat: 14.5995,
    lng: 120.9842,
    color: '#FF6B6B',
    boundaries: [
      [14.7, 120.9],
      [14.7, 121.1],
      [14.4, 121.1],
      [14.4, 120.9],
    ],
    touristSpots: [
      { name: 'Intramuros', province: 'Manila', description: 'Historic walled city with Spanish colonial architecture', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400' },
      { name: 'Rizal Park', province: 'Manila', description: 'Large urban park honoring national hero Jose Rizal', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Manila Ocean Park', province: 'Manila', description: 'Oceanarium and marine-themed park', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 2,
    region: 'Calabarzon',
    lat: 14.1,
    lng: 121.0,
    color: '#4ECDC4',
    boundaries: [
      [14.7, 121.0],
      [14.7, 122.3],
      [13.5, 122.3],
      [13.5, 120.8],
      [14.2, 120.8],
    ],
    touristSpots: [
      { name: 'Taal Volcano', province: 'Batangas', description: 'Active volcano on an island within a lake', image: 'https://images.unsplash.com/photo-1580274655877-957d95b24916?w=400' },
      { name: 'Tagaytay', province: 'Cavite', description: 'Cool highland city with Taal Lake view', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Pagsanjan Falls', province: 'Laguna', description: 'Stunning waterfalls accessible by boat', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
      { name: 'Enchanted Kingdom', province: 'Laguna', description: 'Theme park with rides and attractions', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400' },
      { name: 'Masungi Georeserve', province: 'Rizal', description: 'Conservation area with rope courses', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
      { name: 'Hundred Islands', province: 'Quezon', description: '124 islands and islets for island hopping', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 3,
    region: 'Central Luzon',
    lat: 15.2,
    lng: 120.5,
    color: '#95E1D3',
    boundaries: [
      [15.8, 119.8],
      [15.8, 121.3],
      [14.7, 121.1],
      [14.5, 120.3],
      [14.8, 119.8],
    ],
    touristSpots: [
      { name: 'Mount Pinatubo', province: 'Pampanga', description: 'Active volcano with stunning crater lake', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Subic Bay', province: 'Zambales', description: 'Former US naval base with beaches and activities', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Anawangin Cove', province: 'Zambales', description: 'Beach with pine trees and camping', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Barasoain Church', province: 'Bulacan', description: 'Historic church of Philippine independence', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'Las Casas Filipinas', province: 'Bataan', description: 'Heritage resort with Spanish colonial houses', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400' },
    ]
  },
  {
    id: 4,
    region: 'CAR',
    lat: 16.4023,
    lng: 120.5960,
    color: '#F38181',
    boundaries: [
      [17.5, 120.3],
      [17.5, 121.5],
      [16.0, 121.3],
      [15.8, 120.3],
    ],
    touristSpots: [
      { name: 'Burnham Park', province: 'Baguio', description: 'Central park with lake and gardens', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=400' },
      { name: 'Mines View Park', province: 'Baguio', description: 'Scenic viewpoint overlooking mountains', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Baguio Cathedral', province: 'Baguio', description: 'Pink cathedral with beautiful gardens', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
    ]
  },
  {
    id: 5,
    region: 'Ilocos',
    lat: 16.5,
    lng: 120.4,
    color: '#AA96DA',
    boundaries: [
      [18.5, 120.3],
      [18.5, 121.0],
      [17.5, 121.2],
      [15.5, 120.8],
      [15.3, 119.8],
      [17.8, 120.2],
    ],
    touristSpots: [
      { name: 'Vigan Heritage Village', province: 'Ilocos Sur', description: 'UNESCO World Heritage Spanish colonial town', image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400' },
      { name: 'Bangui Windmills', province: 'Ilocos Norte', description: 'Iconic windmill farm by the sea', image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400' },
      { name: 'Paoay Church', province: 'Ilocos Norte', description: 'UNESCO World Heritage baroque church', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'San Juan Surf Beach', province: 'La Union', description: 'Popular surfing destination', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400' },
      { name: 'Hundred Islands', province: 'Pangasinan', description: '124 islands and islets for island hopping', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 6,
    region: 'Central Visayas',
    lat: 10.3,
    lng: 123.9,
    color: '#FCBAD3',
    boundaries: [
      [11.3, 123.3],
      [11.3, 124.8],
      [9.3, 125.0],
      [9.3, 123.2],
    ],
    touristSpots: [
      { name: 'Magellan\'s Cross', province: 'Cebu', description: 'Historic cross planted by Ferdinand Magellan', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
      { name: 'Kawasan Falls', province: 'Cebu', description: 'Three-tiered turquoise waterfalls', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400' },
      { name: 'Oslob Whale Sharks', province: 'Cebu', description: 'Swim with gentle whale sharks', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Chocolate Hills', province: 'Bohol', description: '1,200+ cone-shaped hills', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Tarsier Sanctuary', province: 'Bohol', description: 'See the world\'s smallest primates', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400' },
    ]
  },
  {
    id: 7,
    region: 'Western Visayas',
    lat: 11.5,
    lng: 122.5,
    color: '#FFFFD2',
    boundaries: [
      [12.5, 121.8],
      [12.5, 123.2],
      [10.2, 123.2],
      [10.2, 121.8],
    ],
    touristSpots: [
      { name: 'Boracay White Beach', province: 'Aklan', description: 'World-famous 4km white sand beach', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Puka Shell Beach', province: 'Aklan', description: 'Quieter beach with puka shells', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Ariel\'s Point', province: 'Aklan', description: 'Cliff diving and island activities', image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400' },
    ]
  },
  {
    id: 8,
    region: 'Mimaropa',
    lat: 9.8,
    lng: 118.7,
    color: '#A8D8EA',
    boundaries: [
      [13.5, 119.5],
      [13.5, 121.0],
      [12.5, 121.0],
      [8.5, 118.0],
      [8.5, 116.5],
      [11.5, 119.0],
    ],
    touristSpots: [
      { name: 'El Nido', province: 'Palawan', description: 'Limestone cliffs, lagoons, and pristine beaches', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Underground River', province: 'Palawan', description: 'UNESCO World Heritage underground river', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
      { name: 'Coron', province: 'Palawan', description: 'Shipwreck diving and stunning lakes', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    ]
  },
  {
    id: 9,
    region: 'Eastern Visayas',
    lat: 11.2,
    lng: 125.0,
    color: '#FFD93D',
    boundaries: [
      [12.5, 124.3],
      [12.5, 125.7],
      [10.0, 125.7],
      [10.0, 124.3],
    ],
    touristSpots: [
      { name: 'MacArthur Landing Memorial', province: 'Leyte', description: 'WWII historical site', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Kalanggaman Island', province: 'Leyte', description: 'Sandbar island with crystal waters', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Sohoton Cove', province: 'Leyte', description: 'Cave and lagoon adventure', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
    ]
  },
  {
    id: 10,
    region: 'Davao',
    lat: 7.1907,
    lng: 125.4553,
    color: '#6BCB77',
    boundaries: [
      [8.0, 124.5],
      [8.0, 126.5],
      [5.5, 126.5],
      [5.5, 124.5],
    ],
    touristSpots: [
      { name: 'Mount Apo', province: 'Davao', description: 'Highest mountain in the Philippines', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Philippine Eagle Center', province: 'Davao', description: 'Conservation center for Philippine Eagles', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400' },
      { name: 'Eden Nature Park', province: 'Davao', description: 'Mountain resort with nature activities', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    ]
  },
  {
    id: 11,
    region: 'Caraga',
    lat: 9.5,
    lng: 125.8,
    color: '#4D96FF',
    boundaries: [
      [10.5, 125.3],
      [10.5, 126.5],
      [8.0, 126.5],
      [8.0, 125.3],
    ],
    touristSpots: [
      { name: 'Siargao Cloud 9', province: 'Surigao del Norte', description: 'World-class surfing waves', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400' },
      { name: 'Sohoton Cove', province: 'Surigao del Norte', description: 'Enchanting lagoon with jellyfish', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
      { name: 'Sugba Lagoon', province: 'Surigao del Norte', description: 'Clear blue lagoon for swimming', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    ]
  },
  {
    id: 12,
    region: 'Northern Mindanao',
    lat: 8.5,
    lng: 124.6,
    color: '#FF6FB5',
    boundaries: [
      [9.5, 123.8],
      [9.5, 125.3],
      [7.5, 125.5],
      [7.5, 123.5],
    ],
    touristSpots: [
      { name: 'White Island', province: 'Camiguin', description: 'Uninhabited white sandbar', image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400' },
      { name: 'Sunken Cemetery', province: 'Camiguin', description: 'Underwater cemetery marked by cross', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
      { name: 'Dahilayan Adventure Park', province: 'Bukidnon', description: 'Asia\'s longest dual zipline', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
      { name: 'Monastery of Transfiguration', province: 'Bukidnon', description: 'Modern Benedictine monastery', image: 'https://images.unsplash.com/photo-1548625149-720407e0b78f?w=400' },
    ]
  },
];
