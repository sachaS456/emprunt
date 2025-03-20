import { useState } from 'react'
import TabAnnuiteContant from "./components/TabAnnuiteContant.jsx";
import TabAmortissementConstant from "./components/TabAmortissementConstant.jsx";

function App() {
    const [solde, setSolde] = useState(100000);
    const [n, setN] = useState(5);
    const [taux, setTaux] = useState(12);
    const [annuel, setAnnuel] = useState('annuel');

    function checkSpace(e) {
        if(e.key === ' ') e.preventDefault();
    }

    function checkValid(e, value, type, setter) {
        if(value === '') return;
        if(type !== 'taux') {
            if(type === 'duree' && value >= 30) return setter(30);

            if(value < 1) return setter(1);
        } else {
            if(value < 0) return setter(0);
        }

        setter(value);
    }

  return (
      <>
          <div className="input">
              <div className="boxshadw">
                  <label>
                      Solde emprunté
                      <input type="number" value={solde} min="1"
                             onKeyDown={(e  ) => checkSpace(e)}
                             onKeyUp={(e) => checkValid(e, e.target.value, 'solde', setSolde)}
                             onChange={(e) => setSolde(e.target.value)}/>
                      Euros
                  </label>
                  <label>
                      Rembourser sur
                      <input type="number" value={n} min="1" max="30"
                             onKeyDown={(e  ) => checkSpace(e)}
                             onKeyUp={(e) => checkValid(e, e.target.value, 'duree', setN)}
                             onChange={(e) => setN(e.target.value)}/>
                      année(s)
                  </label>
                  <label>
                      Taux
                      <input type="number" value={taux} min="0"
                             onKeyDown={(e  ) => checkSpace(e)}
                             onKeyUp={(e) => checkValid(e, e.target.value, 'taux', setTaux)}
                             onChange={(e) => setTaux(e.target.value)}/>
                      %
                  </label>
                  <label>
                      Annuel
                      <select value={annuel} onChange={(e) => setAnnuel(e.target.value)}>
                          <option value="annuel">Annuel</option>
                          <option value="mensuel">Mensuel</option>
                      </select>
                  </label>
              </div>
          </div>

          <div className="operation">
              <h2>Tableau d&#39;amortissement</h2>
              <h3>Annuités constantes</h3>
              <TabAnnuiteContant solde={Number(solde)} n={Number(n)} taux={Number(taux)} annuel={annuel}/>

              <h3>Amortissement constants</h3>
              <TabAmortissementConstant solde={Number(solde)} n={Number(n)} taux={Number(taux)} annuel={annuel}/>

          </div>

      </>
  )
}

export default App
