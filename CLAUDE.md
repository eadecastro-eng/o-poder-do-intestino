# O Poder do Intestino — Landing Page (ebook 21 dias)

Producao: https://ebook21dias.poderdointestino.com (Hostinger). Landing de venda do ebook da Katiane Nogueira.

## Stack
Single-file HTML puro: `index.html` (CSS inline, sem build) + `mockup_ebook.png`.
A versao React/Vite antiga foi DESCONTINUADA (problemas de cache/hash de assets) — nao voltar pra ela.

## Deploy (AUTOMATICO)
Push na `master` -> GitHub Actions -> SSH na VPS -> `intestino-deploy.sh` -> envia `index.html` + `mockup_ebook.png` pra Hostinger via lftp.

## Marketing
Meta Pixel 922632677333131 (PageView + InitiateCheckout). Checkout Eduzz. Copy ja revisada p/ politicas Meta/Google (sem promessa de resultado/depoimentos). O texto DENTRO da imagem do mockup nao e editavel via codigo.
