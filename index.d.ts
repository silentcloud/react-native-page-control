declare interface Props {
  /** Style for the current page indicator. */
  currentIndicatorStyle?: object

  /**
   * The current page, shown by the receiver as a white dot.
   *
   * @default 0
   */
  currentPage?: number

  /**
   * The tint color to be used for the page indicator.
   *
   * @default 'white'
   */
  currentPageIndicatorTintColor?: string

  /**
   * Whether the page control is hidden when there is only one page.
   *
   * @default false
   */
  hidesForSinglePage?: boolean

  /**
   * Size of the page indicator.
   *
   * @default { width: 8, height: 8 }
   */
  indicatorSize?: { width: number, height: number }

  /** Style for the page indicator. */
  indicatorStyle?: object

  /** The number of pages the receiver shows (as dots). */
  numberOfPages: number

  /** Callback when a specifc page indicator is pressed. */
  onPageIndicatorPress?: (index: number) => void

  /**
   * The tint color to be used for the page indicator.
   *
   * @default 'gray'
   */
  pageIndicatorTintColor?: string

  /** Style for the page control container. */
  style?: object
}

declare const PageControl: React.FC<Props>

export = PageControl
