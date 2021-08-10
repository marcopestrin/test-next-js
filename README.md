## Focus
Progetto da sviluppare con Next.js.
Occorre sviluppare 2 pagine: 

	•   una pagina dove vengano elencate, tramite paginazione, tutti gli utenti di una determinata piattaforma (con la possibilità di cercare per nome);
	•	una pagina dove visualizzare lo user selezionato. Deve essere possibile navigare alla pagina precedente e scegliere un altro user.

Feature 1 - Index User
Endpoint: GET - https://gorest.co.in/public-api/users Per paginare aggiungere parametro “page”, esempio: https://gorest.co.in/public-api/users?page=3
Per cercare per nome usare il parametro “name”, esempio: https://gorest.co.in/public-api/users?name=Kanti

Feature 2 - Show User
Endpoint: GET - https://gorest.co.in/public-api/users/{userId}
## Getting Started

Applicazione realizzata con il framework NextJS e libreria Material UI.
Una volta installati i pacchetti tramite:
```bash
npm install
```
è possibile avviare l'applicazione tramite il seguente comando:
```bash
npm install
```

## Description

Una volta avviata l'applicazione da browser nella root c'è un redirect verso la pagina **/list**.

Una volta caricata farà una chiamata HTTP verso l'endpoint **https://gorest.co.in/public-api/users**. I dati sono paginati. Ogni 20 item c'è una pagina. Ogni cambio pagina viene fatta una nuova chiamata HTTP con i dati di quello specifico range.

E' possibile inoltre cercare tra tutti gli items. Per eseguire la ricerca viene fatta un'ulteriore chiamata HTTP, dopo mezzo secondo che si ha finito di digitare.

Se si clicca sopra una row della tabella si entra nella pagina **/details** dove si hanno i dettagli di quel relativo item. Per ottenere questi dati viene fatta un ulteriore chiamata HTTP passando in input l'identificativo dell'utente. Questo ID viene preso dalla querystring. All'interno di questa pagina è possibile navigare tra gli utenti con i pulsanti "precedente" e "sucessivo" basandosi sull'identificativo progressivo. 
(Nota Bene: dal server non tutti gli identificativi sono presenti, quindi è possibile trovare pagine vuote.)

Ogni chiamata al server è gestita da uno spinner, che rimane attivo finchè lo stato della chiamata è in pending.

E' stata gestita pure la paginazione coi filtri: se cerco per nome, posso muovermi di pagina in pagina. Se invece digito un ulteriore carattere (o ne rimuovo almeno 1) ritorno alla pagina iniziale.

## Developer
Marco Pestrin
