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
  step = '1',
}) {
  const handleOnChange = ({ target }) => {
    const { value } = target;
    setValue(value);
  };

  return (
    <article>
      <header className='row'>
        <span className='label text-secondary'>{label}</span>
        <span className='currency-input'>
          {currency}
          <input
            type='number'
            id={id}
            name={id}
            className='number-input'
            value={value}
            min={min}
            onChange={handleOnChange}
            step={step}
            lang='es-AR'
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
