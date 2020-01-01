import { toastr } from 'react-redux-toastr';

import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '../../services/api';
import {
  Creators as AddToolActions,
  Types as AddToolTypes,
} from '../ducks/addTool';
import { Creators as ToolActions, Types as ToolTypes } from '../ducks/tool';

function* tool(action) {
  try {
    const { tag } = action.payload;

    const response = yield call(api.get, `/tools?tag=${tag}`);

    yield put(ToolActions.toolSuccess(response.data.data));
  } catch (err) {
    toastr.error('Falha!', 'Houve um erro ao listar as ferramentas.');
    yield put(ToolActions.toolFailure());
  }
}

function* addTool(action) {
  try {
    const { title, link, description, tags } = action.payload;

    yield call(api.post, '/tools', {
      title,
      link,
      description,
      tags,
    });

    yield put(AddToolActions.addToolSuccess());
    toastr.success('Success!', 'Tool has been created.');
    window.location.reload();
  } catch (err) {
    toastr.error('Fail!', 'Try again.');
    yield put(AddToolActions.addToolFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ToolTypes.REQUEST, tool)]);
  yield all([takeLatest(AddToolTypes.REQUEST, addTool)]);
}
