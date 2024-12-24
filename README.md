# technical test express.JS

## Installation

- **npm**
```bash
npm install
```

## Environtment Variable

- ** windows PowerShell **:
```bash
$env:GOOGLE_APPLICATION_CREDENTIALS="{location}\service-account.json"
$env:TOKENAPI="your token"
```

- ** Linux / Mac **:
```bash
export GOOGLE_APPLICATION_CREDENTIALS="{location}\service-account.json"
export TOKENAPI="your token"
```

## Run Development

```bash
npm run dev
```

## Endpoint

- POST (CREATE) : `/create-user`
- GET (FETCH) : `/all-user`
- GET (FETCH) : `/fetch-user-data/:doc_id` (requested on technical test)
- PUT (UPDATE) : `/update-user-data/:doc_id` (requested on technical test)
- DELETE (DELETE) : `/delete-user-data/:doc_id`

## Payload (CREATE & UPDATE)

```json
{
	"name": "Gobi",
	"age": 25,
	"email": "gobi.test@gmail.com",
    "phone": "0810000000"
}
```
