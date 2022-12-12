import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props) {
    let dialogs = [
        {id: 1, name: 'Helen'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Papa'},
        {id: 5, name: 'Kris'},
        {id: 6, name: 'Boss'}
    ]

    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'yes'},
        {id: 4, message: 'no'},
        {id: 5, message: 'hallo'},
    ]
    let dialogElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;