import { reactive, effectScope, watchEffect } from 'vue';
// declare type OnCleanup = (cleanupFn: () => void) => void;
// declare type WatchEffect = (onCleanup: OnCleanup) => void;

interface Lookup {
  [propName: string]: any;
}

export function switchboard(value: string) {
  let lookup: Lookup = {};
  let scope = effectScope();

  let current: string;

  let get = () => current;

  let set = (newValue: string) => {
    if (newValue === current) return;
    if (current !== undefined) lookup[current].state = false;
    current = newValue;
    if (lookup[newValue] === undefined) {
      scope.run(() => {
        lookup[newValue] = reactive({ state: true });
      });
    } else {
      lookup[newValue].state = true;
    }
  };
  let is = (comparisonValue: string) => {
    if (lookup[comparisonValue] === undefined) {
      scope.run(() => {
        lookup[comparisonValue] = reactive({ state: false });
      });
      return lookup[comparisonValue].state;
    }
    return !!lookup[comparisonValue].state;
  };
  value === undefined || set(value);
  let scopedWatchEffect = (...params: (() => [])[]) => {
    scope.run(() => {
      params.forEach((item) => {
        watchEffect(item);
      });
    });
  };
  return { get, set, is, watchEffect: scopedWatchEffect, stop: scope.stop };
}

export function switchboardSet(value: string[]) {
  let lookup: Lookup = {};
  let scope = effectScope();

  let current: string[] = [];

  let all = () => current;

  let add = (newValue: string) => {
    if (current.includes(newValue)) return;

    current.push(newValue);

    if (lookup[newValue] === undefined) {
      scope.run(() => {
        lookup[newValue] = reactive({ state: true });
      });
    } else {
      lookup[newValue].state = true;
    }
  };

  let remove = (newValue: string) => {
    if (!current.includes(newValue)) return;

    current = current.filter((i) => i !== newValue);

    if (lookup[newValue] === undefined) {
      scope.run(() => {
        lookup[newValue] = reactive({ state: false });
      });
    } else {
      lookup[newValue].state = false;
    }
  };

  let has = (comparisonValue: string) => {
    if (lookup[comparisonValue] === undefined) {
      scope.run(() => {
        lookup[comparisonValue] = reactive({ state: false });
      });
      return false;
    }

    return !!lookup[comparisonValue].state;
  };

  let clear = () => {
    for (let i = 0; i < current.length; i++) {
      let key = current[i];
      delete current[i];
      lookup[key].state = false;
    }

    current = current.filter((i) => i);
  };

  let scopedWatchEffect = (...params: (() => [])[]) => {
    scope.run(() => {
      params.forEach((item) => {
        watchEffect(item);
      });
    });
  };

  value === undefined || value.forEach((i) => add(i));

  return {
    all,
    add,
    remove,
    has,
    clear,
    watchEffect: scopedWatchEffect,
    stop: scope.stop,
  };
}
