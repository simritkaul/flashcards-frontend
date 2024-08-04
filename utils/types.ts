interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

interface Deck {
  id: string;
  title: string;
  description?: string;
  flashcards: Flashcard[];
}
