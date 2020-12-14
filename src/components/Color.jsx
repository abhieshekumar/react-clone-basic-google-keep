import {colors} from '../data/notes';
import { change } from '../hooks/useNotes';

const Color = ({id=null, setColor=null}) => {
    return(
        <div className="color">
            {
                colors.map((color, index) => 
                    <div onClick={() => {!!id?change(id, `color`, color.code):setColor(color.code)}} title={color.name} key={index} className="color__container" style={{background: color.code, border: `solid 2px rgba(0,0,0,0.4)`}}></div>
                )
            }
        </div>
    )
}

export default Color;