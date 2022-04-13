
import { AppBar, Box, Container, Divider, useTheme } from '@mui/material';
import React, { useState } from 'react'
import Nav from './components/Nav';
import Topbar from './components/Topbar';


const ChildMock = () => {
    const theme = useTheme();
    return (
        <Box p={4}>
            <Box 
                width={1}
                height={1}
                minHeight={400}
                borderRadius={2}
                border={`2px solid ${theme.palette.divider}`}
            />
        </Box>
    )
}

const NavWithCenteredSearch = () => {
    const theme = useTheme();
    const [ openSidebar, setOpenSidebar ] = useState(false);

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

  return (
    <Box>
        <AppBar
            position={'fixed-top'}
            sx={{
                backgroundColor: theme.palette.background.paper,
                display: 'block'
            }}
            elevation={0}
        >
            <Container paddingY={{ xs: 1, sm: 1.5 }} >
                <Topbar onSidebarOpen={handleSidebarOpen} />
            </Container>
            <Divider />
            <Container>
                <Nav />
            </Container>
        </AppBar>
    </Box>
  )
}

export default NavWithCenteredSearch