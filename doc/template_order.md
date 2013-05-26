# enter app.js
1. app_start
1. app_requires

## back to dialog

# create new file view/Viewport.js
1. viewport_start
1. viewport_items
1. viewport_requires

## back to dialog

# create new file view/lieferant/LieferantVerwaltung.js
1. lieferantverwaltung_start
1. lieferantverwaltung_initcomponent
1. lieferantverwaltung_builditems
1. lieferantverwaltung_requires

# create new file view/lieferant/LieferantenGrid.js
1. lieferantengrid_start
1. lieferantengrid_tbar

# create new file view/bestellung/BestellungUebersicht.js
1. bestellunguebersicht_start
1. bestellunguebersicht_initcomponent
1. bestellunguebersicht_requires

# create new file view/bestellung/BestellungFormular.js
1. bestellungformular_start
1. bestellungformular_initcomponent
1. bestellungformular_builditems

# create new file view/bestellung/BestellungGrid.js
1. bestellunggrid_start

## f5

# create new file model/Bestellung.js
1. bestellung_start

# create new file model/Lieferant.js
1. lieferant_start

# create new file store/Bestellungen.js
1. bestellungen_start
1. bestellungen_model
1. bestellungen_proxy
1. bestellungen_sorters

# create new file store/Lieferanten.js
1. lieferanten_start

# go to file view/lieferant/LieferantenGrid.js
1. lieferantengrid_store
1. lieferantengrid_columns

# create new file controller/Lieferant.js
1. controllerlieferant_start

# go to file app.js
1. app_controller_1

## f5
wir können jetzt Lieferanten anlegen.

# go to file controller/Lieferant.js
1. controllerlieferant_control
1. controllerlieferant_more
1. controllerlieferant_refs

## f5
wir können jetzt Lieferanten aktualisieren und entfernen.

# create new file controller/Bestellung.js
1. controllerbestellung_start
1. controllerbestellung_create
1. controllerbestellung_load
1. controllerbestellung_remove
1. controllerbestellung_save
1. controllerbestellung_update
1. controllerbestellung_control

# go to file view/bestellung/BestellungFormular.js
1. bestellungformular_store

# go to file app.js
1. app_controller_2

## f5
wir können jetzt Bestellungen aufnehmen.

# go to file view/bestellung/BestellungGrid.js
1. bestellunggrid_store
1. bestellunggrid_features
1. bestellunggrid_delete_event
1. bestellunggrid_columns

## f5
wir können jetzt Bestellungen löschen.