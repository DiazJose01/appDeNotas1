let fs = require(`fs`)

module.exports = {
    archivo: `./tareas.json`,
    leerJSON : () => {
        let tareasJSON = fs.readFileSync(`./tareas.json`, `utf-8`);
        return JSON.parse(tareasJSON)
    }
}