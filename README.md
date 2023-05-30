# Lista de tarefas mobile
Esse projeto foi criado para o desafio técnico na empresa DSG, Atualmente se encontra em processo de refatoração!!!
## Stacks utilizadas no desenvolvimento
Pricipais stacks utilizadas: React Native, Expo, JavaScript, Base Native, RealmDB
## Building e Running
Clonar e executar o app Lista de Tarefas em seu ambiente de desenvolvimento local é muito fácil. Certifique-se de ter o Git, NodeJs e o Expo instalados e siga as instruções abaixo. 
  
  
 ### 1 - Clone o repositorio em seu ambiente local
  
  
  "git clone git@github.com:RonaldDBezerra/lista-de-tarefas-mobile.git"
  
  
 ### 2 - Instale as dependências de desenvolvimento. Observação: verifique o arquivo package.json para ver se a versão do NodeJs é compativel com o app.
  
  
  "npm install"
  
  
  ### 3 - Esse projeto usa o banco de dados RealmDB, até a atual versão "@12.0.0-alpha2" ele está dando incompatibilidade com o expo, por isso é nescessario rodar de forma nativa rodando os comandos a seguir.
  
  
  "npx expo prebuild"
  
  
  ### Observação: Nesse momento você vai rodar a build compativel com o sistema operacional do seu smartphone.
  
  
  "npx react-native run-android"
  
  
  OU
  
  
  "npx react-native run-ios"
  
  
  ### 4 - Certifique-se que sua build foi realizada com sucesso, depois rode o comando a seguir e selecione a opção correspondende a sua build.
  
  
  "npx react-native start"
  
  ## Link para a instalação do projeto na atual versão. Observação: Esse APK está com build para dispositivos Android
  
  
  "https://expo.dev/accounts/ronalddev/projects/my-app/builds/65092160-4d96-40eb-ac31-549c31e25819"
