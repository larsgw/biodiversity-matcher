import * as locales from './locales.js'
import { getProvider } from './providers/index.js'
import { NoQuestionsError } from './providers/provider.js'
import { Taxonomy } from './taxonomy.js'
import { formatMessage, formatUrl, randomSample } from './util.js'

export class Quiz {
    round = null

    constructor (config, settings) {
        this.config = config
        this.settings = settings
        this.provider = getProvider(config.provider.type)
        this.taxonomy = new Taxonomy(config.taxa)
    }

    async loadRound () {
        this.round = null

        const category = randomSample(this.taxonomy.getActiveTaxa())
        const options = {
            ...this.config.provider.defaultOptions,
            ...this.getSettings(category),
            taxon: category
        }

        try {
            const question = await this.provider.getQuestion(category.id, options)
            this.round = { category, question }
        } catch (error) {
            if (error instanceof NoQuestionsError) {
                const taxon = this.taxonomy.taxaById[error.categoryId]
                throw new Error(this.getMessage('error_no_question', this.getTaxonLabel(taxon)))
            } else {
                throw new Error(this.getMessage('error_general', error.message))
            }
        }

        return this.round
    }

    getSettings (taxon) {
        const settings = {}

        if (this.config.settings) {
            for (const setting in this.config.settings) {
                const config = this.config.settings[setting]
                const enabled = taxon.isSettingEnabled(setting) ?? config.defaultEnabled ?? true

                if (enabled) {
                    settings[config.id] = this.settings[setting]
                }
            }
        }

        return settings
    }

    performGuess (guess) {
        if (!this.round || !guess) {
            return
        }

        const { category, question } = this.round

        if (guess === category.id) {
            return { success: true, message: this.getMessage('guess_correct', this.getAnswerLabel(question.taxon, category)) }
        }

        const commonParent = this.taxonomy.getCommonParent(guess, category.id)
        if (commonParent && commonParent.id === guess) {
            return { success: 'partial', message: this.getMessage('guess_imprecise', this.getTaxonLabel(commonParent)) }
        } else if (commonParent) {
            return { success: false, message: this.getMessage('guess_close', this.getTaxonLabel(commonParent)) }
        }

        const ancestor = this.taxonomy.taxaById[guess].path[0]
        return { success: false, message: this.getMessage('guess_incorrect', this.getTaxonLabel(ancestor)) }
    }

    performGiveUp () {
        if (!this.round) {
            return
        }

        const { category, question } = this.round

        return { success: false, message: this.getMessage('guess_giveup', this.getAnswerLabel(question.taxon, category)) }
    }

    getAnswerLabel (taxon, category) {
        if (category.taxa !== taxon.id && !category.taxa.includes(taxon.id)) {
            return this.getMessage('part_of', this.getTaxonLabel(taxon), this.getTaxonLabel(category))
        }

        return this.getTaxonLabel(category)
    }

    getTaxonLabel (taxon) {
        return taxon.getLabel(this.settings.vernacularNameLanguage)
    }

    getLabel (labels) {
        const language = this.settings.language
        const backup = this.config.metadata.languages[0]
        return labels[language] || language[backup]
    }

    getMetadata () {
        return {
            title: this.getLabel(this.config.metadata.title),
            description: this.getLabel(this.config.metadata.description)
        }
    }

    getMessage (message, ...args) {
        const locale = locales[this.settings.language] || locales.en
        return formatMessage(locale[message] || message, ...args)
    }

    getUrl (withSettings) {
        const options = {}

        if (withSettings) {
            options.l = this.settings.language
            options.nl = this.settings.vernacularNameLanguage

            const activeTaxa = this.taxonomy.getActiveTaxa()
            const allTaxa = Object.keys(this.taxonomy.taxaById)
            if (allTaxa.length !== activeTaxa.length) {
                options.taxon = activeTaxa.map(taxon => taxon.id).join('|')
            }

            if (this.config.settings) {
                for (const setting in this.config.settings) {
                    if (setting in this.settings) {
                        options[setting] = this.settings[setting]
                    }
                }
            }
        }

        return formatUrl(window.location, options)
    }
}
