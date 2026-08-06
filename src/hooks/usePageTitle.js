import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Kabra Sarda & Associates`;
  }, [title]);
};

export default usePageTitle;