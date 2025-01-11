import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Dayjs } from 'dayjs'
import ClearIcon from '@mui/icons-material/Clear'

interface DatePickerProps {
  value?: Dayjs | null
  onChange?: (date: Dayjs | null) => void
  fullWidth?: boolean
  disabled?: boolean
  label?: string
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  value = null,
  onChange,
  fullWidth = false,
  disabled = false,
  label = 'Select Date',
}) => {
  const handleClear = () => {
    if (onChange) {
      onChange(null) // Reset the date to null when the clear button is clicked
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        slotProps={{
          // actionBar: {
          //   actions: ['clear', 'today'],
          // },
          field: {
            clearable: true,
          },
          textField: {
            placeholder: 'Select date', // Placeholder text
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default CustomDatePicker
