import { Box, Container, Typography, Paper, Chip, Dialog, DialogTitle, DialogContent, IconButton, List, ListItem, ListItemText, Divider, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polygon, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { regionalData, RegionData } from './RegionalData';
import { SectionHeader } from '../../landing/components/SectionHeader';
import { AnimatedSection } from '../../landing/components/AnimatedSection';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Custom icon for user location
const UserLocationIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2196F3" width="32" height="32">
      <circle cx="12" cy="12" r="8" fill="#2196F3" opacity="0.3"/>
      <circle cx="12" cy="12" r="5" fill="#2196F3"/>
      <circle cx="12" cy="12" r="2" fill="white"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle map center changes
function MapCenterController({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 10, {
      duration: 1.5,
    });
  }, [center, map]);

  return null;
}

const Map = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.8797, 121.7740]); // Center of Philippines
  const [dialogOpen, setDialogOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Get user's current location on component mount
  useEffect(() => {
    setIsLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userCoords: [number, number] = [latitude, longitude];
          setUserLocation(userCoords);
          setMapCenter(userCoords);
          // Delay to ensure map renders properly
          setTimeout(() => setIsLoading(false), 800);
        },
        (error) => {
          console.log('Geolocation error:', error.message);
          // Fallback to Philippines center if geolocation fails
          setMapCenter([12.8797, 121.7740]);
          setTimeout(() => setIsLoading(false), 800);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      setMapCenter([12.8797, 121.7740]);
      setTimeout(() => setIsLoading(false), 800);
    }
  }, []);

  const handleRegionClick = (region: RegionData) => {
    setSelectedRegion(region);
    setMapCenter([region.lat, region.lng]);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Show loading state
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} thickness={4} />
          <Typography
            variant="h6"
            sx={{ mt: 3, color: 'text.secondary', fontWeight: 500 }}
          >
            Loading Map...
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: 'text.secondary' }}
          >
            Please wait while we prepare your experience
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 2 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <AnimatedSection animation="fadeUp" duration={0.8} delay={0}>
          <SectionHeader
            badge="EXPLORE THE PHILIPPINES"
            title="Discover Amazing Destinations"
            subtitle="Click on any region to explore popular tourist spots and plan your next adventure"
            align="center"
            containerSx={{ mb: 4 }}
          />
        </AnimatedSection>

        {/* Interactive Leaflet Map */}
        <AnimatedSection animation="fadeUp" duration={0.8} delay={0.1}>
          <Paper
            elevation={3}
            sx={{
              height: { xs: 500, md: 600 },
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              mb: 4,
              '& .leaflet-container': {
                height: '100%',
                width: '100%',
                borderRadius: 'inherit',
              },
            }}
          >
          <MapContainer
            center={mapCenter}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapCenterController center={mapCenter} />

            {/* Regional Boundaries */}
            {regionalData.map((region) => (
              <Polygon
                key={region.id}
                positions={region.boundaries}
                pathOptions={{
                  color: region.color,
                  fillColor: region.color,
                  fillOpacity: 0.2,
                  weight: 2,
                }}
              >
                <Tooltip permanent direction="center" className="region-label">
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      fontSize: '0.75rem',
                    }}
                  >
                    {region.region}
                  </Typography>
                </Tooltip>
              </Polygon>
            ))}

            {/* User Location Marker */}
            {userLocation && (
              <Marker position={userLocation} icon={UserLocationIcon}>
                <Popup>
                  <Box sx={{ minWidth: 150 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Your Location
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Current position
                    </Typography>
                  </Box>
                </Popup>
              </Marker>
            )}

            {/* Region Markers */}
            {regionalData.map((region) => (
              <Marker
                key={region.id}
                position={[region.lat, region.lng]}
                eventHandlers={{
                  click: () => handleRegionClick(region),
                }}
              >
                <Popup>
                  <Box sx={{ minWidth: 200 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {region.region}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {region.touristSpots.length} Tourist Spots
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'primary.main', cursor: 'pointer' }}>
                      Click to see more →
                    </Typography>
                  </Box>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Paper>
        </AnimatedSection>

        {/* Tourist Spots Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedRegion && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {selectedRegion.region}
                    </Typography>
                  </Box>
                </Box>
                <IconButton onClick={handleCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers sx={{ px: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Popular Tourist Spots
                </Typography>
                <List>
                  {selectedRegion.touristSpots.map((spot, index) => (
                    <Box key={index}>
                      <ListItem
                        sx={{
                          alignItems: 'flex-start',
                          py: 2,
                          cursor: 'pointer',
                          borderRadius: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'action.hover',
                            transform: 'translateX(8px)',
                          },
                        }}
                        onClick={() => {
                          handleCloseDialog();
                          navigate(`/region/${selectedRegion.id}/${index}`);
                        }}
                      >
                        <Box
                          component="img"
                          src={spot.image}
                          alt={spot.name}
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 1,
                            mr: 2,
                            objectFit: 'cover',
                            flexShrink: 0,
                          }}
                        />
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {spot.name}
                              </Typography>
                              <Chip
                                label={spot.province}
                                size="small"
                                variant="outlined"
                                sx={{ width: 'fit-content', height: 20, fontSize: '0.7rem' }}
                              />
                            </Box>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                              {spot.description}
                            </Typography>
                          }
                        />
                      </ListItem>
                      {index < selectedRegion.touristSpots.length - 1 && <Divider />}
                    </Box>
                  ))}
                </List>
              </DialogContent>
            </>
          )}
        </Dialog>

        {/* Regions List */}
        <AnimatedSection animation="fadeUp" duration={0.8} delay={0.2}>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Philippine Regions
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 2,
              }}
            >
            {regionalData.map((region) => (
              <Paper
                key={region.id}
                elevation={2}
                onClick={() => handleRegionClick(region)}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: 2,
                  borderColor: selectedRegion?.id === region.id ? 'primary.main' : 'transparent',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                    borderColor: 'primary.light',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {region.region}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    bgcolor: region.color,
                    borderRadius: 1,
                    mb: 1,
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                />
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  {region.touristSpots.length} tourist spots
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Map;
