import { FC, ReactNode } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
  children: ReactNode;
}

const MasonryLayout: FC<Props> = ({ children }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 640: 1, 768: 2 }}>
      <Masonry columnsCount={2} gutter={"2rem"}>
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryLayout;
