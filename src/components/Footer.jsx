import React from "react";
import "../styles/styles.css"
function Footer(){
    const d= new Date();
    let year =d.getFullYear();

    return(
      <footer>
        <p>
      Copyright by {year}
   </p></footer>

    )
}
export default Footer;