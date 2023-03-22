import './Team.css';
import React, { useState } from 'react';
import MemberCard from '../MemberCard/MemberCard';

function Team({team_title, team_members, ith_team_position}) {
  const [whichColor, setWhichColor] = useState(false);

  const main_color_even  = "#00a8f4";
  const main_color_odden = "#94dfff";

  const bg_color_even  = "#ffffff";
  const bg_color_odden = "#E8F8FF";

  const mcolor = ith_team_position % 2 === 0 ? main_color_even : main_color_odden;
  const bcolor = ith_team_position % 2 === 0 ? bg_color_even : bg_color_odden;

  return (
    team_members.length < 1 ? "" :
    <section className="team" style={{ backgroundColor:bcolor }} >
      <h3  style={{ borderColor:mcolor }}>
        {team_title}
      </h3>

      <div className='team_members'>
        {team_members.map(member =>
            <MemberCard key        = {member.name}
                        member     = {member}
                        main_color = {mcolor}
                        bg_color   = {bcolor}
            />
        )}
      </div>
    </section>
  );
}

export default Team;