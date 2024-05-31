import { App } from './app.js'
import { Quiz } from './quiz.js'
import quizzes from '../data/index.js'

async function main () {
    const params = new URLSearchParams(window.location.search)

    setTimeout(function () {
        if (document.body.classList.contains('loading')) {
            console.warn('Loading took over 50 ms')
            document.body.classList.remove('loading')
        }
    }, 100)

    if (params.has('quiz')) {
        const id = params.get('quiz')
        const quiz = new Quiz(id, quizzes[id], {
            language: params.get('l') || 'en',
            vernacularNameLanguage: params.get('nl') || 'en'
            // TODO season/life stage
        })

        if (params.has('taxon')) {
            const taxa = params.get('taxon').split('|')
            for (const id in quiz.taxonomy.taxaById) {
                quiz.taxonomy.setActive(id, taxa.includes(id))
            }
        }

        const app = new App(quiz)
        app.loadQuestion()
    }
}

window.addEventListener('load', main)
