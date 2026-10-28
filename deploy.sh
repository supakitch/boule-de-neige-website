#!/usr/bin/env bash
# Envoie les modifications du site en ligne.
# Usage : ./deploy.sh "ce que j'ai changé"
set -e
cd "$(dirname "$0")"
MSG="${1:-Mise à jour du site}"
if [ -z "$(git status --porcelain)" ]; then
  echo "Rien à envoyer, le dossier est déjà à jour."
  exit 0
fi
git add -A
git commit -m "$MSG"
git push
echo
echo "Envoyé. Le déploiement se lance automatiquement, compte une minute."
