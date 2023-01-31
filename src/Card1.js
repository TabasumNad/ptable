import { Li } from "./Li.1";

// import {Li} from './App'
export  function Card1() {

  const free= [
    { 
      check:true,
     name:"Single"
  },
    { 
      check:true,
      name:"5GB storage"

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
      check:false,
      name:"Unlimited Private Projects"

    },
    { 
      check:false,
      name:"Dedicated Phone Support"

    },
    { 
      check:false,
      name:"Free Subdomaim"

    },
    { 
      check:false,
      name:"Monthly Status Reports"

    },
    
  ];

  return (
    <div className="mt-2 col-lg-12">
      <h5 className="pt-2 text-center text-muted ">Free</h5>
      <h2 className="pt-2 text-center">$0<sub className="fs-6">/month</sub></h2>
      <hr></hr>
<div className="inside">
    <ul className="fa-ul">
      {free.map((data)=>(
        <Li
        check={data.check}  name={ data.name}
         />
      ))}
    </ul>
    </div>

<div className="mt-5 d-grid gap-2 col-11 mx-auto">
<button class=" corner btn btn-primary" type="button">Button</button>
</div>
      

    </div>
  );
}



