
export type Action = {
  label: string
  url?: string
}

export const actions: Action[] = [
  {
    label: 'Do the dishes',
  },
  {
    label: 'Get to inbox zero',
  },
  {
    label: 'Close some browser tabs',
  },
  {
    label: 'Sweep',
  },
  {
    label: 'Read HackerNews',
    url: 'https://news.ycombinator.com/news',
  },
  {
    label: 'Watch some youtube',
    url: 'https://www.youtube.com',
  },
  {
    label: 'Read a book',
  },
  {
    label: 'Read some stuff in your Pocket',
    url: 'https://app.getpocket.com',
  },
  {
    label: 'Take a dance break',
  },
  {
    label: 'Tidy up the kitchen',
  },
  {
    label: 'Browse Instagram',
  },
  {
    label: 'Take out the trash',
  },
  {
    label: 'Clean up your trello boards',
    url: 'https://trello.com',
  }
]

const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const getAction = (): Action => {
  const shuffled = shuffleArray<Action>(actions)
  return shuffled[Math.floor(Math.random() * (shuffled.length - 1))]
}
