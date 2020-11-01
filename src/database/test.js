const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
  await saveOrphanage(db, {
    lat: "-23.6810527",
    lng: "-46.7729219",
    name: "Lar dos Garotos",
    whatsapp: "11987659087",
    description:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
      "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 10h as 20h",
    open_on_weekends: "0"
  });

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
  console.log(orphanage);
});
