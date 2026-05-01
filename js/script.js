const btns=document.querySelectorAll(".stage .btn");
const stages=document.querySelectorAll(".stage");
const main=document.querySelector("main");



const buildStage = (h2Text, pText, btnText, imagePath) => {
    let prevStage=document.querySelectorAll(".stage");
    for(stage of prevStage){
        stage.classList.remove("active");
    }
    const section=document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active");
    const h2=document.createElement("h2");
    h2.textContent=h2Text;
    section.append(h2);
    const p=document.createElement("p");
    p.textContent=pText;
    section.append(p);
    if(imagePath != undefined){
        const img=document.createElement("img");
        img.src=imagePath;
        img.classList.add("stage-img");
        section.append(img);
    }
    if(btnText != undefined){
        btnText.forEach(text=>{
            const button = document.createElement("button");
            button.textContent = text;
            button.classList.add("btn");
            button.addEventListener("click", nextStage);
            section.append(button);
        })
    }
    main.append(section);
}


const nextStage=(e)=>{
    console.log(e.target.textContent);
    let h2Text, pText, btnText, imagePath;
    switch(e.target.textContent){
        case "Slet beskederne":
            h2Text="Det er ikke muligt at sende penge via DAO.";
            pText="Svindlere kan oprette falske hjemmesider, som er næsten identiske med en rigtig hjemmeside, for at øge din troværdighed til dem. Disse hjemmesider kan være svære at skelne fra de rigtige. Dobbelttjek derfor altid, om det er den rigtige hjemmeside, du befinder dig på. Hvis du ikke kan finde frem til landingssiden fra den rigtige forside, så stol ikke på siden. DAO opkræver aldrig penge via links."
            btnText=["Start forfra"];
        break;
        case "Søg på google, om det er sandt":
            h2Text="Kan man overfører penge med dao?";
            pText="Du finder frem til denne hjemmeside, der informerer dig om, at det er muligt at overføre penge med DAO";
            btnText=["Åben linket", "Slet beskederne med Torben Lund", "Opfølgning med Torben Lund"]
        break;
        case "Tryk på linket":
            h2Text="Linket fører dig ind på denne side"
            imagePath="billeder/dao-betalingsside.png"
            btnText=["Udfyld, indsend, og underskriv med mitID", "Udfyld, men du fortryder og luker fanen", "Luk siden ned"]
        break;
        default: console.log("Error");
    }
    buildStage(h2Text, pText, btnText, imagePath); 
}


for(btn of btns){
    btn.addEventListener("click", nextStage);
}