import React from "react";
import ReactDOM from "react-dom";

// Props: short for 'properties'. It acts as if it is a JS object (is it actually ?????) containing user-defined attributes
//  for custom, user-defined tags (aka React components)

function Card(props) {
  console.log(props);

  return (
    <div>
      {/* <div className="my-style"> // Allowed */}
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      // className="my-style"  // USELESS: as it is considered as an atttribute BUT NOT passed with props (verify with console.log)
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="++918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);
