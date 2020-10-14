import React from "react";
//Function, returning date
export default function DateConversation(datevalue){
  if(datevalue){
    const formatDate=new Date(datevalue * 1000);
    const splitDate=formatDate.toString().split(" ");
    return (
       <>
          <h5>{splitDate[0]} <span>{splitDate[2]} {splitDate[1]} </span></h5>
       </>
      );
  }
  return null;
}
