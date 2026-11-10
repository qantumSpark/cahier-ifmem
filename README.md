# Cahier IFMEM

Application de révision installable depuis Safari sur iPhone et iPad. Fonctionne également dans un navigateur récent sur ordinateur ou Android.

## Utiliser le cahier

Ouvrir le lien du site dans Safari, puis **Partager → Sur l’écran d’accueil → Ajouter**. Si proposé, activer « Ouvrir comme app web ». Lancer ensuite le cahier depuis cette icône avec une connexion Internet et attendre **Hors ligne prêt**.

Le premier téléchargement représente environ 43 Mo avant compression. Les trois modules sont inclus, soit **340 questions**.

- UE 2.4 Barnault, 120 questions.
- UE 2.4 Révol, 120 questions.
- UE 3.8 Radiobiologie Allignet et Foray, 100 questions.

Séries de vingt, tirage qui favorise les questions peu vues, quatre formats dont les schémas à légender. Chaque validation présente les explications, un rappel et les références. Pour les schémas tactiles, sélectionner l’étiquette puis toucher le repère.

## Données personnelles et hors ligne

La progression est enregistrée uniquement dans le stockage de cet appareil, pour ce navigateur ou cette app web. Aucun compte, aucune collecte de réponses, aucune synchronisation entre collègues ou appareils. Toujours utiliser la même icône pour retrouver ses séries.

Éviter la navigation privée et ne pas effacer les données du site pour conserver la progression. Le système peut libérer le cache en cas de manque d’espace. Vérifier le fonctionnement en mode avion avant un trajet.

## Mise à jour

Ouvrir le cahier avec Internet pour recevoir les mises à jour. Si une nouvelle version est prête, fermer toutes les fenêtres de Cahier IFMEM, puis rouvrir le cahier. L’historique est conservé. Une seconde fenêtre du même cahier est bloquée pour protéger la progression.

## Fabrication et licences

Ce dépôt contient l’export Web Godot 4.6.2 sans threads. L’application et ses banques sont maintenues dans le projet local `applications/revisions-ifmem`. L’export se fabrique avec `web/build_web.py --godot CHEMIN_DE_GODOT`, puis ses fichiers sont copiés ici. La sonde et les données de test ne font pas partie de cet export.

Le moteur est distribué sous licence MIT, jointe dans `GODOT-LICENSE.txt`. Les polices Noto Sans, Noto Serif et Noto Sans Symbols 2 sont distribuées sous SIL Open Font License, licences jointes dans les fichiers `OFL-*.txt`. Les supports pédagogiques conservent leurs attributions.
