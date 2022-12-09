import './header.scss'
import { Link } from 'react-router-dom'

/**
 * 
 * @param {string} page : name of the actual page
 * @param {string} goTo : string for the link of the other page
 * @param {string} link : link for the other page
 * @returns Header with dynamic name of page and link to the other one
 */

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