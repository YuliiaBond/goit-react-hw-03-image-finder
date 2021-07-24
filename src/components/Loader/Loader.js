import Loader from "react-loader-spinner";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../../style.css';

const loader = () => (
    <Loader
        className="Loader"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
    />
);

export default loader;