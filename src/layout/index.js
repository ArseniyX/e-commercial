import styled from "styled-components";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import MenuBar from "../components/MenuBar";
import RecommendedBar from "../components/RecommendedBar";

const MainContainer = styled.div`
  margin: 20px;
`

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      <div style={{display: "flex", width: "100%"}}>
        <LeftBar />
        <main>
          <MenuBar />
          <RecommendedBar />
          {children}
        </main>
      </div>
    </MainContainer>
  );
};

export default MainLayout;
