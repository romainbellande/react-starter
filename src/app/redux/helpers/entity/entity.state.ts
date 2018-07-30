export interface IEntityState<T> {
  entities: T[];
  ids: number[];
  selectedId: number;
}

export const defaultInitialState = {
  entities: null,
  ids: null,
  selectedId: null,
};
