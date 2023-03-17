import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="header_container">
          <HeaderImageMenu/> 
          <ButtonLanguageChange/>
          <ButtonRegistration/>
        </div>
      </header>
    </div>
  );
}

const HeaderMenu=()=>{
  return <ul class="header_list">
    <li>Наши продукты</li>
    <li>Игры</li>
    <li>Донат</li>
    <li>О нас</li>
    <li>Партнеры</li>
    <li>Сообщество</li>
    <li>Поддержка</li>
  </ul>
}

const HeaderImageMenu=()=>{
  return <div class="header_list_image">
    <img src="logo-top 1.png"></img> 
    <HeaderMenu/>
</div>
}

const ButtonLanguageChange=()=>{
  return <button class="button_language">RU</button>
}
const ButtonRegistration=()=>{
  return <button class="button_registration">Зарегестрироваться</button>
}

export default App;
