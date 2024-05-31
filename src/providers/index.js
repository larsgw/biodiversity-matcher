import { GbifProvider } from './gbif.js'
import { iNaturalistProvider } from './inaturalist.js'
import { WikimediaProvider } from './wikimedia.js'
import { Provider } from './provider.js'

export function getProvider (type) {
  switch (type) {
    case 'gbif': return new GbifProvider()
    case 'inaturalist': return new iNaturalistProvider()
    case 'wikimedia': return new WikimediaProvider()
  }

  return new Provider()
}
