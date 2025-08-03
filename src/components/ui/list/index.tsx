import React, { Fragment } from "react";

import { cn } from "@/lib/utils";

type InfiniteScrollProps = {
  readMore?: () => void;
  isFetching?: boolean;
  showFetching?: boolean;
};

export type ListProps<T> = {
  className?: string;
  loadingClassName?: string;
  items?: T[];
  renderItem?: (item: T, index?: number) => React.ReactNode;
  loading?: boolean;
  empty?: React.ReactNode;
  lengthLoading?: number;
  loadingComponent?: ((index: number) => React.ReactNode) | React.ReactNode;
  infiniteScroll?: InfiniteScrollProps;
};

const Placeholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-grey/30 min-h-[250px] animate-pulse rounded-lg",
        className,
      )}
    />
  );
};

const LoadingInfiniteScroll = () => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-white pb-4 pt-2">
      <div className="bg-green-1 h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
      <div className="bg-green-1 h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
      <div className="bg-green-1 h-2 w-2 animate-bounce rounded-full"></div>
    </div>
  );
};

function List<T>(props: ListProps<T>) {
  const {
    items = [],
    className,
    renderItem,
    loading,
    lengthLoading = 3,
    infiniteScroll,
    loadingClassName,
    loadingComponent = null,
  } = props;

  const _infiniteScroll = infiniteScroll || {};

  const renderLoadingComponent = (index: number) => {
    if (typeof loadingComponent === "function") return loadingComponent(index);

    return (
      loadingComponent || (
        <Placeholder key={index} className={loadingClassName} />
      )
    );
  };

  return (
    <React.Fragment>
      <div className={cn("grid", className)}>
        {loading &&
          Array.from({ length: lengthLoading }).map((_, index) => {
            return renderLoadingComponent(index);
          })}

        {!loading &&
          items.map((item, index) => {
            return <Fragment key={index}>{renderItem?.(item, index)}</Fragment>;
          })}
      </div>
      {items.length === 0 &&
        !_infiniteScroll?.isFetching &&
        !loading &&
        props.empty}

      {_infiniteScroll?.isFetching && _infiniteScroll?.showFetching && (
        <LoadingInfiniteScroll />
      )}
    </React.Fragment>
  );
}
export default List;
