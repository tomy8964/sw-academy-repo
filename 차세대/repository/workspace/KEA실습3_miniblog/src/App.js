import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './page/MainPage';
import PostWritePage from './page/PostWritePage';
import PostViewPage from './page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
  return (
      <BrowserRouter>
          <MainTitleText>KaKao Academy of Gachon Univ. 
         </MainTitleText>
          <Routes>
              <Route index element={<MainPage />} />
              <Route path="post-write" element={<PostWritePage />} />
              <Route path="post/:postId" element={<PostViewPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
