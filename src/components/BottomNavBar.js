import React,{ useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import {MdOutlineAddCircle} from 'react-icons/md/index'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line } from 'react-icons/ri'

const BottomNavBar = props => {
    const history = useHistory()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                history.push('/')
                break;
            case 'search':
                history.push('/search')
                break;
            case 'favourites':
                history.push('/favourites')
                break;
                case 'add':
                    history.push('/add')
                    break;
            case 'account':
                history.push('/account')
                break;
            default:
                history.push('/')
                break;
        }
    }, [activeTabs, history])

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <div className="text-center"><RiHomeSmile2Fill
                        size='40'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('home')}
                    /><p>Home</p></div> :
                   <div className="text-center"> <RiHomeSmile2Line
                        size='40'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    /><p>Home</p></div>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'search' ?
                   <div className="text-center"> <RiSearchEyeFill
                        size='40'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('search')}
                    /> <p>Search</p></div>:
                    <div className="text-center"><BiSearchAlt
                        size='40'
                        color='#000'
                        onClick={() => setActiveTabs('search')}
                    /><p>Search</p></div>}
            </div>
            <div className='bn-tab add'>
                {activeTabs === 'add' ?
                    <MdOutlineAddCircle
                        size='70'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('add')}
                    /> :
                    <MdOutlineAddCircle
                        size='70'
                        color='#000'
                        onClick={() => setActiveTabs('add')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'favourites' ?
                    <div className="text-center"><AiFillHeart
                        size='40'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div> :
                    <div className="text-center"><AiOutlineHeart
                        size='40'
                        color='#000'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <div className="text-center"><RiUser5Fill
                        size='40'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div> :
                    <div className="text-center"><RiUser5Line
                        size='40'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div>}
            </div>
        </div>
    )
}

export default BottomNavBar