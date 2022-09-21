type Unit =
  | "*"
  | "all"
  | "years"
  | "months"
  | "weeks"
  | "days"
  | "hours"
  | "minutes"
  | "seconds"
  | "milliseconds";

type TimeObject = {
  y?: number;
  mn?: number;
  w?: number;
  d?: number;
  h?: number;
  m?: number;
  s?: number;
  ms: number;
};

type CallBack = (timeObj: TimeObject) => {};

type Point = {
  /**
   * Calls the callback with time object as an argument.
   *
   * Worst-Case Time complexity O(1).
   *
   * @param {CallBack} cb (timeObj?)=>{}.
   */
  (cb: CallBack): void;
  /**
   * Prints the time difference with a comment.
   *
   * Worst-Case Time complexity O(1).
   *
   * @param {string} comment String representing comment.
   */
  (comment: string): void;
  /**
   * Prints the time difference.
   *
   * Worst-Case Time complexity O(1).
   */
  (): void;
};

/**
 * Sets the precision of calculations (decimal places).
 *
 * Worst-Case Time complexity O(1).
 *
 * @param {number} number Time unit.
 */
export function precision(number: number): void;

/**
 * Creates an initial time point for measuring.
 *
 * Worst-Case Time complexity O(1).
 *
 * @param {Unit} unit Time unit.
 * @returns {Point} Point function once called will be measured the difference from init point.
 */
export function create(unit: Unit): Point;
