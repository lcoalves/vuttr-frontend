/**
 * Action Types
 */
export const Types = {
  REQUEST: 'TOOL_REQUEST',
  SUCCESS: 'TOOL_SUCCESS',
  FAILURE: 'TOOL_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  error: false,
  data: {},
};

export default function tool(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload.data,
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
  toolRequest: (cep, index) => ({
    type: Types.REQUEST,
    payload: {
      cep,
      index,
    },
  }),
  toolSuccess: data => ({
    type: Types.SUCCESS,
    payload: {
      data,
    },
  }),
  toolFailure: () => ({
    type: Types.FAILURE,
  }),
};
