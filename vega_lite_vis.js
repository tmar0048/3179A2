var vg_1 = "visualization.vl.json";
var vg_2 = "petrolprices.vl.json";
var vg_3 = "trainfares.vl.json";
vegaEmbed("#AusMap", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#PetrolLine", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#TrainMap", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);