import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Divider,
  Button,
  Link,
  Container,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../features/theme/themeSlice";
import { logout } from "../../features/auth/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { getInitials } from "../../utils/helpers";

interface HeaderProps {
  toggleMobileSidebar: () => void;
}

interface NavLink {
  label: string;
  href: string;
}

const Header = ({ toggleMobileSidebar }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const user = useAppSelector((state) => state.auth.user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>("#hero");

  const isLandingPage = location.pathname === "/";

  // Navigation links for landing page
  const navLinks: NavLink[] = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Explore", href: "#explore" },
    { label: "Promo", href: "#promo" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
    handleMenuClose();
  };

  const handleSettings = () => {
    navigate("/settings");
    handleMenuClose();
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // If we're on the landing page, scroll to section
      if (isLandingPage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // If we're on another page, navigate to landing page with hash
        navigate(`/${href}`);
      }
    }
  };

  // Scroll to section from hash on page load
  useEffect(() => {
    if (isLandingPage && location.hash) {
      // Small delay to ensure page is loaded
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [isLandingPage, location.hash]);

  // Detect active section on scroll
  useEffect(() => {
    if (!isLandingPage) return;

    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href);
      let currentSection = sections[0]; // Default to first section

      // Find the section that is currently in view
      for (const sectionId of sections) {
        const section = document.querySelector(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is in view if its top is within the viewport (accounting for header)
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = sectionId;
            break;
          }
          // If we're past this section, it might be the active one
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLandingPage, navLinks]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 0,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", py: 2, px: '0 !important' }}>
          {/* Logo/Title */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              // mr: "auto",
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
                color: themeMode === "dark" ? "white" : "#0B5290",
                fontWeight: 900,
                fontSize: { xs: ".95rem", sm: "1.2rem" },
                letterSpacing: 0,
              }}
            >
              Earning While Travelling
            </Typography>
          </Box>

          {/* Center Navigation Links - Always visible */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navLinks.map((link) => {
              // Only show active state on landing page
              const isActive = isLandingPage && activeSection === link.href;
              return (
                <Box
                  key={link.label}
                  sx={{
                    position: "relative",
                    pb: 0.5,
                  }}
                >
                  <Link
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      color: isActive ? "primary.main" : "text.primary",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 700 : 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                  {/* Active indicator - Yellow line */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "3px",
                      bgcolor: "#FDE047",
                      borderRadius: "2px 2px 0 0",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          {/* Right side icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Theme toggle */}
            {/* <IconButton
              onClick={handleThemeToggle}
              color="inherit"
              sx={{
                color: "text.primary",
              }}
            >
              {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}

            <Button
              variant="contained"
              color="primary"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                borderRadius: 999,
                px: { xs: 2, sm: 3 },
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              href="https://app.earningwhiletravelling.com/"
              // onClick={() => navigate("https://app.earningwhiletravelling.com/")}
            >
              Login to App
            </Button>
          </Box>

          {/* Mobile menu toggle */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{ display: { lg: "none" }, color: "text.primary" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
