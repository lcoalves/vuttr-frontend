import { toastr } from 'react-redux-toastr';

import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '../../services/api';
import {
  Creators as AddToolActions,
  Types as AddToolTypes,
} from '../ducks/addTool';
import { Creators as ToolActions, Types as ToolTypes } from '../ducks/tool';

function* tool() {
  try {
    yield call(api.get, '/tools');

    yield put(ToolActions.signupSuccess());
  } catch (err) {
    toastr.error('Falha!', 'Houve um erro ao listar as ferramentas.');
    yield put(ToolActions.signupFailure());
  }
}

function* addTool(action) {
  try {
    const { name, link, description, tags } = action.payload;

    yield call(api.post, '/tools', {
      name,
      link,
      description,
      tags,
    });

    yield put(AddToolActions.signupSuccess());
    toastr.success('Success!', 'Tool has been created.');
  } catch (err) {
    toastr.error('Fail!', 'Try create again.');
    yield put(AddToolActions.signupFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ToolTypes.REQUEST, tool)]);
  yield all([takeLatest(AddToolTypes.REQUEST, addTool)]);
}
