import { Link, Stack } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 8}} sx={{py: 1}} >    
      <Link
        href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Products
      </Link>
      <Link
         href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Best Sellers
      </Link>
      <Link
         href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        New Arrivals
      </Link>
      <Link
         href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Sale
      </Link>
      <Link
         href={'#'}
        variant={'body2'}
        underline={'none'}
        color={'text.primary'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Staff Pick's
      </Link>
    </Stack>
  )
}

export default Nav