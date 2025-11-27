import { regionalData } from '../views/pages/map/data/RegionalData';
import type {
  TouristSpotDetail,
  TouristSpotListItem,
  GetTouristSpotParams,
  GetTouristSpotsByRegionParams,
  GetTouristSpotsByProvinceParams,
  ApiResponse,
  ApiError,
} from './types/touristSpot.types';

// Simulate network delay for realistic API behavior
const simulateNetworkDelay = (ms: number = 300): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Mock API Service for Tourist Spots
 * This service simulates API calls for now. When the real API is ready,
 * simply replace the implementation with actual axios calls.
 */
class TouristSpotApiService {
  /**
   * Get a single tourist spot by region, province, and spot name
   *
   * Future API endpoint: GET /api/tourist-spots/:regionName/:province/:spotName
   */
  async getTouristSpot(
    params: GetTouristSpotParams
  ): Promise<ApiResponse<TouristSpotDetail> | ApiError> {
    try {
      await simulateNetworkDelay();

      // Decode URL parameters
      const decodedRegionName = decodeURIComponent(params.regionName);
      const decodedProvince = decodeURIComponent(params.province);
      const decodedSpotName = decodeURIComponent(params.spotName);

      // Find the region and tourist spot (simulating database query)
      const region = regionalData.find((r) => r.region === decodedRegionName);

      if (!region) {
        return {
          success: false,
          message: `Region "${decodedRegionName}" not found`,
        };
      }

      const touristSpot = region.touristSpots.find(
        (spot) =>
          spot.name === decodedSpotName && spot.province === decodedProvince
      );

      if (!touristSpot) {
        return {
          success: false,
          message: `Tourist spot "${decodedSpotName}" not found in ${decodedProvince}`,
        };
      }

      // Transform to API response format
      const spotDetail: TouristSpotDetail = {
        id: `${region.id}-${decodedProvince}-${decodedSpotName}`.toLowerCase().replace(/\s+/g, '-'),
        name: touristSpot.name,
        description: touristSpot.description,
        images: touristSpot.images,
        province: touristSpot.province,
        region: region.region,
        address: touristSpot.address,
        trivia: touristSpot.trivia,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return {
        success: true,
        data: spotDetail,
        message: 'Tourist spot retrieved successfully',
      };
    } catch (error) {
      console.error('Error fetching tourist spot:', error);
      return {
        success: false,
        message: 'Failed to fetch tourist spot',
        error,
      };
    }
  }

  /**
   * Get all tourist spots in a region
   *
   * Future API endpoint: GET /api/tourist-spots/region/:regionName
   */
  async getTouristSpotsByRegion(
    params: GetTouristSpotsByRegionParams
  ): Promise<ApiResponse<TouristSpotListItem[]> | ApiError> {
    try {
      await simulateNetworkDelay();

      const decodedRegionName = decodeURIComponent(params.regionName);
      const region = regionalData.find((r) => r.region === decodedRegionName);

      if (!region) {
        return {
          success: false,
          message: `Region "${decodedRegionName}" not found`,
        };
      }

      const spots: TouristSpotListItem[] = region.touristSpots.map((spot) => ({
        id: `${region.id}-${spot.province}-${spot.name}`.toLowerCase().replace(/\s+/g, '-'),
        name: spot.name,
        province: spot.province,
        region: region.region,
        thumbnail: spot.images[0],
        description: spot.description,
      }));

      return {
        success: true,
        data: spots,
        message: 'Tourist spots retrieved successfully',
      };
    } catch (error) {
      console.error('Error fetching tourist spots by region:', error);
      return {
        success: false,
        message: 'Failed to fetch tourist spots',
        error,
      };
    }
  }

  /**
   * Get all tourist spots in a specific province
   *
   * Future API endpoint: GET /api/tourist-spots/region/:regionName/province/:province
   */
  async getTouristSpotsByProvince(
    params: GetTouristSpotsByProvinceParams
  ): Promise<ApiResponse<TouristSpotListItem[]> | ApiError> {
    try {
      await simulateNetworkDelay();

      const decodedRegionName = decodeURIComponent(params.regionName);
      const decodedProvince = decodeURIComponent(params.province);

      const region = regionalData.find((r) => r.region === decodedRegionName);

      if (!region) {
        return {
          success: false,
          message: `Region "${decodedRegionName}" not found`,
        };
      }

      const spots: TouristSpotListItem[] = region.touristSpots
        .filter((spot) => spot.province === decodedProvince)
        .map((spot) => ({
          id: `${region.id}-${spot.province}-${spot.name}`.toLowerCase().replace(/\s+/g, '-'),
          name: spot.name,
          province: spot.province,
          region: region.region,
          thumbnail: spot.images[0],
          description: spot.description,
        }));

      return {
        success: true,
        data: spots,
        message: 'Tourist spots retrieved successfully',
      };
    } catch (error) {
      console.error('Error fetching tourist spots by province:', error);
      return {
        success: false,
        message: 'Failed to fetch tourist spots',
        error,
      };
    }
  }
}

// Export singleton instance
export const touristSpotApi = new TouristSpotApiService();

// Export the class for testing purposes
export default TouristSpotApiService;
