import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import CustomDatePicker from './DatePicker'
import { Dayjs } from 'dayjs'

export default {
  title: 'Components/DatePicker',
  component: CustomDatePicker,
  argTypes: {
    value: {
      control: 'date', // This will generate a date picker control in Storybook
    },
    label: {
      control: 'text', // This will generate a text input for label
    },
    fullWidth: {
      control: 'boolean', // This will generate a toggle switch for fullWidth
    },
    disabled: {
      control: 'boolean', // This will generate a toggle switch for disabled
    },
  },
} as ComponentMeta<typeof CustomDatePicker>

export const Default: ComponentStory<typeof CustomDatePicker> = (args) => {
  const [value, setValue] = useState<Dayjs | null>(null)

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  return <CustomDatePicker {...args} value={value} onChange={handleChange} />
}

export const Disabled: ComponentStory<typeof CustomDatePicker> = (args) => (
  <CustomDatePicker {...args} disabled />
)

export const FullWidth: ComponentStory<typeof CustomDatePicker> = (args) => (
  <CustomDatePicker {...args} fullWidth />
)
