import './MemberCard.css'

function MemberCard({member, main_color, bg_color}) {
    //http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4164431H8
	return (
		<div className="membercard">
			<div className='header' style={{ backgroundColor:main_color }}>
                <img src={member.image} alt={member.name} />
            </div>

            <div className='footer' style={{ backgroundColor:bg_color }}>
                <h4>{member.name}</h4>
                <h5><a href={member.lattes}>Lattes</a></h5>
            </div>
		</div>
	);
}

export default MemberCard;