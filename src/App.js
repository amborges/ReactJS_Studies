//import { useState } from 'react';
import './App.css';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import Menu from './component/Menu/Menu';
import Team from './component/Team/Team';

//This class simplifies the creating of members
function MemberData(vname, vteam_name, vlattes, vimage){
    return {name:      vname,
            team_name: vteam_name,
            lattes:    vlattes,
            image:     vimage
    }
}

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
    new TeamTitle('Pesquisadores Chefes',     '#57C278', '#D9F7E9'),
    new TeamTitle('Pesquisadores Convidados', '#82CFFA', '#E8F8FF'),
    new TeamTitle('Pós-Doutorandos',          '#A6D157', '#F0F8E2'),
    new TeamTitle('Doutorandos',              '#E06B69', '#FDE7E8'),
    new TeamTitle('Mestrandos',               '#DB6EBF', '#FFD9F5'),
    new TeamTitle('Iniciação Científica',     '#FFBA05', '#FFF5D9'),
    new TeamTitle('Colaboradores',            '#FF8A29', '#FFEEDF'),
    new TeamTitle('Voluntários',              '#82CFFA', '#E8F8FF')
  ]

  //this variables stores the pair [reader_var, write_var], of all registred team members
  //const [team_members, set_team_members] = useState([])

  //const bruno = new MemberData("Bruno Zatt", teamTitleList[0].title, "http://lattes.cnpq.br/8251926321102019")

  const team_members = [MemberData("Bruno Zatt", teamTitleList[0].title, 
  "http://lattes.cnpq.br/8251926321102019",
  "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4164431H8"),
  
  MemberData("Alex Borges", teamTitleList[2].title, 
  "http://lattes.cnpq.br/8656832357507890",
  "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4999838P8")]

  
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
