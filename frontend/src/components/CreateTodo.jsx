
export function CreateTodo() {
    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10,
                borderRadius: 5
            }} type="text" placeholder="title" /> <br />
            <input style={{
                padding: 10,
                margin: 10,
                borderRadius: 5
            }} type="text" placeholder="description" /> <br />
            <button style={{
                padding: 10,
                margin: 10,
                borderRadius: 5
            }}>Add a todo</button>
        </div>
    )
}