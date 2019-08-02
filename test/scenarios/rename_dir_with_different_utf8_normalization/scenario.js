/* @flow */

/*:: import type { Scenario } from '..' */

//const save = 'Partages reçus/'

module.exports = ({
  side: 'remote',
  init: [{ path: 'Partages reçus/', ino: 1 }],
  actions: [{ type: 'mv', src: 'Partages reçus', dst: 'Partages reçus' }],
  expected: {
    tree: ['Partages reçus/'],
    remoteTrash: []
  }
} /*: Scenario */)
