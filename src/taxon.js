function getChildTaxa (children) {
  const taxa = []
  for (const child of children) {
    taxa.push(...child.taxa)
    taxa.push(...getChildTaxa(child.children))
  }
  return taxa
}

export class Taxon {
  constructor (taxon) {
    this.id = taxon.id
    this.scientificName = taxon.scientificName
    this.vernacularName = taxon.vernacularName || {}
    this.taxonRank = taxon.taxonRank
    this.taxa = taxon.taxa ? [].concat(taxon.taxa) : []
    this.children = taxon.children || []
    this.path = taxon.path || []
    this.active = taxon.active
  }

  getLabel (locale) {
    let label = ''

    if (this.scientificName) {
      if (['genus', 'subgenus', 'species', 'subspecies', 'variety'].includes(this.taxonRank)) {
        label += `<i>${this.scientificName}</i>`
      } else if (['group', 'complex'].includes(this.taxonRank)) {
        const [name, type = ''] = this.scientificName.split(/(?=-)/)
        label += `<i>${name}</i>${type}`
      } else {
        label += this.scientificName
      }
    }

    if (this.vernacularName[locale] && this.scientificName !== this.vernacularName[locale]) {
      label += label ? ` (${this.vernacularName[locale]})` : this.vernacularName[locale]
    }

    return label
  }

  getChildTaxa () {
    return getChildTaxa(this.children)
  }

  hasActiveChildTaxa () {
    return this.children.length && this.children.some(child => child.active || child.hasActiveChildTaxa())
  }
}
