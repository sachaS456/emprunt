import {calculEmpruntAmortConst} from "../calculEmprunt.js";
import PropTypes from "prop-types";

function TabAmortissementConstant({solde, taux, n, annuel}) {
    const data = calculEmpruntAmortConst(solde, taux, n, annuel);
    return (
        <table>
            <thead>
            <tr>
                <td>Période</td>
                <td>Capital restant</td>
                <td>Intérêt de la période</td>
                <td>Amortissement du capital</td>
                <td>Annuité d&#39;emprunt</td>
                <td>Capital restant dû en fin de période</td>
            </tr>
            </thead>
            <tbody>
            {data.tabEmprnt.map((tab, index)=>{
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{tab.capiDeb}</td>
                    <td>{tab.interet}</td>
                    <td>{tab.amort}</td>
                    <td>{tab.anuiteEmprnt}</td>
                    <td>{tab.capiRest}</td>
                </tr>
            })}

            <tr className="total">
                <td>Total</td>
                <td>######</td>
                <td>{data.total.TotalInterest}</td>
                <td>{data.total.TotalAmort}</td>
                <td>{data.total.TotalAnuite}</td>
                <td>######</td>
            </tr>
            </tbody>
        </table>
    )
}

TabAmortissementConstant.propTypes = {
    solde: PropTypes.number.isRequired,
    taux: PropTypes.number.isRequired,
    n: PropTypes.number.isRequired,
    annuel: PropTypes.string.isRequired,
}

export default TabAmortissementConstant;