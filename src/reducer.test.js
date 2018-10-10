import reducer from './reducer';

test('reducer increment', () => {
    const initialState = { count: 0 }
    const action = { type: 'INCREMENT', payload: 10 }
    const state = reducer(initialState, action);
    expect(state).toEqual({ count: 10 })
})

test('reducer decrement', () => {
    const initialState = { count: 10 }
    const action = { type: 'DECREMENT', payload: 10 }
    const state = reducer(initialState, action);
    expect(state).toEqual({ count: 0 });
})