export function Colors({ items }) {
    return (
        <div>
            <ul>
                {items.map(item => (<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    )
}