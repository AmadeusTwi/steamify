# Contribution Guidelines

When contributing to this repository, please:

- Be respectful, civil, and open-minded.
- First discuss the change you wish to make via issue,
email, or any other method with owner of this repository.
- Be wary that final decisions are made by the repository owner. So to avoid wasting your time, please contact the repository owner before commiting to any major changes.

## Pull Request Process

1. Update the README.md according to the changes you made (roadmap, features, etc.).
2. Increase the version numbers that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
3. You may merge the Pull Request in once you have the sign-off from repository owner. You can find repository owner's contacts [here](https://amadeustwi.dev/contacts) if you want to speed up the process.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by opening an issue, describing the problem you would like to solve.

This project uses [pnpm](https://pnpm.io) as its package manager. But you may use any other fancy stuff like Bun. Install it if you haven't already:

```bash
npm install -g pnpm
```

Then, install the project's dependencies:

```bash
pnpm install
```

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc... You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

## Credits

This document was inspired by the contributing guidelines for [t3-oss/create-t3-app](https://github.com/t3-oss/create-t3-app/blob/main/CONTRIBUTING.md).