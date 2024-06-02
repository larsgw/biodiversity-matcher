import { App } from './app.js'
import { Quiz } from './quiz.js'

export function initialize (config) {
    setTimeout(function () {
        if (document.body.classList.contains('loading')) {
            console.warn('Loading took over 50 ms')
            document.body.classList.remove('loading')
        }
    }, 100)

    const params = new URLSearchParams(window.location.search)
    const quiz = new Quiz(config, {
        language: params.get('l') || 'en',
        vernacularNameLanguage: params.get('nl') || 'en'
    })

    if (params.has('taxon')) {
        const taxa = params.get('taxon').split('|')
        for (const id in quiz.taxonomy.taxaById) {
            quiz.taxonomy.setActive(id, taxa.includes(id))
        }
    }

    if (quiz.config.settings) {
        for (const setting in quiz.config.settings) {
            if (params.has(setting)) {
                quiz.settings[setting] = params.get(setting)
            }
        }
    }

    const app = new App(quiz)
    app.loadQuestion()
}
