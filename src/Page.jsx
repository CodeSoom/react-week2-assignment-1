import NumericButtons from './NumericButtons'

import Counter from './Counter';

export default function Page({ count, onClick }) {
    return (
        <div>
            <p>Counter</p>
            <Counter
                count={count}
                onClick={onClick}
            />
            <br />
            <br />
            <NumericButtons
                onClick={onClick}
            />
        </div>
    )
}