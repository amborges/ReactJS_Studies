import './MemberCard.css'
import React, { useState } from 'react';

function MemberCard({member, main_color, bg_color}) {
    
    const [showPopup, setShowPopup] = useState(false);

    function show_resume(){
        setShowPopup(!showPopup);
    }

	return (
		<div className="membercard">
			<div className='header' style={{ backgroundColor:main_color}}>
                <img src={member.image} alt={member.name} />
            </div>

            <div className='footer' style={{ backgroundColor:bg_color }}>
                <h4>{member.name}</h4>
                <h5><a href={member.lattes}>Lattes</a></h5>
                <div className="resume_popup" onClick={ show_resume }> +
                    <span className={showPopup ? 'resume_text show' : 'resume_text'} 
                          id={member.name}>{ member.resume }</span>
                </div>
            </div>
		</div>
	);
}

export default MemberCard;