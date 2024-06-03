# Config format

This document details the config format used to define quizzes.

## Quiz

| Field | Type | Required/default | Description |
|-------|------|------------------|-------------|
| `metadata` | [Metadata](#metadata) | Required |  |
| `provider` | [Provider](#provider) | Required | Question provider configuration. |
| `settings` | [Settings](#settings) | | Quiz or provider-specific user settings. |
| `taxa` | `Array<Taxon>` | Required | Root [taxa](#taxon) |

## Metadata

| Field | Type | Required/default | Description |
|-------|------|------------------|-------------|
| `title` | [Localized text](#localized-text) | Required | |
| `description` | [Localized text](#localized-text) | Required | |
| `languages` | `Array<string>` | Required | List of language codes |

## Provider

| Field | Type | Required/default | Description |
|-------|------|------------------|-------------|
| `type` | `string` | Required | Type of questions provider (see [Provider types](#provider-types)). |
| `defaultOptions` | `Object` | | Default options to pass along to the provider. |

### Provider types

- `'gbif'` takes questions from [GBIF](https://www.gbif.org/) occurrences. Supports default options of `country` (array of uppercase country codes) and `licenses` (array of license codes).
- `'inaturalist'` takes questions from [iNaturalist](https://www.inaturalist.org/) observations. Supports default options of `placeId` (integer or string) and `licenses` (array of license codes). Supports [settings](#settings) of `month` (array of numbers), `season` (`'summer'`/`'winter'`/`'any'`), and `lifestage` (`'nymph'`, `'larva'`, `'adult'`, `'any'`).
- `'wikimedia'` takes questions from [Wikimedia Commons](https://commons.wikimedia.org/) by fetching the main [image (P18)](http://www.wikidata.org/entity/P18) associated with subtaxa.

## Settings

An object with a setting names as keys, and [setting](#setting) configuration as values.

### Setting

| Field | Type | Required/default | Description |
|-------|------|------------------|-------------|
| `id`  | `string` | Required | Option key to pass along to the provider. |
| `label` | [Localized text](#localized-text) | Required | |
| `options` | [`Array<SettingOption>`](#setting-option) | Required | |
| `value` | `string` | | Default option to set |
| `defaultEnabled` | `boolean` | Default: `true` | Whether to enable for all taxa by default. |

### Setting option

| Field | Type | Required/default | Description |
|-------|------|------------------|-------------|
| `id`  | `string` | Required | Option id/value. |
| `label` | [Localized text](#localized-text) | Required | |

## Taxon

| Field | Type | Required/default | Description |
|-------|------|------------------|-------------|
| `scientificName`  | `string` | | |
| `vernacularName` | [Localized text](#localized-text) | | |
| `taxonRank`  | `string` | | Lowercase rank, used to format scientific names. |
| `taxa` | `string|number|Array<string|number>` | | Identifier(s) used to fetch questions. |
| `children` | `Array<Taxon>` | | Child taxa. |
| `settingsEnabled` | `Object<string,boolean>` | | Enable or disable a [setting](#setting) for this taxon and its subtaxa. |

> Despite the name, a `Taxon` does not have to represent a monophyletic taxonomic group; it may also represent other useful groups (such as invasive/non-invasive species, or paraphyletic taxa).

## Localized text

An object with a two-letter language code as keys, and the text in that language as values.

Example:

```js
{
  en: 'English text',
  nl: 'Dutch text'
}
```
