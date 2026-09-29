import './Button.css';import {Link} from 'react-router-dom';import {FaArrowRight} from 'react-icons/fa';
export default function Button({to,children,secondary=false,className=''}){return <Link className={`btn ${secondary?'btn-secondary':'btn-primary'} ${className}`} to={to}>{children}<FaArrowRight/></Link>}
