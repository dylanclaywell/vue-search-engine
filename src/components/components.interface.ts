export type SuggestionType = 'historical' | 'trending' | 'search-result'

export interface Suggestion {
  text: string
  type: SuggestionType
}
