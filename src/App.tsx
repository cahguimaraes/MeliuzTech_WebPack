import React from 'react';
import Card from './components/Card';

import {Link} from 'react-router-dom';

const App: React.FC = () => {
  return(
    <div>
      <h1>Hello</h1>
      <Card
        textTitle="Rick and Morty"
        img="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/11/rick-and-morty-season-5-ideas-00.jpg"
        altText="Rick and Morty"
      />
      <Card
        textTitle="Naruto"
        img="https://uploads.jovemnerd.com.br/wp-content/uploads/2019/10/naruto-raposa-manga.jpg"
        altText="Naruto"
      />
      <Link to="/qualquercoisa">
        <p>Clique aqui</p>
      </Link>
    </div>
  )
}

export default App