import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function App() {
  return (
    <>
      <Header title="kalkulator walut" />
      <Container>
        <form className="js-form">
          <fieldset className="fieldset">
            <p>
              <label>
                Podaj kwotę w PLN * <input className="js-currencyPLN" type="number" name="currencyPLN" min="1"
                  step="any" autofocus required />
              </label>
            </p>
            <p>
              <label>
                Wybierz walutę
                <select className="js-selectCurrency">
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </label>
            </p>
            <p className="fieldset__comment">Pole oznaczone * są wymagane</p>
            <p>
              <button type="submit" className="js-buttonSubmit">Przelicz</button>
              <button type="reset" className="js-buttonReset">Wyczyść</button>
            </p>
            <p>Otrzymasz: <strong className="js-result"></strong></p>
          </fieldset>
        </form>
     
      </Container>
      <Footer author="&copy; Anna Śnieguła 2021" />
    </>

  );
}

export default App;
