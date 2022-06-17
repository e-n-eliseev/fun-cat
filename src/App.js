import { shallowEqual, useSelector } from 'react-redux';
import './styles/App.scss';
import Cat from './components/Cat';
import { getFood } from './store/selectors';

function App() {
  //получаем данные из хранилища
  const food = useSelector(getFood, shallowEqual);

  return (
    <div className="App">
      <h1 className='App__heading'>Ты сегодня покормил кота?</h1>
      <main className='App__main'>
        {food.length
          ? food.map(item => <Cat key={item.id} info={item} />)
          : <h2 className='App__heading'>Извините, список пуст!</h2>}
      </main>
    </div>
  );
}

export default App;
