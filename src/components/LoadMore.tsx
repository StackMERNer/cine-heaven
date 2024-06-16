import React from "react";

const LoadMore = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="h-1" />;
});

export default LoadMore;
