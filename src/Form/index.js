import { currencies } from "./currencies.js";
import { useState } from "react";
import { Result } from "./Result";
import { FormFieldset, FormComment, FormButton } from "./styled";

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);

    const [result, setResult] = useState();
    const calculateResault = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            targetAmount: amount / rate,
            currency,
        });
    };

    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResault(currency, amount);
    };

    const resetForm = () => {
        setAmount("");
        setCurrency(currencies[0].short);
        setResult(undefined);
    };

    return (
        <form onSubmit={onSubmit}>
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
                            {currencies.map((currency) => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.short}
                                </option>
                            ))}
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
        </form>
    );
};


export default Form;
