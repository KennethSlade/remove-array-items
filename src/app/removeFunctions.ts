type RemovalCallback = (array: number[]) => number[];

export const measureTime = (callback: RemovalCallback, array: number[]) => {
  const timeStart = performance.now();
  callback(array);
  const timeEnd = performance.now();
  return timeEnd - timeStart;
};

export const filterRemoval = (originalArray: number[]) => {
  const newArray = originalArray.filter((value) => value !== 3);
  return newArray;
};

export const excludeItemWithSlices = (originalArray: number[]) => {
  let newArray: number[] = [];
  let indexOf3 = originalArray.indexOf(3);
  if (indexOf3 >= 0) {
    newArray = [
      ...originalArray.slice(0, indexOf3),
      ...originalArray.slice(indexOf3 + 1),
    ];
  }
  return newArray;
};

export const sliceSplice = (originalArray: number[]) => {
  let newArray: number[] = [];
  const indexOf3 = originalArray.indexOf(3);
  if (indexOf3 >= 0) {
    newArray = originalArray.slice(0);
    newArray.splice(indexOf3, 1);
  }
  return newArray;
};

export const forLoopCopyExclusion = (originalArray: number[]) => {
  let newArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] !== 3) newArray.push(originalArray[i]);
  }
  return newArray;
};

export const spliceInPlace = (originalArray: number[]) => {
  const indexOf3 = originalArray.indexOf(3);
  if (indexOf3 >= 0) {
    originalArray.splice(indexOf3, 1);
  }
  return originalArray;
};
