import './header.scss'
import { Link } from 'react-router-dom'

function Header({ page, goTo, link }) {

    return (
        <div className='header'>
            <p className='header__name'>HRnet</p>
            <p className='header__page'>{page}</p>
            <Link to={link}>
                <p className='header__link'>{goTo}</p>
            </Link>
        </div>
    )
}

export default Header