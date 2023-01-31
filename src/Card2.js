import { Li } from "./Li.1";
export function Card2() {

  const plus=[
    {
      check:true,
      name:"5 Users"
    },
    {
      check:true,
      name:"50GB Storage"
    },
    {
      check:true,
      name:"Unlimited Public Project"
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
      name:"Freen Subdomain"
    },
    {
      check:false,
      name:"Monthly Status Reports"
    },
  ]

  return (
    <div className=" mt-2 col-lg-12">
      <h5 className="pt-2 text-center text-muted">PLUS</h5>
      <h2 className="pt-2 text-center"  > $9<sub className="fs-6">/month</sub></h2>
      <hr></hr>
      <div className="inside">
      <ul className="fa-ul">
      {plus.map((data)=>(
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
