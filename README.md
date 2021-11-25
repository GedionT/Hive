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

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/gediont/hive/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![made with care by GedionT](https://img.shields.io/badge/made%20with%20%E2%99%A5%20by-GedionT-ff1414.svg?style=flat-square)](https://github.com/GedionT)

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

Open Source Software is not about the code in the first place but the communications and community. People love good documentation and obvious workflows. If your software solves some problem, but nobody can figure out how to use it or, for example, how to create an effective bug report, there's something very bad going on.

additional labels, code scanning, and automatic issue/PR closing and locking you have to do much more work. Your time should be focused on creating something **amazing**. You shouldn't be doing the same tasks over and over like creating your GitHub project template from scratch. Follow the **don’t repeat yourself** principle. Use a template **and go create something amazing**!

Key features of **Hive.Et**:

- Configurable README.md template
- Configurable LICENSE template
- Configurable CODE_OF_CONDUCT.md template
- Configurable CONTRIBUTING.md template
- Configurable SECURITY.md template
- Configurable issues template
- Pull request template
- CODEOWNERS template
- Additional labels template
- Automatic locking for closed issues and PRs workflow
- Automatic cleaning for stale issues and PRs workflow
- Automatic label verification for PRs workflow
- Automatic security code scanning workflow via CodeQL

<details open>
<summary>Additional info</summary>
<br>

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
