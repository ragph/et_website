import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Candidate } from '../data/CandidateData';

interface CandidateModalProps {
  candidate: Candidate | null;
  open: boolean;
  onClose: () => void;
  onVote: (candidateId: string) => void;
}

const CandidateModal = ({ candidate, open, onClose, onVote }: CandidateModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!candidate) return null;

  const images = candidate.images || [candidate.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleVote = () => {
    onVote(candidate.id);
    onClose();
  };

  const handleClose = () => {
    setCurrentImageIndex(0);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleClose}
        size='small'
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 1,
          color: 'white',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        {/* Image Slider */}
        <Box sx={{ position: 'relative', bgcolor: 'black' }}>
          <Box
            component="img"
            src={images[currentImageIndex]}
            alt={`${candidate.name} - Image ${currentImageIndex + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              maxHeight: 500,
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {/* Image Navigation */}
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>

              {/* Image Indicator Dots */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                }}
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>

        {/* Candidate Details */}
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {candidate.name}
            </Typography>
            {/* {candidate.age && (
              <Chip label={`${candidate.age} years old`} size="small" variant="outlined" />
            )} */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            {/* <Chip label={candidate.region} color="primary" variant="outlined" /> */}
            <Typography variant="body2" color="text.secondary">
              {candidate.region}
            </Typography>
          </Box>

          {candidate.bio && (
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {candidate.bio}
            </Typography>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button href="https://app.earningwhiletravelling.com/login" variant="contained" size="large" fullWidth>
          Vote for {candidate.name}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CandidateModal;
