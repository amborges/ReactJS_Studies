//import { useState, useEffect } from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import Menu from './component/Menu/Menu';
import Team from './component/Team/Team';

import {getMembers} from './update_lattes/team_members'

function App() {
  
  //this array store the team classifications
  const teamTitleList = [
    'Líder',
    'Pesquisadores Chefes',
    'Pesquisadores Convidados',
    'Pós-Doutorandos',
    'Doutorandos',
    'Mestrandos',
    'Iniciação Científica',
    'Colaboradores',
    'Voluntários',
    'Ex-Membros'
  ]

  //this variables stores the pair [reader_var, write_var], of all registred team members
  //const [team_members, set_team_members] = useState([])
  //set_team_members(getMembers())
  const team_members = getMembers()
  
  return (
    <div className="App">
      <Banner />
      <body>
        <Menu />
        {teamTitleList.map((team, i) =>
          <Team key          = {team}
                team_title   = {team}
                team_members = {team_members.filter(member => member.team_name === team)}
                ith_team_position = {i}
          />
        )}

      </body>
      <Footer />

    </div>
  );
}

//

export default App;
