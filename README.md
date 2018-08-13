# react-beco

> A collection of React Be(haviour) Co(mponents) - React components that provide a specific behaviour. Inspired by projects like [react-powerplug](https://github.com/renatorib/react-powerplug) and everyday needs in React development.

[![NPM](https://img.shields.io/npm/v/react-beco.svg)](https://www.npmjs.com/package/react-beco) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-beco
```

## Components

```tsx
import { Debounce } from "react-debounce";

<Debounce
  wait={300}
  call={value => {
    console.log("call", value);
  }}
>
  {({ call }) => (
    <input
      type="text"
      onChange={e => {
        console.log("onChange", e.target.value);
        call(e.target.value);
      }}
    />
  )}
</Debounce>;
```

## License

GPL-3.0 © [fea17e86](https://github.com/fea17e86)
