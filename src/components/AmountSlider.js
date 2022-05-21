import React from 'react';
import { CURRENCY } from '../utils/Constants';
import SliderCustom from './SliderCustom';

export const AMOUNT_INIT = 19_500;
const AMOUNT_MIN = 5_000;
const AMOUNT_MAX = 50_000;
const marks = { 5000: `${CURRENCY} 5.000`, 50000: `${CURRENCY} 50.000` };
const id = 'amount';
const label = 'MONTO TOTAL';
const step = 100;

export default function AmountSlider({ amount, setAmount }) {
  return (
    <SliderCustom
      id={id}
      label={label}
      value={amount}
      setValue={setAmount}
      min={AMOUNT_MIN}
      max={AMOUNT_MAX}
      marks={marks}
      currency={CURRENCY}
      step={step}
    />
  );
}
