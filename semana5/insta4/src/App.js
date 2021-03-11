// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const ContainerPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`   
class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'tjatoba',
        fotoUsuario: 'https://instagram.fcgh37-1.fna.fbcdn.net/v/t51.2885-19/11311507_455306357985433_516990745_a.jpg?_nc_ht=instagram.fcgh37-1.fna.fbcdn.net&_nc_ohc=TUgXmjWj2G8AX94JUGU&oh=852a6573f5e470493764518c99e1da20&oe=607180C2',
        fotoPost: 'https://conteudo.imguol.com.br/c/noticias/1b/2018/09/30/gifs-ja-estavam-disponiveis-nos-stories-do-instagram-1538334717341_v2_450x450.jpg'
      },

      {
        nomeUsuario: 'fakeig',
        fotoUsuario: 'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png',
        fotoPost: 'https://img.freepik.com/vetores-gratis/instagram-fundo-em-cores-gradientes_23-2147817410.jpg?size=338&ext=jpg' 
      }
    ],
    
    inputUsuario: "",
    inputFoto: "",
    inputPost:""

  }

  postar = () => {
    const postagem = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFoto,
      fotoPost: this.state.inputPost,
      
    }

    const novoPost = [...this.state.post, postagem]

    this.setState({post: novoPost})

    this.setState({ inputUsuario: ""})
    this.setState({ inputFoto: ""})
    this.setState({ inputPost: ""})
  }

onChangeinputUsuario = (event) =>{
  this.setState({inputUsuario: event.target.value})
}

onChangeinputFoto = (event) =>{
  this.setState({inputFoto: event.target.value})
}

onChangeinputPost = (event) =>{
  this.setState({inputPost: event.target.value})
}

render (){
  const ComponentesLista = this.state.post.map ((post) => {
    return (
      <Post key={post.nomeUsuario} nomeUsuario= {post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>)
  })

return (
  <ContainerPost>
    <input
    value = {this.state.inputUsuario}
    placeholder={"Nome"}
    onChange= {this.onChangeinputUsuario}/>

<input
    value = {this.state.inputFoto}
    placeholder={"Foto"}
    onChange= {this.onChangeinputFoto}/>

<input
    value = {this.state.inputPost}
    placeholder={"Post"}
    onChange= {this.onChangeinputPost}/>

<button onClick={this.postar}>Enviar</button>

    {ComponentesLista}

    </ContainerPost>
  )
}
}

export default App;
// class App extends React.Component {
//   render() {
//     return (
//       <div className={'app-container'}>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/150'}
//         />
//          <Post
//           nomeUsuario={'tjatoba'}
//           fotoUsuario={'https://instagram.fcgh37-1.fna.fbcdn.net/v/t51.2885-19/11311507_455306357985433_516990745_a.jpg?_nc_ht=instagram.fcgh37-1.fna.fbcdn.net&_nc_ohc=TUgXmjWj2G8AX94JUGU&oh=852a6573f5e470493764518c99e1da20&oe=607180C2'}
//           fotoPost={'https://conteudo.imguol.com.br/c/noticias/1b/2018/09/30/gifs-ja-estavam-disponiveis-nos-stories-do-instagram-1538334717341_v2_450x450.jpg'}
//         />
//          <Post
//           nomeUsuario={'fakeig'}
//           fotoUsuario={'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png'}
//           fotoPost={'https://img.freepik.com/vetores-gratis/instagram-fundo-em-cores-gradientes_23-2147817410.jpg?size=338&ext=jpg'}
//         />
//       </div>
//     );
//   }
// }

// export default App;
