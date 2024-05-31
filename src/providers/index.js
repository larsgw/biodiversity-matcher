import { GbifProvider } from './gbif.js'
import { iNaturalistProvider } from './inaturalist.js'
import { Provider } from './provider.js'

export function getProvider (type) {
  switch (type) {
    case 'gbif': return new GbifProvider()
    case 'inaturalist': return new iNaturalistProvider()
  }

  return new Provider()
}
