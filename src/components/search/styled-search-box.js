import styled, { css } from 'styled-components';
import SearchBox from './search-box';

const open = css`
  background: whitesmoke;
  cursor: text;
  padding: 0.3rem;
`;

const closed = css`
  background: whitesmoke;
  cursor: text;
  z-index: 100;
  padding: 0.3rem;
  font-weight: bolder;
`;

export default styled(SearchBox)`
  font-family: inherith;
  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
    font-size: 1em;
    border-radius: 2px;
    position: relative;
    color: #22252a;
    ::placeholder {
      color: ${({ hasFocus }) => (hasFocus ? '#22252a' : 'unset')};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
`;
