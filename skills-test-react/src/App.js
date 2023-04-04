import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
  return (
    <Container maxWidth="sm">
	<AccountMenu onClick={handleOnClick} />
	{openForm && <BasicForm />}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
}
