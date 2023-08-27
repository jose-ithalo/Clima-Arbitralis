import './home.css';
import menuIcon from '../../assets/menuIcon.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.svg';
import cloud from '../../assets/cloud.svg';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    function handleLogout() {

        navigate('/Login');
    }

    return (
        <div className="containerHome">
            <div className='SideBar'>
                <div className='navField'>
                    <img src={menuIcon} alt="Menu" title='Menu' className='iconBar' />
                    <img src={logout} alt="Logout" title='Sair' className='iconBar' onClick={handleLogout} />
                </div>
            </div>
            <div className='contentHome'>
                <header>
                    <img src={avatar} alt="Avatar" title='Usuário logado' />
                </header>
                <main>
                    <div className='fieldDetail'>
                        <div className='leftDetails'>
                            <div>
                                <img src={cloud} alt='Ícone' className='iconWeather' />
                                <h4>Chuva forte</h4>
                            </div>
                            <div>
                                <h1>19°</h1>
                                <h3>São Paulo, Brazil</h3>
                            </div>
                        </div>
                        <div className='rightDetails'>
                            <h2>7:30 pm</h2>
                            <h3>Quarta-feira</h3>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;