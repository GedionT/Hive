<h1 align="center">
  <a href="https://github.com/gediont/hive">
    <img src="/docs/images/logo.svg" alt="Logo" width="125" height="125">
  </a>
</h1>

<div align="center">
  Hive.Et, Use your skills to build your community
  <br />
  <br />
  <a href="https://github.com/gediont/hive/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/gediont/hive/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/gediont/hive/discussions">Ask a Question</a>
</div>

<div align="center">
<br />

[![license](https://img.shields.io/github/license/gediont/hive.svg?style=flat-square)](LICENSE)

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-a364b4.svg?style=flat-square)](https://github.com/gediont/hive/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![made with care by GedionT](https://img.shields.io/badge/made%20with%20%E2%99%A5%20by-GedionT-91414.svg?style=flat-square)](https://github.com/GedionT)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
    - [Frontend Installation](#cookiecutter-template)
    - [Manual setup](#manual-setup)
    - [Variables reference](#variables-reference)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Acknowledgements](#acknowledgements)

</details>

---

## About

<table>
<tr>
<td>

Hive.Et is a non-for-profit organization that works to connect volunteers across all walks of life to activities and organizations that are in need of the skills possessed by the individuals in the community. Our Hivers are students, teachers, politicians, company owners, professors, accountants, ... across all walks of lives that make use of their much needed skills to good use by building their community.

We work for fundraising, campaigns, teaching-learning, cleaning, leasing, and much more. The services we provide is not just matching you with what you want and what is nearby and convenient, but also track all your activities to certify and acknowledge your work. We also work **with organization** to serve the custom needs of their organization to meet their **CSR goals**. CSR also known as corporate social responsibility, pertains to people and organizations behaving and conducting business ethically and with sensitivity towards social, cultural, economic, and environmental issues. Striving for social responsibility helps individuals, organizations, and governments have a positive impact on development, business, and society.

Last but not least, we work with schools and education institutions to take charge of volunteers and their activities in a well-controlled manner. Students put to use their in school skills in practice and gain valuable experience by building on what they have learned in class rooms.

Key features of **Hive.Et**:

- Get matched to an organization that needs your skill
- As a volunteer, you can track your progress and achievements
- Print and share your progress with your friends
- Organization can track and track-back your progress
- Checkout organizations near you on a map
- Start a campaign as a registered NGO or a registered company
- Raise funds for different causes

<details open>
<summary>Additional info</summary>
<br>

This project is built based on Microsoft's Guide of Design System based on Material UI
Our component libraries are from Fluent UI - based on Microsoft's Design System

This project is the result of huge research. I'm a long-time GitHub user so I've seen more than [7.3k](https://github.com/GedionT?tab=stars) READMEs so far. I've started writing docs for my open source projects (that are currently in their early stages so they exist in the private space for now). After I've **analyzed many popular GitHub** READMEs and other GitHub-related docs and features I've tried to create a general-propose template that may be useful for any project.

</details>

</td>
</tr>
</table>

### Built With

- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [Cookiecutter](https://github.com/cookiecutter/cookiecutter)
- [GitHub Actions](https://github.com/features/actions)
- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)

## Getting Started

### Prerequisites

The recommended method to install **Hive.Et** is by using [Cookiecutter](https://github.com/cookiecutter/cookiecutter). For manual install please refer to [manual setup section](#manual-setup).

The easiest way to install Cookiecutter is by running:

```sh
git clone https://github.com/gediont/hive.git

cd hive

npm install hive
```

For other install options, please refer to [hive installation manual](https://hive.readthedocs.io/en/latest/installation.html).

### Usage

#### hive template

After installing hive, all you need to do is to run the following command:

```sh
hive gh:gediont/hive
```

You will get an interactive prompt where you'll specify relevant options for your project (or the default value will be used).

![Preview](docs/images/preview.svg)

#### Manual setup

Please follow these steps for manual setup:

1. [Download the precompiled template](https://github.com/gediont/hive/releases/download/latest/template.zip)
2. Replace all the [variables](#variables-reference) to your desired values
3. Initialize the repo in the precompiled template folder

   `or`

   Move the necessary files from precompiled template folder to your existing project directory. Don't forget the `.github` directory that may be hidden by default in your operating system

#### Variables reference

Please note that entered values are case-sensitive.
Default values are provided as an example to help you figure out what should be entered.

> On manual setup, you need to replace only values written in **uppercase**.
> | Name | Default value | Description |
> | -------------------------- | ------------------ | --------------------------------------------------------------------------- |
> | PROJECT_NAME | My Amazing Project | Your project name |
> | REPO_SLUG | my-amazing-project | Repo slug must match the GitHub repo URL slug part |
> | GITHUB_USERNAME | GedionT | Your GitHub username **without @** |
> | FULL_NAME | Alexey Potapov | Your full name |
> | OPEN_SOURCE_LICENSE | MIT license | Full OSS license name |
> | modern_header | y | Use HTML to prettify your header |
> | table_in_about | n | Use table to wrap around About section |
> | include_logo | y | Include Logo section. Only valid when `modern_header == y` |
> | include_badges | y | Include section for badges |
> | include_toc | y | Include Table of Contents |
> | include_screenshots | y | Include Screenshots section |
> | include_project_assistance | y | Include Project assistance section |
> | include_authors | y | Include Authors & contributors section |
> | include_security | y | Include Security section and SECURITY.md file |
> | include_acknowledgements | y | Include Acknowledgements section |
> | include_code_of_conduct | y | Include CODE_OF_CONDUCT.md file |
> | include_workflows | y | Include .github/workflows directory |
> | use_codeql | y | Use [CodeQL](https://securitylab.github.com/tools/codeql/) |
> | use_conventional_commits | y | Add [Conventional Commits](https://www.conventionalcommits.org) notice |
> | use_github_discussions | n | Use [GitHub Discussions](https://docs.github.com/en/discussions/quickstart) |

> NOTICE: to use GitHub Discussions, you have to [enable it first](https://docs.github.com/en/discussions/quickstart).

## Roadmap

See the [open issues](https://github.com/gediont/hive/issues) for a list of proposed features (and known issues).

- [Top Feature Requests](https://github.com/gediont/hive/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/gediont/hive/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/gediont/hive/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

## Contributing

First off, thanks for taking the time to contribute! Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

Please adhere to this project's [code of conduct](docs/CODE_OF_CONDUCT.md).

You can use [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) to check for common markdown style inconsistency.

## Support

Reach out to the maintainer at one of the following places:

- [GitHub discussions](https://github.com/gediont/hive/discussions)
- The email which is located [in GitHub profile](https://github.com/GedionT)

## License

This project is licensed under the **MIT license**. Feel free to edit and distribute this template as you like.

See [LICENSE](LICENSE) for more information.

## Acknowledgements

Thanks for these awesome resources that were used during the development of the **Hive.Et**:

- <https://github.com/hive/cooki>
