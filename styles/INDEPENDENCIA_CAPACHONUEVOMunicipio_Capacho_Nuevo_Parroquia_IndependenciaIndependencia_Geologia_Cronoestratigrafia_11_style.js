var size = 0;
var placement = 'point';
function categories_INDEPENDENCIA_CAPACHONUEVOMunicipio_Capacho_Nuevo_Parroquia_IndependenciaIndependencia_Geologia_Cronoestratigrafia_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'cretaceo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(202,107,85,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Paleogeno':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(116,223,134,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_INDEPENDENCIA_CAPACHONUEVOMunicipio_Capacho_Nuevo_Parroquia_IndependenciaIndependencia_Geologia_Cronoestratigrafia_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("período");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_INDEPENDENCIA_CAPACHONUEVOMunicipio_Capacho_Nuevo_Parroquia_IndependenciaIndependencia_Geologia_Cronoestratigrafia_11(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
