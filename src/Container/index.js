import { StyledContainer, Link } from "./styled";

const Container = ({children}) => (
    <StyledContainer>
        {children}
        <Link rel="noreferrer noopener" target="_blank"
          href="https://www.nbp.pl/home.aspx?f=/statystyka/kursy.html">
          Aktualne kursy walut NBP </Link>
    </StyledContainer>
    );

export default Container;