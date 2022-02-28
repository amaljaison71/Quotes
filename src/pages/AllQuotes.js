import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Carol Burnett",
    text: "When you have a dream, you’ve got to grab it and never let go.",
  },
  {
    id: "q2",
    author: "Audrey Hepburn",
    text: "Nothing is impossible. The word itself says ‘I’m possible!'",
  },
  {
    id: "q3",
    author: "Alexander the Great",
    text: "There is nothing impossible to they who will try.",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
