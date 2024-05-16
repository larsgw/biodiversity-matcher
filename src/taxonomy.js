import { Taxon } from './taxon.js'

function parseTaxon (taxon, path) {
    const parsed = new Taxon({
        id: taxon.taxa ? taxon.taxa.toString() : null,
        active: !!taxon.taxa,
        path: path.slice(),
        ...taxon
    })

    parsed.path.push(parsed)

    if (taxon.children) {
        parsed.children = parseTaxa(taxon.children, parsed.path)
    }

    return parsed
}

function parseTaxa (taxa, path) {
    return taxa.map(taxon => parseTaxon(taxon, path))
}

function buildTaxonMap (taxon) {
    const map = {}
    if (taxon.id !== null) {
        map[taxon.id] = taxon
    }
    if (taxon.children) {
        for (const child of taxon.children) {
            Object.assign(map, buildTaxonMap(child))
        }
    }
    return map
}

export class Taxonomy {
    constructor (taxonomy) {
        this.taxaByTree = parseTaxa(taxonomy, [])
        this.taxaById = buildTaxonMap({ id: null, children: this.taxaByTree })
    }

    setActive (id, active) {
        this.taxaById[id].active = active
    }

    getActiveTaxa () {
        const active = []
        for (const id in this.taxaById) {
            if (this.taxaById[id].active) {
                active.push(this.taxaById[id])
            }
        }
        return active
    }

    getCommonParent (a, b) {
        let i = 0
        while (this.taxaById[a].path[i] && this.taxaById[a].path[i] === this.taxaById[b].path[i]) {
            i++
        }

        return this.taxaById[a].path[i - 1]
    }
}
