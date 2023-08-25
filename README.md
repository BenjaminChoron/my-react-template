# React Starting Template

## Content

<img src="https://www.svgrepo.com/show/374167/vite.svg" alt="vite logo" style="width: 20px"> [Vite](https://vitejs.dev/)\
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="vite logo" style="width: 20px"> [TypeScript](https://www.typescriptlang.org/)\
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="vite logo" style="width: 20px"> [ESLint](https://eslint.org/)\
<img src="https://www.svgrepo.com/show/354208/prettier.svg" alt="vite logo" style="width: 20px"> [Prettier](https://prettier.io/)\
🐶 [Husky](https://github.com/typicode/husky)\
<img src="https://www.svgrepo.com/show/373518/commitlint.svg" alt="vite logo" style="width: 20px"> [Commitlint](https://commitlint.js.org/#/)

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
