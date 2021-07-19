import { useEffect, useState } from "react";
import { StyledClock } from "./styled";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const formattedDate = date.toLocaleString(undefined, {
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <StyledClock>
            Dzisiaj jest
            {" "}
            {formattedDate}
        </StyledClock>
    )
};

export default Clock;
