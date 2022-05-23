import { useState } from 'react';
import 'rc-slider/assets/index.css';
import AmountSlider, { AMOUNT_INIT } from './components/AmountSlider';
import FeeSlider, { FEE_INIT } from './components/FeeSlider';
import FixedFeeByMonth from './components/FixedFeeByMonth';

function App() {
  const [amount, setAmount] = useState(AMOUNT_INIT);
  const [fee, setFee] = useState(FEE_INIT);

  return (
    <main className='wrapper-container'>
      <header>
        <h1 className='app-title'>Digbang-react</h1>
      </header>
      <section className='container'>
        <header className='title'>Simulá tu crédito</header>
        <section>
          <AmountSlider amount={amount} setAmount={setAmount} />
          <FeeSlider fee={fee} setFee={setFee} />
        </section>
        <FixedFeeByMonth amount={amount} fee={fee} />
        <footer className='row '>
          <button className='button primary credit'>OBTENÉ CRÉDITO</button>
          <button className='button secondary detail-fee'>
            VER DETALLE DE <br /> CUOTAS
          </button>
        </footer>
      </section>
    </main>
  );
}

export default App;
