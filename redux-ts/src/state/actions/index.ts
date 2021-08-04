import {
  SearchRepositoriesAction,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesErrorAction
 } from './searchRepositories'



export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction