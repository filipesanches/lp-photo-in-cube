import Box from '@mui/material/Box';
import NewsLatter from './NewsLatter';
import BoxContato from './BoxContato';

const SectionContato = () => {
  return (
    <Box id={'contato'}
      overflow={'hidden'}
      position={'relative'}
      sx={{
        background:
          'url(https://www.fotografia-dg.com/imagens-wp/2019/03/fotografia-preto-e-branco-de-qualidade.jpg) center center / cover no-repeat',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: '1',
          background:
            'linear-gradient(rgba(0, 0, 0, 1) 20%,transparent 80%,rgba(0, 0, 0, 1) 100%)',
        },
      }}
    >
      <Box position={'relative'} zIndex={2}>
        <NewsLatter />
        <BoxContato />
      </Box>
    </Box>
  );
};

export default SectionContato;
