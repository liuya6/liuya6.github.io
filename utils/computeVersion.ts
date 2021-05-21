const computedVersion = (
  firstVsn: string,
  operator: string,
  lastVsn: string
) => {
  const firstList: number[] = firstVsn.split(".").map(Number);
  const lastList: number[] = lastVsn.split(".").map(Number);
  const maxLength: number = Math.max(firstList.length, lastList.length);
  function computed(
    n: number,
    [firstStart, ...first]: Array<undefined | number>,
    [lastStart, ...last]: Array<undefined | number>
  ): string {
    typeof firstStart === "undefined" && (firstStart = 0);
    typeof lastStart === "undefined" && (lastStart = 0);

    if (firstStart > lastStart) {
      return ">";
    } else if (firstStart < lastStart) {
      return "<";
    } else if (n === 0) {
      return "=";
    } else {
      return computed(n - 1, first, last);
    }
  }
  return computed(maxLength - 1, firstList, lastList) === operator;
};

export { computedVersion };
