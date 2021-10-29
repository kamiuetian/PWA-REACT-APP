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
        <div>
        <div className='top-nav'>
            <div className='tp-tab'>
                {activeTabs === 'home' ?
                    <div className="text-center"><RiHomeSmile2Fill
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('home')}
                    /><p>Home</p></div> :
                   <div className="text-center"> <RiHomeSmile2Line
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    /><p>Home</p></div>}
            </div>
            <div className='tp-tab'>
                {activeTabs === 'search' ?
                   <div className="text-center"> <RiSearchEyeFill
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('search')}
                    /> <p>Search</p></div>:
                    <div className="text-center"><BiSearchAlt
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('search')}
                    /><p>Search</p></div>}
            </div>
            <div className='tp-tab add-top'>
                {activeTabs === 'add' ?
                    <MdOutlineAddCircle
                        size='150'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('add')}
                    /> :
                    <MdOutlineAddCircle
                        size='150'
                        color='#fff'
                        onClick={() => setActiveTabs('add')}
                    />}
            </div>
            <div className='tp-tab'>
                {activeTabs === 'favourites' ?
                    <div className="text-center"><AiFillHeart
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div> :
                    <div className="text-center"><AiOutlineHeart
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div>}
            </div>
            <div className='tp-tab'>
                {activeTabs === 'account' ?
                    <div className="text-center"><RiUser5Fill
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div> :
                    <div className="text-center"><RiUser5Line
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div>}
            </div>
        </div>
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <div className="text-center"><RiHomeSmile2Fill
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('home')}
                    /><p>Home</p></div> :
                   <div className="text-center"> <RiHomeSmile2Line
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    /><p>Home</p></div>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'search' ?
                   <div className="text-center"> <RiSearchEyeFill
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('search')}
                    /> <p>Search</p></div>:
                    <div className="text-center"><BiSearchAlt
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('search')}
                    /><p>Search</p></div>}
            </div>
            <div className='bn-tab add'>
                {activeTabs === 'add' ?
                    <MdOutlineAddCircle
                        size='150'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('add')}
                    /> :
                    <MdOutlineAddCircle
                        size='150'
                        color='#fff'
                        onClick={() => setActiveTabs('add')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'favourites' ?
                    <div className="text-center"><AiFillHeart
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div> :
                    <div className="text-center"><AiOutlineHeart
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <div className="text-center"><RiUser5Fill
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div> :
                    <div className="text-center"><RiUser5Line
                        size='100'
                        color='#fff'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div>}
            </div>
        </div>
        </div>
    )
}

export default BottomNavBar