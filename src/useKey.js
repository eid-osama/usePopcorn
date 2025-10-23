import { useEffect } from "react";

export function useKey(key, callBack) {
  useEffect(
    function () {
      function escape(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) callBack();
      }
      document.addEventListener("keydown", escape);
      return function () {
        document.removeEventListener("keydown", escape);
      };
    },
    [callBack, key]
  );
}
