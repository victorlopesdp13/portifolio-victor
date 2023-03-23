import Avatar from "../img/foto.png"

import "../styles/components/sidebar.sass"
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Victor Lopes" />
        <p className="title">Desenvolvedor Front-End Junior</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="https://drive.google.com/file/d/1BE9YQcxndnTLOH1tVMghDIuhmauTOWtR/view?usp=sharing" target="_blank" className="btn"> Download curriculo</a>
    </aside>;
}

export default Sidebar