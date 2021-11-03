# Action gRPC

Action Protocol implemented in gRPC.

Generate code:
```bash
npm run generate

```

Example payload:
```json
{
  "action": "createCar",
  "data": {
    "brand": "Ferrary",
    "color": "red"
  },
  "token": "mytokensecret" 
}
```

Article:

https://dev.to/julioacontreras/action-protocol-abstract-layer-to-works-you-microservice-5d4h