import PropTypes from "prop-types";

export default function Form({onAdd}) {

    function handleSubmit(e) {
        e.preventDefault();
        const operation = new FormData(e.target);
        onAdd(operation);
    }

    return (
        <form onSubmit={handleSubmit} className="boxshadw">
            <h2>Ajout opération</h2>
            <input name="date" type="date" required/>
            <select name="type">
                <option value="0">Dépôt</option>
                <option value="1">Retrait</option>
            </select>
            <input name="value" type="number" required/>
            <button type="submit">Ajouter</button>
        </form>
    )
}

Form.propTypes = {
    onAdd: PropTypes.func
}