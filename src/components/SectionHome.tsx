import { Box, Typography } from '@mui/material';

const SectionHome = () => {
  return (
    <Box
      id={'home'}
      height={'100vh'}
      display={'flex'}
      fontSize={{
        xs: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '3rem',
      }}
      alignItems={'center'}
      justifyContent={{
        xs: 'flex-end',
        sm: 'center',
        md: 'center',
        lg: 'center',
      }}
      flexDirection={'column'}
      color={'white'}
      position={'relative'}
      sx={{
        background:
          'url(./img/maquina-fotografica-analogica.jpg) center center / cover no-repeat',
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: {
            xs: '100%',
            sm: '100%',
            md: '250px',
            lg: '250px',
          },
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)',
        },
      }}
    >
      <Box
        zIndex={2}
        padding={'20px'}
        textAlign={{
          xs: 'left',
          sm: 'center',
          md: 'center',
          lg: 'center',
        }}
        sx={{
          backgroundColor: {
            xs: 'transparent',
            sm: 'transparent',
            md: 'rgba(0,0,0,0.5)',
            lg: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: '400',
            padding: '15px',
            zIndex: 2,
          }}
        >
          PHOTO IN CUBE
        </Typography>
        <Typography
          fontSize={{
            xs: '2rem',
            sm: '2rem',
            md: '2rem',
            lg: '3rem',
          }}
          padding={'15px'}
          fontWeight={'400'}
          zIndex={1}
        >
          Te ajudando a recordar bons momentos.
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionHome;
