var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SLCo_CensusTracts_1 = new ol.format.GeoJSON();
var features_SLCo_CensusTracts_1 = format_SLCo_CensusTracts_1.readFeatures(json_SLCo_CensusTracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_CensusTracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_CensusTracts_1.addFeatures(features_SLCo_CensusTracts_1);
var lyr_SLCo_CensusTracts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_CensusTracts_1, 
                style: style_SLCo_CensusTracts_1,
                interactive: true,
                title: '<img src="styles/legend/SLCo_CensusTracts_1.png" /> SLCo_CensusTracts'
            });
var format_Crashes_2015_2 = new ol.format.GeoJSON();
var features_Crashes_2015_2 = format_Crashes_2015_2.readFeatures(json_Crashes_2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crashes_2015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crashes_2015_2.addFeatures(features_Crashes_2015_2);
var lyr_Crashes_2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crashes_2015_2, 
                style: style_Crashes_2015_2,
                interactive: true,
                title: '<img src="styles/legend/Crashes_2015_2.png" /> Crashes_2015'
            });
var format_Crashes_2016_3 = new ol.format.GeoJSON();
var features_Crashes_2016_3 = format_Crashes_2016_3.readFeatures(json_Crashes_2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crashes_2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crashes_2016_3.addFeatures(features_Crashes_2016_3);
var lyr_Crashes_2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crashes_2016_3, 
                style: style_Crashes_2016_3,
                interactive: true,
                title: '<img src="styles/legend/Crashes_2016_3.png" /> Crashes_2016'
            });
var format_Crashes_2017_4 = new ol.format.GeoJSON();
var features_Crashes_2017_4 = format_Crashes_2017_4.readFeatures(json_Crashes_2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crashes_2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crashes_2017_4.addFeatures(features_Crashes_2017_4);
var lyr_Crashes_2017_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crashes_2017_4, 
                style: style_Crashes_2017_4,
                interactive: true,
                title: '<img src="styles/legend/Crashes_2017_4.png" /> Crashes_2017'
            });
var format_Crashes_2018_5 = new ol.format.GeoJSON();
var features_Crashes_2018_5 = format_Crashes_2018_5.readFeatures(json_Crashes_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crashes_2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crashes_2018_5.addFeatures(features_Crashes_2018_5);
var lyr_Crashes_2018_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crashes_2018_5, 
                style: style_Crashes_2018_5,
                interactive: true,
                title: '<img src="styles/legend/Crashes_2018_5.png" /> Crashes_2018'
            });
var format_Crashes_2019_6 = new ol.format.GeoJSON();
var features_Crashes_2019_6 = format_Crashes_2019_6.readFeatures(json_Crashes_2019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crashes_2019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crashes_2019_6.addFeatures(features_Crashes_2019_6);
var lyr_Crashes_2019_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crashes_2019_6, 
                style: style_Crashes_2019_6,
                interactive: true,
                title: '<img src="styles/legend/Crashes_2019_6.png" /> Crashes_2019'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SLCo_CensusTracts_1.setVisible(true);lyr_Crashes_2015_2.setVisible(true);lyr_Crashes_2016_3.setVisible(true);lyr_Crashes_2017_4.setVisible(true);lyr_Crashes_2018_5.setVisible(true);lyr_Crashes_2019_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SLCo_CensusTracts_1,lyr_Crashes_2015_2,lyr_Crashes_2016_3,lyr_Crashes_2017_4,lyr_Crashes_2018_5,lyr_Crashes_2019_6];
lyr_SLCo_CensusTracts_1.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'statefp10': 'statefp10', 'countyfp10': 'countyfp10', 'tractce10': 'tractce10', 'geoid10': 'geoid10', 'name10': 'name10', 'funcstat10': 'funcstat10', 'intptlat10': 'intptlat10', 'intptlon10': 'intptlon10', 'logrecno': 'logrecno', 'arealand': 'arealand', 'areawatr': 'areawatr', 'pop100': 'pop100', 'hu100': 'hu100', 'p0020001': 'p0020001', 'p0020002': 'p0020002', 'p0020003': 'p0020003', 'p0020004': 'p0020004', 'p0020005': 'p0020005', 'p0020006': 'p0020006', 'p0020007': 'p0020007', 'p0020008': 'p0020008', 'p0020009': 'p0020009', 'p0020010': 'p0020010', 'mtfcc': 'mtfcc', 'p0010011': 'p0010011', 'p0010012': 'p0010012', 'p0010013': 'p0010013', 'p0010014': 'p0010014', 'sqmiles': 'sqmiles', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Crashes_2015_2.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'County_nam': 'County_nam', 'pedestrian': 'pedestrian', 'GCS_long || gcs_lat': 'GCS_long || gcs_lat', 'year': 'year', 'X': 'X', 'Y': 'Y', });
lyr_Crashes_2016_3.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'County_nam': 'County_nam', 'pedestrian': 'pedestrian', 'GCS_long || gcs_lat': 'GCS_long || gcs_lat', 'year': 'year', 'X': 'X', 'Y': 'Y', });
lyr_Crashes_2017_4.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'County_nam': 'County_nam', 'pedestrian': 'pedestrian', 'GCS_long || gcs_lat': 'GCS_long || gcs_lat', 'year': 'year', 'X': 'X', 'Y': 'Y', });
lyr_Crashes_2018_5.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'County_nam': 'County_nam', 'pedestrian': 'pedestrian', 'GCS_long || gcs_lat': 'GCS_long || gcs_lat', 'year': 'year', 'X': 'X', 'Y': 'Y', });
lyr_Crashes_2019_6.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'County_nam': 'County_nam', 'pedestrian': 'pedestrian', 'GCS_long || gcs_lat': 'GCS_long || gcs_lat', 'year': 'year', 'X': 'X', 'Y': 'Y', });
lyr_SLCo_CensusTracts_1.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'statefp10': 'TextEdit', 'countyfp10': 'TextEdit', 'tractce10': 'TextEdit', 'geoid10': 'TextEdit', 'name10': 'TextEdit', 'funcstat10': 'TextEdit', 'intptlat10': 'TextEdit', 'intptlon10': 'TextEdit', 'logrecno': 'TextEdit', 'arealand': 'TextEdit', 'areawatr': 'TextEdit', 'pop100': 'TextEdit', 'hu100': 'TextEdit', 'p0020001': 'TextEdit', 'p0020002': 'TextEdit', 'p0020003': 'TextEdit', 'p0020004': 'TextEdit', 'p0020005': 'TextEdit', 'p0020006': 'TextEdit', 'p0020007': 'TextEdit', 'p0020008': 'TextEdit', 'p0020009': 'TextEdit', 'p0020010': 'TextEdit', 'mtfcc': 'TextEdit', 'p0010011': 'TextEdit', 'p0010012': 'TextEdit', 'p0010013': 'TextEdit', 'p0010014': 'TextEdit', 'sqmiles': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Crashes_2015_2.set('fieldImages', {'pk': '', 'objectid': '', 'County_nam': '', 'pedestrian': '', 'GCS_long || gcs_lat': '', 'year': '', 'X': '', 'Y': '', });
lyr_Crashes_2016_3.set('fieldImages', {'pk': '', 'objectid': '', 'County_nam': '', 'pedestrian': '', 'GCS_long || gcs_lat': '', 'year': '', 'X': '', 'Y': '', });
lyr_Crashes_2017_4.set('fieldImages', {'pk': '', 'objectid': '', 'County_nam': '', 'pedestrian': '', 'GCS_long || gcs_lat': '', 'year': '', 'X': '', 'Y': '', });
lyr_Crashes_2018_5.set('fieldImages', {'pk': '', 'objectid': '', 'County_nam': '', 'pedestrian': '', 'GCS_long || gcs_lat': '', 'year': '', 'X': '', 'Y': '', });
lyr_Crashes_2019_6.set('fieldImages', {'pk': '', 'objectid': '', 'County_nam': '', 'pedestrian': '', 'GCS_long || gcs_lat': '', 'year': '', 'X': '', 'Y': '', });
lyr_SLCo_CensusTracts_1.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'statefp10': 'no label', 'countyfp10': 'no label', 'tractce10': 'no label', 'geoid10': 'no label', 'name10': 'no label', 'funcstat10': 'no label', 'intptlat10': 'no label', 'intptlon10': 'no label', 'logrecno': 'no label', 'arealand': 'no label', 'areawatr': 'no label', 'pop100': 'no label', 'hu100': 'no label', 'p0020001': 'no label', 'p0020002': 'no label', 'p0020003': 'no label', 'p0020004': 'no label', 'p0020005': 'no label', 'p0020006': 'no label', 'p0020007': 'no label', 'p0020008': 'no label', 'p0020009': 'no label', 'p0020010': 'no label', 'mtfcc': 'no label', 'p0010011': 'no label', 'p0010012': 'header label', 'p0010013': 'no label', 'p0010014': 'no label', 'sqmiles': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Crashes_2015_2.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'County_nam': 'no label', 'pedestrian': 'no label', 'GCS_long || gcs_lat': 'no label', 'year': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Crashes_2016_3.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'County_nam': 'no label', 'pedestrian': 'no label', 'GCS_long || gcs_lat': 'no label', 'year': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Crashes_2017_4.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'County_nam': 'no label', 'pedestrian': 'no label', 'GCS_long || gcs_lat': 'no label', 'year': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Crashes_2018_5.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'County_nam': 'no label', 'pedestrian': 'no label', 'GCS_long || gcs_lat': 'no label', 'year': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Crashes_2019_6.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'County_nam': 'no label', 'pedestrian': 'no label', 'GCS_long || gcs_lat': 'no label', 'year': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Crashes_2019_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});