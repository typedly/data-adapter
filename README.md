<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/data-adapter - A TypeScript type definitions package for data adapters enabling configurable, composable, trait-driven adaptable data models."
  />
</a>

## @typedly/data-adapter

<!-- npm badge -->
[![npm version][package-npm-badge-svg]][package-npm-badge]
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub license][package-badge-license]][package-license]

<!-- GitHub badges -->
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub forks][package-badge-forks]][package-forks]
[![GitHub stars][package-badge-stars]][package-stars]
[![GitHub license][package-badge-license]][package-license]

<!-- Sponsors -->
[![GitHub Sponsors][github-badge-sponsor]][github-sponsor-link]
[![Patreon Sponsors][patreon-badge]][patreon-link]

A **TypeScript** type definitions package for data adapters enabling configurable, composable, trait-driven adaptable data models.

## Features

- **Configurable**: Create data adapters for data models with configuration.
- **Trait-based**: Mix and match interfaces like `Adaptable`, `Queryable`, `Exportable`, and [more](https://github.com/typedly/data-traits).
- **Ecosystem**: Works seamlessly with other [`@typedly`](https://github.com/typedly) packages.

## Table of contents

- [Related packages](#related-packages)
- [Installation](#installation)
- [Api](#api)
  - Interface
    - [`DataAdapterConstructor`](#dataadapterconstructor)
    - [`DataAdapterShape`](#dataadaptershape)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)
- [Packages](#packages)

## Related packages

### Peer dependencies

- **[@typedly/configurable-data](https://github.com/typedly/configurable-data)**: A **TypeScript** type definitions package for configurable, composable, trait-driven data models.
- **[@typedly/data-traits](https://github.com/typedly/data-traits)**: A **TypeScript** type definitions for data traits.
- **[@typedly/data](https://github.com/typedly/data)**: A **TypeScript** type definitions for [`@typescript-package/data`](https://github.com/typedly/data).

### General

- **[@typedly/adaptable-data](https://github.com/typedly/adaptable-data)**: A **TypeScript** type definitions for data adapter.
- **[@typedly/collection](https://github.com/typedly/collection)**: A **TypeScript** type definitions package for data collections with customizable storage.
- **[@typedly/data-adapter](https://github.com/typedly/data-adapter)**: A **TypeScript** type definitions for data adapter.
- **[@typescript-package/data](https://github.com/typescript-package/data)**: A lightweight **TypeScript** library for basic data management.
- **[@typescript-package/collection](https://github.com/typescript-package/collection)**: A lightweight **TypeScript** library for data collection.

## Installation

### 1. Install peer dependencies

```bash
npm install @typedly/configurable-data @typedly/data @typedly/data-traits --save-peer
```

### 2. Install package

```bash
npm install @typedly/data-adapter --save-peer
```

## Api

```typescript
import {
  DataAdapterConstructor,
  DataAdapterShape,
} from '@typedly/data-adapter';
```

### Interface

### `DataAdapterConstructor`

```typescript
import { DataAdapterConstructor } from '@typedly/data-adapter';
```

[Source](https://github.com/typedly/data-adapter/blob/main/src/lib/data-adapter.constructor.ts)

### `DataAdapterShape`

```typescript
import { DataAdapterShape } from '@typedly/data-adapter';
```

[Source](https://github.com/typedly/data-adapter/blob/main/src/lib/data-adapter.shape.ts)

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [4Fund](https://4fund.com/bruubs)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [Ko-fi](https://ko-fi.com/sterblack)
- [OpenCollective](https://opencollective.com/sterblack)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)
- [PayPal](https://paypal.me/sterblack)
- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- ~~[Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)~~

or via Trust Wallet

- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)

Thanks for your support!

## Code of Conduct

By participating in this data-adapter, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][package-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dangularpackage%26type%3Dpatrons&style=flat
[patreon-link]: https://www.patreon.com/join/angularpackage/checkout?fan_landing=true&rid=0

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [package-badge-issues]: https://img.shields.io/github/issues/typedly/data-adapter
  [package-badge-forks]: https://img.shields.io/github/forks/typedly/data-adapter
  [package-badge-stars]: https://img.shields.io/github/stars/typedly/data-adapter
  [package-badge-license]: https://img.shields.io/github/license/typedly/data-adapter
  <!-- GitHub: badges links -->
  [package-issues]: https://github.com/typedly/data-adapter/issues
  [package-forks]: https://github.com/typedly/data-adapter/network
  [package-license]: https://github.com/typedly/data-adapter/blob/master/LICENSE
  [package-stars]: https://github.com/typedly/data-adapter/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [package-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fdata-adapter.svg
  [package-npm-badge]: https://badge.fury.io/js/@typedly%2Fdata-adapter

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
