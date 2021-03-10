import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'tjatoba'}
          fotoUsuario={'https://instagram.fcgh37-1.fna.fbcdn.net/v/t51.2885-19/11311507_455306357985433_516990745_a.jpg?_nc_ht=instagram.fcgh37-1.fna.fbcdn.net&_nc_ohc=TUgXmjWj2G8AX94JUGU&oh=852a6573f5e470493764518c99e1da20&oe=607180C2'}
          fotoPost={'https://conteudo.imguol.com.br/c/noticias/1b/2018/09/30/gifs-ja-estavam-disponiveis-nos-stories-do-instagram-1538334717341_v2_450x450.jpg'}
        />
         <Post
          nomeUsuario={'fakeig'}
          fotoUsuario={'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png'}
          fotoPost={'https://img.freepik.com/vetores-gratis/instagram-fundo-em-cores-gradientes_23-2147817410.jpg?size=338&ext=jpg'}
        />
      </div>
    );
  }
}

export default App;
