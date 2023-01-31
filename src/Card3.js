import { Li } from "./Li.1";
export function Card3() {

  const pro=[
    {
      check:true,
      name:"Unlimited Users"
    },
    {
      check:true,
      name:"150GB Storage"
    },
    {
      check:true,
      name:"Unlimited Public Projects"
    },
    {
      check:true,
      name:"Community Access"
    },
    {
      check:true,
      name:"Unlimited Private Projects"
    },
    {
      check:true,
      name:"Dedicated Phone Support"
    },
    {
      check:true,
      name:"Unlimited Free Subdomain"
    },
    {
      check:true,
      name:"Monthly Status Reports"
    },

  ]

  return (
    <div className=" mt-2 col-lg-12">
      <h5 className="pt-2 text-center text-muted">PRO</h5>
   
      <h2 className="pt-2 text-center ">$49<sub className="fs-6">/month</sub></h2>
      <hr />

      <div className="inside">
      <ul className="fa-ul">
      {pro.map((data)=>(
        <Li
        check={data.check}  name={ data.name}

         />
      ))}
    </ul>
    </div>

      <div className="mt-5 d-grid gap-2 col-11 mx-auto ">
<button class="corner btn btn-primary" type="button">Button</button>
</div>


    </div>
  );
}
