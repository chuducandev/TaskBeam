import React from 'react';

export function useEffectOnceWhen(
  condition: boolean | undefined | null,
  effect: React.EffectCallback,
  deps: React.DependencyList = [],
) {
  const hasCompletedRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (hasCompletedRef.current) {
      return;
    }

    if (!condition) {
      return;
    }

    hasCompletedRef.current = true;

    effect();
  }, [effect, condition, deps]);
}
