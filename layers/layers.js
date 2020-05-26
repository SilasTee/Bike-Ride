var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_appbikeandride_1 = new ol.format.GeoJSON();
var features_appbikeandride_1 = format_appbikeandride_1.readFeatures(json_appbikeandride_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_appbikeandride_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_appbikeandride_1.addFeatures(features_appbikeandride_1);
var lyr_appbikeandride_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_appbikeandride_1, 
                style: style_appbikeandride_1,
                interactive: true,
                title: '<img src="styles/legend/appbikeandride_1.png" /> app:bikeandride'
            });

lyr_OSM_0.setVisible(true);lyr_appbikeandride_1.setVisible(true);
var layersList = [lyr_OSM_0,lyr_appbikeandride_1];
lyr_appbikeandride_1.set('fieldAliases', {'bezeichnung': 'bezeichnung', 'punkt': 'punkt', 'symbol': 'symbol', 'adresse': 'adresse', 'ort': 'ort', 'anlagen': 'anlagen', 'plaetzegesamt': 'Anzahl Abstellplätze', 'plaetzefreizugaenglich': 'frei zugängliche Abstellplätze', 'platzdach': 'platzdach', 'buegeldach': 'buegeldach', 'vordraddach': 'vordraddach', 'platzoffen': 'platzoffen', 'buegeloffen': 'buegeloffen', 'vordradoffen': 'vordradoffen', 'fahrradbox': 'Abschließbare Mietplätze', 'sammelschlanlage': 'sammelschlanlage', 'ansprechpartner': 'ansprechpartner', 'telefon': 'telefon', 'email': 'email', 'stand': 'stand', 'belegung_absolut': 'belegung_absolut', 'belegung_relativ': 'belegung_relativ', 'wildparker_absolut': 'wildparker_absolut', 'gesamtbelegung_absolut': 'gesamtbelegung_absolut', 'gesamtbelegung_relativ': 'gesamtbelegung_relativ', 'fahrradleichen': 'fahrradleichen', });
lyr_appbikeandride_1.set('fieldImages', {'bezeichnung': 'Hidden', 'punkt': 'Hidden', 'symbol': 'Hidden', 'adresse': 'Hidden', 'ort': 'Hidden', 'anlagen': 'Hidden', 'plaetzegesamt': 'Range', 'plaetzefreizugaenglich': 'Range', 'platzdach': 'Hidden', 'buegeldach': 'Hidden', 'vordraddach': 'Hidden', 'platzoffen': 'Hidden', 'buegeloffen': 'Hidden', 'vordradoffen': 'Hidden', 'fahrradbox': 'Range', 'sammelschlanlage': 'Hidden', 'ansprechpartner': 'Hidden', 'telefon': 'Hidden', 'email': 'Hidden', 'stand': 'Hidden', 'belegung_absolut': 'Hidden', 'belegung_relativ': 'Hidden', 'wildparker_absolut': 'Hidden', 'gesamtbelegung_absolut': 'Hidden', 'gesamtbelegung_relativ': 'Hidden', 'fahrradleichen': 'Hidden', });
lyr_appbikeandride_1.set('fieldLabels', {'plaetzegesamt': 'inline label', 'plaetzefreizugaenglich': 'inline label', 'fahrradbox': 'inline label', });
lyr_appbikeandride_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});