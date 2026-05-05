const btns = document.querySelectorAll(".stage .btn");
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main");

//opbygning af sektion
const buildStage = (h2Text, pText, btnText, imagePath) => {
    let prevStage = document.querySelectorAll(".stage");
    for(stage of prevStage){
        stage.classList.remove("active");
    }
    const section = document.createElement("section"); //section
    section.classList.add("stage", "active");
    const h2 = document.createElement("h2"); //h2
    h2.textContent = h2Text;
    section.append(h2);
    const p = document.createElement("p"); //paragraf
    p.textContent = pText;
    section.append(p);
    if(imagePath != undefined){ //billede
        const img = document.createElement("img");
        img.src = imagePath;
        img.classList.add("stage-img");
        section.append(img);
    }
    if(btnText != undefined){ //knapper
        const div = document.createElement("div"); //div til knapper
        section.append(div);
        btnText.forEach(text=>{ //selve knapperne
            const button = document.createElement("button");
            button.textContent = text;
            button.classList.add("btn");
            button.addEventListener("click", nextStage);
            div.append(button);
        })
    }
    main.append(section);
}

//switch statement
const nextStage = (e)=>{
    console.log(e.target.textContent);
    let h2Text, pText, btnText, imagePath;
    switch(e.target.textContent){
        case "Start":
            h2Text = "Du har sat et tæppe til salg på Facebook Marketplace. Torben Lund skriver til dig, da han er interesseret.";
            imagePath = "billeder/torben-lund.png";
            btnText = ["Tryk på linket", "Slet beskederne", "Søg på google, om det er sandt"];
        break;
        case "Slet beskederne":
            h2Text = "Det er ikke muligt at sende penge via DAO.";
            pText = "Svindlere kan oprette falske hjemmesider, som er næsten identiske med en rigtig hjemmeside, for at øge din tillid til dem. Dobbelttjek derfor altid, om du er på den rigtige hjemmeside. DAO opkræver aldrig penge via links.";
            btnText = ["Start forfra"];
        break;
        case "Søg på google, om det er sandt":
            h2Text = "Kan man overfører penge med dao?";
            pText = "Du finder frem til denne hjemmeside";
            imagePath = "billeder/dao-photoshoppet.png";
            btnText = ["Tryk på linket", "Slet beskederne", "Opfølgning med Torben Lund"];
        break;
        case "Tryk på linket":
            h2Text = "Linket fører dig ind på denne side";
            imagePath = "billeder/dao-betalingsside.png";
            btnText = ["Udfyld, indsend, og underskriv med mitID", "Luk siden ned"];
        break;
        case "Opfølgning med Torben Lund":
            h2Text = "Torben Lund svarer langsomt og i korte beskeder på dine spørgsmål. Han stopper til sidst helt med at svare, og du kan ikke få fat på ham igen.";
            pText = "Det er ikke muligt at sende penge via DAO. Svindlere kan oprette falske hjemmesider, som er næsten identiske med en rigtig hjemmeside, for at øge din tillid til dem. Dobbelttjek derfor altid, om du er på den rigtige hjemmeside. DAO opkræver aldrig penge via links";
            imagePath = "billeder/dao-gennemgang.png";
            btnText = ["Start forfra"];
        break;
        case "Udfyld, indsend, og underskriv med mitID":
            document.body.style.backgroundColor = "#ED1C24"; //baggrundsfarve
            h2Text = "I det du underskriver med mitID, mister du adgang til både din konto og mitID.";
            btnText = ["Kontakt banken hurtigst muligt", "Læg det væk og prøv igen senere"];
        break;
        case "Luk siden ned":
            h2Text = "Da du ikke udfyldte, kan svindlere ikke få fat i mere end din IP-adresse";
            pText = "Det er ikke muligt at sende penge via DAO. Svindlere kan oprette falske hjemmesider, som er næsten identiske med en rigtig hjemmeside, for at øge din tillid til dem. Dobbelttjek derfor altid, om du er på den rigtige hjemmeside. DAO opkræver aldrig penge via links.";
            imagePath = "billeder/dao-betaling-gennemgang.png";
            btnText = ["Start forfra"];
        break;
        case "Kontakt banken hurtigst muligt":
            h2Text = "Svindleren har nu adgang til både din konto og mitID. Begge dele bør spærres";
            pText = "Det er ikke muligt at sende penge via DAO. Svindlere kan oprette falske hjemmesider, som er næsten identiske med en rigtig hjemmeside, for at øge din tillid til dem. Dobbelttjek derfor altid, om du er på den rigtige hjemmeside. DAO opkræver aldrig penge via links.";
            imagePath = "billeder/dao-betaling-gennemgang.png";
            btnText = ["Start forfra"];
        break;
        case "Læg det væk og prøv igen senere":
            h2Text = "Din bank kontakter dig dagen efter, da der ender med at blive trukket 250 euro. Både din konto og mitID bør lukkes, da svindleren har adgang hertil.";
            pText = "En indboforsikring dækker identitetstyveri, og dækker derfor det tabte beløb. Men har du ingen indboforsikring, er pengene tabt. Det er ikke muligt at sende penge via DAO. Svindlere kan oprette falske hjemmesider, som er næsten identiske med en rigtig hjemmeside, for at øge din tillid til dem. Dobbelttjek derfor altid, om du er på den rigtige hjemmeside. DAO opkræver aldrig penge via links.";
            imagePath = "billeder/dao-betaling-gennemgang.png";
            btnText = ["Start forfra"];
        break;
        case "Start forfra":
            document.body.style.backgroundColor = "#f9e6e4"; //baggrundsfarve
            h2Text = "Er du skarp nok til, at kunne gennemskue et phishing forsøg? Er det sandt eller falsk?";
            btnText = ["Start"];
        break;
    }
    buildStage(h2Text, pText, btnText, imagePath); 
}


for(btn of btns){
    btn.addEventListener("click", nextStage);
}