import React from 'react';
import SliderCustom from './SliderCustom';

export const FEE_INIT = 16;
const FEE_MIN = 3;
const FEE_MAX = 24;
const marksFee = { 3: '3', 24: '24' };
const id = 'fee';
const label = 'PLAZO';

export default function FeeSlider({ fee, setFee }) {
  return (
    <SliderCustom
      id={id}
      label={label}
      value={fee}
      setValue={setFee}
      min={FEE_MIN}
      max={FEE_MAX}
      marks={marksFee}
      currency=''
    />
  );
}
