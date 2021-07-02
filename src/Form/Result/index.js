export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                Otrzymasz : &nbsp;
                <strong>  
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);

