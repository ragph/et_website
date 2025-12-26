import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material';
import { Survey } from '../data/SurveyData';

interface SurveyCardProps {
  survey: Survey;
  onClick: () => void;
}

const SurveyCard = ({ survey, onClick }: SurveyCardProps) => {
  return (
    <Card
      sx={{
        background: 'transparent',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        boxShadow: 0,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        image={survey.image}
        alt={survey.title}
        sx={{
          aspectRatio: '1 / 1',
          objectFit: 'contain',
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
        <Box sx={{ mb: 1 }}>
          <Chip
            label={survey.category}
            size="small"
            color="primary"
            sx={{ mb: 1 }}
          />
          {survey.status === 'upcoming' && (
            <Chip
              label="Upcoming"
              size="small"
              color="warning"
              sx={{ ml: 1, mb: 1 }}
            />
          )}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {survey.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {survey.subtitle}
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
          {survey.participants && (
            <Typography variant="caption" color="success.main">
              {survey.participants} responses
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SurveyCard;
