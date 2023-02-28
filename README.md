# Hermes

| URI               | Méthode HTTP | Auths? | Opération                                                                                         |
| ----------------- | ------------ | ------ | ------------------------------------------------------------------------------------------------- |
| **projects**      | GET          | JWT    | READ ALL : Lire toutes les ressources de la collection projects                                   |
| **projects**      | POST         | JWT    | CREATE ONE : Créer une ressource basée sur les données de la requête                              |
| **projects/{id}** | GET          | JWT    | READ ONE : Lire une ressource basée de la collection projects                                     |
| **projects/{id}** | DELETE       | JWT    | DELETE ONE : Supprimer une ressource de la collection projects                                    |
| **projects/{id}** | PATCH        | JWT    | UPDATE ONE : Mettre à jour une ressource de la collection projects avec les données de la requête |
