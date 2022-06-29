import './app.scss';

function App() {
  return (
    <main className='main'>
      <div className='list'>
        <div style={{ marginBottom: '1rem' }}>
          <a href="https://github.com/boringslug/two-smoking-barrels">Github</a>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <div className='flex' style={{ gap: '0.4rem' }}>
            <a href="files/complainer.crx" download>Розширення Chrome</a>
            - для скарг на орків в 1 клік (instagram, youtube)
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
