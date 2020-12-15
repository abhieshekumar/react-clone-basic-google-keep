import {FaRegLightbulb, FaRegTrashAlt, FaRegFileArchive} from 'react-icons/fa';
import { useCurrentContext } from '../../contexts/current';

const Sidebar = () => {

    const {current, setCurrent} = useCurrentContext();
    
    return (
        <nav className="sidebar">            
            <div className={current===`current`?`sidebar--active`:undefined} onClick={()=>{setCurrent(`current`)}}>
                <span>
                    <FaRegLightbulb/>
                </span>
                <span>
                    Notes
                </span>
            </div>
            <div className={current===`archived`?`sidebar--active`:undefined} onClick={() => {setCurrent(`archived`)}}>
                <span>
                    <FaRegFileArchive/>
                </span>
                <span>
                    Archived
                </span>
            </div>
            <div className={current===`trash`?`sidebar--active`:undefined}onClick={() => {setCurrent(`trash`)}}>
                <span>
                    <FaRegTrashAlt/>
                </span>
                <span>
                    Trash
                </span>
            </div>
        </nav>    
    )
        
}

export default Sidebar;