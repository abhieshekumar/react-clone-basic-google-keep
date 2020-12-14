import NewNote from '../NewNote';
import Notes from '../Notes';

const Main = ({current}) => {
    return <main className="main">
        <NewNote current={current}/>
        <Notes current={current}/>
    </main>
}

export default Main;