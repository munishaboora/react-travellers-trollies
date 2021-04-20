import React from 'react'

const SideBarMain = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Login</SideBarLink>
                <SideBarLink to="/">Register</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/"></SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBarMain
