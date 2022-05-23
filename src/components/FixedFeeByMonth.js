import React from 'react';
import { formatPrice } from '../utils/CommonFunctions';

export default function FixedFeeByMonth({ amount, fee }) {
  const calculateFee = amount / fee;
  const feeAmount = formatPrice(calculateFee);
  return (
    <section className='row secondary-dark box-fee'>
      <span className='fee-label'>CUOTA FIJA POR MES</span>
      <span className='fee-amount'>{feeAmount}</span>
    </section>
  );
}
