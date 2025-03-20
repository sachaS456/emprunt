import PropTypes from "prop-types";

export default function ListOperation({operations}) {
    const operationsTypes = ['Dépôt', 'Retrait'];

    return (
        <table>
            <thead>
                <tr><td>Date opération</td><td>Type opération</td><td>valeur opération</td></tr>
            </thead>
            {operations.map((operation, index) => {
                return (
                    <tr key={index}>
                        <td>{operation.get('date')}</td>  <td>{operation.get('value')} €</td> <td>{operationsTypes[operation.get('type')]}</td>
                    </tr>
                )
            })}
        </table>
    )
}

ListOperation.propTypes = {
    operations: PropTypes.array
}