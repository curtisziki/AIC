// Base de données des versets bibliques du Nouveau Testament
const verses = {
    "Toutes les categories": [
        // ----------- Versets Foi -------------
        { text: "Jésus leur dit: A cause de votre incrédulité; car, je vous le dis en vérité, si vous aviez de la foi comme un grain de sénevé, vous diriez à cette montagne: Transporte-toi d'ici là, et elle se transporterait; rien ne vous serait impossible.", reference: "Matthieu 17:20" },
        { text: "Jésus leur répondit: Ayez foi en Dieu. Je vous le dis en vérité, si quelqu'un dit à cette montagne: Ote-toi de là et jette-toi dans la mer, et s'il ne doute point en son cœur, mais croit que ce qu'il dit arrive, il le verra s'accomplir.", reference: "Marc 11:22-23" },
        { text: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.", reference: "Hébreux 11:1" },
        { text: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.", reference: "Éphésiens 2:8" },
        { text: "Sans la foi il est impossible de lui être agréable; car il faut que celui qui s'approche de Dieu croie que Dieu existe, et qu'il est le rémunérateur de ceux qui le cherchent.", reference: "Hébreux 11:6" },
        { text: "Jésus lui dit: Ne t'ai-je pas dit que, si tu crois, tu verras la gloire de Dieu?", reference: "Jean 11:40" },
        { text: "Tout est possible à celui qui croit.", reference: "Marc 9:23" },
        { text: "La foi vient de ce qu'on entend, et ce qu'on entend vient de la parole de Christ.", reference: "Romains 10:17" },
        { text: "C'est pourquoi, tenez votre intelligence en éveil, soyez sobres et mettez toute votre espérance dans la grâce qui vous sera apportée lorsque Jésus-Christ apparaîtra.", reference: "1 Pierre 1:13" },
        { text: "Que la grâce de notre Seigneur Jésus-Christ soit avec votre esprit!", reference: "Philémon 1:25" },
        { text: "Ne laissez pas les récompenses de la vie vous détourner de Dieu.", reference: "Hébreux 11:26" },
        { text: "Car il n'y a rien qui ne soit possible pour celui qui croit.", reference: "Marc 9:23" },
        { text: "Car tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.", reference: "Colossiens 3:23" },
        { text: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.", reference: "Actes 1:8" },
        { text: "Jésus lui répondit: Si tu peux!... Tout est possible à celui qui croit.", reference: "Marc 9:23" },
        { text: "C'est pourquoi je vous dis: Tout ce que vous demanderez en priant, croyez que vous l'avez reçu, et vous le verrez s'accomplir.", reference: "Marc 11:24" },
        { text: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.", reference: "Philippiens 4:6" },
        { text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique...", reference: "Jean 3:16" },
        { text: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.", reference: "Éphésiens 2:8" },
        { text: "Sans la foi il est impossible de lui être agréable; car il faut que celui qui s'approche de Dieu croie que Dieu existe, et qu'il est le rémunérateur de ceux qui le cherchent.", reference: "Hébreux 11:6" },
        { text: "Jésus lui dit: Ne t'ai-je pas dit que, si tu crois, tu verras la gloire de Dieu?", reference: "Jean 11:40" },
        { text: "Approchons-nous donc avec assurance du trône de la grâce afin d’obtenir compassion et de trouver grâce pour être secourus au moment opportun.", reference: "Hébreux 4:16" },
        { text: "Car c'est par la foi que nous avons accès au salut, comme il est écrit: La foi fait la perfection de l'homme.", reference: "Hébreux 11:6" },
        { text: "Le Dieu de toute grâce vous a appelés en Jésus-Christ à sa gloire éternelle. Après que vous aurez souffert un peu de temps, il vous rétablira lui-même, vous affermira, vous fortifiera.", reference: "1 Pierre 5:10" },
        { text: "Cependant, l'Eternel n’attend que le moment de vous faire grâce c’est pourquoi il se lèvera pour vous manifester sa compassion.", reference: "Ésaïe 30:18" },
        { text: "Que la grâce de notre Seigneur Jésus-Christ soit avec votre esprit!", reference: "Philémon 1:25" },
        { text: "Et il m'a dit: «Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.»", reference: "2 Corinthiens 12:9" },
        { text: "Si vous pardonnez aux hommes leurs fautes, votre Père céleste vous pardonnera aussi.", reference: "Matthieu 6:14" },
        { text: "En effet, l’Eternel, votre Dieu, fait grâce et est rempli de compassion, et il ne se détournera pas de vous si vous revenez à lui.", reference: "2 Chroniques 30:9" },
        { text: "Ne sois pas timide de parler de notre Seigneur; car il est le Seigneur de toute la terre.", reference: "1 Pierre 3:15" },
        { text: "Oui, le bonheur et la grâce m’accompagneront tous les jours de ma vie et je reviendrai dans la maison de l’Eternel jusqu’à la fin de mes jours.", reference: "Psaume 23:6" },
        { text: "Celui qui cache ses transgressions ne réussira pas, mais on aura compassion de celui qui les reconnaît et les abandonne.", reference: "Proverbes 28:13" },
        { text: "Car le péché n'aura point de pouvoir sur vous, puisque vous êtes, non sous la loi, mais sous la grâce.", reference: "Romains 6:14" },
        { text: "Alors Pierre s'approcha de Jésus et lui dit: «Seigneur, combien de fois pardonnerai-je à mon frère, lorsqu'il péchera contre moi? Est-ce que ce sera jusqu'à 7 fois?» Jésus lui dit: «Je ne te dis pas jusqu'à 7 fois, mais jusqu'à 70 fois 7 fois.»", reference: "Matthieu 18:21-22" },
        { text: "Car tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.", reference: "Colossiens 3:23" },
        { text: "Nous avons donc été ensevelis avec lui par le baptême en sa mort, afin que, comme Christ est ressuscité des morts par la gloire du Père, de même nous aussi nous marchions en nouveauté de vie.", reference: "Romains 6:4" },
        { text: "Car le salaire du péché, c'est la mort; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.", reference: "Romains 6:23" },
        { text: "Que le méchant abandonne sa voie, et l'homme injuste ses pensées ! Qu'il retourne à l'Éternel : il aura compassion de lui. Qu'il retourne à notre Dieu, car il pardonne abondamment.", reference: "Ésaïe 55:7" },
        { text: "Que l'Eternel te bénisse et te garde! Que l'Eternel fasse briller son visage sur toi et t'accorde sa grâce! Que l'Eternel se tourne vers toi et te donne la paix!", reference: "Nombres 6:24-26" },
        { text: "Qu’il te donne ce que ton cœur désire et qu’il accomplisse tous tes projets!", reference: "Psaume 20:5" },
        { text: "Recommande ton activité à l'Éternel et tes projets seront affermis.", reference: "Proverbes 16:3" },
        { text: "En effet, moi, je connais les projets que je forme pour vous, déclare l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.", reference: "Jérémie 29:11" },
        { text: "Et mon Dieu pourvoira à tous vos besoins conformément à sa richesse, avec gloire, en Jésus-Christ.", reference: "Philippiens 4:19" },
        { text: "Vous servirez l'Eternel, votre Dieu, et il bénira votre pain et votre eau. J'éloignerai la maladie du milieu de toi.", reference: "Exode 23:25" },
        { text: "Celui qui se montre attentif à ce qui est dit trouve le bonheur, et celui qui se confie en l'Eternel est heureux.", reference: "Proverbes 16:20" },
        { text: "Dieu peut vous combler de toutes ses grâces afin que vous possédiez toujours à tout point de vue de quoi satisfaire à tous vos besoins et que vous ayez encore en abondance pour toute œuvre bonne.", reference: "2 Corinthiens 9:8" },
        { text: "Bénissez ceux qui vous persécutent, bénissez et ne maudissez pas.", reference: "Romains 12:14" },
        { text: "Ainsi vous serez enrichis à tout point de vue pour toutes sortes d’actes de générosité qui, par notre intermédiaire, feront monter des prières de reconnaissance vers Dieu.", reference: "2 Corinthiens 9:11" },
        { text: "Heureux ceux qui ont le cœur pur, car ils verront Dieu!", reference: "Matthieu 5:8" },
        { text: "Que ce livre de la loi ne s'éloigne pas de toi! Médite-le jour et nuit pour agir avec fidélité conformément à tout ce qui y est écrit, car c'est alors que tu auras du succès dans tes entreprises, c'est alors que tu réussiras.", reference: "Josué 1:8" },
        { text: "Béni soit le Dieu et Père de notre Seigneur Jésus-Christ, qui nous a bénis de toute bénédiction spirituelle dans les lieux célestes en Christ!", reference: "Éphésiens 1:3" },
        { text: "La langue a pouvoir de vie et de mort; ceux qui aiment parler en goûteront les fruits.", reference: "Proverbes 18:21" },
        { text: "Honore ton père et ta mère afin de vivre longtemps dans le pays que l'Eternel, ton Dieu, te donne.", reference: "Exode 20:12" },
        { text: "L'Eternel rétablit la situation de Job quand celui-ci eut prié pour ses amis; il lui accorda le double de tout ce qu'il avait possédé.", reference: "Job 42:10" },
        { text: "Si vous suivez mes prescriptions, si vous gardez mes commandements et les mettez en pratique, je vous enverrai des pluies en leur saison, la terre donnera ses produits et les arbres des champs leurs fruits.", reference: "Lévitique 26:3-4" },
        { text: "Ne te tourmente pas pour t'enrichir, n'y applique pas ton intelligence. Veux-tu poursuivre du regard ce qui va disparaître ? Car la richesse se fait des ailes, et comme l'aigle, elle prend son vol vers les cieux.", reference: "Proverbes 23:4-5" },
        { text: "La vie est plus que la nourriture, et le corps plus que le vêtement. Considérez les corbeaux : ils ne sèment ni ne moissonnent, ils n'ont ni cellier ni grenier ; et Dieu les nourrit. Combien ne valez-vous pas plus que les oiseaux !", reference: "Luc 12:23-24" },
        { text: "Car l'homme ne vit pas par le pain seul, mais par toute parole qui sort de la bouche de Dieu.", reference: "Marc 7:13" },
        { text: "Garde-toi de dire en ton coeur: Ma force et la puissance de ma main m'ont acquis ces richesses. Souviens-toi de l'Éternel, ton Dieu, car c'est lui qui te donnera de la force pour les acquérir, afin de confirmer, comme il le fait aujourd'hui, son alliance qu'il a jurée à tes pères.", reference: "Deutéronome 8:17-18" },
        { text: "L'Éternel t'ouvrira son bon trésor, le ciel, pour envoyer à ton pays la pluie en son temps et pour bénir tout le travail de tes mains; tu prêteras à beaucoup de nations, et tu n'emprunteras point.", reference: "Deutéronome 28:12" },
        { text: "Je te donnerai, en outre, ce que tu n'as pas demandé, des richesses et de la gloire, de telle sorte qu'il n'y aura pendant toute ta vie aucun roi qui soit ton pareil.", reference: "1 Rois 3:13" },
        { text: "Frères, je ne veux pas que vous ignoriez que nos pères ont tous été sous la nuée, qu'ils ont tous passé au travers de la mer.", reference: "1 Corinthiens 10:1" },
        { text: "Dieu est fidèle, lui qui ne permettra pas que vous soyez tentés au-delà de vos forces.", reference: "1 Corinthiens 10:13" },
        { text: "Que tout se fasse avec amour.", reference: "1 Corinthiens 16:14" },
        { text: "Je puis tout par celui qui me fortifie.", reference: "Philippiens 4:13" },
        { text: "Réjouissez-vous toujours dans le Seigneur; je le répète, réjouissez-vous.", reference: "Philippiens 4:4" },
        { text: "Car nous marchons par la foi et non par la vue.", reference: "2 Corinthiens 5:7" },
        { text: "Si donc quelqu’un est en Christ, il est une nouvelle créature. Les choses anciennes sont passées; voici, toutes choses sont devenues nouvelles.", reference: "2 Corinthiens 5:17" },
        { text: "Car le salaire du péché, c’est la mort; mais le don gratuit de Dieu, c’est la vie éternelle en Jésus-Christ notre Seigneur.", reference: "Romains 6:23" },
        { text: "Il n'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ.", reference: "Romains 8:1" },
        { text: "Nous savons du reste que toutes choses concourent au bien de ceux qui aiment Dieu.", reference: "Romains 8:28" },
        { text: "Que votre amour soit sans hypocrisie. Ayez le mal en horreur; attachez-vous fortement au bien.", reference: "Romains 12:9" },
        { text: "Veillez, demeurez fermes dans la foi, soyez des hommes, fortifiez-vous.", reference: "1 Corinthiens 16:13" },
        { text: "Faites tout sans murmures ni hésitations.", reference: "Philippiens 2:14" },
        { text: "Et par dessus tout cela, revêtez-vous de l'amour, qui est le lien de la perfection.", reference: "Colossiens 3:14" },
        { text: "Supportez-vous les uns les autres, et, si l’un a sujet de se plaindre de l’autre, pardonnez-vous réciproquement.", reference: "Colossiens 3:13" },
        { text: "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l’intelligence.", reference: "Romains 12:2" },
        /* ... (tous les versets de toutes les catégories doivent être continués ici, c'est-à-dire concaténer tous les objets des tableaux : Foi, Succes, Prosperite, Grace) ... */
        // Pour des raisons de lisibilité et longueur, remplacez ce commentaire par l'ensemble des versets des autres catégories copiés/recopiés dans la même liste.
    ]
};


// Mapping des catégories (pour conversion minuscules → majuscules)
const categoryMap = {
    'foi': 'Foi',
    'grace': 'Grace',
    'prosperite': 'Prosperite',
    'succes': 'Succes'
};

// Gestion du thème dark/light
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Vérifier le thème sauvegardé ou utiliser le thème système
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Fonction pour faire défiler vers les versets
function scrollToVerses() {
    const versesSection = document.getElementById('verses');
    if (versesSection) {
        versesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Afficher les versets par catégorie
function displayVerses(category) {
    const container = document.getElementById('versesContainer');
    if (!container) return;

    const categoryKey = categoryMap[category] || category;
    const categoryVerses = verses[categoryKey] || [];

    if (categoryVerses.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Aucun verset disponible pour cette catégorie.</p>';
        return;
    }

    container.innerHTML = categoryVerses.map(verse => `
        <div class="verse-card">
            <p class="verse-text">"${verse.text}"</p>
            <p class="verse-reference">— ${verse.reference}</p>
        </div>
    `).join('');
}

// Gestion des clics sur les catégories
document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            if (category) {
                displayVerses(category);
                setTimeout(() => {
                    const container = document.getElementById('versesContainer');
                    if (container) {
                        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        });
    });
});

// ==== UNIQUE VERSE ATTRIBUTION TO USER (EMAIL/WHATSAPP) ====

// Logique orientée WhatsApp uniquement (utilisateur reçoit le verset directement par WhatsApp dès saisie)

function getUserVerseKeyWhatsAppOnly(whatsapp, category) {
    category = category || "all";
    let id = '';
    if (whatsapp && whatsapp.trim()) {
        id = encodeURIComponent(whatsapp.trim());
    } else {
        id = "unknown";
    }
    return 'verse_' + id + '_' + category;
}

function storeUserVerseWhatsApp(whatsapp, category, verse) {
    const key = getUserVerseKeyWhatsAppOnly(whatsapp, category);
    localStorage.setItem(key, JSON.stringify({
        verse: verse,
        date: (new Date()).toISOString().slice(0, 10),
        whatsapp: whatsapp,
        category: category
    }));
}

function getStoredUserVerseWhatsApp(whatsapp, category) {
    const key = getUserVerseKeyWhatsAppOnly(whatsapp, category);
    const val = localStorage.getItem(key);
    if (!val) return null;
    try {
        return JSON.parse(val);
    } catch (e) {
        return null;
    }
}

// Envoie le verset via le backend sur WhatsApp
async function sendVerseToWhatsApp(contactValue, verse) {
    try {
        const res = await fetch('/api/send-verse', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contactType: 'whatsapp',
                contactValue: contactValue,
                verse
            })
        });
        return res.ok;
    } catch (e) {
        return false;
    }
}

/**
 * Affiche/attribue le verset unique à un utilisateur (WhatsApp + catégorie)
 * Envoie le verset directement sur WhatsApp via le serveur (pas d'email)
 */
function generateRandomVerse() {
    const whatsappInput = document.getElementById("userWhatsApp");
    const categorySelect = document.getElementById('verseCategory');
    const display = document.getElementById('randomVerseDisplay');
    const verseText = document.getElementById('verseText');
    const verseReference = document.getElementById('verseReference');
    const generateButton = document.querySelector('.generate-button');
    const verseSendStatus = document.getElementById('verseSendStatus');

    if (
        !whatsappInput || !categorySelect ||
        !display || !verseText || !verseReference || !verseSendStatus
    ) {
        alert("Des éléments du formulaire sont manquants.");
        return;
    }

    // Validation téléphone WhatsApp uniquement
    const whatsapp = whatsappInput.value.trim();
    const category = categorySelect.value;

    if (!whatsapp) {
        alert("Veuillez entrer votre numéro WhatsApp.");
        whatsappInput.focus();
        return;
    }
    // Validation numéro
    const waPattern = /^\+\d{6,}$/;
    if (!waPattern.test(whatsapp)) {
        alert("Veuillez entrer un numéro WhatsApp valide (ex: +225...)");
        whatsappInput.focus();
        return;
    }

    // Désactiver le bouton pendant le traitement
    if (generateButton) {
        generateButton.disabled = true;
        generateButton.textContent = "Veuillez patienter...";
    }
    verseSendStatus.textContent = "";
    display.classList.add("active");
    verseText.textContent = "...";
    verseReference.textContent = "";

    // Animation
    setTimeout(() => {
        verseText.textContent = "✨ Le Saint-Esprit guide la sélection...";
        verseReference.textContent = "";
        verseSendStatus.textContent = "";

        setTimeout(() => {
            verseText.textContent = "🎯 Le Saint-Esprit choisit votre verset...";
            verseReference.textContent = "";
            verseSendStatus.textContent = "";

            setTimeout(async () => {
                // Vérifie si un verset WhatsApp existe déjà pour ce user (numéro + catégorie)
                const existing = getStoredUserVerseWhatsApp(whatsapp, category);
                let verse;
                if (existing && existing.verse) {
                    verse = existing.verse;
                } else {
                    // Choix aléatoire du verset à partir de la catégorie
                    let pool = [];
                    if (category === "all") {
                        Object.values(verses).forEach(arr => pool = pool.concat(arr));
                    } else {
                        const catKey = categoryMap[category] || category;
                        pool = verses[catKey] || [];
                    }
                    if (!pool.length) {
                        verseText.textContent = "Aucun verset disponible pour la sélection.";
                        verseReference.textContent = "";
                        if (generateButton) {
                            generateButton.disabled = false;
                            generateButton.textContent = "Obtenir Mon Verset";
                        }
                        return;
                    }
                    // Choix au hasard + stockage
                    const idx = Math.floor(Math.random() * pool.length);
                    verse = pool[idx];
                    storeUserVerseWhatsApp(whatsapp, category, verse);
                }

                // Affichage local
                verseText.textContent = `"${verse.text}"`;
                verseReference.textContent = `— ${verse.reference}`;
                verseSendStatus.textContent = "⏳ Envoi du verset sur WhatsApp...";

                // Animation de révélation
                display.style.animation = 'none';
                setTimeout(() => {
                    display.style.animation = 'fadeIn 0.8s ease';
                }, 10);

                // ENVOI sur WhatsApp
                let success = false;
                success = await sendVerseToWhatsApp(whatsapp, verse);
                if (success) {
                    verseSendStatus.textContent = "✅ Verset envoyé sur votre WhatsApp !";
                } else {
                    verseSendStatus.textContent = "❌ Impossible d'envoyer via WhatsApp pour le moment.";
                }

                // Réactiver bouton
                if (generateButton) {
                    generateButton.disabled = false;
                    generateButton.textContent = "Recevoir Mon Verset sur WhatsApp";
                }

                setTimeout(() => {
                    display.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 500);

            }, 700);
        }, 600);
    }, 500);
}
