
type IncrementProps = {
    onClick: () => void
}

const Increment = ({ onClick }: IncrementProps) => (
    <button onClick={onClick}>+</button>
);

export { Increment }