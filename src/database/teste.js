const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
 await saveOrphanage(db,{    
    lat:"-27.2002021",
    lng:"-49.6748032",
    name: "Lar dos Meninos",
    whatsapp:"9999-99999",
   about:"Presta assistencia a ciranças de 0 a 15 anos que se encontram em situaçao de risco ou vulnerabilidade social.",
    images: [
        "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horario de visitas: das 08h as 18h",
    open_on_weekends:"0"
    
}
)
// //     //consultar dados da tabela
 const selectedOrphanages = await db.all("SELECT * FROM orphanages")
 console.log(selectedOrphanages)
// // // consultar um orgatano pelo id

const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
console.log(orphanage)

// //deletar dado da tabela
// console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})