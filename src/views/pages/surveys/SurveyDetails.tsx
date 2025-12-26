import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
  Grid,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { surveyData } from './data/SurveyData';
import { candidatesData, Candidate } from './data/CandidateData';
import CandidateCard from './components/CandidateCard';
import CandidateModal from './components/CandidateModal';

const SurveyDetails = () => {
  const { surveyId } = useParams<{ surveyId: string }>();
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const survey = surveyData.find((s) => s.id === surveyId);

  const handleCandidateClick = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleVote = (candidateId: string) => {
    console.log('Voted for candidate:', candidateId);
    // TODO: Implement vote submission logic
  };

  if (!survey) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Survey not found
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/surveys')}
          >
            Back to Surveys
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
              <Chip label={survey.category} color="primary" />
              {survey.status === 'upcoming' && (
                <Chip label="Upcoming" color="warning" />
              )}
            </Box>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
              {survey.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {survey.subtitle}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Survey Image */}
          <Box
            component="img"
            src={survey.image}
            alt={survey.title}
            sx={{
              width: '100%',
              maxWidth: 600,
              mx: 'auto',
              display: 'block',
              objectFit: 'contain',
              mb: 8,
            }}
          />

          {/* Description */}
          {survey.description && (
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
               {survey.description}
              </Typography>
            </Box>
          )}

          {/* Survey Stats */}
          {/* <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            {survey.questions && (
              <Box>
                <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                  {survey.questions}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Questions
                </Typography>
              </Box>
            )}
            {survey.participants && (
              <Box>
                <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700 }}>
                  {survey.participants}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Participants
                </Typography>
              </Box>
            )}
          </Box> */}

          {/* Candidates Grid */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {candidatesData.map((candidate) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={candidate.id}>
                <CandidateCard
                  candidate={candidate}
                  onClick={() => handleCandidateClick(candidate)}
                />
              </Grid>
            ))}
          </Grid>


          {/* Vote Button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button href="https://app.earningwhiletravelling.com/login" variant="contained" size="large">
              Cast Your Vote Now
            </Button>
          </Box>

          {/* Candidate Modal */}
          <CandidateModal
            candidate={selectedCandidate}
            open={modalOpen}
            onClose={handleCloseModal}
            onVote={handleVote}
          />
      </Container>
    </Box>
  );
};

export default SurveyDetails;
