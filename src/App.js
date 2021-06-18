import './App.css';
import Header from './Components/Header';
import styled from 'styled-components';


function App() {
  const OutterWrapper = styled.div `
  --page-shell-max-content-width: 1760px;
  position: relative;
  min-height: 100vh;
  `
  const HeaderWrapper = styled.div `
  display: block;
  `
  return (
    <OutterWrapper>
      <HeaderWrapper className='HeaderWrapper'>
        <Header />
      </HeaderWrapper>
    </OutterWrapper>
  );
}

export default App;

