/**
 * Action Types
 */
export const Types = {
  REQUEST: 'REMOVE_TOOL_REQUEST',
  SUCCESS: 'REMOVE_TOOL_SUCCESS',
  FAILURE: 'REMOVE_TOOL_FAILURE',
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
  removeToolRequest: id => ({
    type: Types.REQUEST,
    payload: {
      id,
    },
  }),
  removeToolSuccess: () => ({
    type: Types.SUCCESS,
  }),
  removeToolFailure: () => ({
    type: Types.FAILURE,
  }),
};
