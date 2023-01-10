OpenAI
## Local setup
Just run `./iwantlocalsetup.sh` in root folder and add your `OPENAI_API_KEY`from `https://beta.openai.com/account/api-keys` 

## Requests
```http
   ### Expect code 200 and link to an image
   POST http://localhost:8080/openai/generateImage
   Content-Type: application/json

   {
     "size": small | medium | lager,
     "prompt": description, for AI engine, it can't be offensive
   }
   
   ### Expect code 400
     Bad request, prompt can't be offensive
   ### Expect code 401
     Authentication error from OpenAI


   ```