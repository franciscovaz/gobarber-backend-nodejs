<h3 align="center">
 NodeJS Backend - GoBarber 2k20 (new version)
</h3>

<blockquote align="center">“TO ACHIEVE WHAT OTHERS WONT, YOU HAVE TO DO WHAT OTHERS DON'T!”</blockquote>

<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-tools">Tools</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pencil2-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: About the project

This is the backend to an app for a fictional beauty service provider, GoBarber.

This project is part of a complete application involving backend, frontend and mobile! (See my other repositories [comming soon])

## :construction_worker: Technologies | Tools | Resources

The created app uses [Express](https://expressjs.com/), in addition to needing to configure the following tolls:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
<!-- - [Sucrase](https://github.com/alangpierce/sucrase)
- [Sequelize](http://docs.sequelizejs.com/) -->
- [ESLint](https://eslint.org/)
- [Insomnia](https://insomnia.rest/)
- [PostgreSQL](https://www.postgresql.org/)
- [node-postgres](https://www.npmjs.com/package/pg)
<!-- - [Redis](https://redis.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) -->
- [Docker](https://www.docker.com/docker-community)
- [JWT](https://jwt.io/)
- [Multer](https://github.com/expressjs/multer)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Youch](https://www.npmjs.com/package/youch)
- [Yup](https://www.npmjs.com/package/yup)
- TDD
- TypeORM
<!-- - [Bee Queue](https://www.npmjs.com/package/bcrypt)
- [Mailtrap](https://mailtrap.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [date-fns](https://date-fns.org/)
- [Sentry](https://sentry.io/)
- [DotEnv](https://www.npmjs.com/package/dotenv) -->

## :pencil2: Functionalities

### **1. On Going**

<!-- ### **1. User Registration and Authentication**

### **2. Upload Files (avatar)**

### **3. Appointments Registration**

### **4. Send Notifications (MongoDB | Redis)**

### **5. Appointement Cancellation and Send Email**

### **6. Handler Exceptions**

### **7. Environmental Vars**

### **8. Others** -->

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Build with ♥ by Francisco Vaz :wave: from GoStack Bootcamp of RocketSeat

## Funcionalidades da aplicação

# Recuperação de password

**Requisitos funcionais (quais as funcionalidades)**

- O UTILIZADOR DEVE poder recuperar a sua password informando o seu email;
- O UTILIZADOR DEVE receber um email com instruções de recuperação de senha;
- O UTILIZADOR DEVE poder resetar a sua password

**Requisitos Não Funcionais (Não estao diretamente ligadas com as regras de negocio, quais libs, qual bd...)**

- Utilizar MailTrap para testar envios em ambiente de dev
- Utilizar Amazon SES para envios em produção
- O envio de emails deve acontecer em segundo plano (background job)

**Regras de negocio (sempre relacionada com o requisito funcional)**

- O link enviado por email para resetar a password, deve expirar em 2h;
- O utilizador precisa de confirmar a nova password ao resetar a sua password;

# Atualização do perfil

**RF**

- O utilizador deve poder atualizar o seu nome, email e senha;

**RN**

- O utilizador nao pode alterar o seu email para um email já utilizado;
- Para atualizar a password, o utilizador deve informar a password antiga;
- Para atualizar a password, o utilizador precisa de confirmar a nova password

# Painel do prestador

**RF**

- O utilizador deve poder listar os seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB (porque é so texto, schema free(Não ha campos na BD));
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida, não-lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O utilizador deve poder listar todos os prestadores de serviço registados;
- O utilizador deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador;
- o utilizador deve poder listar os horarios; disponiveis num dia especifico de um prestador;
- o utilizador deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre as 8h às 18h (Primeiro as 8h, último as 17h);
- O utilizador nao pode agendar um horario ja ocupado;
- O utilizador nao pode agendar num horário que já passou;
- o utilizador não pode agendar serviços consigo mesmo;
