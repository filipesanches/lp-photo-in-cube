import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const SectionQuemSomos = () => {
  return (
    <Box
      id={'quem-somos'}
      padding={'20px'}
      display={'flex'}
      pb={'400px'}
      flexDirection={'column'}
      position={'relative'}
      sx={{
        background: ' url(./img/sp.jpg) no-repeat center center / cover fixed',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: '1',
          background: 'linear-gradient(rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))',
        },
      }}
    >
      <Typography
        component={motion.h2}
        initial={{ scale: 0, y: -100 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        zIndex={2}
        fontSize={{
          xs: '1.5rem',
          sm: '1.7rem',
          md: '1.8rem',
          lg: '2rem',
        }}
        color={'white'}
        padding={'20px'}
        textAlign={'center'}
        sx={{
          background: '#888',
        }}
      >
        Nossa Hístoria começa quando você tem uma lembrança
      </Typography>

      <Box
        zIndex={2}
        component={motion.div}
        initial={{ scale: 0, y: -100 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        color={'white'}
        padding={'20px'}
        textAlign={'justify'}
        display={'grid'}
        gridTemplateColumns={{
          xs: '1fr',
          sm: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
        }}
        columnGap={'20px'}
        rowGap={'20px'}
        mt={6}
      >
        <Typography>
          Bem-vindo à nossa loja de fotografia, onde cada clique captura um
          momento único e cada foto conta uma história. Nossa história começa
          com você, com suas lembranças e com a magia de eternizar instantes
          preciosos.
        </Typography>
        <Typography>
          Desde o primeiro flash, nos dedicamos a transformar memórias em
          imagens que você poderá guardar e compartilhar por toda a vida.
          Acreditamos que cada fotografia é uma janela para o passado, um
          testemunho de alegria, amor e momentos especiais. É essa paixão por
          registrar emoções autênticas que nos motiva todos os dias.
        </Typography>
        <Typography>
          Nossa equipe é composta por profissionais talentosos e apaixonados
          pela arte da fotografia. Trabalhamos com equipamentos de última
          geração e estamos sempre em busca das melhores técnicas para garantir
          que cada clique seja perfeito. Valorizamos a criatividade, a inovação
          e, acima de tudo, a satisfação de nossos clientes.
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionQuemSomos;
