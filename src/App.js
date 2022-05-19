import './App.css';

function App() {
  return (
    <main className='wrapper-container'>
      <header>
        <h1>Digbang-react</h1>
      </header>
      <section className='container'>
        <header className='title'>Simulá tu crédito</header>
        <section>
          <article>
            <header className='row'>
              <span className='label text-secondary'>MONTO TOTAL</span>
              <span class='currency-input'>
                $
                <input
                  type='number'
                  id='ammount'
                  name='ammount'
                  className='ammount-input'
                  value='19500'
                  step='0.01'
                  min='0'
                />
              </span>
            </header>
            <article>rc-slider</article>
          </article>
        </section>
        {/* TODO: ADD PLAZO */}
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
