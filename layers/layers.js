var wms_layers = [];


        var lyr_CyclOSM_0 = new ol.layer.Tile({
            'title': 'Cycl OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMTransporte_1 = new ol.layer.Tile({
            'title': 'OSM Transporte',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=c53dec1fe5194b388263ae8a9b9ebb78'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTraffic_4 = new ol.layer.Tile({
            'title': 'Google Traffic ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_Comunas_5 = new ol.format.GeoJSON();
var features_Comunas_5 = format_Comunas_5.readFeatures(json_Comunas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunas_5.addFeatures(features_Comunas_5);
var lyr_Comunas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunas_5, 
                style: style_Comunas_5,
                interactive: false,
                title: '<img src="styles/legend/Comunas_5.png" /> Comunas'
            });
var format_Barrios_6 = new ol.format.GeoJSON();
var features_Barrios_6 = format_Barrios_6.readFeatures(json_Barrios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_6.addFeatures(features_Barrios_6);
var lyr_Barrios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barrios_6, 
                style: style_Barrios_6,
                interactive: false,
                title: '<img src="styles/legend/Barrios_6.png" /> Barrios'
            });
var format_ZONA_TARIFADA_ACTUAL_7 = new ol.format.GeoJSON();
var features_ZONA_TARIFADA_ACTUAL_7 = format_ZONA_TARIFADA_ACTUAL_7.readFeatures(json_ZONA_TARIFADA_ACTUAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA_TARIFADA_ACTUAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_TARIFADA_ACTUAL_7.addFeatures(features_ZONA_TARIFADA_ACTUAL_7);
var lyr_ZONA_TARIFADA_ACTUAL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA_TARIFADA_ACTUAL_7, 
                style: style_ZONA_TARIFADA_ACTUAL_7,
                interactive: false,
                title: '<img src="styles/legend/ZONA_TARIFADA_ACTUAL_7.png" /> ZONA_TARIFADA_ACTUAL'
            });
var format_Colectivos2023_8 = new ol.format.GeoJSON();
var features_Colectivos2023_8 = format_Colectivos2023_8.readFeatures(json_Colectivos2023_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colectivos2023_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colectivos2023_8.addFeatures(features_Colectivos2023_8);
var lyr_Colectivos2023_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colectivos2023_8, 
                style: style_Colectivos2023_8,
                interactive: false,
                title: '<img src="styles/legend/Colectivos2023_8.png" /> Colectivos 2023'
            });
var format_RedVial_9 = new ol.format.GeoJSON();
var features_RedVial_9 = format_RedVial_9.readFeatures(json_RedVial_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_9.addFeatures(features_RedVial_9);
var lyr_RedVial_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVial_9, 
                style: style_RedVial_9,
                interactive: false,
    title: 'Red Vial<br />\
    <img src="styles/legend/RedVial_9_0.png" /> VÍA DISTRIBUIDORA COMPLEMENTARIA<br />\
    <img src="styles/legend/RedVial_9_1.png" /> VÍA DISTRIBUIDORA PRINCIPAL<br />\
    <img src="styles/legend/RedVial_9_2.png" /> VÍA LOCAL<br />\
    <img src="styles/legend/RedVial_9_3.png" /> VÍA TRONCAL<br />\
    <img src="styles/legend/RedVial_9_4.png" /> <br />'
        });
var format_TransitoPesado_10 = new ol.format.GeoJSON();
var features_TransitoPesado_10 = format_TransitoPesado_10.readFeatures(json_TransitoPesado_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransitoPesado_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransitoPesado_10.addFeatures(features_TransitoPesado_10);
var lyr_TransitoPesado_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransitoPesado_10, 
                style: style_TransitoPesado_10,
                interactive: false,
                title: '<img src="styles/legend/TransitoPesado_10.png" /> Transito Pesado '
            });
var format_Anchodecalzada_11 = new ol.format.GeoJSON();
var features_Anchodecalzada_11 = format_Anchodecalzada_11.readFeatures(json_Anchodecalzada_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anchodecalzada_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anchodecalzada_11.addFeatures(features_Anchodecalzada_11);
var lyr_Anchodecalzada_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anchodecalzada_11, 
                style: style_Anchodecalzada_11,
                interactive: true,
                title: '<img src="styles/legend/Anchodecalzada_11.png" /> Ancho de calzada'
            });
var format_ESTACIONAMIENTO_12 = new ol.format.GeoJSON();
var features_ESTACIONAMIENTO_12 = format_ESTACIONAMIENTO_12.readFeatures(json_ESTACIONAMIENTO_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONAMIENTO_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONAMIENTO_12.addFeatures(features_ESTACIONAMIENTO_12);
var lyr_ESTACIONAMIENTO_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONAMIENTO_12, 
                style: style_ESTACIONAMIENTO_12,
                interactive: false,
    title: 'ESTACIONAMIENTO<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_0.png" /> PERMITIDO ESTACIONAR 24 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_1.png" /> PERMITIDO ESTACIONAR A 45° 24 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_2.png" /> PERMITIDO ESTACIONAR A 90° 24 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_3.png" /> PERMITIDO ESTACIONAR PARALELO A CICLOVIA 24 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_4.png" /> PROHIBIDO ESTACIONAR 24 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_5.png" /> PROHIBIDO ESTACIONAR DIAS HABILES DE 7 A 21 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_6.png" /> PROHIBIDO ESTACIONAR Y DETENERSE 24 HORAS<br />\
    <img src="styles/legend/ESTACIONAMIENTO_12_7.png" /> <br />'
        });

lyr_CyclOSM_0.setVisible(false);lyr_OSMTransporte_1.setVisible(false);lyr_GoogleMaps_2.setVisible(false);lyr_OpenStreetMap_3.setVisible(true);lyr_GoogleTraffic_4.setVisible(false);lyr_Comunas_5.setVisible(true);lyr_Barrios_6.setVisible(false);lyr_ZONA_TARIFADA_ACTUAL_7.setVisible(false);lyr_Colectivos2023_8.setVisible(false);lyr_RedVial_9.setVisible(false);lyr_TransitoPesado_10.setVisible(false);lyr_Anchodecalzada_11.setVisible(false);lyr_ESTACIONAMIENTO_12.setVisible(false);
var layersList = [lyr_CyclOSM_0,lyr_OSMTransporte_1,lyr_GoogleMaps_2,lyr_OpenStreetMap_3,lyr_GoogleTraffic_4,lyr_Comunas_5,lyr_Barrios_6,lyr_ZONA_TARIFADA_ACTUAL_7,lyr_Colectivos2023_8,lyr_RedVial_9,lyr_TransitoPesado_10,lyr_Anchodecalzada_11,lyr_ESTACIONAMIENTO_12];
lyr_Comunas_5.set('fieldAliases', {'BARRIOS': 'BARRIOS', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', 'COMUNAS': 'COMUNAS', 'ID': 'ID', 'OBJETO': 'OBJETO', 'numero': 'numero', });
lyr_Barrios_6.set('fieldAliases', {'BARRIOS': 'BARRIOS', 'COMUNA': 'COMUNA', 'NUM_DE_BAR': 'NUM_DE_BAR', });
lyr_ZONA_TARIFADA_ACTUAL_7.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'ZONA': 'ZONA', });
lyr_Colectivos2023_8.set('fieldAliases', {'id': 'id', 'linea': 'linea', 'recorrido': 'recorrido', 'sentido': 'sentido', 'l_r_s': 'l_r_s', 'long_kmp07': 'long_kmp07', 'long_caba': 'long_caba', 'porc_caba': 'porc_caba', 'long_mtb': 'long_mtb', 'porc_mtb': 'porc_mtb', 'l_flores': 'l_flores', 'p_flores': 'p_flores', 'l_pacif': 'l_pacif', 'p_pacif': 'p_pacif', 'l_jbjus': 'l_jbjus', 'p_jbjus': 'p_jbjus', 'l_9jul': 'l_9jul', 'p_9jul': 'p_9jul', 'l_bajo': 'l_bajo', 'p_bajo': 'p_bajo', 'l_mat': 'l_mat', 'p_mat': 'p_mat', 'l_nor': 'l_nor', 'p_nor': 'p_nor', 'l_rut8': 'l_rut8', 'p_rut8': 'p_rut8', 'l_scru': 'l_scru', 'p_scru': 'p_scru', 'l_smar': 'l_smar', 'p_smar': 'p_smar', 'l_sroc': 'l_sroc', 'p_sroc': 'p_sroc', 'long_au': 'long_au', 'porc_au': 'porc_au', 'entidad_su': 'entidad_su', 'linea_sube': 'linea_sube', 'ramal_sube': 'ramal_sube', 'l_r': 'l_r', 'desde': 'desde', 'hasta': 'hasta', 'Mod_CABA': 'Mod_CABA', 'Modif_Obs': 'Modif_Obs', 'layer': 'layer', 'path': 'path', });
lyr_RedVial_9.set('fieldAliases', {'id': 'id', 'codigo': 'codigo', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', });
lyr_TransitoPesado_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_Anchodecalzada_11.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'ancho': 'ancho', });
lyr_ESTACIONAMIENTO_12.set('fieldAliases', {'id': 'id', 'version': 'version', 'operation': 'operation', 'name': 'name', 'remarks': 'remarks', 'zone': 'zone', 'rates': 'rates', 'colour': 'colour', 'app_ini_da': 'app_ini_da', 'app_end_da': 'app_end_da', 'no_from': 'no_from', 'no_to': 'no_to', 'street': 'street', 'side': 'side', 'rule': 'rule', 'stage': 'stage', 'street_no': 'street_no', 'street_fro': 'street_fro', 'street_to': 'street_to', 'total_spac': 'total_spac', 'reserved_s': 'reserved_s', 'list_space': 'list_space', 'no': 'no', 'status': 'status', 'occupancy_': 'occupancy_', 'rate_space': 'rate_space', 'numeration': 'numeration', 'tipo_c': 'tipo_c', 'sentido': 'sentido', 'id_normati': 'id_normati', 'cod_street': 'cod_street', 'comuna': 'comuna', 'logistica': 'logistica', 'longitud': 'longitud', });
lyr_Comunas_5.set('fieldImages', {'BARRIOS': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREA': 'TextEdit', 'COMUNAS': 'TextEdit', 'ID': 'Range', 'OBJETO': 'TextEdit', 'numero': 'Range', });
lyr_Barrios_6.set('fieldImages', {'BARRIOS': 'TextEdit', 'COMUNA': 'Range', 'NUM_DE_BAR': 'TextEdit', });
lyr_ZONA_TARIFADA_ACTUAL_7.set('fieldImages', {'ID': '', 'AREA': '', 'ZONA': '', });
lyr_Colectivos2023_8.set('fieldImages', {'id': 'TextEdit', 'linea': 'TextEdit', 'recorrido': 'TextEdit', 'sentido': 'TextEdit', 'l_r_s': 'TextEdit', 'long_kmp07': 'TextEdit', 'long_caba': 'TextEdit', 'porc_caba': 'TextEdit', 'long_mtb': 'TextEdit', 'porc_mtb': 'TextEdit', 'l_flores': 'TextEdit', 'p_flores': 'TextEdit', 'l_pacif': 'TextEdit', 'p_pacif': 'TextEdit', 'l_jbjus': 'TextEdit', 'p_jbjus': 'TextEdit', 'l_9jul': 'TextEdit', 'p_9jul': 'TextEdit', 'l_bajo': 'TextEdit', 'p_bajo': 'TextEdit', 'l_mat': 'TextEdit', 'p_mat': 'TextEdit', 'l_nor': 'TextEdit', 'p_nor': 'TextEdit', 'l_rut8': 'TextEdit', 'p_rut8': 'TextEdit', 'l_scru': 'TextEdit', 'p_scru': 'TextEdit', 'l_smar': 'TextEdit', 'p_smar': 'TextEdit', 'l_sroc': 'TextEdit', 'p_sroc': 'TextEdit', 'long_au': 'TextEdit', 'porc_au': 'TextEdit', 'entidad_su': 'TextEdit', 'linea_sube': 'TextEdit', 'ramal_sube': 'TextEdit', 'l_r': 'TextEdit', 'desde': 'TextEdit', 'hasta': 'TextEdit', 'Mod_CABA': 'TextEdit', 'Modif_Obs': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RedVial_9.set('fieldImages', {'id': 'TextEdit', 'codigo': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', });
lyr_TransitoPesado_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Anchodecalzada_11.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'codigo': 'TextEdit', 'nomoficial': 'TextEdit', 'alt_izqini': 'TextEdit', 'alt_izqfin': 'TextEdit', 'alt_derini': 'TextEdit', 'alt_derfin': 'TextEdit', 'ancho': 'TextEdit', });
lyr_ESTACIONAMIENTO_12.set('fieldImages', {'id': 'TextEdit', 'version': 'TextEdit', 'operation': 'TextEdit', 'name': 'TextEdit', 'remarks': 'TextEdit', 'zone': 'TextEdit', 'rates': 'TextEdit', 'colour': 'TextEdit', 'app_ini_da': 'DateTime', 'app_end_da': 'DateTime', 'no_from': 'TextEdit', 'no_to': 'TextEdit', 'street': 'TextEdit', 'side': 'TextEdit', 'rule': 'TextEdit', 'stage': 'TextEdit', 'street_no': 'TextEdit', 'street_fro': 'TextEdit', 'street_to': 'TextEdit', 'total_spac': 'TextEdit', 'reserved_s': 'TextEdit', 'list_space': 'TextEdit', 'no': 'TextEdit', 'status': 'TextEdit', 'occupancy_': 'TextEdit', 'rate_space': 'TextEdit', 'numeration': 'TextEdit', 'tipo_c': 'TextEdit', 'sentido': 'TextEdit', 'id_normati': 'TextEdit', 'cod_street': 'TextEdit', 'comuna': 'TextEdit', 'logistica': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Comunas_5.set('fieldLabels', {'BARRIOS': 'no label', 'PERIMETRO': 'no label', 'AREA': 'no label', 'COMUNAS': 'no label', 'ID': 'no label', 'OBJETO': 'no label', 'numero': 'no label', });
lyr_Barrios_6.set('fieldLabels', {'BARRIOS': 'no label', 'COMUNA': 'no label', 'NUM_DE_BAR': 'no label', });
lyr_ZONA_TARIFADA_ACTUAL_7.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'ZONA': 'no label', });
lyr_Colectivos2023_8.set('fieldLabels', {'id': 'no label', 'linea': 'no label', 'recorrido': 'no label', 'sentido': 'no label', 'l_r_s': 'no label', 'long_kmp07': 'no label', 'long_caba': 'no label', 'porc_caba': 'no label', 'long_mtb': 'no label', 'porc_mtb': 'no label', 'l_flores': 'no label', 'p_flores': 'no label', 'l_pacif': 'no label', 'p_pacif': 'no label', 'l_jbjus': 'no label', 'p_jbjus': 'no label', 'l_9jul': 'no label', 'p_9jul': 'no label', 'l_bajo': 'no label', 'p_bajo': 'no label', 'l_mat': 'no label', 'p_mat': 'no label', 'l_nor': 'no label', 'p_nor': 'no label', 'l_rut8': 'no label', 'p_rut8': 'no label', 'l_scru': 'no label', 'p_scru': 'no label', 'l_smar': 'no label', 'p_smar': 'no label', 'l_sroc': 'no label', 'p_sroc': 'no label', 'long_au': 'no label', 'porc_au': 'no label', 'entidad_su': 'no label', 'linea_sube': 'no label', 'ramal_sube': 'no label', 'l_r': 'no label', 'desde': 'no label', 'hasta': 'no label', 'Mod_CABA': 'no label', 'Modif_Obs': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_RedVial_9.set('fieldLabels', {'id': 'no label', 'codigo': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', });
lyr_TransitoPesado_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_Anchodecalzada_11.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'ancho': 'inline label', });
lyr_ESTACIONAMIENTO_12.set('fieldLabels', {'id': 'no label', 'version': 'no label', 'operation': 'no label', 'name': 'no label', 'remarks': 'no label', 'zone': 'no label', 'rates': 'no label', 'colour': 'no label', 'app_ini_da': 'no label', 'app_end_da': 'no label', 'no_from': 'no label', 'no_to': 'no label', 'street': 'no label', 'side': 'no label', 'rule': 'no label', 'stage': 'no label', 'street_no': 'no label', 'street_fro': 'no label', 'street_to': 'no label', 'total_spac': 'no label', 'reserved_s': 'no label', 'list_space': 'no label', 'no': 'no label', 'status': 'no label', 'occupancy_': 'no label', 'rate_space': 'no label', 'numeration': 'no label', 'tipo_c': 'no label', 'sentido': 'no label', 'id_normati': 'no label', 'cod_street': 'no label', 'comuna': 'no label', 'logistica': 'no label', 'longitud': 'no label', });
lyr_ESTACIONAMIENTO_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});