import {useState, useRef} from 'react';
import {FaPaintRoller, FaSave, FaEraser} from 'react-icons/fa';   
import Color from './Color';
import {addNote} from '../hooks/useNotes';

const NewNote = ({current}) => {

    const [isActive, setIsActive] = useState(false);
    const [isColor, setColor] = useState(`white`);
    const [disClr, setDis] =useState(false);

    const titleRef = useRef();
    const bodyRef = useRef();

    const submit = () => {
        addNote(bodyRef.current.value, isColor, titleRef.current.value);
        setIsActive(false);
        //addNote(bodyRef.current.value, color, titleRef.current.value)
    }

    const toggle = () => {
        setIsActive((prevState) => {
            return !prevState;
        })
    }

    const toggleColor = () => {
        setDis(prevColor => !prevColor);
    }

    const clearNote = () => {
        titleRef.current.value = "";
        bodyRef.current.value = "";
        setColor(`white`);
    }

    return(
        current === 'current'?
        <div className="newNote" style={{background: isActive?isColor:`white`}}>
            {!isActive && <div onClick={toggle}  className="NewNote__small">
                <div>Take a note ...</div>
            </div>}
            {isActive && <div className="NewNote__expanded">
                <div>
                    <input ref={titleRef} type="text" placeholder="Title"/>
                </div>
                <div>
                    <textarea ref={bodyRef} placeholder="Take a note ..."/>
                </div>
                <div className="newNote__action">
                    <span title="Color" onClick={toggleColor}>
                        <FaPaintRoller/>
                        {disClr && <Color setColor={setColor}/>}
                    </span>
                    <span title="Save" onClick={submit}>
                        <FaSave/>
                    </span>
                    <span title="Clear" onClick={clearNote}>
                        <FaEraser/>
                    </span>
                    <span style={{flexGrow: 2, textAlign: `right`}}onClick={toggle}>
                        Close
                    </span>
                </div>
            </div>}
        </div>:null
    )
}

export default NewNote;