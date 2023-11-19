import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ItemButton from "../ui/ItemButton";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <ItemButton img src="../img/ItemImg.png" alt=""></ItemButton>
            </Container>
        </Wrapper>
    );
}

export default MainPage;