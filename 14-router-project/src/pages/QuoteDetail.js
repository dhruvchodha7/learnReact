import HighlightedQuote from "../components/quotes/HighlightedQuote";
import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun" },
  { id: "q2", author: "dhruv", text: "Learning react is not fun" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact></Route>
      <div className="centered">
        <Link className="btn-flat" to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
