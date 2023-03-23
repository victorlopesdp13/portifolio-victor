import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: "linkedin", href:"https://www.linkedin.com/in/victor-lopes-04a837116/", icon: <FaLinkedinIn/> },
    {name: "github", href:"https://github.com/victorlopesdp13", icon: <FaGithub/> },
    
];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) =>(
           <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
           </a> 
        ))}
    </section> ;
};

export default SocialNetworks