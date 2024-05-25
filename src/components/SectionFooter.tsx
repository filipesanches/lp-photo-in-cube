import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SectionFooter = () => {
  return (
    <Box
      sx={{
        background: '#000',
      }}
      p={'20px'}
    >
      <Box display={'flex'} justifyContent={'center'} gap={'20px'} p={'20px'}>
        <LinkedIn
          component={motion.svg}
          whileHover={{ scale: 1.2 }}
          sx={{
            color: 'white',
          }}
          fontSize="large"
          cursor={'pointer'}
          onClick={() =>
            window.open('https://www.linkedin.com/in/filipe-pereira-2baa23201/')
          }
        />
        <GitHub
          component={motion.svg}
          whileHover={{ scale: 1.2 }}
          sx={{
            color: 'white',
          }}
          fontSize="large"
          cursor={'pointer'}
          onClick={() => window.open('https://github.com/filipesanches')}
        />
      </Box>
      <Typography
        sx={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}
      >
        © 2024. Todos os direitos reservados. Desenvolvido por RetroLipe
      </Typography>
    </Box>
  );
};

export default SectionFooter;
