import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "DimViktorych"},
        {id: 6, name: "Valera"}
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 1, message: "Hi, how are you"},
        {id: 1, message: "Fine, thanks"},
        {id: 1, message: "Yo"},
        {id: 1, message: "Yo"}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;