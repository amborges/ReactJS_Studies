import './Footer.css'

function Footer() {
	return (
		<footer className="footer">
			<h3><u> Onde Estamos </u></h3>
            <div className='leftside'>
                <img decoding="async" 
                     src="https://i0.wp.com/wp.ufpel.edu.br/vitech/files/2017/11/map-1.png?w=584&amp;ssl=1" 
                     align="left" 
                     width="90" 
                     height="90"
                     alt="Google Map view of ViTech Localization"
                />
            </div>
            <div className='rightside'>
                <b>Video Technology Research Group (ViTech)</b> <br />
                Universidade Federal de Pelotas (UFPel)<br />
                Rua Gomes Carneiro, 1<br />
                Pelotas-RS, Brasil<br />
                96010-610
            </div>
            <div className='bottonside'>
                <hr/>
                Site adaptado de <a href='https://wp.ufpel.edu.br/vitech/pt/'>ViTech</a>, 
                modificado por <a href='https://github.com/amborges'>Alex Borges</a>.
            </div>
		</footer>
	);
}

export default Footer;
