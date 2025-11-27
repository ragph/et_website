import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlaceIcon from "@mui/icons-material/Place";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ExploreIcon from "@mui/icons-material/Explore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { regionalData } from "./data/RegionalData";
import { SectionHeader } from "../../landing/components/SectionHeader";
import { AnimatedSection } from "../../landing/components/AnimatedSection";
import { touristSpotApi } from "../../../api/touristSpotApi";
import type { TouristSpotDetail } from "../../../api/types/touristSpot.types";

const TouristSpotDetails = () => {
  const { regionName, province, spotName } = useParams<{
    regionName: string;
    province: string;
    spotName: string;
  }>();
  const navigate = useNavigate();

  // State management
  const [touristSpot, setTouristSpot] = useState<TouristSpotDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tourist spot data
  useEffect(() => {
    const fetchTouristSpot = async () => {
      if (!regionName || !province || !spotName) {
        setError("Missing required parameters");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await touristSpotApi.getTouristSpot({
          regionName,
          province,
          spotName,
        });

        if (response.success) {
          setTouristSpot(response.data);
        } else {
          setError(response.message || "Failed to load tourist spot");
        }
      } catch (err) {
        setError("An unexpected error occurred");
        console.error("Error fetching tourist spot:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTouristSpot();
  }, [regionName, province, spotName]);

  // Scroll to top when component mounts or params change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [regionName, province, spotName]);

  // Loading state
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  // Error state
  if (error || !touristSpot) {
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
            {error || "Tourist spot not found"}
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

  // Get region data for additional spots (guaranteed touristSpot exists here)
  const region = regionalData.find((r) => r.region === touristSpot.region);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 2, md: 4 },
          pb: { xs: 4, md: 8 },
          flex: 1,
        }}
      >
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
            {touristSpot.region}
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
              <Chip label={touristSpot.province} color="primary" size="medium" />
              <Chip label={touristSpot.region} variant="outlined" size="medium" />
            </Box>
            <SectionHeader
              title={touristSpot.name}
              align="left"
              containerSx={{ mb: 0 }}
            />
          </Box>
        </AnimatedSection>

        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Image Carousel Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <AnimatedSection animation="fadeUp" duration={0.8} delay={0.2}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  "& .swiper": {
                    borderRadius: 2,
                  },
                  "& .swiper-button-next, & .swiper-button-prev": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    padding: 1,
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                    "&:after": {
                      fontSize: "18px",
                      fontWeight: "bold",
                    },
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  },
                  "& .swiper-button-prev": {
                    left: "16px !important",
                  },
                  "& .swiper-button-next": {
                    right: "16px !important",
                  },
                  "& .swiper-pagination": {
                    bottom: "16px",
                  },
                  "& .swiper-pagination-bullet": {
                    width: "8px",
                    height: "8px",
                    backgroundColor: "white",
                    opacity: 0.4,
                    transition: "all 0.3s ease",
                  },
                  "& .swiper-pagination-bullet-active": {
                    width: "24px",
                    borderRadius: "4px",
                    opacity: 1,
                  },
                }}
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  style={{
                    height: "auto",
                  }}
                >
                  {touristSpot.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                      <Box
                        component="img"
                        src={image}
                        alt={`${touristSpot.name} - Image ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: { xs: 300, sm: 400, md: 600 },
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Paper>
            </AnimatedSection>
          </Grid>

          {/* Details Section */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <AnimatedSection animation="fadeUp" duration={0.8} delay={0.2}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    fontSize: { xs: "1.375rem", md: "1.625rem" },
                    color: "text.primary",
                    letterSpacing: "-0.02em",
                  }}
                >
                  About this destination
                </Typography>

                {/* Location */}
                <Box sx={{ mb: 4, display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      mt: 0.5,
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "warning.light",
                      color: "warning.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Location
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        color: "text.primary",
                      }}
                    >
                      {touristSpot.province}, {touristSpot.region}
                    </Typography>
                  </Box>
                </Box>

                {/* Address */}
                {touristSpot.address && (
                  <Box sx={{ mb: 4, display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        mt: 0.5,
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "success.light",
                        color: "success.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PlaceIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "text.secondary",
                          mb: 1,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontSize: "0.75rem",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Address
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: { xs: "0.9375rem", md: "1rem" },
                          color: "text.secondary",
                        }}
                      >
                        {touristSpot.address}
                      </Typography>
                    </Box>
                  </Box>
                )}

                {/* Description */}
                <Box sx={{ mb: 4, display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      mt: 0.5,
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "info.light",
                      color: "info.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <InfoIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Description
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        fontSize: { xs: "0.9375rem", md: "1rem" },
                        color: "text.secondary",
                      }}
                    >
                      {touristSpot.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Did You Know? */}
                {touristSpot.trivia && (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "warning.light",
                      border: "1px solid",
                      borderColor: "warning.main",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <LightbulbIcon
                        sx={{
                          fontSize: 28,
                          color: "warning.dark",
                          mt: 0.5,
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "warning.dark",
                            mb: 1.5,
                            fontWeight: 700,
                            fontSize: { xs: "0.875rem", md: "1rem" },
                          }}
                        >
                          Did You Know?
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            lineHeight: 1.8,
                            fontStyle: "italic",
                            fontSize: { xs: "0.9375rem", md: "0.9rem" },
                            color: "warning.dark",
                          }}
                        >
                          {touristSpot.trivia}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Paper>
            </AnimatedSection>
          </Grid>
        </Grid>

        {/* Other Tourist Spots in this Region */}
        {region && region.touristSpots.length > 1 && (
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
                  if (spot.name === touristSpot.name) return null; // Skip current spot

                  return (
                    <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                      <Paper
                        elevation={2}
                        onClick={() =>
                          navigate(
                            `/details/${encodeURIComponent(region.region)}/${encodeURIComponent(spot.province)}/${encodeURIComponent(spot.name)}`
                          )
                        }
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
                          src={spot.images[0]}
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
