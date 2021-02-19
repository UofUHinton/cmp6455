var wms_layers = [];

var format_SLCo_County_Boundary_0 = new ol.format.GeoJSON();
var features_SLCo_County_Boundary_0 = format_SLCo_County_Boundary_0.readFeatures(json_SLCo_County_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_County_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_County_Boundary_0.addFeatures(features_SLCo_County_Boundary_0);
var lyr_SLCo_County_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_County_Boundary_0, 
                style: style_SLCo_County_Boundary_0,
                interactive: true,
                title: '<img src="styles/legend/SLCo_County_Boundary_0.png" /> SLCo_County_Boundary'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LeftJoin_CountPerTract_2 = new ol.format.GeoJSON();
var features_LeftJoin_CountPerTract_2 = format_LeftJoin_CountPerTract_2.readFeatures(json_LeftJoin_CountPerTract_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeftJoin_CountPerTract_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeftJoin_CountPerTract_2.addFeatures(features_LeftJoin_CountPerTract_2);
var lyr_LeftJoin_CountPerTract_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LeftJoin_CountPerTract_2, 
                style: style_LeftJoin_CountPerTract_2,
                interactive: true,
    title: 'LeftJoin_CountPerTract<br />\
    <img src="styles/legend/LeftJoin_CountPerTract_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/LeftJoin_CountPerTract_2_1.png" /> 0 - 2<br />\
    <img src="styles/legend/LeftJoin_CountPerTract_2_2.png" /> 2 - 5<br />\
    <img src="styles/legend/LeftJoin_CountPerTract_2_3.png" /> 5 - 10<br />\
    <img src="styles/legend/LeftJoin_CountPerTract_2_4.png" /> 10 - 17<br />'
        });
var format_SLCo_Healthcare_Facilities_3 = new ol.format.GeoJSON();
var features_SLCo_Healthcare_Facilities_3 = format_SLCo_Healthcare_Facilities_3.readFeatures(json_SLCo_Healthcare_Facilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_Healthcare_Facilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_Healthcare_Facilities_3.addFeatures(features_SLCo_Healthcare_Facilities_3);
var lyr_SLCo_Healthcare_Facilities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_Healthcare_Facilities_3, 
                style: style_SLCo_Healthcare_Facilities_3,
                interactive: true,
                title: '<img src="styles/legend/SLCo_Healthcare_Facilities_3.png" /> SLCo_Healthcare_Facilities'
            });

lyr_SLCo_County_Boundary_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LeftJoin_CountPerTract_2.setVisible(true);lyr_SLCo_Healthcare_Facilities_3.setVisible(true);
var layersList = [lyr_SLCo_County_Boundary_0,lyr_OpenStreetMap_1,lyr_LeftJoin_CountPerTract_2,lyr_SLCo_Healthcare_Facilities_3];
lyr_SLCo_County_Boundary_0.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'countynbr': 'countynbr', 'entitynbr': 'entitynbr', 'entityyr': 'entityyr', 'name': 'name', 'fips': 'fips', 'stateplane': 'stateplane', 'pop_lastce': 'pop_lastce', 'pop_curres': 'pop_curres', 'globalid': 'globalid', 'fips_str': 'fips_str', 'color4': 'color4', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_LeftJoin_CountPerTract_2.set('fieldAliases', {'objectid': 'objectid', 'geoid10': 'geoid10', 'total_count': 'total_count', 'Integer_Tot_Count': 'Integer_Tot_Count', });
lyr_SLCo_Healthcare_Facilities_3.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'factype': 'factype', 'facility_i': 'facility_i', 'facid': 'facid', 'name': 'name', 'address': 'address', 'city': 'city', 'zip': 'zip', 'telephone': 'telephone', 'type': 'type', 'county': 'county', 'telehealth': 'telehealth', 'functional': 'functional', });
lyr_SLCo_County_Boundary_0.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'countynbr': 'TextEdit', 'entitynbr': 'TextEdit', 'entityyr': 'TextEdit', 'name': 'TextEdit', 'fips': 'TextEdit', 'stateplane': 'TextEdit', 'pop_lastce': 'TextEdit', 'pop_curres': 'TextEdit', 'globalid': 'TextEdit', 'fips_str': 'TextEdit', 'color4': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_LeftJoin_CountPerTract_2.set('fieldImages', {'objectid': 'TextEdit', 'geoid10': 'TextEdit', 'total_count': 'TextEdit', 'Integer_Tot_Count': 'Range', });
lyr_SLCo_Healthcare_Facilities_3.set('fieldImages', {'pk': '', 'objectid': '', 'factype': '', 'facility_i': '', 'facid': '', 'name': '', 'address': '', 'city': '', 'zip': '', 'telephone': '', 'type': '', 'county': '', 'telehealth': '', 'functional': '', });
lyr_SLCo_County_Boundary_0.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'countynbr': 'no label', 'entitynbr': 'no label', 'entityyr': 'no label', 'name': 'no label', 'fips': 'no label', 'stateplane': 'no label', 'pop_lastce': 'no label', 'pop_curres': 'no label', 'globalid': 'no label', 'fips_str': 'no label', 'color4': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_LeftJoin_CountPerTract_2.set('fieldLabels', {'objectid': 'no label', 'geoid10': 'no label', 'total_count': 'no label', 'Integer_Tot_Count': 'no label', });
lyr_SLCo_Healthcare_Facilities_3.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'factype': 'header label', 'facility_i': 'no label', 'facid': 'no label', 'name': 'header label', 'address': 'no label', 'city': 'header label', 'zip': 'no label', 'telephone': 'no label', 'type': 'no label', 'county': 'no label', 'telehealth': 'no label', 'functional': 'no label', });
lyr_SLCo_Healthcare_Facilities_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});