import {useState, useRef} from 'react';
import {FaPaintRoller, FaSave, FaEraser} from 'react-icons/fa';   
import Color from './Color';
import {addNote} from '../utils';
import { useCurrentContext } from '../contexts/current';
import { useToggle } from '../hooks/useToggle';

const NewNote = () => {

    const [isNewNoteActive, toggleIsNewNoteActive, forceIsNewNoteActive] = useToggle();
    const [isColor, toggleIsColor, forceIsColor] = useToggle();
    const [color, setColor] = useState(`white`);
    const {current} = useCurrentContext();
    const titleRef = useRef();
    const bodyRef = useRef();

    const submit = () => {
        addNote(bodyRef.current.value, color, titleRef.current.value);
        clearNote();
        forceIsNewNoteActive(false);
    }

    const clearNote = () => {
        titleRef.current.value = "";
        bodyRef.current.value = "";
        forceIsColor(false);
        setColor(`white`);
    }

    return(
        current === 'current'?
        <div className="newNote" style={{background: isNewNoteActive?color:`white`}}>
            {!isNewNoteActive && <div onClick={() => {forceIsNewNoteActive(true)}}  className="NewNote__small">
                <div>Take a note ...</div>
            </div>}
            {isNewNoteActive && <div className="NewNote__expanded">
                <div>
                    <input ref={titleRef} type="text" placeholder="Title"/>
                </div>
                <div>
                    <textarea ref={bodyRef} placeholder="Take a note ..."/>
                </div>
                <div className="newNote__action">
                    <span title="Color" onClick={toggleIsColor}>
                        <FaPaintRoller/>
                        {isColor && <Color setColor={setColor}/>}
                    </span>
                    <span title="Save" onClick={submit}>
                        <FaSave/>
                    </span>
                    <span title="Clear" onClick={clearNote}>
                        <FaEraser/>
                    </span>
                    <span style={{flexGrow: 2, textAlign: `right`}}onClick={() => {forceIsColor(false);forceIsNewNoteActive(false)}}>
                        Close
                    </span>
                </div>
            </div>}
        </div>:null
    )
}

export default NewNote;