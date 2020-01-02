/**
 * Action Types
 */
export const Types = {
  REQUEST: 'ADD_TOOL_REQUEST',
  SUCCESS: 'ADD_TOOL_SUCCESS',
  FAILURE: 'ADD_TOOL_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  error: false,
};

export default function addTool(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  addToolRequest: (title, link, description, tags) => ({
    type: Types.REQUEST,
    payload: {
      title,
      link,
      description,
      tags,
    },
  }),
  addToolSuccess: () => ({
    type: Types.SUCCESS,
  }),
  addToolFailure: () => ({
    type: Types.FAILURE,
  }),
};
