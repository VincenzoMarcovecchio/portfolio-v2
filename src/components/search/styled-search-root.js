import styled from 'styled-components';
import { device } from '../../styles/Global';
export default styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  align-self: center;
  justify-self: center;
  font-family: inherit;
  font-size: inherit;
  @media ${device.tablet} {
    margin-right: 0.5rem;
    margin-left: unset;
  }
`;
