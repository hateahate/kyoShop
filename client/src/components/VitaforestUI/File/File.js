import './File.css';
import { ReactComponent as Logo } from './file-icon.svg';

const File = ({ title, size, link }) => {
    return (
        <a href={link} className='file'>
            <Logo />
            <div className='file-info'>
                <h6 className='file-title'>{title}</h6>
                <p className='file-size'>{size}mb</p>
            </div>
        </a>
    )
}

export default File;