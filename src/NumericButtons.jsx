import Button from './Button'

export default function NumericButtons({ onClick }) {
    return (
        [1, 2, 3, 4, 5].map((i) => (
            <Button onClick={() => onClick(i)}>
                {i}
            </Button>
        ))
    )
}