const clone = require('clone')

module.exports = reducer

function reducer (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'ADD_NEW_ZONE_TO_ZONES_LIST':

      const zone = action.payload

      newState.zones[zone.id] = zone

      return newState

    case 'ADD_MULTIPLE_NEW_ZONE_TO_ZONES_LIST':
        for (var i = 0; i < action.payload.length; i++) {
          newState.zones[action.payload[i].id] = action.payload[i]
          console.log(action.payload[i].id);
        }

      //state.zones should add the payload
    return newState
  }
}
