import { useState } from 'react';
import './App.css';
import 'rc-slider/assets/index.css';
import AmountSlider, { AMOUNT_INIT } from './components/AmountSlider';
import FeeSlider, { FEE_INIT } from './components/FeeSlider';
import { CURRENCY } from './utils/Constants';

function App() {
  const [amount, setAmount] = useState(AMOUNT_INIT);
  const [fee, setFee] = useState(FEE_INIT);

  const getFeeByMount = () => {
    return parseFloat(amount / fee).toFixed(2);
  };

  return (
    <main className='wrapper-container'>
      <header>
        <h1>Digbang-react</h1>
      </header>
      <section className='container'>
        <header className='title'>Simulá tu crédito</header>
        <section>
          <AmountSlider amount={amount} setAmount={setAmount} />
          <FeeSlider fee={fee} setFee={setFee} />
        </section>
        <section className='row secondary-dark box-fee'>
          <span className='fee-label'>CUOTA FIJA POR MES</span>
          <span className='fee-amount'>{CURRENCY + ' ' + getFeeByMount()}</span>
        </section>
        <section className='row'>
          <button className='button primary credit'>OBTENÉ CRÉDITO</button>
          <button className='button secondary detail-fee'>
            VER DETALLE DE <br /> CUOTAS
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
