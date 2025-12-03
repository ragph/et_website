import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SectionHeader } from "@/views/landing/components/SectionHeader";

interface FAQ {
  question: string;
  answer: string;
}

const faqCategories = [
  {
    category: "General",
    items: [
      {
        question: "What is Earning While Travelling?",
        answer:
          "Earning While Travelling (ET) is a revolutionary platform that allows you to explore the Philippines while earning money through commissions, referrals, and rewards. Book travel experiences, discover tourist destinations, and build your income simultaneously.",
      },
      {
        question: "How does the earning system work?",
        answer:
          "You can earn through multiple ways: booking commissions when you book travel services, referral bonuses when you invite friends to join the platform, and ET Points that can be converted to cash or used for discounts on future bookings.",
      },
      {
        question: "Is registration free?",
        answer:
          "Yes! Registration is completely free. Simply create an account to start exploring destinations and earning opportunities. There are no hidden fees or charges to join the platform.",
      },
      {
        question: "What is Trip Travel and Tours Agency?",
        answer:
          "Trip Travel and Tours Agency is the trusted travel partner powering the Earning While Travelling platform. They provide verified tour packages, accommodations, and travel services across the Philippines.",
      },
    ],
  },
  {
    category: "Bookings & Payments",
    items: [
      {
        question: "How do I make a booking?",
        answer:
          "Browse our interactive map or explore section to find your desired destination. Click on a tourist spot to view details, select your preferred package, choose your dates, and proceed to checkout. You'll receive instant confirmation via email.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including credit/debit cards (Visa, Mastercard), GCash, PayMaya, bank transfers, and over-the-counter payments at authorized payment centers. All transactions are secured with industry-standard encryption.",
      },
      {
        question: "Can I cancel or modify my booking?",
        answer:
          "Yes, you can cancel or modify bookings based on the cancellation policy of each service provider. Generally, cancellations made 7 days or more before the travel date are eligible for full refund. Check the specific terms during booking.",
      },
      {
        question: "Do I get a commission on my own bookings?",
        answer:
          "Yes! You earn a commission on your own bookings. The commission rate varies by service type and package, typically ranging from 5-15% of the booking value. Your earnings will be credited to your ET Wallet.",
      },
    ],
  },
  {
    category: "ET Points & Rewards",
    items: [
      {
        question: "What are ET Points?",
        answer:
          "ET Points are reward points you earn through bookings, referrals, and platform activities. 1 ET Point = ₱1. Points can be used for discounts on future bookings or withdrawn as cash once you reach the minimum threshold.",
      },
      {
        question: "How do I earn ET Points?",
        answer:
          "Earn points by: making bookings (5-15% commission), referring friends (100-500 points per successful referral), writing reviews (10-50 points), completing your profile (50 points), and participating in promotional campaigns.",
      },
      {
        question: "How can I redeem my ET Points?",
        answer:
          "Redeem points in your dashboard wallet section. Choose to: apply points as discount during checkout, convert to cash (minimum 1,000 points / ₱1,000), or transfer to other users. Cash withdrawals are processed within 3-5 business days.",
      },
      {
        question: "Do ET Points expire?",
        answer:
          "Points earned through bookings and activities remain valid for 12 months from the date earned. Promotional points may have shorter validity periods as specified in the campaign terms. Active users (at least one transaction per year) maintain all their points indefinitely.",
      },
    ],
  },
  {
    category: "Referral Program",
    items: [
      {
        question: "How does the referral program work?",
        answer:
          "Share your unique referral link with friends and family. When they register and make their first booking, you earn referral bonuses. You'll receive 100 ET Points for registration and an additional 10% of their first booking value as bonus points.",
      },
      {
        question: "Is there a limit to referrals?",
        answer:
          "No limit! Refer as many people as you want. The more friends you bring, the more you earn. Active referrers with 20+ successful referrals may qualify for our VIP Partner Program with enhanced commission rates.",
      },
      {
        question: "How do I track my referrals?",
        answer:
          "Access your referral dashboard in your account settings. View total referrals, pending registrations, successful conversions, and earned commissions. Real-time tracking helps you monitor your referral performance and earnings.",
      },
      {
        question: "Can I refer businesses or travel agencies?",
        answer:
          "Yes! Our Business Referral Program offers special incentives for referring travel agencies, hotels, tour operators, and corporate accounts. Contact our partnership team for custom commission structures and benefits.",
      },
    ],
  },
  {
    category: "Account & Security",
    items: [
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page, enter your registered email address, and follow the reset link sent to your inbox. The link is valid for 24 hours. For security, we recommend using a strong, unique password.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use bank-level encryption (SSL/TLS) to protect your data. Personal information is never shared with third parties without consent. We comply with the Data Privacy Act of 2012 and international security standards.",
      },
      {
        question: "Can I have multiple accounts?",
        answer:
          "Each person is allowed one account to ensure fair distribution of rewards and prevent abuse. Multiple accounts from the same user may result in account suspension and forfeiture of earned points.",
      },
      {
        question: "How do I verify my account?",
        answer:
          "Verify your account by: confirming your email (required), adding your mobile number for SMS verification (recommended), and uploading a valid ID (required for cash withdrawals). Verified accounts enjoy higher transaction limits and priority support.",
      },
    ],
  },
  {
    category: "Travel & Destinations",
    items: [
      {
        question: "Do you cover all Philippine regions?",
        answer:
          "Yes! We cover all 17 regions of the Philippines, from Luzon to Visayas and Mindanao. Our interactive map features 100+ provinces and 500+ tourist destinations with detailed information and booking options.",
      },
      {
        question: "Are travel insurance and permits included?",
        answer:
          "Travel insurance and required permits vary by package. Most tour packages include necessary local permits and entrance fees. Travel insurance is available as an add-on during checkout. We recommend insurance for adventure activities and international connections.",
      },
      {
        question: "Can I customize tour packages?",
        answer:
          "Yes! Many of our partner operators offer customizable packages. Contact the service provider through our platform to discuss your specific needs, group size, dates, and special requirements. Custom packages may have different commission rates.",
      },
      {
        question: "What about travel advisories and safety?",
        answer:
          "We monitor travel advisories and update destination information accordingly. Safety ratings and current conditions are displayed on each destination page. During emergencies or natural disasters, we offer free rebooking or full refunds.",
      },
    ],
  },
];

const FAQs = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          badge="HELP CENTER"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our platform, earning opportunities, and services"
          align="center"
          containerSx={{ mb: 6 }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {faqCategories.map((category, categoryIndex) => (
            <Paper
              key={categoryIndex}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {category.category}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {category.items.map((faq, faqIndex) => {
                  const panelId = `panel-${categoryIndex}-${faqIndex}`;
                  return (
                    <Accordion
                      key={faqIndex}
                      expanded={expanded === panelId}
                      onChange={handleChange(panelId)}
                      sx={{
                        boxShadow: "none",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: "8px !important",
                        "&:before": {
                          display: "none",
                        },
                        "&.Mui-expanded": {
                          margin: "0 !important",
                          mb: 1,
                        },
                        mb: 1,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            my: 1.5,
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: "text.primary",
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.8,
                          }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Contact Support Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 6,
            borderRadius: 2,
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Still have questions?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Can't find the answer you're looking for? Our support team is here to help.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              📧 contact@earningwhiletravelling.com
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              📞 +63 917 123 4567
            </Typography>
          </Box>
        </Paper>
      </Container>
  );
};

export default FAQs;
