import { Link } from 'gatsby';
import { default as React } from 'react';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
      {console.log('ciao')}
    </div>
  ) : (
    <span style={{ height: '6rem' }}>no results found</span>
  );
});

const PageHit = ({ hit }) => (
  <div>
    <Link replace to={`/${hit.slug}`}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits
      style={{ backgroundColor: 'yellow' }}
      className="Hits"
      hitComponent={PageHit}
    />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}{' '}
    <PoweredBy />
  </div>
);

export default SearchResult;