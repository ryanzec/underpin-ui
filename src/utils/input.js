import blockNumberOnlyInput from './helpers/input/blockNumberOnlyInput';
import blockNumericOnlyInput from './helpers/input/blockNumericOnlyInput';

export function onKeyDownNumberOnlyInput(event) {
  if (blockNumberOnlyInput(event) === true) {
    event.preventDefault();
  }
}

export function onKeyDownNumericOnlyInput(event) {
  if (blockNumericOnlyInput(event) === true) {
    event.preventDefault();
  }
}
