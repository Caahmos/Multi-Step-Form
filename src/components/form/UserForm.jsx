function UserForm({ data, updateFieldHandler }) {

    return (
        <div>
            <div className="form_control">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Digite o seu nome: " value={data.name || ''} onChange={(e) => { updateFieldHandler('name', e.target.value) }} required />
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" placeholder="Digite o seu email: " value={data.email || ''} onChange={(e) => { updateFieldHandler('email', e.target.value) }} required />
            </div>
        </div>
    )
}

export default UserForm