const CollectionProducts = () => {
  return (
    <section>
      <div className="max-w-screen-xxl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Watches
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <a
                href="#"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="block group">
                  <img
                    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/70a7b831-bc34-4273-9790-6775c56667c0/nike-just-do-it.png"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Bộ sưu tập giày mùa đông năm nay là một hòa quyện tinh tế giữa phong cách và chức năng, mang đến sự ấm áp và phong cách cho những ngày lạnh giá. Những đôi giày được thiết kế đặc biệt để chống lại thời tiết khắc nghiệt, đồng thời vẫn giữ được vẻ đẹp sang trọng và hiện đại.
                    </h3>

                    
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block group">
                  <img
                    src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/69ded6b2-4b32-4f76-9dd0-2d5235a04953/nike-just-do-it.png"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Tông màu chủ đạo của bộ sưu tập là gam màu trầm ấm như xám, đen và nâu, tạo nên sự tinh tế và dễ dàng phối hợp với nhiều trang phục khác nhau. Những đôi giày ankle boot có lớp lót bên trong bằng lông cừu giúp giữ ấm tốt và tạo cảm giác êm ái cho đôi chân trong những ngày gió lạnh.
                    </h3>

                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionProducts;
