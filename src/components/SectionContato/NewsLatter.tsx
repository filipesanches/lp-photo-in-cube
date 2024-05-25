import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

const NewsLatter = () => {
  return (
    <Box
      component={'form'}
      color={'white'}
      display={'flex'}
      flexDirection={'column'}
      gap={'20px'}
      alignItems={'center'}
      onSubmit={(e) => e.preventDefault()}
    >
      <Box
        textAlign={'center'}
        pt={'100px'}
        component={'div'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <MarkEmailReadRoundedIcon sx={{ fontSize: '100px', mb: '30px' }} />
        <Typography fontSize={'2rem'}>
          Inscreva-se para receber atualizações!
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth={'600px'}
        width={'100%'}
        sx={{ backgroundColor: '#ffffff' }}
        p={'15px 20px'}
        borderRadius={'10px'}
      >
        <TextField
          variant="outlined"
          label="Digite seu e-mail"
          color="primary"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" color="primary" size="large" type="submit">
                  Inscrever
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default NewsLatter;
