const budgetCategories = [
  {
    category: 'Équipement',
    icon: 'tools',
    expenses: [
      {
        id: '1',
        name: 'Tracteur',
        cost: '10,000 Dinars',
        description: 'Achat d’un tracteur pour les travaux de champ',
        project: 'Projet A',
        action: 'plus',
      },
      {
        id: '2',
        name: 'Semoir',
        cost: '3,000 Dinars',
        description: 'Achat d’un semoir pour les cultures',
        project: 'Projet B',
        action: 'plus',
      },
      {
        id: '3',
        name: 'Pulvérisateur',
        cost: '1,500 Dinars',
        description: 'Équipement pour traitement des cultures',
        project: 'Projet C',
        action: 'moins',
      },
    ],
  },
  {
    category: 'Transport',
    icon: 'truck',
    expenses: [
      {
        id: '1',
        name: 'Frais de carburant',
        cost: '1,200 Dinars',
        description: 'Carburant pour les véhicules de transport',
        project: 'Projet A',
        action: 'plus',
      },
      {
        id: '2',
        name: 'Maintenance des véhicules',
        cost: '800 Dinars',
        description: 'Réparations et entretien des véhicules',
        project: 'Projet B',
        action: 'moins',
      },
    ],
  },
  {
    category: 'Énergie et services publics',
    icon: 'bolt',
    expenses: [
      {
        id: '1',
        name: 'Électricité',
        cost: '500 Dinars',
        description: 'Consommation électrique pour l’irrigation',
        project: 'Projet C',
        action: 'plus',
      },
      {
        id: '2',
        name: 'Eau d’irrigation',
        cost: '300 Dinars',
        description: 'Utilisation d’eau pour les cultures',
        project: 'Projet A',
        action: 'moins',
      },
    ],
  },
  {
    category: 'Autres dépenses',
    icon: 'plus',
    expenses: [
      {
        id: '1',
        name: 'Assurances',
        cost: '600 Dinars',
        description: 'Assurances pour les équipements et le personnel',
        project: 'Projet B',
        action: 'plus',
      },
      {
        id: '2',
        name: 'Frais administratifs',
        cost: '400 Dinars',
        description: 'Dépenses diverses de gestion du projet',
        project: 'Projet C',
        action: 'moins',
      },
    ],
  },
];

export default budgetCategories;
