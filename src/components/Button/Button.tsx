import MUIButton from '@mui/material/Button'
import React from 'react'

interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained'
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  fullWidth?: boolean
  disabled?: boolean
  disableElevation?: boolean
  disableFocusRipple?: boolean
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'outlined',
  children = 'Button',
  ...props
}) => {
  return (
    <MUIButton variant={variant} {...props}>
      {children}
    </MUIButton>
  )
}

export default Button
