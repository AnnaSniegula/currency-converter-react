import { useState } from "react";
import { Result } from "./Result";
import { FormFieldset, FormComment, FormButton, Failure, Loading } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResault = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            targetAmount: amount / rate,
            currency,
        });
    };

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResault(currency, amount);
    };

    const resetForm = () => {
        setCurrency(currency[0]);
        setResult(undefined);
        setAmount("");
    };

    return (
        <form onSubmit={onSubmit}>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        <p>Ładuję kursy z Europejskiego Banku Centralnego</p>
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Coś jest nie tak. Srprawdź połączenie z internetem.
                        </Failure>
                    ) : (
            
            
            <FormFieldset>
                <p>
                    <label>
                        Podaj kwotę w PLN *
                        <input
                            type="number"
                            name="currencyPLN"
                            min="1"
                            step="any"
                            autoFocus
                            required
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span>Wybierz walutę: </span>
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
                <FormComment>Pole oznaczone * są wymagane</FormComment>
                <p>
                    <FormButton type="submit">Przelicz</FormButton>
                    <FormButton onClick={resetForm} type="reset">Wyczyść</FormButton>
                </p>
                <Result result={result} />
            </FormFieldset>
                    )
                    )}
        </form>
    );
};


export default Form;
