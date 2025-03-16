import fs from 'fs'
import { defineEventHandler, readBody } from 'h3'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer les données du corps de la requête
    const body = await readBody(event)
    
    // Chemin vers le fichier JSON
    const filePath = path.resolve(process.cwd(), 'public/data/site-data.json')
    
    // Écrire les données dans le fichier JSON
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8')
    
    // Retourner une réponse de succès
    return {
      success: true,
      message: 'Données du site mises à jour avec succès'
    }
  } catch (error) {
    // En cas d'erreur, retourner une réponse d'erreur
    console.error('Erreur lors de la mise à jour des données du site:', error)
    return {
      success: false,
      message: 'Erreur lors de la mise à jour des données du site',
      error: error.message
    }
  }
})
