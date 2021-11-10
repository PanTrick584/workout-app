import styled from "styled-components";

export const StyledItem = styled.div`
    padding: 1.2rem 1.6rem;
    background-color: ${props => props.status ? "#3e3e3e" : "#2e2e2e" };
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 10px;
    transition: all .2s;
    cursor: ${props => props.status ? "unset" : "pointer" };
    &:hover {
        background-color: #3e3e3e;
        border-radius: 3px;
    }
    &:not(:first-of-type) {
        margin-left: 2rem;
    }

`