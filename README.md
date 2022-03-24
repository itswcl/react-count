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
- useEffect with local storage use
- keep update local storage by state, only run if state.count updated
```js
const key = 'test'
useEffect(() => {
    localStorage.setItem(KEY, state.count)
}, [state.count])
```
- bring the element from local storage and update the state
```js
useEffect(() => {
    // get the element out by localStorage.getItem
    const storedCount = localStorage.getItem(KEY);
    // update to integer because the store item is string
    state.count = Number(storedCount)
    // update the state of count by calling dispatch from useReducer
    dispatch({type: ACTION.STORED})
}, [])
```
