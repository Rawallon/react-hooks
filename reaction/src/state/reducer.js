import { NEW_MESSAGE, REACTION_OBJECTS, SET_USERNAME } from './types';
export const initialState = {
  reactionsMap: {},
  messages: [],
  username: 'anonymous',
};

const REACTIONS_TYPES = REACTION_OBJECTS.map(
  (REACTION_OBJECT) => REACTION_OBJECT.type,
);

const reducer = (state, action) => {
  if (REACTIONS_TYPES.includes(action.type)) {
    let reactionsMap;
    const { messageId } = action.item;

    //Assign variable to older reactions to the message
    const messageReactions = state.reactionsMap[messageId];
    //Checks if there has been a reaction to that message
    if (messageReactions)
      //If it has, it recreates the state array adding in our recieved emoji
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [...messageReactions, action.type],
      };
    //If it doesn't we have to initialize the array
    else
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [action.item],
      };

    return { ...state, reactionsMap };
  }

  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.item] };
    case SET_USERNAME:
      return { ...state, username: action.username };

    default:
      return state;
  }
};
export default reducer;
