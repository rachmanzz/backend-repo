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

## Clarification: Technical Test Purpose

Some scenarios in certain functions may not be suitable for production use. These implementations are simplified and intended primarily for technical testing purposes only. There are many third-party libraries available that can address these scenarios more robustly and efficiently.