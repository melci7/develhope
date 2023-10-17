export function Colors({ items }) {
    return (
        <div>
            <ul>
                {items.map(item => (<li>{item}</li>))}
            </ul>
        </div>
    )
}