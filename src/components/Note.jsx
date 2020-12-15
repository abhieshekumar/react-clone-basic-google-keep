import {FaPaintRoller, FaRegFileArchive, FaRegTrashAlt,FaTrashRestore, FaUndo} from 'react-icons/fa';
import Color from './Color';
import { change } from '../utils';
import { useToggle } from '../hooks/useToggle';

const Note = ({id, body, color, title, isArchived, isTrash, created}) => {

    const [isColor, toggleIsColor, forceIsColor] = useToggle(false);

    return (
        <div style={{background: color}} className="note">
            <div className="note__title">
                {title}
            </div>
            <div className="note__body">
                {body}
            </div>
            <div className="note__actions">
                <span title="Color" onClick={toggleIsColor}>
                    <FaPaintRoller/>
                    {isColor && <Color id={id} />}
                </span>
                <span title={isArchived?`Restore`:`Archive`} onClick={()=>{forceIsColor(false);change(id, `isArchived`, !isArchived)}}>
                    {isArchived?<FaUndo/>:<FaRegFileArchive/>}
                </span>
                <span title={isTrash?`Restore`:`Delete`} onClick={() => {forceIsColor(false);change(id, `isTrash`, !isTrash)}}>
                    {isTrash?<FaTrashRestore/>:<FaRegTrashAlt/>}
                </span>
            </div>
        </div>
    )
}

export default Note;