---
draft: true
---



- [AWS SES](https://us-east-2.console.aws.amazon.com/ses/home?region=us-east-2#/account)
	- [users](https://us-east-1.console.aws.amazon.com/iamv2/home#/users)
	- [smtp configs](https://us-east-2.console.aws.amazon.com/ses/home?region=us-east-2#/smtp)
	- Provavelmente será necessário o uso de algum serviço como nodemailer
- UUID package
	- Identificador único para evitar que emails sejam criados em threads
	```bash
	yarn add uuid
	```

	```javascript
	import { v4 as uuid } from "uuid";
	headers: {
		"X-Entity-Ref-ID": uuid(),
		"Content-Language": "pt-br",
	},
	```
---
```javascript
function emailBodyHTML(news) {

	const UFRPE_LOGO = "https://ajuda.ufrpe.br/images/footer/ufrpe-uni.png";
	
	return `
	
		<head>
		
		<style>
		
		@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
			
		.title {
		
		font-size: 1.5rem;
		
		font-family: 'Merriweather', serif;
		
		}
		
		</style>
		
		</head>
		
		<body>
		
		<img src=${UFRPE_LOGO} alt="Descrição da Imagem" width="200px" height="auto">
		
		<p class="title">${news.title}</p>
		
		<p>
		
		${news.description}
		
		</p>
		
		</body>
	
	`;

}

  

function limitTitle(title) {

	if (title.length > 25) {
	
	return title.slice(0, 25) + "...";
	
	} else return title;

}
```

**AWS SES:**
``` javascript
const transport = nodeMailer.createTransport({

host: "email-smtp.us-east-2.amazonaws.com",

port: 587,

secure: false,

auth: {

user: "AKIAQKTGZJITJVH4C3RD",

pass: "BP4oDmJ7vEbXb6MF/X1nTInQraPjo/kD37+5nAR7fXjs",

},

});
```
