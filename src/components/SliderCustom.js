import React from 'react';
import Slider from 'rc-slider';

export default function SliderCustom({
  id,
  label,
  value,
  setValue,
  min,
  max,
  marks,
  currency = '',
}) {
  return (
    <article>
      <header className='row'>
        <span className='label text-secondary'>{label}</span>
        <span class='currency-input'>
          {currency}
          <input
            type='number'
            id={id}
            name={id}
            className='number-input'
            value={value}
            // step='0.01'
            min={min}
          />
        </span>
      </header>
      <article className='box-slider'>
        <Slider
          className='slider'
          value={value}
          min={min}
          max={max}
          marks={marks}
          onChange={setValue}
        />
      </article>
    </article>
  );
}
