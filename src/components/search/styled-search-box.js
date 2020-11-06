import styled, { css } from 'styled-components';
import SearchBox from './search-box';

const open = css`
  width: 100%;
  background: whitesmoke;
  cursor: text;
  padding: 0.3rem;
  font-family: inherith;
`;

const closed = css`
  width: 100%;
  background: whitesmoke;
  cursor: text;
  z-index: 10;
  padding: 0.3rem;
  font-family: inherith;
  font-weight: bolder;
`;

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    position: relative;
    color: #22252a;
    ::placeholder {
      color: ${({ hasFocus }) => (hasFocus ? '#22252a' : 'unset')};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
`;
