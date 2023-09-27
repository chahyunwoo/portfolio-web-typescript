import { useEffect, useRef, Ref, RefCallback } from "react";

type MutableRefObject<T> = { current: T };
type AnyRef = Ref<any> | MutableRefObject<any>;

export default function useCombinedRefs(
  ...refs: AnyRef[]
): MutableRefObject<any> {
  const targetRef = useRef<any>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        (ref as RefCallback<any>)(targetRef.current);
      } else {
        (ref as MutableRefObject<any>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
