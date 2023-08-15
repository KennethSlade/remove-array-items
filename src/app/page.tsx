import Image from "next/image";
import {
  excludeItemWithSlices,
  filterRemoval,
  forLoopCopyExclusion,
  measureTime,
  sliceSplice,
  spliceInPlace,
} from "./removeFunctions";

interface TimingMeasurement {
  timing: number;
  timingName: string;
}

export default function Home() {
  const originalArray = [10, 8, 6, 4, 2, 0, 1, 3, 5, 7, 9];
  const arrayTimings: TimingMeasurement[] = [];
  const callbacks = [
    filterRemoval,
    excludeItemWithSlices,
    sliceSplice,
    forLoopCopyExclusion,
    spliceInPlace,
  ];
  for (let i = 0; i < 1000000; i++) {
    callbacks.forEach((item) => {
      arrayTimings.push({
        timingName: item.name,
        timing: measureTime(item, originalArray),
      });
    });
  }
  const summaryArray: TimingMeasurement[] = [];
  callbacks.forEach((item) => {
    const timingListForCallback = arrayTimings.filter(
      (value) => value.timingName === item.name,
    );
    summaryArray.push(
      timingListForCallback.reduce((prev, current) => {
        return prev.timing
          ? {
              timing: prev.timing + current.timing,
              timingName: current.timingName,
            }
          : current;
      }),
    );
  });

  return (
    <div>
      {summaryArray.map((item) => {
        return (
          <div key={item.timingName} className="bg-red">
            <span className="text-white">{item.timingName}: </span>
            <span className="text-white">{item.timing}</span>
          </div>
        );
      })}
    </div>
  );
}
