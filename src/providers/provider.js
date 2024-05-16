import { randomSample } from '../util.js'

export class NoQuestionsError extends Error {
    constructor (message, category) {
        super(message)
        this.categoryId = category
    }
}

export class Provider {
    cache = {}

    async getQuestion (category, options) {
        if (!this.hasCachedQuestions(category)) {
            const success = await this.fetchQuestions(category, options)
            if (!success) {
                throw new NoQuestionsError('No questions available for this taxon', category)
            }
        }

        const cachedQuestions = this.getCachedQuestions(category)
        const question = randomSample(cachedQuestions)
        cachedQuestions.splice(cachedQuestions.indexOf(question), 1)

        return question
    }

    async fetchQuestions (category, options) {
        return false
    }

    getCachedQuestions (category) {
        return this.cache[category]
    }

    hasCachedQuestions (category) {
        return this.cache.hasOwnProperty(category) && this.cache[category].length > 0
    }
}
