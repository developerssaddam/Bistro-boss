import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenuCategoryData = (category) => {
  const axiosSecure = useAxiosSecure();
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    axiosSecure.get("/food/menu").then((res) => {
      const categoryData = res.data.filter(
        (item) => item.category === category
      );
      setMenuData(categoryData);
    });
  }, []);

  return menuData;
};

export default useMenuCategoryData;
