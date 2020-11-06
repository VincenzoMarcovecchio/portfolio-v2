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
  @media ${device.tablet} {
    margin-right: auto;
    margin-left: unset;
  }
`;
