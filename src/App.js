//import { useState, useEffect } from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import Menu from './component/Menu/Menu';
import Team from './component/Team/Team';

import {getMembers} from './update_lattes/team_members'

function App() {
  
  //This class simplifies the creating of group of persons
  class TeamTitle{
    constructor(title, main_color, bg_color){
      this.title      = title      //name of team classification
      this.main_color = main_color //color used as main
      this.bg_color   = bg_color   //color used as background
    }
  }

  //this array store the team classifications
  //CHALLANGE: change main_color and bg_color by a iterate odd_pair and even_pair
  const teamTitleList = [
    new TeamTitle('Líder',                    '#57C278', '#D9F7E9'),
    new TeamTitle('Pesquisadores Chefes',     '#57C278', '#D9F7E9'),
    new TeamTitle('Pesquisadores Convidados', '#82CFFA', '#E8F8FF'),
    new TeamTitle('Pós-Doutorandos',          '#A6D157', '#F0F8E2'),
    new TeamTitle('Doutorandos',              '#E06B69', '#FDE7E8'),
    new TeamTitle('Mestrandos',               '#DB6EBF', '#FFD9F5'),
    new TeamTitle('Iniciação Científica',     '#FFBA05', '#FFF5D9'),
    new TeamTitle('Colaboradores',            '#FF8A29', '#FFEEDF'),
    new TeamTitle('Voluntários',              '#82CFFA', '#E8F8FF'),
    new TeamTitle('Ex-Membros',               '#82CFFA', '#E8F8FF')
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
        {teamTitleList.map(team =>
          <Team key          = {team.title}
                team_title   = {team.title}
                main_color   = {team.main_color}
                bg_color     = {team.bg_color}
                team_members = {team_members.filter(member => member.team_name === team.title)}
          />
        )}

      </body>
      <Footer />

    </div>
  );
}

//

export default App;
