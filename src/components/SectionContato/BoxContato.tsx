import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const CardContato = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component={motion.div}
      width={{
        xs: '100%',
        sm: '100%',
        md: '45%',
        lg: '45%',
      }}
      height={'180px'}
      whileHover={{ scale: 1.1, backgroundColor: '#6e92a4' }}
      whileTap={{ scale: 0.9 }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      padding={'20px'}
      borderLeft={'5px solid #6e92a4'}
      sx={{
        background: '#6e6e6e75',
        cursor: 'pointer',
      }}
    >
      {children}
    </Box>
  );
};

const BoxContato = () => {
  return (
    <Box
      color={'white'}
      display={'flex'}
      gap={'10px'}
      alignItems={'center'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      p={'50px 0'}
    >
      <CardContato>
        <WhatsAppIcon sx={{ fontSize: '60px' }} />
        <Typography fontSize={'20px'} m={'10px'}>
          +55 (11) 98820-6688
        </Typography>
      </CardContato>
      <CardContato>
        <PhoneAndroidIcon sx={{ fontSize: '60px' }} />
        <Typography fontSize={'20px'} m={'10px'}>
          +55 (11) 98820-6688
        </Typography>
      </CardContato>
      <CardContato>
        <RoomIcon sx={{ fontSize: '60px' }} />
        <Typography fontSize={'20px'} m={'10px'}>
          Av. Brigadeiro Faria Lima, 1000 - São Paulo, SP
        </Typography>
      </CardContato>
      <CardContato>
        <EmailIcon sx={{ fontSize: '60px' }} />
        <Typography fontSize={'20px'} m={'10px'}>
          photoincubeart@gmail.com
        </Typography>
      </CardContato>
    </Box>
  );
};

export default BoxContato;
