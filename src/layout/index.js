import styled from "styled-components";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const MainContainer = styled.div`
  margin: 0 20px;
`

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <div style={{display: "flex", width: "100%"}}>
        <SideBar />
        <main>
          {children}
        </main>
      </div>
    </MainContainer>
  );
};

export default MainLayout;
