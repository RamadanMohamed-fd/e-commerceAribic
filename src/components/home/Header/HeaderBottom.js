import React from "react";
import Flex from "../../designLayouts/Flex";


const HeaderBottom = () => {
  // const [show, setShow] = useState(false);
  // const ref = useRef();
  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     if (ref.current.contains(e.target)) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });
  // }, [show, ref]);


  return (
    <div className="max-w-container bg-primeColor relative max-[930px]:hidden mx-auto">
      <div className="  h-12  ">
        <Flex className="flex flex-row-reverse text-right text-xs text-white items-center  justify-start max-[1055px]:justify-center  w-full pr-24 max-xl:pr-16 max-[1150px]:pr-12 max-[1055px]:pr-0 gap-4  h-full">
          <div>الصفحة الرئيسية</div>
          <div> جميع المنتجات</div>
          <div>جميع التصنيفات </div>
          <div>العلامات التجارية </div>
          <div>العدسات </div>
          <div>العناية </div>
          <div>الأجهزة </div>
          <div>المكياج </div>
   
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
