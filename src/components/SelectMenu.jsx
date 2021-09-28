import styled from "styled-components";
import Menu from "./Menu";
function SelectMenu({open, setOpen}) {

    return (
        <Container>
            <Menu open={open} setOpen={setOpen} />
        </Container>
    );
}

export default SelectMenu;
const Container = styled.div`
    position: relative;
    top: 2.3rem;
`