import { increment, decrement } from './actions';

test('Action: increment', () => {
    const incr = increment(10);
    expect(incr).toEqual({
        type: 'INCREMENT',
        payload: 10
    })
})

test('Action: decrement', () => {
    const decr = decrement(20);
    expect(decr).toEqual({
        type: 'DECREMENT',
        payload: 20
    })
})