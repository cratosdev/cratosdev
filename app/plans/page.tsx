'use client'

import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

const Plans = () => {
  return (
    <>
      <Breadcrumb
        pageName="Membership levels"
        description=""
      />

      <section className="pt-[2-px] pb-[120px]">
        
         

         
            <Pricing />
          
        
      </section>
    </>
  );
};

export default Plans;
