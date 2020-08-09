# Venados Test Application

This project its a simple and interactive small application to show my basics concepts with frontend technologies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
This project is complemented with his own API services, you can see that in repository [venados_backend](https://github.com/criscordovaa/venados_backend).

### Prerequisites

* Node.js (10.22.0)
* npm (6.14.6)


### Installing

####Build Mode
##### In this case we assume you decide to generate the project compilation files, and take those files to use on your own web server.

First install all project dependencies, with npm.

```
npm install
```

Then, take a copy from the env file **.env.example**, and name it **.env**

```
cp .env.example .env
```

Then, change the environment variable **API_ENDPOINT**, for one of your own api service. (actually this sample API is available to use with the application)

```
API_ENDPOINT=https://venados-backend.herokuapp.com/api/
```

Then, run build script with npm.

```
npm run build
``` 

Now, it will generated **build** directory with all bundle files inside, in to the root of the project, then you can throw them in to your preferred web server.

####Development Mode
#####In this casse we assume you wanna execute the project with the npm script for development mode.

First install all project dependencies, with npm.

```
npm install
```

Then, take a copy from the env file **.env.example**, and name it **.env.development**

```
cp .env.example .env.development
```

Then, change the environment variable **API_ENDPOINT**, for one of your own api service. (actually this sample API is available to use with the application)

```
API_ENDPOINT=https://venados-backend.herokuapp.com/api/
```

Then, run dev script with npm.

```
npm run dev
``` 

Finally when script runs successfully, you can see on your command line a message:

```
ℹ ｢wdm｣: Compiled successfully.
```

>Webpack dev server is actually runs on port 3000, if you want to change, please modify the file **webpack.config.ts** in *devServer: {port: <your-port>}* 

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Webpack](https://webpack.js.org/) - A static module bundler for JavaScript applications.
* [Material UI](https://material-ui.com/) - React components for faster and easier web development. 
* [Typescript](https://www.typescriptlang.org/) - A superset of JavaScript, strict syntactical and adds optional static typing to the language.
* [Babel](https://babeljs.io/) - The compiler for next generation JavaScript.
* [npm](https://www.npmjs.com/) - Node Package Management Dependencies 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Cristian Cordova** - *Initial work* - [criscordovaa](https://github.com/criscordovaa)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
