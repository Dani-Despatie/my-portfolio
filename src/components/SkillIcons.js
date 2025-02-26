import styled from "styled-components";

function SkillIcons({children, src}) {
    return <SkillContainer>
        <img src = {src} />
        <p>{children}</p>
    </SkillContainer>
}

export default SkillIcons;

const SkillContainer = styled.div`
    display: flex;
    align-items: baseline;
    color: var(--accent);
    
    img {
        height: 40px;
        filter: var(--shadow);
    }

    p {
        margin: 0px 12px;
    }

    &:hover {
        color: var(--accent-light);
    }
`;