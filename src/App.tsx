import styled from "styled-components";
import Routing from "./Routing";

function App() {
  return (
    <Main>
      <Routing />
    </Main>
  );
}

export default App;

const Main = styled.main`
  background: #10141e;
  width: 100%;
  height: 100%;
`;
