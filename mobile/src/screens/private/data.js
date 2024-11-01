const data ={
    "sectorStandards": {
        "id": "SS-2024-001",
        "name": "Recommandations du secteur pour la sécurité des données",
        "version": "1.2",
        "date": "2024-10-15",
        "description": "Recommandations basées sur les standards du secteur pour renforcer la sécurité des données au sein des organisations."
    },
    "dataio": [
        {
            "id": "REC-001",
            "title": "Chiffrement des données",
            "category": "Sécurité des données",
            "description": "Toutes les données sensibles doivent être chiffrées au repos et en transit pour éviter les violations de données.",
            "standardReference": "ISO 27001:2013 - 18.1.5",
            "status": "Active",
            "updateDate": "2024-11-01"
        },
        {
            "id": "REC-002",
            "title": "Contrôle des accès",
            "category": "Gestion des accès",
            "description": "Utilisation de contrôles d'accès basés sur les rôles pour limiter l'accès aux données sensibles aux seules personnes autorisées.",
            "standardReference": "NIST SP 800-53 - AC-3",
            "status": "Active",
            "updateDate": "2024-11-01"
        },
        {
            "id": "REC-003",
            "title": "Journalisation et surveillance",
            "category": "Surveillance et Audit",
            "description": "Mettre en œuvre des journaux d'audit pour surveiller l'activité des utilisateurs et détecter les activités suspectes.",
            "standardReference": "ISO 27001:2013 - 12.4.1",
            "status": "Active",
            "updateDate": "2024-11-01"
        },
        {
            "id": "REC-004",
            "title": "Gestion des correctifs",
            "category": "Maintenance",
            "description": "Appliquer des correctifs de sécurité régulièrement pour protéger les systèmes contre les vulnérabilités connues.",
            "standardReference": "CIS Controls - 3",
            "status": "Active",
            "updateDate": "2024-11-01"
        }
    ]
}
export default data