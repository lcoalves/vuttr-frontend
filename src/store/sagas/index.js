import { toastr } from 'react-redux-toastr';

import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '../../services/api';
import {
  Creators as AddToolActions,
  Types as AddToolTypes,
} from '../ducks/addTool';
import {
  Creators as RemoveToolActions,
  Types as RemoveToolTypes,
} from '../ducks/removeTool';
import { Creators as ToolActions, Types as ToolTypes } from '../ducks/tool';

function* tool(action) {
  try {
    let response;
    const { searchTagsOnly, tag } = action.payload;

    if (searchTagsOnly) {
      response = yield call(api.get, `/tools?search_tags_only=true&tag=${tag}`);
    } else {
      response = yield call(
        api.get,
        `/tools?search_tags_only=false&tag=${tag}`
      );
    }

    yield put(ToolActions.toolSuccess(response.data.data));
  } catch (err) {
    toastr.error('Fails!', 'There was an error listing as tools.');
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

    const toastrConfirmOptions = {
      onOk: () => window.location.reload(),
      disableCancel: true,
    };
    toastr.confirm('The tool was created successfully.', toastrConfirmOptions);
  } catch (err) {
    toastr.error('Fails!', 'Try again.');
    yield put(AddToolActions.addToolFailure());
  }
}

function* removeTool(action) {
  try {
    const { id } = action.payload;

    yield call(api.delete, `/tools/${id}`);

    yield put(RemoveToolActions.removeToolSuccess());

    const toastrConfirmOptions = {
      onOk: () => window.location.reload(),
      disableCancel: true,
    };
    toastr.confirm('The tool was removed successfully.', toastrConfirmOptions);
  } catch (err) {
    yield put(RemoveToolActions.removeToolFailure());
    toastr.error('Fails!', 'Try again.');
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ToolTypes.REQUEST, tool)]);
  yield all([takeLatest(AddToolTypes.REQUEST, addTool)]);
  yield all([takeLatest(RemoveToolTypes.REQUEST, removeTool)]);
}
