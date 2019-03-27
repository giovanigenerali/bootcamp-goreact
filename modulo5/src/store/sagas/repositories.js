import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creatores as RepositoriesActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(api.get, "/users/giovanigenerali/repos");
    yield put(RepositoriesActions.getSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.getFailure());
  }
}
