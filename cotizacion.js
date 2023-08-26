const fs = require("fs/promises");
const path = require("node:path");
const { URLS } = require("./urls");

const getCot = async () => {
  const pathJson = path.join(__dirname, "products.json");
  const oldCot = await fs.readFile(pathJson, "utf-8");
  const oldCotParse = JSON.parse(oldCot);
  const oldDate = new Date(oldCotParse.LastDate);
  const newDate = new Date(Date.now());
  if (oldDate.toLocaleDateString() === newDate.toLocaleDateString()) {
    return oldCotParse.cotizacion;
  } else {
    const fetchData = await fetch(URLS.COTIZACION);
    const data = await fetchData.text();
    const findCotizacion = data.search(
      '<div class=\\"BNeawe s3v9rd AP7Wnd\\">Cotizaciones'
    );
    const cotizacion = data.substring(
      findCotizacion + 34,
      findCotizacion + 133
    );
    const LastDate = Date.now();
    const cotizacionJson = {
      cotizacion,
      LastDate,
    };
    await fs.writeFile(
      "products.json",
      JSON.stringify(cotizacionJson, null, 2)
    );
    return cotizacion;
  }
};

module.exports = { getCot };
