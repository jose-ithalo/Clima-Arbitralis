import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';
import ErrorAlert from '../../components/ErrorAlert/error';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function SecondLogin() {

    const { errorContent, errorState } = useContext<any>(fileContext);

    return (
        <div className="container">
            <StartImg />

            <UserSide headline='Olá, novamente!' inputName={false}
                btnAction='Entrar' passForget={true} />

            {errorState && <ErrorAlert content={errorContent} />}
        </div>
    );
}

export default SecondLogin;