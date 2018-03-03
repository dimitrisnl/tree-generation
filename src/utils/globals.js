import colors from './colors';
import breakpoints from './breakpoints';

export default `
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 1rem;

    height: 100vh;
    width: 100vw;

    @media all and (max-width: ${breakpoints.smallScreens}) {
      height: auto;
      width: auto;
    }

    background: ${colors.theme.nord6};
    color: ${colors.typography.dark};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size: 1rem;
  }
  input, button, textarea{
    border: 0;
    border-radius: 4px;

    box-shadow: none;
    outline: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  } 
`;
