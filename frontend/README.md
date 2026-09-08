# Funktionsbeschreibung – Pokédex Projekt:
- Bei meinem Projekt handelt es sich um meinen Pokédex.
- Die Webseite lädt automatisch Pokémon über eine API und zeigt sie übersichtlich als Karten auf der Webseite an.

## Pokémon laden
- Beim Start der Webseite wird die Funktion `init()` ausgeführt.
- Dabei werden zunächst 24 Pokémon aus der API geladen.
- Während des Ladevorgangs wird ein Loading-Spinner angezeigt.
- Die Funktion `loadPokemons()` ruft die Pokémon-Daten von der **PokéAPI** ab und lädt zusätzlich Informationen zu jedem Pokémon.

## Pokémon anzeigen
- Die geladenen Pokémon werden mit `renderAllPokemons()` auf der Webseite angezeigt.
- Jedes Pokémon wird als eigene Karte angezeigt.
- Auf der Karte werden unter anderem der Name, die ID, das Bild und die Pokémon-Typen angezeigt.

## Weitere Pokémon laden
- Über den Button **„Load more Pokémon“** können weitere Pokémon geladen werden.
- Die Funktion `loadMorePokemons()` lädt jeweils 24 weitere Pokémon und fügt diese zu den bereits angezeigten Pokémon hinzu.
- Während des Ladevorgangs wird der Button deaktiviert und der Loading-Spinner angezeigt.

## Pokémon suchen
- Über das Suchfeld im oberen Bereich kann nach Pokémon gesucht werden.
- Die Funktion `searchPkm()` überprüft die Eingabe und filtert die bereits geladenen Pokémon nach ihrem Namen.

* Bei weniger als 3 eingegebenen Zeichen wird eine Meldung angezeigt.
* Ab 3 Zeichen wird nach passenden Pokémon gesucht.
* Wird das Suchfeld geleert, werden wieder alle geladenen Pokémon angezeigt.

## Größe Ansicht
- Wenn man auf eine Pokémon-Karte klickt, wird mit `openPkmDialog()` ein Fenster mit weiteren Informationen geöffnet.
- In diesem Fenster können zusätzliche Informationen wie Werte und Fähigkeiten des Pokémon angezeigt werden.
- Während das Fenster geöffnet ist, kann die Seite im Hintergrund nicht gescrollt werden.

## Navigation zwischen Pokémon
- Im Detailfenster gibt es einen **Zurück- und Weiter-Button**.
- Mit `prevPokemon()` kann man zum vorherigen Pokémon wechseln und mit `nextPokemon()` zum nächsten Pokémon.
- Wenn man am Ende der Liste angekommen ist, beginnt die Navigation wieder beim ersten Pokémon.

## Große Ansicht schließen
- Das Detailfenster kann über den **Close-Button** geschlossen werden.
- Zusätzlich kann das Fenster geschlossen werden, indem man auf den dunklen Hintergrund außerhalb des Fensters klickt.

## Tabs
- Die Detailansicht besitzt verschiedene Tabs.
- Mit der Funktion `showTab()` kann zwischen den einzelnen Bereichen gewechselt werden, zum Beispiel zwischen allgemeinen Informationen und Fähigkeiten.

## Responsive Design
- Die Webseite ist **responsive** aufgebaut.
- Durch Media Queries passt sich das Layout an kleinere Bildschirmgrößen wie Tablets und Smartphones an.
- Dadurch werden beispielsweise die Suchleiste und die Navigation auf kleinen Bildschirmen anders angeordnet.

## Verwendete Technik
* **HTML** – Aufbau der Webseite
* **CSS** – Gestaltung und responsive Darstellung
* **JavaScript** – Funktionen und Interaktionen
* **PokéAPI** – Quelle für die Pokémon-Daten
* **Fetch API** – Abrufen der Daten von der PokéAPI

## ## Änderungen

## Dialog angepasst

* Navigationspfeile angepasst und im Footer positioniert
* Schließen-Button als X oben rechts angepasst
* Größe der Pokémon-Karte auf 310 × 500 px festgelegt
* Kartenstruktur mit Header, Main und Footer angepasst
* Kartenverzerrung durch feste Größe und Flexbox-Struktur verhindert
