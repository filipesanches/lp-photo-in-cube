import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const BoxProdutos = ({
  row,
  title,
  description,
  img,
}: {
  row: string;
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ x: row === 'row-reverse' ? -300 : 300 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      display={'flex'}
      alignItems={'center'}
      flexDirection={{
        xs: 'column',
        sm: 'column',
        md: row === 'row-reverse' ? 'row-reverse' : 'row',
        lg: row === 'row-reverse' ? 'row-reverse' : 'row',
      }}
      color={'white'}
    >
      <Box
        padding={'20px'}
        width={{
          xs: '100%',
          sm: '100%',
          md: '50%',
          lg: '50%',
        }}
        component="img"
        src={img}
      />
      <Box
        padding={'20px'}
        component="div"
        width={{
          xs: '100%',
          sm: '100%',
          md: '50%',
          lg: '50%',
        }}
        flex={'50%'}
      >
        <Typography
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          textAlign={'center'}
          padding={'20px'}
        >
          {title}
        </Typography>
        <Typography fontSize={'1.2rem'} padding={'20px'} textAlign={'center'}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BoxProdutos;
