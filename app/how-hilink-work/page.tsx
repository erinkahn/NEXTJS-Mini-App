import HeroText from "@/components/HeroText";
import FoldedMap from "@/components/svgs/FoldedMap";
import React from "react";

const page = () => {
   return (
      <HeroText
         image={<FoldedMap />}
         imgClass="text-gray-30"
         title="How Hilink Works"
         titleClass="bold-52 lg:bold-88"
         descrClass="regular-16 mt-6 text-gray-30 xl:max-w-[1120px] mb-8"
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum at quos. Debitis labore neque dolores sequi doloremque voluptatem optio nam, sed illo dolor cupiditate quod impedit necessitatibus cum natus."
      />
   );
};

export default page;
