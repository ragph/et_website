import { Box, Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { SvgIcon } from "@mui/material";

// TikTok Icon Component
const TikTokIcon = (props: React.ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </SvgIcon>
);

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=61555167518114",
    label: "Facebook",
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@earningwhiletravellingph?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
  },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/@earningwhiletravelling2026",
    label: "YouTube",
  },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, rgba(31, 41, 55, 0) 0%, rgba(31, 41, 55, 0.8) 100%), url(/images/silhouette3.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        color: "white",
        pt: 10,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Centered Company Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: 5,
          }}
        >
          {/* Logo and Brand */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/images/logo-white.png"
              alt="ET Logo"
              sx={{
                height: 50,
                width: "auto",
              }}
              onError={(e: any) => {
                e.target.style.display = "none";
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: 0,
              }}
            >
              Earning While Travelling
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.75)",
              mb: 4,
              lineHeight: 1.8,
              maxWidth: 500,
            }}
          >
            Your ultimate platform for booking travel and earning money. Explore
            the world while building your income through commissions, referrals,
            and rewards.
          </Typography>

          {/* Powered by TTT */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 800,
              fontSize: { xs: ".75rem", sm: "0.95rem" },
              letterSpacing: 0,
              mb: 1,
            }}
          >
            Powered By
          </Typography>
          <Box
            component="a"
            href="https://triptravelandtours.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: 4 }}
          >
            <Box
              component="img"
              src="/images/ttt.png"
              alt="TTT"
              sx={{
                height: 90,
                width: "auto",
                opacity: 0.9,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
              onError={(e: any) => {
                e.target.style.display = "none";
              }}
            />
          </Box>

          {/* Social Links */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 5 }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    bgcolor: "rgba(255,255,255,0.1)",
                    width: 44,
                    height: 44,
                    "&:hover": {
                      color: "#1a237e",
                      bgcolor: "#FFD23F",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Box>

          {/* Contact Info - Horizontal Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, md: 4 },
              flexWrap: "wrap",
            }}
          >
            {/* Phone */}
            <Box
              component="a"
              href="tel:+63286836213"
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                textDecoration: "none",
                color: "rgba(255,255,255,0.75)",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#FFD23F",
                },
              }}
            >
              <PhoneIcon sx={{ color: "#FFD23F", fontSize: 20 }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                +632-8683-6213
              </Typography>
            </Box>

            {/* Email */}
            <Box
              component="a"
              href="mailto:contact@earningwhiletravelling.com"
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                textDecoration: "none",
                color: "rgba(255,255,255,0.75)",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#FFD23F",
                },
              }}
            >
              <EmailIcon sx={{ color: "#FFD23F", fontSize: 20 }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                contact@earningwhiletravelling.com
              </Typography>
            </Box>

            {/* Location */}
            {/* <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                color: "rgba(255,255,255,0.75)",
                maxWidth: { xs: 300, md: 400 },
              }}
            >
              <LocationOnIcon sx={{ color: "#FFD23F", fontSize: 20, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                McKinley Hill, Taguig City, Philippines
              </Typography>
            </Box> */}
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Earning While Travelling. All rights
            reserved.
          </Typography>
          {/* <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)" }}>
            Powered by{" "}
            <Box
              component="a"
              href="https://triptravelandtours.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              TRIP TRAVEL AND TOURS AGENCY
            </Box>
          </Typography> */}
        </Box>
      </Container>
    </Box>
  );
};
