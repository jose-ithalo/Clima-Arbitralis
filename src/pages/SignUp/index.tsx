import StartImg from '../../components/StartImg/startImg';
import UserSide from '../../components/UserSide';
import ErrorAlert from '../../components/ErrorAlert/error';
import SuccessAlert from '../../components/SuccessAlert/success';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function SignUp() {

    const { errorContent, errorState, successState } = useContext<any>(fileContext);

    return (
        <div className="container">
            <StartImg />

            <UserSide headline='Crie sua conta' inputName={true} btnAction='Registrar' />

            {errorState && <ErrorAlert content={errorContent} />}
            {successState && <SuccessAlert />}
        </div>
    );
}

export default SignUp;