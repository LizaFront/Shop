import { styled } from '@mui/system';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(0 0 0 / 10%)
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

`;

export const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '0, 20px',
    width: '70%',
    margin: '0 auto',
});

export const Title = styled('h1')({
    fontSize: '1.75rem',
    fontWeight: 700,
    textAlign: 'center',
});
