import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { SectionHeaderWithChip } from '../components/SectionHeader';

const contactInfo = [
  {
    icon: LocationOnIcon,
    title: "Visit Us",
    details:
      "Unit C And D 4th Floor Commerce And Industry Plaza Building 1030 Campus Avenue Mckinley Town Centre Mckinley Hill, Pinagsama, City Of Taguig, Philippines",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    details: "+63 917 123 4567",
  },
  {
    icon: EmailIcon,
    title: "Email Us",
    details: "contact@earningwhiletravelling.com",
  },
];

const subjects = [
  "General Inquiry",
  "Booking Assistance",
  "ET Points Question",
  "Technical Support",
  "Partnership",
  "Other",
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {/* Left Side - Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <SectionHeaderWithChip
                chip="Get In Touch"
                title={
                  <>
                    Have Questions?
                    <br />
                    Contact Us Today
                  </>
                }
                subtitle="Our team is here to help you with any questions about bookings, earnings, or your ET account. Reach out and we'll get back to you within 24 hours."
                align="left"
                containerSx={{ mb: 5 }}
              />

              {/* Contact Info Blocks */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 44, sm: 50, md: 56 },
                          height: { xs: 44, sm: 50, md: 56 },
                          borderRadius: 2,
                          background: "linear-gradient(135deg, #3b82f6, #1e40af)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon sx={{ fontSize: { xs: 22, sm: 25, md: 28 }, color: "secondary.main" }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#6B7280",
                          }}
                        >
                          {info.details}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                {showSuccess && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        First Name
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="John"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Last Name
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Doe"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Email Address
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="john.doe@example.com"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Phone Number
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="+63 917 123 4567"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Subject
                      </Typography>
                      <TextField
                        fullWidth
                        select
                        placeholder="Select a topic"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select a topic
                        </MenuItem>
                        {subjects.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Message
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Tell us how we can help you..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        color="primary"
                        sx={{
                          py: 1.8,
                          borderRadius: 999,
                          textTransform: "none",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
