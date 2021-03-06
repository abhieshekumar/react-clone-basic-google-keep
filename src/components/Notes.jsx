import { useCurrentContext } from '../contexts/current';
import { useNotes } from '../hooks/useNotes';
import Note from './Note';

const Notes = () => {

    const [notes] = useNotes();
    const {current} = useCurrentContext();

    let arr = [];

    if(current === 'current'){
        arr = notes.filter(note => note.isTrash === false && note.isArchived === false);
    } else if(current === 'archived') {
        arr = notes.filter(note => note.isTrash === false && note.isArchived === true);
    } else if(current === 'trash') {
        arr = notes.filter(note => note.isTrash === true);
    }


    return (
        <div className="notes">
            {arr.map(note => <Note key={note.id} {...note}/>)}
        </div>
    )
}

export default Notes;