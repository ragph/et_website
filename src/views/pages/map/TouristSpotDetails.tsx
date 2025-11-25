import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Chip,
  Grid,
  Breadcrumbs,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { regionalData } from "./RegionalData";
import { SectionHeader } from "../../landing/components/SectionHeader";
import { AnimatedSection } from "../../landing/components/AnimatedSection";

const TouristSpotDetails = () => {
  const { regionId, spotId } = useParams<{
    regionId: string;
    spotId: string;
  }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts or params change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [regionId, spotId]);

  // Find the region and tourist spot
  const region = regionalData.find((r) => r.id === Number(regionId));
  const touristSpot = region?.touristSpots[Number(spotId)];

  if (!region || !touristSpot) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          py: { xs: 4, md: 8 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2.125rem" },
            }}
          >
            Tourist spot not found
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/map")}
              sx={{
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              Back to Map
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            mb: { xs: 2, md: 3 },
            "& .MuiBreadcrumbs-separator": {
              color: "text.secondary",
            },
          }}
        >
          <Link
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.primary",
              cursor: "pointer",
              fontSize: { xs: "0.875rem", md: "0.9375rem" },
              "&:hover": {
                color: "primary.main",
              },
            }}
            onClick={() => navigate("/")}
          >
            <HomeIcon sx={{ fontSize: 20 }} />
            Home
          </Link>
          <Link
            underline="hover"
            sx={{
              color: "text.primary",
              cursor: "pointer",
              fontSize: { xs: "0.875rem", md: "0.9375rem" },
              "&:hover": {
                color: "primary.main",
              },
            }}
            onClick={() => navigate("/map")}
          >
            Map
          </Link>
          <Link
            underline="hover"
            sx={{
              color: "text.primary",
              cursor: "pointer",
              fontSize: { xs: "0.875rem", md: "0.9375rem" },
              "&:hover": {
                color: "primary.main",
              },
            }}
            onClick={() => navigate("/map")}
          >
            {region.region}
          </Link>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", md: "0.9375rem" },
              fontWeight: 500,
            }}
          >
            {touristSpot.name}
          </Typography>
        </Breadcrumbs>

        {/* Header Section */}
        <AnimatedSection animation="fadeUp" duration={0.8} delay={0.1}>
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <LocationOnIcon
                sx={{ color: "primary.main", fontSize: { xs: 24, md: 28 } }}
              />
              <Chip label={touristSpot.province} color="primary" size="medium" />
              <Chip label={region.region} variant="outlined" size="medium" />
            </Box>
            <SectionHeader
              title={touristSpot.name}
              subtitle={touristSpot.description}
              align="left"
              containerSx={{ mb: 0 }}
            />
          </Box>
        </AnimatedSection>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedSection animation="fadeLeft" duration={0.8} delay={0.2}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  height: { xs: 300, sm: 400, md: 500 },
                }}
              >
                <Box
                  component="img"
                  src={touristSpot.image}
                  alt={touristSpot.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </AnimatedSection>
          </Grid>

          {/* Details Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedSection animation="fadeRight" duration={0.8} delay={0.2}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, md: 3 },
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  About this destination
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", mb: 1, fontWeight: 600 }}
                  >
                    Location
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {touristSpot.province}, {region.region}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", mb: 1, fontWeight: 600 }}
                  >
                    Description
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {touristSpot.description}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", mb: 2, fontWeight: 600 }}
                  >
                    Quick Facts
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2">
                        One of {region.touristSpots.length} tourist spots in{" "}
                        {region.region}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2">
                        Province: {touristSpot.province}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.5,
                  }}
                >
                  Plan Your Visit
                </Button>
              </Paper>
            </AnimatedSection>
          </Grid>
        </Grid>

        {/* Other Tourist Spots in this Region */}
        {region.touristSpots.length > 1 && (
          <AnimatedSection animation="fadeUp" duration={0.8} delay={0.3}>
            <Box sx={{ mt: { xs: 4, md: 6 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Other attractions in {region.region}
              </Typography>

              <Grid container spacing={3}>
                {region.touristSpots.map((spot, index) => {
                  if (index === Number(spotId)) return null; // Skip current spot

                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                      <Paper
                        elevation={2}
                        onClick={() => navigate(`/region/${regionId}/${index}`)}
                        sx={{
                          borderRadius: 2,
                          overflow: "hidden",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          height: { xs: 280, sm: 320, md: 350 },
                          width: "100%",
                          position: "relative",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: 4,
                            "& .overlay": {
                              background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)",
                            },
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={spot.image}
                          alt={spot.name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
                            transition: "background 0.3s ease",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: { xs: 2, md: 3 },
                            zIndex: 1,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              fontSize: { xs: "1rem", md: "1.125rem" },
                              color: "white",
                            }}
                          >
                            {spot.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255, 255, 255, 0.9)",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              lineHeight: 1.6,
                            }}
                          >
                            {spot.description}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </AnimatedSection>
        )}
      </Container>
    </Box>
  );
};

export default TouristSpotDetails;
