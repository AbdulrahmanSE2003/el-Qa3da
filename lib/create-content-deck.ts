export interface ContentItem {
  id: string
  text: string
  category?: string
  correct_answer?: string
}

export const createContentDeck = <T extends ContentItem>(items: T[]) => {
  let deck: T[] = []
  let index = 0

  const shuffle = (items: T[]) => {
    const shuffled = [...items]

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
  }

  const refill = () => {
    deck = shuffle(items)
    index = 0
  }

  refill()

  return {
    next: (): T => {
      if (index >= deck.length) {
        refill()
      }

      return deck[index++]
    },

    reset: () => {
      refill()
    },

    remaining: () => deck.length - index,
  }
}
