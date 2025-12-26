import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { surveyData, surveyCategories } from './data/SurveyData';
import SurveyCard from './components/SurveyCard';
import { SectionHeader } from '../../landing/components/SectionHeader';

const Surveys = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSurveys =
    selectedCategory === 'All'
      ? surveyData
      : surveyData.filter((survey) => survey.category === selectedCategory);

  const handleSurveyClick = (surveyId: string) => {
    navigate(`/surveys/${surveyId}`);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          badge="SHARE YOUR EXPERIENCE"
          title="Surveys"
          subtitle="Share your travel experiences and help us improve our services"
          align="center"
          containerSx={{ mb: 4 }}
        />

        {/* Filter Chips - Horizontally Scrollable */}
        <Paper
          elevation={1}
          sx={{
            mb: 4,
            p: 2,
            overflowX: 'auto',
            display: 'flex',
            gap: 1,
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: 'background.default',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'divider',
              borderRadius: 4,
              '&:hover': {
                bgcolor: 'text.secondary',
              },
            },
          }}
        >
          {surveyCategories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              variant={selectedCategory === category ? 'filled' : 'outlined'}
              sx={{
                cursor: 'pointer',
                fontWeight: selectedCategory === category ? 600 : 400,
                whiteSpace: 'nowrap',
              }}
            />
          ))}
        </Paper>

        {/* Survey Cards Grid - 3 Columns */}
        <Grid container spacing={3}>
          {filteredSurveys.map((survey) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={survey.id}>
              <SurveyCard
                survey={survey}
                onClick={() => handleSurveyClick(survey.id)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredSurveys.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No surveys found in this category
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Surveys;
