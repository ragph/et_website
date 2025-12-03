import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { SectionHeader } from "@/views/landing/components/SectionHeader";

interface Section {
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using the Earning While Travelling (ET) platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      "These terms apply to all visitors, users, and others who access or use the service. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates on our website.",
      "Your continued use of the platform following the posting of any changes constitutes acceptance of those changes. We recommend reviewing these terms periodically for any updates.",
    ],
  },
  {
    title: "2. User Accounts",
    content: [
      "To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during registration and keep your account information updated.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.",
      "Each individual is permitted only one account. Creating multiple accounts may result in account suspension and forfeiture of earned points or commissions. Accounts are non-transferable.",
      "We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion, particularly in cases of terms violations, fraudulent activity, or abuse of the platform.",
    ],
  },
  {
    title: "3. Earning System and Commissions",
    content: [
      "The earning system allows users to earn commissions, referral bonuses, and ET Points through legitimate platform activities. Commission rates vary by service type and package, ranging from 5-15% of booking values.",
      "Earnings are credited to your ET Wallet and can be withdrawn or used for discounts according to our payment policies. Minimum withdrawal amount is ₱1,000. Cash withdrawals are processed within 3-5 business days.",
      "We reserve the right to withhold, reduce, or revoke earnings in cases of suspected fraud, policy violations, chargebacks, booking cancellations, or any activity deemed to manipulate the earning system.",
      "Commission rates and earning policies may be modified at any time with reasonable notice. Changes will not affect already-earned and credited points or commissions.",
    ],
  },
  {
    title: "4. Referral Program",
    content: [
      "The referral program allows users to earn bonuses by inviting others to join the platform. Referral links are unique to each user and must not be misused or distributed through spam methods.",
      "Referral bonuses are only credited when the referred user completes registration and makes their first qualifying booking. Self-referrals or fraudulent referrals will result in immediate disqualification and account termination.",
      "We reserve the right to audit referral activities and reverse any bonuses obtained through fraudulent means. Users found violating referral policies may face permanent ban and legal action.",
      "Referral program terms, including bonus amounts and qualification criteria, may be modified or discontinued at our discretion with advance notice to active participants.",
    ],
  },
  {
    title: "5. Bookings and Payments",
    content: [
      "All bookings made through the platform are subject to availability and confirmation by the respective service providers. We act as a booking intermediary and are not directly responsible for the provision of travel services.",
      "Payment must be made in full at the time of booking unless otherwise specified. We accept various payment methods including credit/debit cards, e-wallets, and bank transfers. All transactions are secured with industry-standard encryption.",
      "Prices displayed are in Philippine Pesos (PHP) and include applicable taxes unless otherwise stated. Additional fees such as processing charges or service fees will be clearly indicated before payment confirmation.",
      "Booking confirmations and receipts will be sent to your registered email address. Please review all booking details carefully before confirming your purchase.",
    ],
  },
  {
    title: "6. Cancellations and Refunds",
    content: [
      "Cancellation and refund policies vary by service provider and package type. Standard policy allows full refund for cancellations made 7+ days before travel date, 50% refund for 3-6 days, and no refund for cancellations within 48 hours.",
      "Refund requests must be submitted through your account dashboard. Processing time for approved refunds is 7-14 business days, depending on your payment method and financial institution.",
      "No-shows and unused bookings are non-refundable. In cases of force majeure (natural disasters, government travel bans), we offer flexible rebooking options or full refunds at our discretion.",
      "Any commissions earned from cancelled bookings will be deducted from your account balance. If insufficient balance exists, you may be required to repay the deducted commission.",
    ],
  },
  {
    title: "7. ET Points and Rewards",
    content: [
      "ET Points are earned through bookings, referrals, reviews, and promotional activities. Points have monetary value where 1 ET Point = ₱1 and can be redeemed for discounts or cash withdrawals.",
      "Points expire 12 months from the date earned unless you maintain active user status (at least one transaction per year). Promotional points may have different expiry terms as specified in campaign rules.",
      "Points are non-transferable except through authorized platform features. Sale, barter, or external transfer of points is strictly prohibited and may result in account termination.",
      "We reserve the right to adjust point values, redemption rules, or expiry policies with 30 days advance notice. Already-earned points will be honored according to terms in effect at the time of earning.",
    ],
  },
  {
    title: "8. User Conduct and Prohibited Activities",
    content: [
      "You agree to use the platform only for lawful purposes and in accordance with these Terms. Prohibited activities include: fraudulent bookings, manipulation of earning systems, harassment of other users or staff, and distribution of malware.",
      "You may not attempt to gain unauthorized access to any part of the platform, other user accounts, or our computer systems. Any attempt to do so may result in civil and criminal penalties.",
      "Content you post (reviews, comments, photos) must not violate intellectual property rights, contain offensive material, or be misleading. We reserve the right to remove any content that violates these standards.",
      "Commercial solicitation, advertising, or promotional activities are not permitted without prior written authorization from ET management.",
    ],
  },
  {
    title: "9. Intellectual Property",
    content: [
      "All content on the platform, including text, graphics, logos, images, software, and data compilations, is the property of Earning While Travelling or its content suppliers and protected by Philippine and international copyright laws.",
      "You are granted a limited, non-exclusive, non-transferable license to access and use the platform for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works without explicit written permission.",
      "Trademarks, service marks, and logos displayed on the platform are registered and unregistered trademarks of ET, Trip Travel and Tours Agency, or third parties. Nothing on this site grants any license or right to use any trademark without written permission.",
      "User-generated content (reviews, photos, comments) remains your property, but you grant us a worldwide, royalty-free license to use, display, and distribute such content for promotional and operational purposes.",
    ],
  },
  {
    title: "10. Privacy and Data Protection",
    content: [
      "Your use of the platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.",
      "We implement reasonable security measures to protect your data, but no internet transmission is completely secure. You acknowledge that you provide information at your own risk.",
      "We comply with the Data Privacy Act of 2012 (Republic Act No. 10173) and international data protection standards. Your personal information will not be sold or shared with third parties except as necessary for service provision or as required by law.",
    ],
  },
  {
    title: "11. Third-Party Services and Links",
    content: [
      "Our platform may contain links to third-party websites or services (hotels, tour operators, payment gateways). These are provided for your convenience, and we do not endorse or assume responsibility for their content, policies, or practices.",
      "Your interactions with third-party service providers are solely between you and them. We are not liable for any disputes, damages, or losses arising from such interactions.",
      "Trip Travel and Tours Agency and other partners operate independently. While we strive to work with reputable providers, we cannot guarantee the quality or safety of their services.",
    ],
  },
  {
    title: "12. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Earning While Travelling, its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.",
      "We do not warrant that the platform will be uninterrupted, error-free, or secure. We are not responsible for any technical issues, service disruptions, or data loss that may occur.",
      "Our total liability for any claims arising from your use of the service shall not exceed the total amount you paid to us in the twelve (12) months prior to the claim, or ₱5,000, whichever is less.",
      "Some jurisdictions do not allow certain liability limitations. In such cases, our liability is limited to the maximum extent permitted by applicable law.",
    ],
  },
  {
    title: "13. Indemnification",
    content: [
      "You agree to indemnify, defend, and hold harmless Earning While Travelling, Trip Travel and Tours Agency, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:",
      "- Your violation of these Terms of Service or applicable laws",
      "- Your use or misuse of the platform and services",
      "- Your violation of any rights of third parties, including intellectual property rights",
      "- Any fraudulent or illegal activities conducted through your account",
    ],
  },
  {
    title: "14. Dispute Resolution and Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to conflict of law principles.",
      "Any disputes arising from these Terms or your use of the platform shall first be resolved through good-faith negotiations. If negotiations fail, disputes shall be submitted to binding arbitration in Metro Manila, Philippines.",
      "You agree to resolve disputes individually and waive any right to participate in class-action lawsuits or class-wide arbitration, except where prohibited by law.",
      "Notwithstanding the above, we reserve the right to seek injunctive or other equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement of our intellectual property rights.",
    ],
  },
  {
    title: "15. Modifications to Service and Terms",
    content: [
      "We reserve the right to modify, suspend, or discontinue any part of the platform at any time without prior notice or liability. This includes features, earning programs, commission structures, and available services.",
      "These Terms of Service may be updated periodically. Material changes will be communicated through email notification or prominent platform notices. Continued use after changes constitutes acceptance of modified terms.",
      "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full effect.",
    ],
  },
  {
    title: "16. Contact Information",
    content: [
      "For questions, concerns, or notices regarding these Terms of Service, please contact us:",
      "Email: contact@earningwhiletravelling.com",
      "Phone: +63 917 123 4567",
      "Address: Unit C And D 4th Floor Commerce And Industry Plaza Building, 1030 Campus Avenue, McKinley Town Centre, McKinley Hill, Pinagsama, City of Taguig, Philippines",
      "Business Hours: Monday to Friday, 9:00 AM - 6:00 PM (PHT)",
    ],
  },
];

const TermsOfService = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionHeader
          badge="LEGAL"
          title="Terms of Service"
          subtitle="Please read these terms carefully before using our platform"
          align="center"
          containerSx={{ mb: 4 }}
        />

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
              bgcolor: "primary.lighter",
              borderRadius: 1,
              borderLeft: "4px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, color: "primary.main" }}>
              Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              These terms are effective immediately for all users
            </Typography>
          </Box>

          {/* Introduction */}
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: "text.secondary" }}>
            Welcome to Earning While Travelling. These Terms of Service ("Terms") govern your access to and use of our platform, services, and website. By using our services, you agree to be bound by these Terms and our Privacy Policy. Please read them carefully.
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

          {/* Agreement Statement */}
          <Box
            sx={{
              mt: 5,
              p: 3,
              bgcolor: "warning.lighter",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: "primary.dark",
              }}
            >
              Agreement
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
              By creating an account or using the Earning While Travelling platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
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
            Questions about our Terms?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
            Our legal team is here to help clarify any concerns
          </Typography>
          <Typography variant="body2">
            📧 contact@earningwhiletravelling.com
          </Typography>
        </Paper>
      </Container>
  );
};

export default TermsOfService;
