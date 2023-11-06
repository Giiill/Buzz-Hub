
type DecrementProps = {
    onClick: () => void
}

const Decrement = ({ onClick }: DecrementProps) => (
    <button onClick={onClick}>-</button>
);

export { Decrement }