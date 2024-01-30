<p align="center">
  <img src="https://camo.githubusercontent.com/a4e71a0942263821f4cb9213b2808af909e46967d9ed3ccee6e7e122f276efd6/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d74616c2d72657669766f2d726567756c61722d74616c2d72657669766f2f39362f65787465726e616c2d726561646d652d69732d612d656173792d746f2d6275696c642d612d646576656c6f7065722d6875622d746861742d6164617074732d746f2d7468652d757365722d6c6f676f2d726567756c61722d74616c2d72657669766f2e706e67" width="100" />
</p>
<p align="center">
    <h1 align="center">ToDo List CSS</h1>
</p>
<p align="center">
    <em>Trabalho final da disciplina de Técnicas Avançadas de CSS do curso de Desenvolvimento Web Front-End - PUC Minas</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/camilarozendo/toDoList-trabalhoFinal-CSS?style=default&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/camilarozendo/toDoList-trabalhoFinal-CSS?style=default&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/camilarozendo/toDoList-trabalhoFinal-CSS?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/camilarozendo/toDoList-trabalhoFinal-CSS?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<hr>

## 🔗 Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running toDoList-trabalhoFinal-CSS](#-running-toDoList-trabalhoFinal-CSS)
> - [ Contributing](#-contributing)
> - [ License](#-license)

---

## 📍 Overview

A aplicação escolhida para ser desenvolvida no Trabalho Final da disciplina de Técnicas Avançadas de CSS foi uma aplicação SPA To Do List. 

Para estruturar e estilizar a To Do List optei por utilizar a biblioteca Styled Components, pois se trata de uma aplicação com um layout mais simples e com poucos componentes, além de permitir criar componentes estilizados com mais facilidade.

---

## 🔮 Features

A To Do List possui um campo para digitar a tarefa a ser feita e, ao lado, um botão para adicionar a tarefa. Ao adicionar a tarefa, você tem a opção de clicar no botão de "check", fazendo com que a tarefa seja marcada como concluída (ficando com o background verde) ou clicar no botão de lixeira, fazendo com que a tarefa seja deletada.

#### Estrutura de Componentes:
* A estrutura de componentes está organizada em arquivos separados no diretório '/components'.
* Componentes principais incluem 'Container', 'Input', 'Button', 'Item', e utilitários como 'Flex' e 'Spacer'.
* Um estilo global é definido usando 'createGlobalStyle' para aplicar algumas regras de estilo a todos os elementos.

#### Lógica da Aplicação (App.jsx):
* 'useState' é utilizado para gerenciar o estado da entrada de tarefa ('task') e a lista de tarefas ('listTask').
* Função 'addTask' é responsável por adicionar uma nova tarefa à lista.
* Função 'removeTask' remove uma tarefa da lista com base no ID.
* Função 'toggleChecked' alterna o status de verificação de uma tarefa com base no ID.


#### Renderização de Componentes (App.jsx):
* Renderização de elementos UI, incluindo um título, entrada de texto, botão de adição e uma lista de tarefas.
* A lista de tarefas é mapeada para criar elementos 'Item' para cada tarefa, exibindo o texto da tarefa e botões para remover e marcar/desmarcar a conclusão da tarefa.

#### Estilos (components/index.js):
* O arquivo 'index.js' em 'components' contém definições de estilos usando 'styled-components'.
* Um estilo global é aplicado para redefinir estilos padrão e garantir uma aparência consistente.


## 🧩 Repository Structure

```sh

└── toDoList-trabalhoFinal-CSS/
   ├── package-lock.json
   ├── package.json
   ├── public/
   │   └── vite.svg
   ├── src/
   │   ├── App.jsx
   │   ├── mais.jsx
   │   ├── assets/img
   │   │   └── bg-todo.jpg
   │   └── components
   │       ├── index.js
   │       └── styles
   │           ├── Button.js
   │           ├── Container.js
   │           ├── Input.js
   │           └── Item.js
   └── vite.config.js
```

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **Node.js**

### ⚙️ Installation

1. Clone the toDoList-trabalhoFinal-CSS repository:

```sh
git clone https://github.com/camilarozendo/toDoList-trabalhoFinal-CSS
```

2. Change to the project directory:

```sh
cd toDoList-trabalhoFinal-CSS
```

3. Install the dependencies:

```sh
npm install
```

### 👩‍💻 Running toDoList-trabalhoFinal-CSS

Use the following command to run toDoList-trabalhoFinal-CSS:

```sh
yarn dev
```


---


##  🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/camilarozendo/toDoList-trabalhoFinal-CSS/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/camilarozendo/toDoList-trabalhoFinal-CSS/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/camilarozendo/toDoList-trabalhoFinal-CSS/issues)**: Submit bugs found or log feature requests for toDoList-trabalhoFinal-CSS
<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/camilarozendo/toDoList-trabalhoFinal-CSS
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  📄 License

MIT License

Copyright (c) [2023] [Camila Rozendo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---


[**Return**](#-quick-links)

---