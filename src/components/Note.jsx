import {FaPaintRoller, FaRegFileArchive, FaRegTrashAlt,FaTrashRestore, FaUndo} from 'react-icons/fa';
import {useState} from 'react';
import Color from './Color';
import { change } from '../hooks/useNotes';

const Note = ({id, body, color, title, isArchived, isTrash, created}) => {

    const [isColor, setColor] = useState(false);

    
    const toggleColor = () => {
        setColor(prevColor => !prevColor);
    }

    return (
        <div style={{background: color}} className="note">
            <div className="note__title">
                {title}
            </div>
            <div className="note__body">
                {body}
            </div>
            <div className="note__actions">
                <span title="Color" onClick={toggleColor}>
                    <FaPaintRoller/>
                    {isColor && <Color id={id} />}
                </span>
                <span title={isArchived?`Restore`:`Archive`} onClick={()=>{change(id, `isArchived`, !isArchived)}}>
                    {isArchived?<FaUndo/>:<FaRegFileArchive/>}
                </span>
                <span title={isTrash?`Restore`:`Delete`} onClick={() => {change(id, `isTrash`, !isTrash)}}>
                    {isTrash?<FaTrashRestore/>:<FaRegTrashAlt/>}
                </span>
            </div>
        </div>
    )
}

export default Note;