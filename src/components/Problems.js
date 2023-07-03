import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Problems = () => {
  return (
    <Container id="problems" maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Problems of Food Waste
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Problem 1: Food Loss during Production
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Description of the first problem related to food loss during production.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at auctor justo, ac interdum est. Vivamus nec diam id purus facilisis feugiat sed at turpis. Suspendisse nec ultricies lectus. Vestibulum laoreet tortor ut fermentum eleifend.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Problem 2: Food Waste in Retail and Distribution
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Description of the second problem related to food waste in retail and distribution.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at auctor justo, ac interdum est. Vivamus nec diam id purus facilisis feugiat sed at turpis. Suspendisse nec ultricies lectus. Vestibulum laoreet tortor ut fermentum eleifend.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Problem 3: Food Waste at the Consumer Level
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Description of the third problem related to food waste at the consumer level.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at auctor justo, ac interdum est. Vivamus nec diam id purus facilisis feugiat sed at turpis. Suspendisse nec ultricies lectus. Vestibulum laoreet tortor ut fermentum eleifend.
        </Typography>

        {/* Add more problems and descriptions here */}
      </Box>
    </Container>
  );
};

export default Problems;
