import React from 'react';

export default function PriceInput() {
  return (
    <>
      <label for='tentacles'>Precio:</label>
      <input type='number' id='tentacles' name='tentacles' min='10' max='100' />
    </>
  );
}
