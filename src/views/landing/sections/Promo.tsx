import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { SectionHeader } from '../components/SectionHeader';
import { AnimatedSection } from '../components/AnimatedSection';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const Promo = () => {
  const promoCards = [
    {
      icon: CheckCircleIcon,
      title: 'Book & Earn',
      description: 'Get points for every booking you make. The more you travel, the more you earn!',
      color: '#2196F3',
      image: '/images/affiliate.png',
    },
    {
      icon: CardGiftcardIcon,
      title: 'Exclusive Rewards',
      description: 'Redeem your points for discounts, free upgrades, and special perks.',
      color: '#FF9800',
      image: '/images/victors.png',
    },
    {
      icon: TrendingUpIcon,
      title: 'Bonus Multipliers',
      description: 'Complete weekly challenges to unlock bonus point multipliers and earn faster.',
      color: '#4CAF50',
      image: '/images/travellers.png',
    },
  ];

  return (
    <Box
      id="promo"
      sx={{
        pt: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #FFB800 0%, #FFA500 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {/* Left Image */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
            <AnimatedSection animation="fadeLeft" duration={0.8} delay={0.2}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src="/images/promo.png"
                  alt="Woman with travel gear"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 600,
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
            <AnimatedSection animation="fadeUp" duration={0.8} delay={0}>
              <SectionHeader
                title={
                  <>
                    Every Day, Get Exclusive Bonus
                  </>
                }
                subtitle="Join our weekly earning challenge and unlock exclusive rewards. Book, refer, complete surveys, and watch your earnings grow!"
                align="center"
                titleColor="white"
                subtitleColor="rgba(255,255,255,0.95)"
                containerSx={{ mb: 4 }}
              />
            </AnimatedSection>

            {/* Promo Cards */}
            <Box sx={{ mb: 0 }}>
              <Grid container spacing={3}>
                {promoCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <AnimatedSection
                        animation="fadeUp"
                        duration={0.6}
                        delay={0.1 + index * 0.1}
                      >
                        <Paper
                          elevation={2}
                          sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            height: '100%',
                            minHeight: 350,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              transform: 'translateY(-8px) scale(1.02)',
                              boxShadow: 6,
                            },
                          }}
                        >
                          {/* Card Image */}
                          <Box
                            component="img"
                            src={card.image}
                            alt={card.title}
                            sx={{
                              width: '100%',
                              height: { xs: 180, sm: 150 },
                              pt: 2,
                              objectFit: 'contain',
                              transition: 'transform 0.3s ease',
                            }}
                          />

                          {/* Card Content */}
                          <Box sx={{ p: 2 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1.5,
                                mb: 2,
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  fontSize: { xs: '1rem', md: '1.125rem' },
                                }}
                              >
                                {card.title}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#6B7280',
                                lineHeight: 1.7,
                                fontSize: { xs: '0.875rem', md: '0.9375rem' },
                                textAlign: 'center',
                              }}
                            >
                              {card.description}
                            </Typography>
                          </Box>
                        </Paper>
                      </AnimatedSection>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
