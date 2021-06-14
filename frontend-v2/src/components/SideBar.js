import React from "react";
import styled from "styled-components";

const SideBarContainer = styled.div`
    flex: 0.15;
    background-color: whitesmoke;
    height: 100vh;
`;

function SideBar() {
    return <SideBarContainer></SideBarContainer>;
}

export default SideBar;
