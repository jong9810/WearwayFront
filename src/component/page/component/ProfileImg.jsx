import React from 'react';
import styled from 'styled-components';


const ProfileImgWrap = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 500px;
  background-color: lightgray;
  margin-left: 20px;
  margin-right: 50px;
`;

function ProfileImg(props) {
    return (
        <ProfileImgWrap><img src={props.imgUrl} alt={""}/></ProfileImgWrap>
    );
}

export default ProfileImg;