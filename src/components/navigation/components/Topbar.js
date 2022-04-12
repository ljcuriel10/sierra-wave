import { FormControl, InputAdornment, MenuItem, OutlinedInput, Select, Typography, useTheme, Link, Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react'


const Topbar = ({ onSidebarOpen }) => {
    const theme = useTheme();

  return (
    <Box 
      display={'flex'}
      alignItems={'center'}
      justifyContent={{ xs: 'space-between', md: 'flex-start' }}
      width={1}
    >
      <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
        }}
      >
          <Typography fontWeight={700} color={'text.primary'} >
              The Sierra Wave
          </Typography>
          <Box sx={{ midWidth:100, marginLeft:2 }}>
              <FormControl fullWidth>
                  <Select
                    defaultValue={'usd'}
                    sx={{
                        '& .MuiSelect-select': {
                            paddingY:1,
                            border: `1px solid ${theme.palette.divider}`,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: '0 !important',
                        }
                    }}
                  >
                    <MenuItem value={'usd'}>USD</MenuItem>
                    <MenuItem value={'euro'}>EURO</MenuItem>
                    <MenuItem value={'DRAM'}>DRAM</MenuItem>
                  </Select>
              </FormControl>
          </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          flexGrow: 1,
          marginX: 2,
          '& .MuiOutlinedInput-notchedOutline': {
            border: '0 !important',
          },
          '& .MuiOutlinedInput-input': {
            padding: 1,
          },
        }}
      >
          <FormControl fullWidth variant='outlined'>
              <OutlinedInput 
                  sx={{
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                  }}
                  startAdornment={
                      <InputAdornment position='start'>
                          <Box
                            component={'svg'}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            width={24}
                            height={24}
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </Box>
                      </InputAdornment>
                  }
              />
          </FormControl>
      </Box>
      <Box display={{ xs: 'none', md: 'flex' }}>
            <Link
              component={Button}
              href={'#'}
              size={'large'}
              variant={'body1'}
              underline={'none'}
              sx={{
                  color:'text.primary',
                  justifyContent: 'space-between',
              }}
              endIcon={<FavoriteBorderOutlinedIcon />}
            >
                Wishlist
            </Link>
            <Link
              component={Button}
              href={'#'}
              size={'large'}
              variant={'body1'}
              underline={'none'}
              sx={{
                  color:'text.primary',
                  justifyContent: 'space-between',
              }}
              endIcon={<ShoppingCartOutlinedIcon />}
            >
                Cart
            </Link>
            <Link
              component={Button}
              href={'#'}
              size={'large'}
              variant={'body1'}
              underline={'none'}
              sx={{
                  color:'text.primary',
                  justifyContent: 'space-between',
              }}
              endIcon={<PersonOutlineOutlinedIcon />}
            >
                Sign In
            </Link>
      </Box>
      <Button
        onClick={()=> onSidebarOpen()}
        aria-label='Menu'
        variant={'outlined'}
        sx={{
            border:0,
            minWidth: 'auto',
            padding: 0,
            marginLeft: 2,
            color: 'text.primary',
            display: { xs: 'flex', md: 'none' },
            '&:hover': {
                border: 0,
            }
        }}
      >
        <MenuIcon />
      </Button>
    </Box>
  )
}

export default Topbar