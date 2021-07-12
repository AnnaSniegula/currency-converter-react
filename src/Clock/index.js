import { useEffect, useState } from "react";
import "./style.css";

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
        <p className="clock">
            Dzisiaj jest
            {" "}
            {formattedDate}
        </p>
    )
};

export default Clock;
