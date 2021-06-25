import "./style.css";

const Container = ({children}) => (
    <main className="container">
        {children}
        <a className="main__link" rel="noreferrer noopener" target="_blank"
          href="https://www.nbp.pl/home.aspx?f=/statystyka/kursy.html">
          Aktualne kursy walut NBP </a>
    </main>
    );

export default Container;