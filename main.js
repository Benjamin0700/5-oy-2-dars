let name1 = prompt(`Ismingizni kiriting:`)
let id1 = prompt(`Space id kiriting:`)
let parol1 = prompt(`Space parolingizni kiriting:`)


let javob = [
    {
        name: `${name1}`,
        id: `${id1}`,
        parol: `${parol1}`,
    }
]

for (const key in javob) {
        const e = javob[key];
        console.log(e);        
    }