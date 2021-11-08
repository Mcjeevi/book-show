const ticketListReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_TICKETLIST':
            return [...state, action.payload];

        default:
            return state;
    }
}