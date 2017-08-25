# vespyr

Vespyr is a UI library for my personal website,  [jonathanballands.me](github.com/jballands/jonthanballands.me). 
It is written in React.

You can go [here]() to see all that Vespyr offers.

## Getting Started

To use Vespyr, simply install it with NPM or Yarn:

```
$ yarn add @jballands/vespyr
```

To import a UI element, you can reference `index.js`:

```
import { BoldButton } from '@jballands/vespyr';
```

However, for a slimmer bundle, you should import the element 
directly from `lib`:

```
import BoldButton from '@jballands/vespyr/lib/BoldButton';
```

Since Vespyr uses [Styled Components](https://github.com/styled-components/styled-components)
to style itself, there is no CSS that you need to import; Vespyr
should be styled right out of the box. :nail_care:

## Developing

> Note: Node 7+ is recommended.

Install all of Vespyr's dependencies:

```
$ yarn
```

Then run the [Storybook](https://github.com/storybooks/storybook)
and hit `http://localhost:9001`:

```
$ yarn storybook
```

You can build the `lib` directory like this:

```
$ yarn build
```