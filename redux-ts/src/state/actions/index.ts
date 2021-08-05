import {
  SearchRepositoriesAction,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesErrorAction
 } from './searchRepositoriesActions'



export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction