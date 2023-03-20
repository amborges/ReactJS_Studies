import './Menu.css';

function Menu() {
  return (
    <section className='menu'>
        <div className='clickable'>
            Início
        </div>
        <div className='clickable'>
            <a href="#">Equipe</a>
        </div>
        <div className='clickable'>
            Pesquisa
        </div>
        <div className='clickable'>
            Publicações
        </div>
        <div className='clickable'>
            Ingresso no Vitech
        </div>
        <div className='clickable'>
            Contato
        </div>
        <div className='clickable'>
            <img src="https://cdn-icons-png.flaticon.com/128/4060/4060230.png" alt="EN-EN" />
        </div>
    </section>
  );
}

export default Menu;