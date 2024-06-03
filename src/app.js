import * as locales from './locales.js'
import { NoQuestionsError } from './providers/provider.js'
import { Quiz } from './quiz.js'

function clear ($element) {
    while ($element.firstChild) {
        $element.removeChild($element.firstChild)
    }
}

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
            if (history && location.href !== this.quiz.getUrl(true).href) {
                history.pushState({}, '', this.quiz.getUrl(true))
            }
        })
        document.getElementById('answers-next').addEventListener('click', () => {
            this.loadQuestion()
        })
        document.getElementById('answers-guess').addEventListener('click', () => {
            this.guess()
        })
        document.getElementById('answers-giveup').addEventListener('click', () => {
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
        document.body.addEventListener('keyup', (event) => {
            if (event.key === 'n' || event.key === 'N' || event.code === 'KeyN' || event.keyCode === 78) {
                this.loadQuestion()
            } else if (event.key === 'g' || event.key === 'G' || event.code === 'KeyG' || event.keyCode === 71) {
                this.displayResult(this.quiz.performGiveUp())
            }
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

        if (this.quiz.config.settings) {
            const $container = document.getElementById('options-quiz')
            clear($container)
            for (const setting in this.quiz.config.settings) {
                const config = this.quiz.config.settings[setting]
                this.displayQuizSetting(setting, config, $container)
            }
        }

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
            clear($container)
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

    displayQuizSetting (setting, config, $container) {
        const id = `options-quiz-${setting}`

        const $div = document.createElement('div')
        $div.classList.add('form-group')

        const $label = document.createElement('label')
        $label.setAttribute('for', id)
        $label.textContent = this.quiz.getLabel(config.label)

        const $select = document.createElement('select')
        $select.setAttribute('id', id)
        for (const option of config.options) {
            const $option = document.createElement('option')
            $option.setAttribute('value', option.id)
            $option.textContent = this.quiz.getLabel(option.label)
            $select.append($option)
        }
        $select.value = this.quiz.settings[setting] ?? config.value

        $select.addEventListener('change', () => {
            this.quiz.settings[setting] = $select.value
        })

        $div.append($label)
        $div.append($select)
        $container.append($div)
    }

    displayAnswerOptions (taxa, $container) {
        if (!taxa) {
            taxa = this.quiz.taxonomy.taxaByTree
            $container = document.getElementById('answers-options')
            clear($container)
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
                        this.guess()
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
        const $round = document.getElementById('round')
        const $nextButton = document.getElementById('answers-next')

        $round.classList.add('loading')
        $nextButton.disabled = true

        // Load question data
        try {
            const { question } = await this.quiz.loadRound()
            this.displayQuestion(question)
        } catch (error) {
            this.displayResult({ success: false, message: error.message })
        }

        $round.classList.remove('loading')
        $nextButton.disabled = false
    }

    displayQuestion (question) {
        // Clear existing content
        this.hideResult()

        this.displayImage(question.images[0])

        const $gallery = document.getElementById('round-gallery')
        clear($gallery)

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
        clear($result)
    }

    shareUrl (url) {
        navigator.clipboard.writeText(url)
            .then(() => { this.displayResult({ success: true, message: this.quiz.getMessage('copy_success') }) })
            .catch(() => { this.displayResult({ success: false, message: this.quiz.getMessage('copy_fail') }) })
    }

    guess () {
        const guess = document.getElementById('answers-options').answer.value
        this.displayResult(this.quiz.performGuess(guess))
    }
}
