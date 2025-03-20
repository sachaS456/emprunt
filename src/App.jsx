import { useState } from 'react'
import TabAnnuiteContant from "./components/TabAnnuiteContant.jsx";

function App() {
    const [solde, setSolde] = useState(100000);
    const [n, setN] = useState(5);
    const [taux, setTaux] = useState(12);
    const [annuel, setAnnuel] = useState(true);

  return (
      <>
          <div className="input">
              <div className="boxshadw">
                  <label>
                      Solde emprunté
                      <input type="number" value={solde} onChange={(e) => setSolde(e.target.value)}/>
                      Euros
                  </label>
                  <label>
                      Rembourser sur
                      <input type="number" value={n} onChange={(e) => setN(e.target.value)}/>
                      année(s)
                  </label>
                  <label>
                      Taux
                      <input type="number" value={taux} onChange={(e) => setTaux(e.target.value)}/>
                      %
                  </label>
                  <label>
                      Annuel
                      <input type="checkbox" checked={annuel} onChange={(e) => setAnnuel(e.target.checked)}/>
                  </label>
              </div>
          </div>

          <div className="operation">
              <h2>Tableau d&#39;amortissement</h2>
              <h3>Annuités constantes</h3>
              <TabAnnuiteContant solde={solde} n={n} taux={taux} annuel={annuel}/>

              <h3>Amortissement constants</h3>

          </div>

      </>
  )
}

export default App
