export function Li({ check, name }) {
  return (
    <div >
      <li className={check ? "" : "text-muted"}>
       <span className="">
          <i className={check ? "fa fa-check" : "fa fa-times"}></i>
          </span>
         
        {name}
      </li>
    </div>
  );
}
