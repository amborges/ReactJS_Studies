import MemberCard from '../MemberCard/MemberCard';
import './Team.css';

function Team({team_title, main_color, bg_color, team_members}) {
  return (
    team_members.length < 1 ? "" :
    <section className="team" style={{ backgroundColor:bg_color }} >
      <h3  style={{ borderColor:main_color }}>
        {team_title}
      </h3>

      <div className='team_members'>
        {team_members.map(member =>
            <MemberCard key        = {member.name}
                        member     = {member}
                        main_color = {main_color}
                        bg_color   = {bg_color}
            />
        )}
      </div>
    </section>
  );
}

export default Team;
