import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Chip,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { SectionHeader } from "@/views/landing/components/SectionHeader";

interface Section {
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal Information: When you register for an account, we collect information such as your name, email address, phone number, date of birth, and physical address. For verified accounts and payment processing, we may collect government-issued ID information and financial details.",
      "Transaction Information: We collect details about your bookings, payments, earned commissions, ET Points, referral activities, and transaction history to facilitate services and calculate earnings.",
      "Usage Information: We automatically collect information about how you interact with our platform, including IP address, browser type, device information, pages visited, time spent on pages, click patterns, and referral sources.",
      "Location Data: With your permission, we may collect precise location data to provide location-based services such as finding nearby destinations and personalizing recommendations. You can disable location services in your device settings at any time.",
      "Communication Data: When you contact our support team, participate in surveys, or engage with our platform, we collect and store the content of these communications for service improvement and support purposes.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Service Provision: To create and manage your account, process bookings and payments, calculate and credit commissions, maintain your ET Points balance, and provide customer support.",
      "Platform Improvement: To analyze usage patterns, conduct research and analytics, develop new features, enhance user experience, and optimize platform performance.",
      "Communication: To send booking confirmations, payment receipts, account notifications, promotional offers (with your consent), platform updates, and respond to your inquiries.",
      "Security and Fraud Prevention: To verify your identity, detect and prevent fraudulent activities, monitor for suspicious transactions, enforce our Terms of Service, and protect the rights and safety of our users.",
      "Legal Compliance: To comply with applicable laws, regulations, legal processes, and government requests, as well as to establish, exercise, or defend legal claims.",
      "Marketing and Personalization: With your consent, we may use your information to personalize content, recommend destinations and packages, and deliver targeted advertising through our platform and third-party channels.",
    ],
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: [
      "Service Providers: We share information with trusted third-party service providers who assist us in operating the platform, processing payments, sending communications, providing customer support, and analyzing data. These providers are contractually obligated to protect your information and use it only for specified purposes.",
      "Travel Partners: When you make a booking, we share necessary information (name, contact details, travel dates) with the respective hotels, tour operators, and service providers to fulfill your reservation. These partners have their own privacy policies governing their use of your information.",
      "Payment Processors: Financial information is shared with secure payment gateways and processors (GCash, PayMaya, banks, credit card companies) to facilitate transactions. We do not store complete credit card numbers on our servers.",
      "Referral Program: When you refer someone using your referral link, we may share your name and referral relationship with the referred user to facilitate the referral program and credit bonuses appropriately.",
      "Legal Requirements: We may disclose your information to government authorities, law enforcement, or legal entities when required by law, court order, subpoena, or to protect our rights, property, or safety, or that of our users or the public.",
      "Business Transfers: In the event of a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our platform before your information becomes subject to a different privacy policy.",
      "Aggregate Data: We may share anonymized, aggregated statistical data with partners, advertisers, or the public for research, marketing, or analytical purposes. This data cannot be used to identify you personally.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:",
      "Encryption: All data transmitted between your browser and our servers is encrypted using SSL/TLS (Secure Sockets Layer/Transport Layer Security) technology. Sensitive data stored on our servers is encrypted at rest.",
      "Access Controls: We restrict access to personal information to employees, contractors, and agents who need to know that information to operate, develop, or improve our services. All personnel are bound by confidentiality obligations.",
      "Security Monitoring: We continuously monitor our systems for potential vulnerabilities and attacks, conduct regular security audits, and employ firewalls and intrusion detection systems.",
      "Payment Security: We comply with PCI DSS (Payment Card Industry Data Security Standards) for handling credit card information. Card details are processed through certified payment gateways and are not stored on our servers.",
      "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security. You acknowledge and accept this inherent risk when using our services.",
    ],
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      "Access and Update: You can access and update most of your personal information through your account settings. For additional access requests, contact our support team.",
      "Data Correction: You have the right to request correction of inaccurate or incomplete personal information. We will make reasonable efforts to update our records promptly.",
      "Data Deletion: You may request deletion of your account and personal information. Note that some information may be retained for legal, accounting, or security purposes as permitted by law. Deletion requests are processed within 30 days.",
      "Marketing Opt-Out: You can unsubscribe from promotional emails by clicking the 'unsubscribe' link in any marketing email or adjusting your communication preferences in account settings. You will continue to receive transactional emails related to your bookings and account.",
      "Cookie Management: You can control cookies through your browser settings. Note that disabling cookies may limit your ability to use certain features of the platform.",
      "Location Services: You can enable or disable location services for our platform through your device settings. Disabling location services may affect location-based features.",
      "Data Portability: You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format. Contact our support team to make such a request.",
    ],
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: [
      "We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze platform usage, and deliver personalized content. Types of technologies we use include:",
      "Essential Cookies: Necessary for platform functionality, including authentication, security, and basic operations. These cannot be disabled without affecting platform performance.",
      "Performance Cookies: Collect anonymous information about how visitors use our platform, helping us improve performance and user experience.",
      "Functionality Cookies: Remember your preferences (language, region, currency) and personalize your experience on subsequent visits.",
      "Advertising Cookies: Used to deliver relevant advertisements and track campaign effectiveness. These may be set by our advertising partners.",
      "Third-Party Cookies: Our platform may include third-party services (Google Analytics, Facebook Pixel, payment processors) that set their own cookies. These third parties have their own privacy policies governing their use of information.",
      "You can manage cookie preferences through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Refer to your browser's help section for cookie management instructions.",
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. Users must be at least 18 years old to register for an account and use our services.",
      "If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately. We will take steps to delete such information from our systems within a reasonable timeframe.",
      "For family bookings or travel arrangements involving minors, the account holder (who must be 18 or older) assumes responsibility for providing accurate information and obtaining necessary consents.",
    ],
  },
  {
    title: "8. International Data Transfers",
    content: [
      "Your information may be transferred to and processed in countries other than your country of residence, including the Philippines and other locations where our service providers operate. These countries may have different data protection laws than your jurisdiction.",
      "When we transfer your personal information internationally, we take appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy and applicable data protection laws.",
      "By using our services, you consent to the transfer of your information to countries outside your residence, including countries that may not provide the same level of data protection as your home country.",
    ],
  },
  {
    title: "9. Data Retention",
    content: [
      "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:",
      "Account Information: Retained for the duration of your active account plus 7 years after account closure for legal and accounting purposes.",
      "Transaction Records: Booking and payment records are retained for 10 years to comply with tax and financial regulations.",
      "Communication Records: Customer support communications are retained for 3 years for quality assurance and dispute resolution.",
      "Marketing Data: Maintained until you opt-out of marketing communications, after which we retain only the fact of your opt-out to respect your preferences.",
      "When retention periods expire, we securely delete or anonymize your information unless longer retention is required by law or legitimate business purposes.",
    ],
  },
  {
    title: "10. Third-Party Links and Services",
    content: [
      "Our platform may contain links to third-party websites, services, or applications (partner hotels, tour operators, payment processors, social media platforms). We are not responsible for the privacy practices of these third parties.",
      "When you click on third-party links or use third-party services, you leave our platform and are subject to the privacy policies of those third parties. We encourage you to read the privacy policies of any third-party services you interact with.",
      "We do not control and cannot be held responsible for the content, privacy policies, or practices of any third-party websites or services, even if you access them through our platform.",
    ],
  },
  {
    title: "11. California Privacy Rights (CCPA)",
    content: [
      "If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including:",
      "Right to Know: You can request information about the categories and specific pieces of personal information we have collected about you, the sources of that information, our business purposes for collecting it, and the categories of third parties with whom we share it.",
      "Right to Delete: You can request deletion of your personal information, subject to certain exceptions for legal compliance and legitimate business purposes.",
      "Right to Opt-Out: You have the right to opt-out of the sale of your personal information. Note: We do not sell personal information for monetary consideration.",
      "Right to Non-Discrimination: You have the right not to receive discriminatory treatment for exercising your CCPA rights.",
      "To exercise these rights, contact us at privacy@earningwhiletravelling.com. We will verify your identity before processing your request.",
    ],
  },
  {
    title: "12. European Privacy Rights (GDPR)",
    content: [
      "If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including:",
      "Right of Access: Request confirmation of whether we process your personal data and obtain a copy of such data.",
      "Right to Rectification: Request correction of inaccurate or incomplete personal data.",
      "Right to Erasure: Request deletion of your personal data under certain circumstances.",
      "Right to Restrict Processing: Request restriction of processing your personal data in certain situations.",
      "Right to Data Portability: Receive your personal data in a structured, commonly used format and transmit it to another controller.",
      "Right to Object: Object to processing of your personal data for direct marketing or other purposes based on legitimate interests.",
      "Right to Withdraw Consent: Withdraw consent at any time where processing is based on consent.",
      "Right to Lodge a Complaint: File a complaint with your local data protection authority if you believe your rights have been violated.",
      "To exercise these rights, contact our Data Protection Officer at dpo@earningwhiletravelling.com.",
    ],
  },
  {
    title: "13. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by:",
      "- Posting the updated policy on this page with a new 'Last Updated' date",
      "- Sending an email notification to your registered email address",
      "- Displaying a prominent notice on our platform",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.",
      "If you disagree with any changes, you may close your account by contacting our support team. Closure of your account does not affect the lawfulness of processing conducted prior to closure.",
    ],
  },
  {
    title: "14. Contact Us",
    content: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      "Privacy Team Email: privacy@earningwhiletravelling.com",
      "Data Protection Officer: dpo@earningwhiletravelling.com",
      "General Inquiries: contact@earningwhiletravelling.com",
      "Phone: +63 917 123 4567",
      "Mailing Address:",
      "Earning While Travelling - Privacy Department",
      "Unit C And D 4th Floor Commerce And Industry Plaza Building",
      "1030 Campus Avenue, McKinley Town Centre, McKinley Hill",
      "Pinagsama, City of Taguig, Philippines",
      "We aim to respond to all privacy-related inquiries within 15 business days. For urgent matters, please indicate 'URGENT' in your subject line.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          badge="YOUR PRIVACY MATTERS"
          title="Privacy Policy"
          subtitle="Learn how we collect, use, and protect your personal information"
          align="center"
          containerSx={{ mb: 4 }}
        />

        {/* Trust Badges */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <Chip
            icon={<SecurityIcon />}
            label="SSL Encrypted"
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<LockIcon />}
            label="Data Protected"
            color="success"
            variant="outlined"
          />
          <Chip
            icon={<VerifiedUserIcon />}
            label="GDPR Compliant"
            color="info"
            variant="outlined"
          />
        </Box>

        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          {/* Last Updated */}
          <Box
            sx={{
              mb: 4,
              p: 2,
              bgcolor: "success.lighter",
              borderRadius: 1,
              borderLeft: "4px solid",
              borderColor: "success.main",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, color: "success.main" }}>
              Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              This policy is effective immediately for all users
            </Typography>
          </Box>

          {/* Introduction */}
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: "text.secondary" }}>
            At Earning While Travelling, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform. We comply with the Data Privacy Act of 2012 (Republic Act No. 10173) and international data protection standards including GDPR and CCPA.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* Sections */}
          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "text.primary",
                }}
              >
                {section.title}
              </Typography>
              {section.content.map((paragraph, pIndex) => (
                <Typography
                  key={pIndex}
                  variant="body2"
                  sx={{
                    mb: 2,
                    lineHeight: 1.8,
                    color: "text.secondary",
                    textAlign: "justify",
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
              {index < sections.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}

          {/* Commitment Statement */}
          <Box
            sx={{
              mt: 5,
              p: 3,
              bgcolor: "info.lighter",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "info.main",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: "info.dark",
              }}
            >
              Our Commitment to You
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
              Your trust is paramount to us. We are committed to transparency in our data practices, implementing robust security measures, and giving you control over your personal information. By using Earning While Travelling, you acknowledge that you have read and understood this Privacy Policy.
            </Typography>
          </Box>
        </Paper>

        {/* Contact Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            borderRadius: 2,
            textAlign: "center",
             bgcolor: "primary.main",
            color: "white",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Privacy Questions or Concerns?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
            Our privacy team is dedicated to addressing your data protection needs
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Typography variant="body2">
              📧 contact@earningwhiletravelling.com
            </Typography>
          </Box>
        </Paper>
      </Container>
  );
};

export default PrivacyPolicy;
