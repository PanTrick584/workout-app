import styled from "styled-components";

export const StyledCell = styled.div`
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #2e2e2e;
    background-color: ${  props => props.active ? "green" : "" };
    cursor: pointer;
    transition: all .2s;
    &:hover {
        background-color: #2e2e2e;
        color: #c2c2c2;
    }
`
