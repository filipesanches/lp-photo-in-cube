import { Box, Typography } from '@mui/material';

const { title, description } = {
  title: 'Conheça nossa linha',
  description:
    'Aqui na nossa loja de fotografia, transformamos suas memórias em peças únicas que você pode levar para qualquer lugar ou exibir com orgulho. Conheça nossa linha de produtos cuidadosamente selecionados para celebrar seus momentos mais especiais:',
};

const BoxConhecaNossaLinha = () => {
  return (
    <Box component="div">
      <Box
        component="div"
        display={'flex'}
        alignItems={'center'}
        padding={{
          xs: '40px',
          sm: '60px',
          md: '80px',
          lg: '100px',
        }}
        sx={{
          flexFlow: {
            xs: 'column nowrap',
            sm: 'column nowrap',
            md: 'row nowrap',
            lg: 'row nowrap',
          },
        }}
      >
        <Box
          maxWidth={{ xs: '100%', sm: '100%', md: '50%', lg: '50%' }}
          component="img"
          src="https://filipesanches.github.io/landpage_loja_de_fotos/img/pola.jpg"
        />
        <Box
          component="div"
          textAlign={'center'}
          borderLeft={{
            xs: 'none',
            sm: 'none',
            md: '10px solid #6e92a4',
            lg: '10px solid #6e92a4',
          }}
          padding={'20px'}
        >
          <Typography fontSize={'2rem'} fontWeight={'bold'} mb={'20px'}>
            {title}
          </Typography>
          <Typography padding={'20px'}>{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxConhecaNossaLinha;
