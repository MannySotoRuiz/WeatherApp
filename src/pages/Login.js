import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    return (
        <div id="login">
            <h1>THIS IS LOGIN PAGE</h1>
            <button onClick={() => {
                navigate("/accountsettings");
            }}>Login</button>
        </div>
    );
};

export default Login;