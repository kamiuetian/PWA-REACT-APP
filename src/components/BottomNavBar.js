import React,{ useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {MdOutlineAddCircle} from 'react-icons/md/index'
import {IoHome, IoCalendarSharp} from 'react-icons/io5'
import {FaUserCircle} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
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
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <div className="text-center"><IoHome
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('home')}
                    /><p className="active-p">Home</p></div> :
                   <div className="text-center"> <IoHome
                        size='100'
                        color='#949494'
                        onClick={() => setActiveTabs('home')}
                    /><p >Home</p></div>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'search' ?
                   <div className="text-center"> <MdLibraryBooks
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('search')}
                    /> <p className="active-p">Search</p></div>:
                    <div className="text-center"><MdLibraryBooks
                        size='100'
                        color='#949494'
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
                        color='#949494'
                        onClick={() => setActiveTabs('add')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'favourites' ?
                    <div className="text-center"><IoCalendarSharp
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('favourites')}
                    /><p className="active-p">Favourite</p></div> :
                    <div className="text-center"><IoCalendarSharp
                        size='100'
                        color='#949494'
                        onClick={() => setActiveTabs('favourites')}
                    /><p>Favourite</p></div>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <div className="text-center"><FaUserCircle
                        size='100'
                        color='#6eb5f5'
                        onClick={() => setActiveTabs('account')}
                    /><p className="active-p">Account</p></div> :
                    <div className="text-center"><FaUserCircle
                        size='100'
                        color='#949494'
                        onClick={() => setActiveTabs('account')}
                    /><p>Account</p></div>}
            </div>
        </div>
        </div>
    )
}

export default BottomNavBar