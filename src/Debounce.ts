import { PureComponent } from "react";
import { DebounceSettings } from "../node_modules/@types/lodash";
const debounce = require("lodash.debounce");

function getDebounceOptions({
  leading,
  maxWait,
  trailing
}: DebounceSettings = {}) {
  const settings = { leading, maxWait, trailing };
  return Object.values(settings).filter(Boolean).length > 0
    ? settings
    : undefined;
}

interface InjectedProps {
  call?: Function;
}

interface Props extends DebounceSettings {
  children(props: InjectedProps): JSX.Element;
  call?: Function;
  wait?: number;
}

class Debounce extends PureComponent<Props> {
  debouncedCall = debounce(
    this.props.call,
    this.props.wait,
    getDebounceOptions(this.props)
  );

  render() {
    return this.props.children({ call: this.debouncedCall });
  }
}

export default Debounce;
