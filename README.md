# React Starting Template

## Content

<img src="https://www.svgrepo.com/show/374167/vite.svg" alt="vite logo" style="width: 20px"> [Vite](https://vitejs.dev/)\
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="typescript logo" style="width: 20px"> [TypeScript](https://www.typescriptlang.org/)\
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="eslint logo" style="width: 20px"> [ESLint](https://eslint.org/)\
<img src="https://www.svgrepo.com/show/354208/prettier.svg" alt="prettier logo" style="width: 20px"> [Prettier](https://prettier.io/)\
🐶 [Husky](https://github.com/typicode/husky)\
<img src="https://www.svgrepo.com/show/373518/commitlint.svg" alt="commitlint logo" style="width: 20px"> [Commitlint](https://commitlint.js.org/#/)\
<img src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F4042378089-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-L9iS6WpW81N7RGRTQ-K%252Favatar.png%3Fgeneration%3D1523345851027218%26alt%3Dmedia" alt="react-18next logo" style="width: 20px"> [React-18next](https://react.i18next.com/)\
<img src="https://reactrouter.com/_brand/react-router-mark-color.png" alt="react-router-dom logo" style="width: 20px"> [React-Router-Dom](https://reactrouter.com/en/main)

## Installation

Clone the repo and run `npm install` in the project directory\
or\
Run those commands in your terminal:

```
npx degit BenjaminChoron/my-react-template project-name
cd project-name
npm install
```

## ZSH function

If you use ZSH, you can add this function to your `.zshrc` file:

```
function rcts() {
  npx degit BenjaminChoron/my-react-template "$1" && cd "$1" && npm install && git init && code .
}
```

Then you can run `rcts project-name` to create a new project and open it in VSCode.

> `code` does not work for you ?
>
> - Launch VS Code.
> - Open the **Command Palette** and type 'shell command' to find the Shell Command: Install 'code' command in PATH command.
