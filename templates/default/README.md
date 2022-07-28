# {{name}} Web Application

{{description}}

## Directory structure

```
.
├── dist                          # Build directory
└── src                           # Source directory
    ├── app                       # Application directory
    │   ├──  api                  # The WebAPI contains routes and handler
    │   |    ├── ...              
    │   |    ├── routes.ts        # Basic router
    │   |    ├── meta.ts          # A metadata of WebAPI
    │   |    ├── index.ts         # Express App Declaration         
    │   ├──  domain               # It includes models, business logic, repositories and adapters
    │   |    └── ...    
    │   ├──  config               # Configuration fo App
    │   ├──  main.ts              # Bootstrap fo App        
    ├── test                      # The unit test codes.              
    └── types                     # Type declarations
```

## Dependencies

### Runtime Packages

| Name | Version | Description |
| --- | --- | --- |
| bunyan | ^1.8.15 | A fast JSON logging library |
| express | ^4.18.1 | Web framework for Node.js |
| express-validator | ^6.14.0 | Express middlewares for validation |
| class-transformer | ^0.5.1 | Transform plain object to some instance of class and versa |
| reflect-metadata | ^0.1.13 | Required by class-transformer |
| class-validator | ^0.13.2 | Allows use of decorator and non-decorator based validation |
| firebase-admin | ^10.2.0 | The Firebase Admin SDK |
| module-alias | ^2.2.2 | Create aliases of directories and register custom module paths in NodeJS |
| roxa-jskit | ^0.0.1-alpha6 | The common lib |

### Development Packages

| Name | Version | Description |
| --- | --- | --- |
| @types/lodash | ^4.14.182 | A JavaScript utility library (type definitions)|
| @types/bunyan | ^1.8.8 | Bunyan type definitions |
| @types/express | ^4.17.13 | Express type definitions |
| @types/node | ^17.0.32 | Node type definitions |
| @types/jest | ^28.1.1 | Jest type definitions |
| @types/supertest | ^2.0.12 | Supertest type definitions |
| ts-jest | ^28.0.4 | A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript |
| jest-extended | ^2.0.0 | Additional Jest matchers |
| supertest | ^6.2.3 | HTTP assertions made easy via superagent |
| @faker-js/faker | ^7.3.0 | A fake data generator |
| rimraf | ^3.0.2 | Exec shell like `rm -rf` |
| typescript | ^4.6.4 | TypeScript |

## Scripts of Development

```bash

make help                    # Print help

make test                    # Unit test

make compile                 # Compile TypesScript to JavaScript

make build [tag=<tagname>]   # Build container image with tag. the default tag is latest

make push [tag=<tagname>]    # Push container image to Google Artifact Regstry. the default tag is latest

make run-local               # Runs the app in development mode on local

make deploy                  # Deploys the App to GKE

make deploy-pod              # Deploys the Pod to GKE

make deploy-svc              # Deploys the SVC to GKE

make undeploy                # Undeploys the App from GKE

make undeploy-pod            # Undeploys the Pod to GKE

make uhdeploy-svc            # Undeploys the SVC to GKE

```

## Built-in Service

### Health Checking

```bash
GET /{{name}}/v1/readiness
GET /{{name}}/v1/liveness
```

### API Metadata

```bash
GET /{{name}}/meta
```


## References

* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [NVM](https://github.com/nvm-sh/nvm)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [Firebase Firestore](https://firebase.google.com/docs/firestore)
* [Lodash](https://lodash.com/)
* [Bunyan](https://github.com/trentm/node-bunyan)
* [Fakerjs](https://github.com/faker-js/faker)
* [Nanoid](https://github.com/ai/nanoid)
* [Express](https://expressjs.com/)
* [Express-Validator](https://express-validator.github.io/docs/)
* [Class-Validator](https://github.com/typestack/class-validator)
* [Class-Transformer](https://github.com/typestack/class-transformer)
* [Jest](https://jestjs.io/)
* [Jest-extended](https://github.com/jest-community/jest-extended#readme)
* [TS-Jest](https://kulshekhar.github.io/ts-jest/)
* [Supertest](https://github.com/visionmedia/supertest#readme)