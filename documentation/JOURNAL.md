# Design 

J’ai créé une première version de ce que je voudrais à la base, puis j’ai demandé à l’IA de me proposer un modèle plus moderne, tout en conservant les éléments que j’aimais.

- Date : 9 septembre 2026
- Prompt : Améliore le portfolio (image intégrée)
- Outil : Stitch
- Résultat : https://cmontmorency365-my.sharepoint.com/:i:/g/personal/2497981_cmontmorency_qc_ca/IQAlH3YKStk6R6feHdGDwNsBARYgkxfwso3PV_O6z6yATDM?e=V2JDiQ


# Code 

- Date : 1 Octobre 2026
- Prompt : je veux un fond de site web style fond marin qui reagit au scroll avec des bulles
- Outil : Gemini Pro
- Résultat : Le background de mon site

- Date : 9 Octobre 2026
- Prompt : comment mettre un :focus sans a
- Outil : Gemini
- Résultat : Si vous voulez qu'une <div> ou un paragraphe réagisse au :focus, vous devez obligatoirement lui ajouter tabindex="0" pour qu'un utilisateur puisse l'atteindre (au clavier ou au clic)

- Date : 13 Octobre 2026
- Prompt : j'ai quelques problemes avec mes animations lorsque les pages sont plus petite
- Outil : Gemini Pro
- Résultat : La solution standard avec GSAP consiste à utiliser gsap.matchMedia(). Cela permet d'adapter ou d'adoucir les animations spécifiquement pour le mobile, tout en conservant les effets complets sur grand écran.

- Date : 14 Octobre 2026
- Prompt : je veux faire en sorte de prendre les données de mon json actuel et de l'injecter dans mon modal. Les informations du projets cliqués sont affichés
- Outil : Gemini Pro
- Résultat : Pour injecter directement l'objet JavaScript correspondant au projet cliqué sans tout dupliquer dans des attributs HTML, la méthode la plus propre consiste à conserver le tableau projects en mémoire et à associer chaque carte par un identifiant ou son index (data-id ou data-index).

- Date : 15 Octobre 2026
- Prompt : Comment faire pour désactiver les animations lorsque une personne coche l'option windows
- Outil : Gemini Pro
- Résultat : Pour respecter le choix d'un utilisateur qui a désactivé les animations dans les paramètres d'accessibilité de Windows, on utilise la règle CSS média query prefers-reduced-motion.