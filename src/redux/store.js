import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1,  message: 'Hi, how are you', likesCount: 12},
                {id:2,  message: 'it`s my first post', likesCount: 11},
            ],
            newPostText: 'google.com'
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'yes'},
                {id: 4, message: 'no'},
                {id: 5, message: 'hallo'},
            ],
            dialogs: [
                {id: 1, name: 'Helen'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Papa'},
                {id: 5, name: 'Kris'},
                {id: 6, name: 'Boss'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //наблюдатель (паттерн)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        }

}


export default store;
window.store = store;