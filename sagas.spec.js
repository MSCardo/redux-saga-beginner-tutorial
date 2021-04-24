import test from 'tape';

import { incrementAsync, delay } from '../sagas';
import { put, call } from 'redux-saga/effects';

test('incrementAsync Saga Test', (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync should return a Promise that will resolve after 1 second'
  );

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync Saga must dispatch na INCREMENT action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  );

  assert.end();
});
