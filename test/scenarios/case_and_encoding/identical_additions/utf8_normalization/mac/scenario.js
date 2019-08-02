/* @flow */

/*:: import type { Scenario } from '../../../..' */

//const save = 'Partages reçus/'

module.exports = ({
  side: 'remote',
  init: [{ path: 'Partages reçus/', ino: 1 }],
  actions: [{ type: 'mkdir', path: 'Partages reçus' }],
  expected: {
    tree: ['Partages reçus-conflict-.../', 'Partages reçus/'],
    remoteTrash: []
  }
} /*: Scenario */)
