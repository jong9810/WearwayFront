import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import ProfileImg from "./ProfileImg";
import ProfileContent from "./ProfileContent";

const Wrapper = styled.div`
  margin-left: 50px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Profile(props) {
    return (
        <Wrapper>
            <ProfileImg imgUrl={""}/>
            <ProfileContentWrap>
                <ProfileContent
                    nickname={"닉네임"}
                    level={3}
                    grade={"멤버"}
                    createdDate={"2023.11.27"}
                    memberName={"김*인"}
                    nextGrade={"브론즈"}
                    remainPoint={"63,151"}
                />
            </ProfileContentWrap>
        </Wrapper>
    );
}

export default Profile;