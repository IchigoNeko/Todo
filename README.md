# Aufgabe
Bitte setze eine Anwendung um, die folgende Funktionen beinhaltet.

## Anforderung
Erstellt werden soll eine Anwendung zur Aufgabenverwaltung (Todo-Liste). Ruft der Nutzer die Anwendung auf, so werden die Aufgaben angezeigt.
Sind keine Aufgaben vorhanden, wird ein Formular zum Hinzufügen neuer Aufgaben zur Aufgabenliste angezeigt.
In der gesamten Anwendung hat der Nutzer die Möglichkeit, neue Aufgaben zu erstellen. Eine Aufgabe besteht dabei wenigstens aus folgenden drei Teilen:

- Titel
- Beschreibung
- Fälligkeitsdatum

Bei der Eigenschaft 'Titel' handelt es sich um ein Pflichtfeld. Beschreibung und Fälligkeitsdatum sind optional. Bald ablaufende und abgelaufene Aufgaben sollen speziell gekennzeichnet werden.
Des Weiteren hat der Nutzer die Möglichkeit, Aufgaben zu bearbeiten, abzuschließen oder zu löschen. Es ist ausreichend ein Template für die Struktur zu erstellen. Eine Persistierung der Daten ist nicht notwendig. Die Anwendung soll intuitiv und nutzerfreundlich sein.
Nutze moderne technische Ansätze, verwende entsprechende Frameworks oder vorzugsweise eine eigene Gestaltung, um eine übersichtliche und wiederzuerkennende Anwendung zu schaffen. Es gibt für das Erscheinungsbild und die Handhabung keine Vorgaben.

Die Applikation sollte mit den gängigsten Browsern genutzt werden können.

## Nächste Schritte

Wenn du fertig bist, dann lass uns gerne teilhaben.
Stell uns zudem deinen Quellcode zur Verfügung, so dass einer unserer Entwickler die Anwendung selbst starten kann.

Sobald wir alles gesichtet haben, sprechen wir die weiteren Schritte mit dir ab.

Für Fragen stehen wir dir gern zur Verfügung.

# Für die Entwicklung

## Was benötigst du?
- Docker
- ddev

Anleitung: https://ddev.readthedocs.io/en/stable/

## Projektstart

    $ ddev start
    $ ddev composer install
    $ ddev import-db --src=db.sql.gz

## Backendnutzer
    $ Benutzer: admin
    $ Passwort: Admin1234!