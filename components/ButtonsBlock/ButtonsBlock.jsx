import { ButtonSecondary } from 'components/ButtonSecondary'
import { Popup } from 'components/Popup'
import React from 'react'

export const ButtonsBlock = () => {
  return (
    <div className='flex items-center gap-12'>
      <Popup label='contact us' align='left' />
      <ButtonSecondary text='learn more' link='/about' />
    </div>
  )
}
