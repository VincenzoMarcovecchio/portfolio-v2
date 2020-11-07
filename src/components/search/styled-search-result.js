import styled, { css } from 'styled-components';
import SearchResult from './search-result';

const Popover = css`
  transtion: all 1s linear;
  max-height: 50vh;
  min-height: 50vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0%;
  bottom: 30%;
  right: 0%;
  width: 80vw;
  margin: auto;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  background: whitesmoke;
  border-radius: 2px;
  z-index: 50;
  flex-direction: column;
  transition: display 0.2s ease in out;
`;

export default styled(SearchResult)`
  display: ${(props) => (props.show ? `flex` : `none`)};
  ${Popover}
  color: rgb(188,155,120);
  transtion: display 1s ease-in;
  .HitCount {
    display: flex;
    flex-direction: column;
  }

  .Hits {
    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin-left: 0;
      width: 100%;
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
