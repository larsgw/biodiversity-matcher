import { GbifProvider } from './gbif.js'
import { Provider } from './provider.js'

export function getProvider (type) {
  switch (type) {
    case 'gbif': return new GbifProvider()
  }

  return new Provider()
}
