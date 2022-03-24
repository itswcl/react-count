# react-count

### `useReducer`
    - useReducer hook
    - counter function "+", "-" and "reset"
    - state declaration
      - const [state, dispatch] = useReducer(reducer, {count: 0})
    - reducer function
```js
const reducer = (state, action) => {
    switch (action.type) {
        case XXXX:
            return XXX;
        default:
            return state
    }
}
```
    - run dispatch on click
```js
() => dispatch({type: XXX})
```

### `useEffect`
