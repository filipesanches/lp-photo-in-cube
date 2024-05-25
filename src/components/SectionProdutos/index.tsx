import { Box } from '@mui/material';
import textProdutos from '../../data/textProdutos';
import BoxConhecaNossaLinha from './BoxConhecaNossaLinha';
import BoxProdutos from './BoxProdutos';




const SectionProdutos = () => {
  return (
    <>
      <Box id={'produtos'}>
        <BoxConhecaNossaLinha />
        <Box
          overflow={'hidden'}
          padding={'40px'}
          component={'div'}
          sx={{ background: '#000000' }}
        >
          {textProdutos.map((text, index) => (
            <BoxProdutos
              key={index}
              row={index % 2 === 0 ? 'row' : 'row-reverse'}
              title={text.title}
              description={text.description}
              img={text.img}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SectionProdutos;
