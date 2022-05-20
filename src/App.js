import { useState } from 'react';
import './App.css';
import 'rc-slider/assets/index.css';
import SliderCustom from './components/SliderCustom';

function App() {
  const AMMOUNT_INIT = 19500;
  const AMMOUNT_MIN = 5000;
  const AMMOUNT_MAX = 50000;
  const marks = { 5000: '$ 5.000', 50000: '$ 50.000' };
  const [ammount, setAmmount] = useState(AMMOUNT_INIT);

  const FEE_INIT = 16;
  const FEE_MIN = 3;
  const FEE_MAX = 24;
  const marksFee = { 3: '3', 24: '24' };
  const [fee, setFee] = useState(FEE_INIT);

  return (
    <main className='wrapper-container'>
      <header>
        <h1>Digbang-react</h1>
      </header>
      <section className='container'>
        <header className='title'>Simulá tu crédito</header>
        <section>
          <SliderCustom
            id='ammount'
            label={'MONTO TOTAL'}
            value={ammount}
            setValue={setAmmount}
            min={AMMOUNT_MIN}
            max={AMMOUNT_MAX}
            marks={marks}
            currency='$'
          />
          <SliderCustom
            id='fee'
            label={'PLAZO'}
            value={fee}
            setValue={setFee}
            min={FEE_MIN}
            max={FEE_MAX}
            marks={marksFee}
            currency=''
          />
        </section>
        <section className='row secondary-dark box-fee'>
          <span className='fee-label'>CUOTA FIJA POR MES</span>
          <span className='fee-ammount'>$ 2,412.91</span>
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
