export default function calculEmpruntAnnuiteConst(solde, taux, n, annuel) {
    let tauxU = taux / 100;

    if (annuel === 'mensuel'){
        n = n*12;
        tauxU = Math.pow(1+tauxU, 1/12) - 1
    }
    const tab = [];
    const anuiteConst = solde * (tauxU / (1 - Math.pow(1+tauxU, -n)));
    let capi = solde;

    let TotalInterest = 0;
    let TotalAmort = 0;
    let TotalAnuite = 0;

    for (let i = 0; i < n; i++){
        const ob = {
            capiDeb: Math.round(capi*100)/100,
            interet: Math.round(capi * tauxU * 100)/100,
            amort: Math.round((anuiteConst - (capi * tauxU))*100)/100,
            anuiteEmprnt: Math.round(anuiteConst*100)/100,
            capiRest: Math.round((capi - (anuiteConst - (capi * tauxU)))*100)/100,
        };

        capi = ob.capiRest;
        tab.push(ob);

        TotalInterest += ob.interet;
        TotalAmort += ob.amort;
        TotalAnuite += ob.anuiteEmprnt
    }

    TotalInterest = Math.round(TotalInterest*100)/100;
    TotalAmort = Math.round(TotalAmort*100)/100;
    TotalAnuite = Math.round(TotalAnuite*100)/100;

    return {
        tabEmprnt: tab,
        total: { TotalInterest, TotalAmort, TotalAnuite}
    };
}

export function calculEmpruntAmortConst(solde, taux, n, annuel) {
    let tauxU = taux / 100;

    if (annuel === 'mensuel'){
        n = n*12;
        tauxU = Math.pow(1+tauxU, 1/12) - 1
    }

    const tab = [];
    let capi = solde;
    const amortConst = capi / n;

    let TotalInterest = 0;
    let TotalAmort = 0;
    let TotalAnuite = 0;

    for (let i = 0; i < n; i++){
        const ob = {
            capiDeb: Math.round(capi*100)/100,
            interet: Math.round(capi * tauxU * 100)/100,
            amort: Math.round((amortConst)*100)/100,
            anuiteEmprnt: Math.round((capi * tauxU + amortConst)*100)/100,
            capiRest: Math.round(((capi - amortConst)*100)/100),
        };

        capi = ob.capiRest;
        tab.push(ob);

        TotalInterest += ob.interet;
        TotalAmort += ob.amort;
        TotalAnuite += ob.anuiteEmprnt
    }

    TotalInterest = Math.round(TotalInterest*100)/100;
    TotalAmort = Math.round(TotalAmort*100)/100;
    TotalAnuite = Math.round(TotalAnuite*100)/100;

    return {
        tabEmprnt: tab,
        total: { TotalInterest, TotalAmort, TotalAnuite}
    };
}
