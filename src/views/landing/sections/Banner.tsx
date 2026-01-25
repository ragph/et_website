import { Box, Container, Typography, Button } from "@mui/material";
import { AnimatedSection } from "../components/AnimatedSection";

export const Banner = () => {
  return (
    <Box
      id="banner"
      sx={{
        py: { xs: 6, md: 6 },
        background: "linear-gradient(180deg, #0d47a1 0%, #1565c0 50%, #0d47a1 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Background Travel Image Underlay from Unsplash */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1920&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <AnimatedSection animation="fadeUp" duration={0.6} delay={0}>
            <Box
              component="img"
              src="/images/logo-white.png"
              alt="ET Logo"
              sx={{
                height: { xs: 60, md: 100 },
                width: "auto",
                mb: 1,
              }}
              onError={(e: any) => {
                e.target.style.display = "none";
              }}
            />
          </AnimatedSection>

          {/* Brand Name */}
          {/* <AnimatedSection animation="fadeUp" duration={0.6} delay={0.05}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: 0,
                mb: 2,
              }}
            >
              Earning While Travelling
            </Typography>
          </AnimatedSection> */}

          {/* Title */}
          <AnimatedSection animation="fadeUp" duration={0.6} delay={0.1}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3.2rem" },
                fontWeight: 800,
                color: "white",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Explore the World with{" "} <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #FFD54F, #FFA726)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Earning While Travelling
              </Box>
            </Typography>
          </AnimatedSection>

          {/* Two Column Layout - Image & Description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 3, md: 6 },
              mb: 4,
              width: "100%",
            }}
          >
            {/* Model Image */}
            <AnimatedSection animation="fadeUp" duration={0.6} delay={0.15}>
              <Box
                sx={{
                  flex: { md: "0 0 auto" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 220, sm: 280, md: 350 },
                    height: "auto",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/model.png"
                    alt="Traveler"
                    sx={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection animation="fadeUp" duration={0.6} delay={0.2}>
              <Box
                sx={{
                  flex: { md: 1 },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: { xs: "100%", md: 450 },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.8,
                    px: { xs: 2, md: 0 },
                    mb: 4,
                  }}
                >
                  ET App is your gateway to unforgettable travel experiences while earning rewards along the way.
                  We connect passionate travelers with exclusive destinations, offering a unique opportunity
                  to explore the world's most beautiful places while building a sustainable income.
                </Typography>

                {/* CTA Button */}
                <AnimatedSection animation="fadeUp" duration={0.6} delay={0.25}>
                  <Button
                    variant="contained"
                    size="large"
                    href="https://etapp.triptravelandtours.com/"
                    rel="noopener noreferrer"
                    sx={{
                      px: { xs: 5, md: 6 },
                      py: { xs: 1.5, md: 1.8 },
                      borderRadius: 999,
                      width: "100%",
                      textTransform: "uppercase",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      fontWeight: 700,
                      letterSpacing: 1,
                      bgcolor: "#FFC107",
                      color: "#0d47a1",
                      transition: "all 0.3s ease",
                      mb:8,
                    }}
                  >
                    Book Now
                  </Button>
                </AnimatedSection>
              </Box>
            </AnimatedSection>
          </Box>


          {/* Tier Badges */}
          <AnimatedSection animation="fadeUp" duration={0.6} delay={0.3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: { xs: 0, md: 2 },
                mb: 6,
              }}
            >
              {/* Traveller Badge - Left */}
              <Box
                component="img"
                src="/images/travellers.png"
                alt="Traveller"
                sx={{
                  width: { xs: 80, sm: 100, md: 120 },
                  height: "auto",
                  transform: "translateY(10px)",
                }}
              />

              {/* Victor Badge - Center (larger) */}
              <Box
                component="img"
                src="/images/victors.png"
                alt="Victors"
                sx={{
                  width: { xs: 100, sm: 130, md: 160 },
                  height: "auto",
                  zIndex: 2,
                }}
              />

              {/* Affiliate Badge - Right */}
              <Box
                component="img"
                src="/images/affiliate.png"
                alt="Affiliate"
                sx={{
                  width: { xs: 80, sm: 100, md: 120 },
                  height: "auto",
                  transform: "translateY(10px)",
                }}
              />
            </Box>
          </AnimatedSection>

          {/* Bottom Text */}
          <AnimatedSection animation="fadeUp" duration={0.6} delay={0.35}>
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                mb: 2,
              }}
            >
              Choose Your Journey, Unlock Your Rewards
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: { xs: "0.9rem", md: "1rem" },
                lineHeight: 1.7,
                // maxWidth: 550,
                px: 2,
              }}
            >
              Discover a rewards system built for every kind of explorer. Whether you're
              traveling, sharing, or leading the community, each tier opens new perks,
              bonuses, and earning potential.
            </Typography>
          </AnimatedSection>
        </Box>
      </Container>
    </Box>
  );
};
