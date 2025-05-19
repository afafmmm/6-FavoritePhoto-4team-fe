import clsx from "clsx";

const ChevronIcon = ({ direction = "right", isDisabled = false }) => {
  const rotations = {
    left: "rotate-180",
    right: "",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={clsx(
        "w-4 h-4 transition-colors",
        isDisabled ? "text-gray-400" : "text-white",
        rotations[direction]
      )}
    >
      <path
        fill="currentColor"
        d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
      />
    </svg>
  );
};

const ELLIPSIS_STRING = "...";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pagesPerBlock = 10,
}) => {
  const currentBlock = Math.ceil(currentPage / pagesPerBlock);

  const startPageOfCurrentBlock = (currentBlock - 1) * pagesPerBlock + 1;
  const endPageOfCurrentBlock = Math.min(
    currentBlock * pagesPerBlock,
    totalPages
  );

  const handlePageItemClick = (page) => {
    if (page >= 1 && page <= totalPages && typeof onPageChange === "function") {
      onPageChange(page);
    }
  };

  const getDisplayedPageItems = (rawPageNumbers, isSmallBreakpoint) => {
    const totalPagesInCurrentBlock = rawPageNumbers.length;
    if (totalPagesInCurrentBlock === 0) return [];

    let showEllipsis = false;
    let leadingCount;
    let firstHiddenIndex;
    let lastHiddenIndex;

    if (isSmallBreakpoint) {
      if (totalPagesInCurrentBlock >= 3) {
        if (7 - 2 + 1 > 1) {
          showEllipsis = true;
          leadingCount = 2;
          firstHiddenIndex = 2;
          lastHiddenIndex = 7;
        }
      }
    } else {
      if (totalPagesInCurrentBlock >= 4) {
        if (6 - 3 + 1 > 1) {
          showEllipsis = true;
          leadingCount = 3;
          firstHiddenIndex = 3;
          lastHiddenIndex = 6;
        }
      }
    }

    if (showEllipsis) {
      const items = [];
      for (let i = 0; i < leadingCount; i++) {
        if (rawPageNumbers[i] === undefined) {
          return rawPageNumbers;
        }
        items.push(rawPageNumbers[i]);
      }

      if (firstHiddenIndex < totalPagesInCurrentBlock) {
        items.push(ELLIPSIS_STRING);
      } else {
        return rawPageNumbers;
      }

      const actualLastHiddenIndex = Math.min(
        lastHiddenIndex,
        totalPagesInCurrentBlock - 1
      );
      for (
        let i = actualLastHiddenIndex + 1;
        i < totalPagesInCurrentBlock;
        i++
      ) {
        items.push(rawPageNumbers[i]);
      }
      return items;
    }
    return rawPageNumbers;
  };

  const rawPageNumbersInBlock = [];
  if (totalPages > 0) {
    for (let i = startPageOfCurrentBlock; i <= endPageOfCurrentBlock; i++) {
      rawPageNumbersInBlock.push(i);
    }
  }

  const pageItemsForDefault = getDisplayedPageItems(
    [...rawPageNumbersInBlock],
    false
  );
  const pageItemsForS = getDisplayedPageItems([...rawPageNumbersInBlock], true);

  const renderPageItem = (item, index) => {
    if (item === ELLIPSIS_STRING) {
      return (
        <div
          key={`ellipsis-${index}`}
          className={clsx(
            "flex items-center justify-center text-white",
            "w-[14px] h-[19px] text-400-16",
            "h-[40px] md:h-[45px] lg:h-[50px]"
          )}
          aria-hidden="true"
        >
          {ELLIPSIS_STRING}
        </div>
      );
    }

    const pageNumber = Number(item);
    const isActive = pageNumber === currentPage;
    return (
      <button
        key={`page-${pageNumber}`}
        onClick={() => handlePageItemClick(pageNumber)}
        className={clsx(
          "flex items-center justify-center rounded-[2px] text-center text-700-16 transition-colors",
          "py-[9px] px-[13px] md:py-[11px] md:px-[16px] lg:py-[13px] lg:px-[20px]",
          "w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]",
          isActive
            ? "bg-my-black border border-gray-200 text-white"
            : "border-none text-white hover:bg-gray-700"
        )}
        aria-current={isActive ? "page" : undefined}
        aria-label={`페이지 ${pageNumber}`}
      >
        {pageNumber}
      </button>
    );
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages || totalPages === 0;

  return (
    <div
      className={clsx(
        "flex items-center",
        "gap-[10px] md:gap-[15px] lg:gap-[20px]"
      )}
    >
      <button
        onClick={() => handlePageItemClick(currentPage - 1)}
        disabled={isFirstPage}
        className={clsx(
          "flex items-center justify-center w-[24px] h-[24px] transition-colors",
          isFirstPage ? "cursor-not-allowed" : "hover:bg-gray-700"
        )}
        aria-label="이전 페이지"
      >
        <ChevronIcon direction="left" isDisabled={isFirstPage} />
      </button>

      <div className="hidden md:flex items-center gap-[10px] md:gap-[15px] lg:gap-[20px]">
        {pageItemsForDefault.map((item, index) => renderPageItem(item, index))}
      </div>

      <div className="flex md:hidden items-center gap-[10px]">
        {pageItemsForS.map((item, index) => renderPageItem(item, index))}
      </div>

      <button
        onClick={() => handlePageItemClick(currentPage + 1)}
        disabled={isLastPage}
        className={clsx(
          "flex items-center justify-center w-[24px] h-[24px] transition-colors",
          isLastPage ? "cursor-not-allowed" : "hover:bg-gray-700"
        )}
        aria-label="다음 페이지"
      >
        <ChevronIcon direction="right" isDisabled={isLastPage} />
      </button>
    </div>
  );
};

export default Pagination;
