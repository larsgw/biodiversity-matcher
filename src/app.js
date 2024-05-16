import * as locales from './locales.js'
import { NoQuestionsError } from './providers/provider.js'
import { Quiz } from './quiz.js'

export class App {
    constructor (quiz) {
        this.quiz = quiz

        this.displayInterface()

        this.displayQuizInfo()
        document.body.classList.remove('loading')

        this.displaySettings()
        this.displayAnswerOptions()

        document.getElementById('quiz-options').addEventListener('click', () => {
            document.getElementById('dialog-quiz-options').showModal()
        })
        document.getElementById('dialog-quiz-options').addEventListener('close', () => {
            this.displayAnswerOptions()
        })
        document.getElementById('round-next').addEventListener('click', () => {
            this.loadQuestion()
        })
        document.getElementById('round-giveup').addEventListener('click', () => {
            this.displayResult(this.quiz.performGiveUp())
        })
        document.getElementById('round-output').addEventListener('click', () => {
            this.hideResult()
        })
        document.getElementById('quiz-share').addEventListener('click', () => {
            this.shareUrl(this.quiz.getUrl())
        })
        document.getElementById('quiz-share-settings').addEventListener('click', () => {
            this.shareUrl(this.quiz.getUrl(true))
        })
        document.getElementById('options-answers-select').addEventListener('click', () => {
            document.querySelectorAll('#options-answers input').forEach(($input) => {
                $input.click()
            })
        })
        document.getElementById('options-answers-deselect').addEventListener('click', () => {
            document.querySelectorAll('#options-answers input').forEach(($input) => {
                $input.click()
            })
        })
    }

    displayInterface () {
        document.querySelectorAll('[data-l10n]').forEach(($label) => {
            $label.textContent = this.quiz.getMessage($label.dataset.l10n)
        })
    }

    displayQuizInfo () {
        const { title, description } = this.quiz.getMetadata()

        const $title = document.querySelector('title')
        $title.textContent = title + ' - Biodiversity Matcher'
        const $description = document.querySelector('meta[name=description]')
        $description.textContent = description

        document.querySelectorAll('.quiz-title').forEach(($title) => { $title.textContent = title })
        document.querySelectorAll('.quiz-description').forEach(($description) => { $description.textContent = description })

        document.querySelector('html').setAttribute('lang', this.quiz.settings.language)
    }

    displaySettings () {
        this.displayAnswerSettings()

        // TODO season/life stage

        const optionLanguage = document.getElementById('options-language')
        optionLanguage.value = this.quiz.settings.language
        optionLanguage.addEventListener('change', () => {
            this.quiz.settings.language = optionLanguage.value
            this.displayInterface()
            this.displayQuizInfo()
        })

        const optionLanguageVernacularName = document.getElementById('options-language-vernacular-names')
        optionLanguageVernacularName.value = this.quiz.settings.vernacularNameLanguage
        optionLanguageVernacularName.addEventListener('change', () => {
            this.quiz.settings.vernacularNameLanguage = optionLanguageVernacularName.value
        })
    }

    displayAnswerSettings (taxa, $container) {
        if (!taxa) {
            taxa = this.quiz.taxonomy.taxaByTree
            $container = document.getElementById('options-answers')

            while ($container.firstChild) {
                $container.removeChild($container.firstChild)
            }
        }

        for (const taxon of taxa) {
            const $div = document.createElement('div')
            $div.classList.add('answers-option')
            $container.append($div)

            if (taxon.id) {
                const id = `options-answer-${taxon.id}`
                const $label = document.createElement('label')
                $label.innerHTML = this.quiz.getTaxonLabel(taxon)
                $label.setAttribute('for', id)
                $div.append($label)
                const $input = document.createElement('input')
                $input.setAttribute('id', id)
                $input.setAttribute('type', 'checkbox')
                $input.setAttribute('name', 'options-answer')
                $input.setAttribute('value', taxon.id)
                $input.checked = taxon.active
                $div.append($input)

                // Event listeners
                $input.addEventListener('change', () => {
                    this.quiz.taxonomy.setActive(taxon.id, $input.checked)
                })
            } else {
                const $span = document.createElement('span')
                $span.innerHTML = this.quiz.getTaxonLabel(taxon)
                $div.append($span)
            }

            if (taxon.children) {
                const $div = document.createElement('div')
                $div.classList.add('answers-options-group')
                $container.append($div)

                this.displayAnswerSettings(taxon.children, $div)
            }
        }
    }

    displayAnswerOptions (taxa, $container) {
        if (!taxa) {
            taxa = this.quiz.taxonomy.taxaByTree
            $container = document.getElementById('answers-options')

            while ($container.firstChild) {
                $container.removeChild($container.firstChild)
            }
        }

        for (const taxon of taxa) {
            if (!taxon.active && !taxon.hasActiveChildTaxa()) {
                continue
            }

            const $div = document.createElement('div')
            $div.classList.add('answers-option')
            $container.append($div)

            if (taxon.id && taxon.active) {
                const id = `answer-${taxon.id}`
                const $label = document.createElement('label')
                $label.innerHTML = this.quiz.getTaxonLabel(taxon)
                $label.setAttribute('for', id)
                $div.append($label)
                const $input = document.createElement('input')
                $input.setAttribute('id', id)
                $input.setAttribute('type', 'radio')
                $input.setAttribute('name', 'answer')
                $input.setAttribute('value', taxon.id)
                $div.append($input)

                // Event listeners
                $input.addEventListener('change', () => {
                    const selected = document.querySelector('.answers-option.selected')
                    if (selected) {
                        selected.classList.remove('selected')
                    }
                    $input.parentElement.classList.add('selected')
                })
                $input.addEventListener('click', () => {
                    if ($input.parentElement.classList.contains('selected')) {
                        const guess = document.getElementById('answers-options').answer.value
                        this.displayResult(this.quiz.performGuess(guess))
                    }
                })
            } else {
                const $span = document.createElement('span')
                $span.innerHTML = this.quiz.getTaxonLabel(taxon)
                $div.append($span)
            }

            if (taxon.children.length) {
                const $div = document.createElement('div')
                $div.classList.add('answers-options-group')
                $container.append($div)

                this.displayAnswerOptions(taxon.children, $div)
            }
        }
    }

    async loadQuestion () {
        const $nextButton = document.getElementById('round-next')
        $nextButton.disabled = true

        // Load question data
        try {
            const { question } = await this.quiz.loadRound()
            this.displayQuestion(question)
        } catch (error) {
            this.displayResult({ success: false, message: error.message })
        }

        $nextButton.disabled = false
    }

    displayQuestion (question) {
        // Clear existing content
        this.hideResult()

        this.displayImage(question.images[0])

        const $gallery = document.getElementById('round-gallery')
        while ($gallery.firstChild) {
            $gallery.removeChild($gallery.firstChild)
        }

        for (const image of question.images) {
            const $thumbnail = document.createElement('img')
            $thumbnail.setAttribute('src', image.thumbnail)
            $thumbnail.addEventListener('click', () => { this.displayImage(image) })
            $gallery.append($thumbnail)
        }

        const $link = document.getElementById('round-link')
        $link.setAttribute('href', question.url)
    }

    displayImage (image) {
        const $caption = document.querySelector('#round-image figcaption a')
        $caption.textContent = image.caption
        const $img = document.querySelector('#round-image img')
        $img.removeAttribute('src')
        $img.setAttribute('src', image.src)
    }

    displayResult (result) {
        if (!result) {
            return
        }

        const $result = document.getElementById('round-output')
        $result.dataset.success = result.success
        $result.innerHTML = result.message
    }

    hideResult () {
        const $result = document.getElementById('round-output')
        delete $result.dataset.success
        while ($result.firstChild) {
            $result.removeChild($result.firstChild)
        }
    }

    shareUrl (url) {
        navigator.clipboard.writeText(url)
            .then(() => { this.displayResult({ success: true, message: this.quiz.getMessage('copy_success') }) })
            .catch(() => { this.displayResult({ success: false, message: this.quiz.getMessage('copy_fail') }) })
    }
}
