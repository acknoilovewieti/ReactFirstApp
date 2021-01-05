let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "DimViktorych"},
        {id: 6, name: "Valera"}
      ],
    messages: [
            {id: 1, message: "Hi"},
            {id: 1, message: "Hi, how are you"},
            {id: 1, message: "Fine, thanks"},
            {id: 1, message: "Yo"},
            {id: 1, message: "Yo"}
        ]
};

const dialogsPage = (state = initialState, action) => {

    return state;
}

export default dialogsPage;