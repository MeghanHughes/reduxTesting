const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('./reducer')

test('add new zone name to list', t => {
  const state = {
    zones: {
      1: { id: 1, name: 'Patio' },
      2: { id: 2, name: 'Back of house (kitchen)' }
    }
  }
  freeze(state)

  const action = {
    type: 'ADD_NEW_ZONE_TO_ZONES_LIST',
    payload: {
      id: 5,
      name: 'Front of house (deck)'
    }
  }

  const expectedState = {
    zones: {
      1: { id: 1, name: 'Patio' },
      2: { id: 2, name: 'Back of house (kitchen)' },
      5: { id: 5, name: 'Front of house (deck)' }
    }
  }

  const newState = reducer(state, action)

  t.deepEqual(newState, expectedState, 'should add new zone to zone list')
  t.end()
})


test('adding multiple zones to list at one time', t => {

  const state = {
    zones: {
      1: { id: 1, name: 'Patio' },
      2: { id: 2, name: 'Back of house (kitchen)' },
      3: { id: 3, name: 'Front of house (deck)' }
    }
  }

  const action = {
    type: 'ADD_MULTIPLE_NEW_ZONE_TO_ZONES_LIST',
    payload: [
      { id: 4,
        name: 'Stairs to dell (top)'
      },
      { id: 5,
      name: 'Stairs to dell (bottom)'
      }
    ]
  }

  const expectedState = {
    zones: {
      1: { id: 1, name: 'Patio' },
      2: { id: 2, name: 'Back of house (kitchen)' },
      3: { id: 3, name: 'Front of house (deck)' },
      4: { id: 4, name: 'Stairs to dell (top)' },
      5: { id: 5, name: 'Stairs to dell (bottom)' }
    }
  }

  const newState = reducer(state, action)

  t.deepEqual(newState, expectedState, 'can add multiple new zones')

  t.end()
})
