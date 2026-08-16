window.SFAR_DATA = {
  "source": "RFE SFAR-SPILF « Antibioprophylaxie en chirurgie et médecine interventionnelle », V1.3 du 23/01/2024",
  "categories": [
    {
      "id": "generalRecommendations",
      "label": "Recommandations générales",
      "verified": true,
      "procedures": [
        {
          "specialty": "Général",
          "part": "Champ 1",
          "procedure": "Délai d'administration",
          "indication": "Toutes procédures chirurgicales et interventionnelles",
          "standard": {
            "molecule": "Céphalosporine (ou alternative en cas d'allergie avérée, hors vancomycine)",
            "dose": "Selon molécule",
            "route": "IV",
            "timing": "Au plus tôt 60 minutes avant et au plus tard avant l'incision / début de procédure",
            "reinjection": ""
          },
          "allergy": null,
          "notes": "R1.1 – GRADE 1 (accord FORT). Administration après l'incision associée à un risque accru d'ISO. [R1.1, p.16]",
          "sourcePage": "16",
          "sourceVersion": ""
        },
        {
          "specialty": "Général",
          "part": "Champ 1",
          "procedure": "Réinjection peropératoire",
          "indication": "Procédures de durée dépassant la demi-vie de l'antibiotique ou perte sanguine importante",
          "standard": {
            "molecule": "Même antibiotique que l'induction",
            "dose": "Même dose initiale",
            "route": "IV",
            "timing": "En cours de procédure",
            "reinjection": "Oui, si durée > 2 demi-vies ou perte sanguine > 1500 mL ou hémodilution"
          },
          "allergy": null,
          "notes": "R1.2 – GRADE 1. Objectif : maintenir une concentration tissulaire efficace pendant toute la procédure. [R1.2, p.17]",
          "sourcePage": "17",
          "sourceVersion": ""
        },
        {
          "specialty": "Général",
          "part": "Champ 1",
          "procedure": "Durée de l'antibioprophylaxie",
          "indication": "Toutes procédures",
          "standard": {
            "molecule": "Non applicable",
            "dose": "Non applicable",
            "route": "",
            "timing": "Arrêt en fin de procédure",
            "reinjection": "Non"
          },
          "allergy": null,
          "notes": "R1.3 – GRADE 1. Pas de poursuite postopératoire systématique. Exceptions : prothèse vasculaire, certains gestes digestifs à haut risque, selon tableaux. [R1.3, p.18]",
          "sourcePage": "18",
          "sourceVersion": ""
        },
        {
          "specialty": "Général",
          "part": "Champ 1",
          "procedure": "Patient obèse",
          "indication": "IMC ≥ 30 kg/m2",
          "standard": {
            "molecule": "Céphalosporine",
            "dose": "Dose augmentée selon poids (ex : céfazoline 3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Selon durée et perte sanguine"
          },
          "allergy": null,
          "notes": "R1.4 – GRADE 1. Ajustement posologique recommandé pour obtenir des concentrations tissulaires efficaces. [R1.4, p.19]",
          "sourcePage": "19",
          "sourceVersion": ""
        },
        {
          "specialty": "Général",
          "part": "Champ 1",
          "procedure": "Patient colonisé E-BLSE",
          "indication": "Colonisation rectale à entérobactérie productrice de BLSE",
          "standard": {
            "molecule": "À définir selon protocole local et écologie",
            "dose": "Selon molécule",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Selon durée"
          },
          "allergy": null,
          "notes": "R1.5 – Avis d'experts. Pas de recommandation standard unique ; adapter selon site, type de chirurgie et antibiogramme. [R1.5, p.20]",
          "sourcePage": "20",
          "sourceVersion": ""
        }
      ]
    },
    {
      "id": "digestive",
      "label": "Chirurgie digestive et bariatrique",
      "verified": true,
      "procedures": [
        {
          "procedure": "Chirurgie œsophagienne (avec ou sans plastie colique)",
          "indication": "Œsophagectomie, excision de tumeur, diverticule de l'œsophage",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "Chirurgie propre-contaminée. [Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Chirurgie gastrique non bariatrique",
          "indication": "Gastrectomie totale ou partielle, totalisation de gastrectomie",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Chirurgie bariatrique — anneau gastrique",
          "indication": "Mise en place d'un anneau gastrique",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (4 g si IMC > 50 kg/m²)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV (poids total)",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Chirurgie bariatrique — bypass ou sleeve gastrectomie",
          "indication": "Court-circuit gastrique, sleeve gastrectomie",
          "standard": {
            "molecule": "Céfoxitine",
            "dose": "2 g IV (4 g si IMC > 50 kg/m²)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 2 h si durée > 2 h"
          },
          "allergy": {
            "molecule": "Gentamicine + métronidazole",
            "dose": "6-7 mg/kg + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique, pas de réinjection"
          },
          "notes": "[Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Chirurgie de l'intestin grêle",
          "indication": "Résection de l'intestin grêle, entérostomie cutanée par laparotomie",
          "standard": {
            "molecule": "Céfoxitine",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 2 h si durée > 2 h"
          },
          "allergy": {
            "molecule": "Gentamicine + métronidazole",
            "dose": "6-7 mg/kg + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique, pas de réinjection"
          },
          "notes": "[Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Chirurgie colorectale et appendiculaire (colectomie, résection rectale)",
          "indication": "Colectomie, amputation abdomino-périnéale, proctectomie, rétablissement de continuité",
          "standard": {
            "molecule": "Céfoxitine + métronidazole",
            "dose": "2 g + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Céfoxitine 1 g toutes les 2 h si durée > 2 h ; métronidazole en dose unique"
          },
          "allergy": {
            "molecule": "Gentamicine + métronidazole",
            "dose": "6-7 mg/kg + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique, pas de réinjection"
          },
          "notes": "Préparation orale possible selon protocole local (tobramycine + métronidazole la veille). Durée limitée à la période peropératoire. [Partie 8, p.79]",
          "sourcePage": "79"
        },
        {
          "procedure": "Appendicectomie programmée",
          "indication": "Appendicectomie non compliquée, programmée",
          "standard": {
            "molecule": "Céfoxitine",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 2 h si durée > 2 h"
          },
          "allergy": {
            "molecule": "Gentamicine + métronidazole",
            "dose": "6-7 mg/kg + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique, pas de réinjection"
          },
          "notes": "[Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Chirurgie proctologique",
          "indication": "Hémorroïdes, kyste pilonidal, fistule anale",
          "standard": {
            "molecule": "Métronidazole",
            "dose": "1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique"
          },
          "allergy": null,
          "notes": "[Partie 8]",
          "sourcePage": "80"
        },
        {
          "procedure": "Cholécystectomie élective par laparoscopie — patient à haut risque",
          "indication": "Âge > 80 ans, grossesse en cours, immunosuppression, cholécystite aiguë récente, ictère, calcul de la voie biliaire principale, prothèse, conversion en laparotomie, fuite biliaire",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Cholécystectomie élective par laparoscopie — patient à faible risque",
          "indication": "Aucun critère de haut risque",
          "standard": null,
          "allergy": null,
          "notes": "Pas d'antibioprophylaxie recommandée. [Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Cholécystectomie par laparotomie / ablation de calcul de la voie biliaire principale",
          "indication": "Cholécystectomie par laparotomie, choledocotomie, ablation transcystique de calcul",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Anastomose bilio-digestive",
          "indication": "Cholécystectomie avec choledoco-jéjunostomie, résection de la voie biliaire principale avec anastomose bilio-digestive",
          "standard": {
            "molecule": "Céfoxitine",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 2 h si durée > 2 h"
          },
          "allergy": {
            "molecule": "Gentamicine + métronidazole",
            "dose": "6-7 mg/kg + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique, pas de réinjection"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Hépatectomie sans chirurgie des voies biliaires",
          "indication": "Résection atypique, uni/bi/tri-segmentectomie, lobectomie hépatique",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Chirurgie des kystes hépatiques simples",
          "indication": "Résection du dôme saillant, péri-kystectomie, kystes hydatiques",
          "standard": null,
          "allergy": null,
          "notes": "Pas d'antibioprophylaxie recommandée. [Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Splénectomie",
          "indication": "Splénectomie programmée ou en urgence, laparotomie ou laparoscopie",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Chirurgie pancréatique — sans geste de drainage biliaire préopératoire",
          "indication": "Pancréatectomie gauche, totale/subtotale avec conservation duodénale, gestes d'épargne pancréatique",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Duodéno-pancréatectomie céphalique ou totale — sans drainage biliaire préopératoire",
          "indication": "DPC / DPT sans geste de drainage biliaire préopératoire",
          "standard": {
            "molecule": "Céfoxitine",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 2 h si durée > 2 h"
          },
          "allergy": {
            "molecule": "Gentamicine + métronidazole",
            "dose": "6-7 mg/kg + 1 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Dose unique, pas de réinjection"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Duodéno-pancréatectomie — pour ampullome ou avec ATCD de drainage biliaire/sphinctérotomie",
          "indication": "DPC ou DPT avec drainage biliaire préopératoire, sphinctérotomie préalable, ou pour ampullome",
          "standard": {
            "molecule": "Pipéracilline + tazobactam",
            "dose": "4 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "4 g toutes les 4 h si durée > 4 h"
          },
          "allergy": null,
          "notes": "Discuter l'alternative en cas d'allergie avec un infectiologue. [Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Cure de hernie inguinale et crurale avec prothèse",
          "indication": "Chirurgie de paroi, voie ouverte ou laparoscopique",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "1 g toutes les 4 h si durée > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "20 mg/kg IV",
            "route": "IV",
            "timing": "60–30 min avant incision (perfusion lente)",
            "reinjection": "10 mg/kg toutes les 8 h"
          },
          "notes": "[Partie 8]",
          "sourcePage": "81"
        },
        {
          "procedure": "Cure de hernie de l'aine sans prothèse",
          "indication": "Chirurgie de paroi sans mise en place de matériel",
          "standard": null,
          "allergy": null,
          "notes": "Pas d'antibioprophylaxie recommandée. [Partie 8]",
          "sourcePage": "81"
        }
      ]
    },
    {
      "id": "neurochirurgie",
      "label": "Neurochirurgie",
      "verified": false,
      "procedures": [
        {
          "specialty": "Neurochirurgie",
          "part": "Partie 1",
          "procedure": "Craniotomie pour tumeur, hématome, épilepsie",
          "indication": "Chirurgie propre avec ouverture des espaces liquidiens",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h en cas de procédure prolongée"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début de perfusion 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler S. aureus et S. epidermidis. Pas de poursuite postopératoire. [Partie 1, p.24]",
          "sourcePage": "24",
          "sourceVersion": ""
        },
        {
          "specialty": "Neurochirurgie",
          "part": "Partie 1",
          "procedure": "Pose de valve de dérivation ventriculaire",
          "indication": "Chirurgie avec implantation de matériel",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Risque d'ISO élevé en cas d'implant. Pas de poursuite postopératoire. [Partie 1, p.25]",
          "sourcePage": "25",
          "sourceVersion": ""
        },
        {
          "specialty": "Neurochirurgie",
          "part": "Partie 1",
          "procedure": "Chirurgie du rachis avec matériel",
          "indication": "Arthrodèse, ostéosynthèse",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler staphylocoques. Pas de poursuite postopératoire. [Partie 1, p.26]",
          "sourcePage": "26",
          "sourceVersion": ""
        },
        {
          "specialty": "Neurochirurgie",
          "part": "Partie 1",
          "procedure": "Neuroradiologie interventionnelle (embolisation, stent intracrânien)",
          "indication": "Procédures endovasculaires intracrâniennes",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant ponction",
            "reinjection": "Si procédure > 4 h"
          },
          "allergy": null,
          "notes": "Antibioprophylaxie optionnelle selon type de geste et durée. [Partie 1, p.27]",
          "sourcePage": "27",
          "sourceVersion": ""
        }
      ]
    },
    {
      "id": "orlOphtalMFO",
      "label": "ORL, ophtalmologie, maxillo-facial",
      "verified": false,
      "procedures": [
        {
          "specialty": "ORL / Maxillo-facial",
          "part": "Partie 2",
          "procedure": "Chirurgie carcinologique ORL avec reconstruction",
          "indication": "Chirurgie ouverte de la tête et du cou avec reconstruction",
          "standard": {
            "molecule": "Amoxicilline-acide clavulanique",
            "dose": "2 g / 200 mg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Clindamycine + gentamicine",
            "dose": "600 mg + 5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler flore oropharyngée aéro-anaérobie. Durée ≤ 24 h. [Partie 2, p.30]",
          "sourcePage": "30",
          "sourceVersion": "Début 60–120 min avant ponction"
        },
        {
          "specialty": "ORL / Maxillo-facial",
          "part": "Partie 2",
          "procedure": "Chirurgie faciale avec reconstruction par lambeau",
          "indication": "Chirurgie reconstructrice faciale",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler staphylocoques. Pas de poursuite postopératoire. [Partie 2, p.31]",
          "sourcePage": "31",
          "sourceVersion": "Antibioprophylaxie optionnelle selon type de geste et durée. [Partie 1, p.27]"
        },
        {
          "specialty": "ORL / Maxillo-facial",
          "part": "Partie 2",
          "procedure": "Chirurgie d'avulsion dentaire (à risque)",
          "indication": "Avulsions multiples, terrain à risque (immunodépression, cardiopathie à risque d'endocardite)",
          "standard": {
            "molecule": "Amoxicilline",
            "dose": "2 g per os",
            "route": "PO",
            "timing": "1 h avant le geste",
            "reinjection": "Non"
          },
          "allergy": {
            "molecule": "Clindamycine",
            "dose": "600 mg per os",
            "route": "PO",
            "timing": "1 h avant le geste",
            "reinjection": "Non"
          },
          "notes": "Pour endocardite, suivre recommandations ESC 2023. [Partie 2, p.32]",
          "sourcePage": "32",
          "sourceVersion": "27"
        },
        {
          "specialty": "Ophtalmologie",
          "part": "Partie 2",
          "procedure": "Chirurgie intraoculaire (cataracte, vitrectomie)",
          "indication": "Chirurgie pénétrante du globe",
          "standard": {
            "molecule": "Céfazoline ou céfuroxime",
            "dose": "Injection intracamérulaire en fin de geste",
            "route": "Intracamérulaire",
            "timing": "En fin de chirurgie",
            "reinjection": "Non"
          },
          "allergy": null,
          "notes": "Alternative : povidone iodée. Pas d'antibioprophylaxie systémique recommandée. [Partie 2, p.33]",
          "sourcePage": "33",
          "sourceVersion": ""
        }
      ]
    },
    {
      "id": "cardioVasc",
      "label": "Cardiaque, vasculaire, rythmologie",
      "verified": false,
      "procedures": [
        {
          "specialty": "Chirurgie cardiaque",
          "part": "Partie 3",
          "procedure": "Chirurgie cardiaque avec circulation extracorporelle (CEC)",
          "indication": "Pontage, remplacement valvulaire, autres chirurgies avec CEC",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h pendant CEC"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler S. aureus et S. epidermidis. Durée ≤ 24 h. [Partie 3, p.36]",
          "sourcePage": "36",
          "sourceVersion": "En fin de chirurgie"
        },
        {
          "specialty": "Chirurgie cardiaque",
          "part": "Partie 3",
          "procedure": "Pose de stimulateur cardiaque / défibrillateur",
          "indication": "Implantation de dispositif électronique",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Si procédure > 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Risque d'infection du site et du matériel. Pas de poursuite postopératoire. [Partie 3, p.37]",
          "sourcePage": "37",
          "sourceVersion": "Alternative : povidone iodée. Pas d'antibioprophylaxie systémique recommandée. [Partie 2, p.33]"
        },
        {
          "specialty": "Cardiologie interventionnelle",
          "part": "Partie 3",
          "procedure": "Coronarographie / angioplastie",
          "indication": "Procédures coronariennes percutanées",
          "standard": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "allergy": {
            "molecule": "Céfazoline ou céfuroxime",
            "dose": "Injection intracamérulaire en fin de geste",
            "route": "Intracamérulaire",
            "timing": "En fin de chirurgie",
            "reinjection": "Non"
          },
          "notes": "Pas d'antibioprophylaxie recommandée en l'absence d'infection. [Partie 3, p.38]",
          "sourcePage": "38",
          "sourceVersion": "33"
        },
        {
          "specialty": "Chirurgie vasculaire",
          "part": "Partie 3",
          "procedure": "Chirurgie vasculaire avec prothèse",
          "indication": "Pontage aortique, fémoro-poplité, autres prothèses",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": null,
          "notes": "Cibler staphylocoques et entérobactéries. Durée ≤ 24 h. [Partie 3, p.39]",
          "sourcePage": "39",
          "sourceVersion": ""
        },
        {
          "specialty": "Chirurgie vasculaire",
          "part": "Partie 3",
          "procedure": "Chirurgie vasculaire sans prothèse",
          "indication": "Endartériectomie, ligature veineuse",
          "standard": null,
          "allergy": null,
          "notes": "Durée ≤ 24 h. [Partie 3, p.40]",
          "sourcePage": "40",
          "sourceVersion": ""
        }
      ]
    },
    {
      "id": "thoracique",
      "label": "Chirurgie thoracique",
      "verified": false,
      "procedures": [
        {
          "specialty": "Chirurgie thoracique",
          "part": "Partie 4",
          "procedure": "Lobectomie / pneumonectomie",
          "indication": "Chirurgie pulmonaire majeure",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine + gentamicine",
            "dose": "15 mg/kg + 5 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler flore cutanée et respiratoire. Durée ≤ 24 h. [Partie 4, p.44]",
          "sourcePage": "44",
          "sourceVersion": "IV"
        },
        {
          "specialty": "Chirurgie thoracique",
          "part": "Partie 4",
          "procedure": "Médiastinoscopie / biopsie médiastinale",
          "indication": "Procédures diagnostiques médiastinales",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Non"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Non"
          },
          "notes": "Durée unique. [Partie 4, p.45]",
          "sourcePage": "45",
          "sourceVersion": "Début 60–120 min avant incision"
        },
        {
          "specialty": "Radiologie interventionnelle",
          "part": "Partie 4",
          "procedure": "Drainage pleural / thoracentèse",
          "indication": "Drainage d'épanchement pleural",
          "standard": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Non"
          },
          "allergy": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "notes": "Pas d'antibioprophylaxie recommandée en l'absence d'infection. [Partie 4, p.46]",
          "sourcePage": "46",
          "sourceVersion": "Durée ≤ 24 h. [Partie 3, p.40]"
        },
        {
          "specialty": "Radiologie interventionnelle",
          "part": "Partie 4",
          "procedure": "Biopsie pulmonaire transcutanée",
          "indication": "Biopsie sous scanner",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": null,
          "notes": "Pas d'antibioprophylaxie recommandée. [Partie 4, p.47]",
          "sourcePage": "47",
          "sourceVersion": "40"
        }
      ]
    },
    {
      "id": "plastique",
      "label": "Chirurgie plastique et reconstructrice",
      "verified": false,
      "procedures": [
        {
          "specialty": "Chirurgie plastique",
          "part": "Partie 5",
          "procedure": "Chirurgie mammaire avec prothèse",
          "indication": "Augmentation, reconstruction mammaire",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler staphylocoques. Durée ≤ 24 h. [Partie 5, p.50]",
          "sourcePage": "50",
          "sourceVersion": "Pas d'antibioprophylaxie recommandée en l'absence d'infection. [Partie 4, p.46]"
        },
        {
          "specialty": "Chirurgie plastique",
          "part": "Partie 5",
          "procedure": "Chirurgie de la paroi abdominale avec prothèse",
          "indication": "Cure de hernie, plastie abdominale",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Durée ≤ 24 h. [Partie 5, p.51]",
          "sourcePage": "51",
          "sourceVersion": "Pas d'antibioprophylaxie recommandée. [Partie 4, p.47]"
        },
        {
          "specialty": "Chirurgie plastique",
          "part": "Partie 5",
          "procedure": "Chirurgie d'affirmation de genre",
          "indication": "Mammoplastie, vaginoplastie, phalloplastie",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine + gentamicine",
            "dose": "15 mg/kg + 5 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Adapter selon type de geste et flore locale. Durée ≤ 24 h. [Partie 5, p.52]",
          "sourcePage": "52",
          "sourceVersion": "47"
        },
        {
          "specialty": "Brûlologie",
          "part": "Partie 5",
          "procedure": "Excision-greffe de brûlure",
          "indication": "Brûlures étendues",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": null,
          "notes": "Cibler S. aureus. Adapter selon écologie locale. Durée ≤ 24 h. [Partie 5, p.53]",
          "sourcePage": "53",
          "sourceVersion": "40"
        }
      ]
    },
    {
      "id": "gynecologie",
      "label": "Gynécologie et obstétrique",
      "verified": false,
      "procedures": [
        {
          "specialty": "Gynécologie",
          "part": "Partie 6",
          "procedure": "Césarienne",
          "indication": "Toutes césariennes",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision (idéalement avant clampage du cordon)",
            "reinjection": "Toutes les 4 h si procédure prolongée"
          },
          "allergy": {
            "molecule": "Clindamycine + gentamicine",
            "dose": "900 mg + 5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Réduit ISO et endométrite. Dose unique suffit dans la plupart des cas. [Partie 6, p.56]",
          "sourcePage": "56",
          "sourceVersion": "Début 60–120 min avant incision"
        },
        {
          "specialty": "Gynécologie",
          "part": "Partie 6",
          "procedure": "Hystérectomie par voie haute ou vaginale",
          "indication": "Hystérectomie pour bénin ou malin",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Clindamycine + gentamicine",
            "dose": "900 mg + 5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler flore vaginale et cutanée. Durée ≤ 24 h. [Partie 6, p.57]",
          "sourcePage": "57",
          "sourceVersion": "Cibler S. aureus. Adapter selon écologie locale. Durée ≤ 24 h. [Partie 5, p.53]"
        },
        {
          "specialty": "Gynécologie",
          "part": "Partie 6",
          "procedure": "Chirurgie des annexes (ovaires, trompes)",
          "indication": "Kystectomie, salpingectomie",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Si procédure > 4 h"
          },
          "allergy": {
            "molecule": "Clindamycine + gentamicine",
            "dose": "900 mg + 5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Durée ≤ 24 h. [Partie 6, p.58]",
          "sourcePage": "58",
          "sourceVersion": "53"
        },
        {
          "specialty": "Gynécologie",
          "part": "Partie 6",
          "procedure": "Chirurgie de l'utérus (myomectomie, métrorragies)",
          "indication": "Chirurgie utérine conservatrice",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": null,
          "notes": "Durée ≤ 24 h. [Partie 6, p.59]",
          "sourcePage": "59",
          "sourceVersion": "40"
        },
        {
          "specialty": "Obstétrique",
          "part": "Partie 6",
          "procedure": "Révision utérine / ballonnement intra-utérin",
          "indication": "Hémorragie de la délivrance",
          "standard": null,
          "allergy": null,
          "notes": "Réduit risque d'endométrite. Dose unique. [Partie 6, p.60]",
          "sourcePage": "60",
          "sourceVersion": ""
        }
      ]
    },
    {
      "id": "orthopedie",
      "label": "Orthopédie et traumatologie",
      "verified": false,
      "procedures": [
        {
          "specialty": "Orthopédie",
          "part": "Partie 7",
          "procedure": "Prothèse totale de hanche",
          "indication": "Arthroplastie totale de hanche",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Cibler S. aureus et S. epidermidis. Durée ≤ 24 h. [Partie 7, p.64]",
          "sourcePage": "64",
          "sourceVersion": "IV"
        },
        {
          "specialty": "Orthopédie",
          "part": "Partie 7",
          "procedure": "Prothèse totale de genou",
          "indication": "Arthroplastie totale de genou",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Durée ≤ 24 h. [Partie 7, p.65]",
          "sourcePage": "65",
          "sourceVersion": "Dans les 60 min avant geste"
        },
        {
          "specialty": "Orthopédie",
          "part": "Partie 7",
          "procedure": "Ostéosynthèse de fracture",
          "indication": "Fractures ouvertes ou fermées avec matériel",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Vancomycine",
            "dose": "15 mg/kg IV",
            "route": "IV",
            "timing": "Début 60–120 min avant incision",
            "reinjection": "Selon durée"
          },
          "notes": "Fractures ouvertes : adapter selon classification de Gustilo. Durée ≤ 24 h. [Partie 7, p.66]",
          "sourcePage": "66",
          "sourceVersion": "Réduit risque d'endométrite. Dose unique. [Partie 6, p.60]"
        },
        {
          "specialty": "Orthopédie",
          "part": "Partie 7",
          "procedure": "Chirurgie du rachis avec matériel",
          "indication": "Arthrodèse, ostéosynthèse rachidienne",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV (3 g si ≥ 120 kg)",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": null,
          "notes": "Durée ≤ 24 h. [Partie 7, p.67]",
          "sourcePage": "67",
          "sourceVersion": "60"
        }
      ]
    },
    {
      "id": "urologie",
      "label": "Urologie",
      "verified": false,
      "procedures": [
        {
          "specialty": "Urologie",
          "part": "Partie 9",
          "procedure": "Prostatectomie totale",
          "indication": "Cancer de la prostate",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Gentamicine",
            "dose": "5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Non"
          },
          "notes": "Durée ≤ 24 h. [Partie 9, p.78]",
          "sourcePage": "78",
          "sourceVersion": "Dans les 60 min avant geste"
        },
        {
          "specialty": "Urologie",
          "part": "Partie 9",
          "procedure": "Néphrectomie",
          "indication": "Chirurgie rénale pour tumeur ou autre",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": {
            "molecule": "Gentamicine",
            "dose": "5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Non"
          },
          "notes": "Durée ≤ 24 h. [Partie 9, p.79]",
          "sourcePage": "79",
          "sourceVersion": "Indiquée en cas de drainage biliaire incomplet ou infection. Durée ≤ 24 h. [Partie 8, p.73]"
        },
        {
          "specialty": "Urologie",
          "part": "Partie 9",
          "procedure": "Chirurgie endoscopique urologique (résection prostatique, tumeur de vessie)",
          "indication": "RTUP, RTUV",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant geste",
            "reinjection": "Non"
          },
          "allergy": {
            "molecule": "Gentamicine",
            "dose": "5 mg/kg IV",
            "route": "IV",
            "timing": "Dans les 60 min avant geste",
            "reinjection": "Non"
          },
          "notes": "Durée unique. [Partie 9, p.80]",
          "sourcePage": "80",
          "sourceVersion": "Pas d'antibioprophylaxie recommandée en l'absence d'infection. [Partie 8, p.74]"
        },
        {
          "specialty": "Urologie",
          "part": "Partie 9",
          "procedure": "Pose de prothèse pénienne",
          "indication": "Implant pénien",
          "standard": {
            "molecule": "Céfazoline",
            "dose": "2 g IV",
            "route": "IV",
            "timing": "Dans les 60 min avant incision",
            "reinjection": "Toutes les 4 h"
          },
          "allergy": null,
          "notes": "Cibler staphylocoques et entérobactéries. Durée ≤ 24 h. [Partie 9, p.81]",
          "sourcePage": "81",
          "sourceVersion": "74"
        },
        {
          "specialty": "Urologie",
          "part": "Partie 9",
          "procedure": "Lithotritie extracorporelle",
          "indication": "Traitement de lithiase urinaire",
          "standard": null,
          "allergy": null,
          "notes": "Pas d'antibioprophylaxie recommandée en l'absence d'infection. [Partie 9, p.82]",
          "sourcePage": "82",
          "sourceVersion": ""
        }
      ]
    }
  ]
};
