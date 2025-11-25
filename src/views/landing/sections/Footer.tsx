import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  quickLinks: [
    { label: "How It Works", href: "#" },
    { label: "ET Points", href: "#" },
    { label: "Destinations", href: "#" },
    { label: "Partnerships", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: YouTubeIcon, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, rgba(31, 41, 55, 0) 0%, rgba(31, 41, 55, 0.5) 100%), url(/images/silhouette3.jpg)",
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
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              component="a"
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src="/images/logo-white.png"
                alt="ET Logo"
                sx={{
                  height: 40,
                  width: "auto",
                }}
                onError={(e: any) => {
                  e.target.style.display = "none";
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: ".95rem", sm: ".95rem" },
                  letterSpacing: 0,
                }}
              >
                Earning While Travelling
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Your ultimate platform for booking travel and earning money.
              Explore the world while building your income through commissions,
              referrals, and rewards.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      bgcolor: "rgba(255,255,255,0.1)",
                      "&:hover": {
                        color: "primary.main",
                        bgcolor: "secondary.main",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "white",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#FFD23F",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "white",
              }}
            >
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.support.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#FFD23F",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "white",
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Address */}
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <LocationOnIcon
                  sx={{ color: "#FFD23F", fontSize: 20, mt: 0.3 }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    fontSize: "0.875rem",
                  }}
                >
                  Industry Plaza Bldg. 1030 Campus Ave, McKinley Town Centre,
                  Taguig 1634
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <PhoneIcon sx={{ color: "#FFD23F", fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.875rem",
                  }}
                >
                  +63 917 123 4567
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <EmailIcon sx={{ color: "#FFD23F", fontSize: 20 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.875rem",
                  }}
                >
                  contact@earningwhiletravelling.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Earning While Travelling. All rights
            reserved.
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)" }}>
            Powered by{" "}
            <Box
              component="a"
              href="https://ragph.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              RAG IT SOLUTIONS
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
