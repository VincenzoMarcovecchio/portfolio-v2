import styled, { css } from 'styled-components';
import SearchResult from './search-result';

const Popover = css`
  max-height: 50vh;
  min-height: fit-content;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  left: -200%;
  bottom: -48vh;
  width: 90vw;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  z-index: 50;
`;

export default styled(SearchResult)`
  display: ${(props) => (props.show ? `block` : `none`)};
  ${Popover}
  color: rgb(188,155,120);

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;

      a {
        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    height: fit-content;

    svg {
      width: 70px;
    }
  }

  .ais-PoweredBy-text {
    height: fit-content;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
  }
`;
