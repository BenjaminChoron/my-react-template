# React Starting Template

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
