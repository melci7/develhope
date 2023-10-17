export function Color( {item} ) {
    return (
        <li>
            <p>{item.name}</p>
        </li>
    )
}

export function Colors({ items }) {
    return (
        <div>
            <ul>
                {items.map(item => 
                    <Color key={item.id} item={item}/> )}
            </ul>
        </div>
    )
}