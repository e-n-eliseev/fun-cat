import Cat from './components/Cat';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1 className='App__heading'>Ты сегодня покормил кота?</h1>
      <main className='App__main'>
        <Cat />
        <Cat />
        <Cat />
      </main>
    </div>
  );
}

export default App;
