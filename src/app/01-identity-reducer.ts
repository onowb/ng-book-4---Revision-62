interface Action {
  type: string;
  payload?: any;
}

interface Reduce<T> {
  (state: T, action: Action): T;
}

let reducer: Reduce<number> = (state: number, action: Action) => {
  return state;
};

console.log(reducer(0, null)); // -> 0
