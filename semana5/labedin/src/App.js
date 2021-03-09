import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D35AQECXAOuY15JqQ/profile-framedphoto-shrink_200_200/0/1609106103351?e=1615395600&v=beta&t=KaNIdrmwpzkjzvghSSPwv57-Apj1kWwQVtNy2O5fVRE" 
          nome="Thiago Jatobá" 
          descricao="Executivo de Marketing e Eventos buscando transição radical de carreira. Estudante de Desenvolvimento e programação, fascinado com as maravilhosas possibilidades da tecnologia, focado na linguagem Swift e Web Full-Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <div className = "page-section-container">
        <CardPequeno
        imagem = "https://www.flaticon.com/svg/vstatic/svg/1782/1782765.svg?token=exp=1615310931~hmac=9d0e9a7a948eeb273472f6d0a329537e"
        nome = "Email:"
        descricao = "tmjatob@gmail.com"
        />

        
        <CardPequeno
          imagem = "https://www.flaticon.com/svg/vstatic/svg/484/484167.svg?token=exp=1615311398~hmac=54ef2510e40ed1f1130ddd322b7c8d65"
          nome = "Endereço:"
          descricao = "Rua Alvaro de Carvalho, 127 - SP"
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFx60jXl4S1JQ/company-logo_100_100/0/1553189215195?e=1623283200&v=beta&t=aVPkHJgo6q317CduFz-vAk3MTxqj9cF72jUZ858Udmw" 
          nome="Executivo de vendas" 
          descricao="Prospecção, Vendas e Licenciamento de Conteúdo Audiovisual para Plataformas Digitais, TV Paga e Aberta, Meios de Transporte e Home Vídeo. Gestão de Contratos, Gestão Administrativa e Acompanhamento de Deliveries." 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/280x280_RS/1f/c1/e7/1fc1e715f091cce11802ca635682fb32.jpg" 
          nome="MinD Designs Comércio de Utilidades Domésticas LTDA" 
          descricao="Gerência do PDV (Filial RJ), Controle de Operações de Projetos com IDs e Arquitetos Parceiros, Controle de Requisição de Estoque, Materiais e Insumos (loja física e e-commerce)." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
