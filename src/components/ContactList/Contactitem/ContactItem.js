import "./ContactItem.css";

const ContactItem = ({
  name,
  phone,
  email,
  avatar,
  category,
  favorite,
  onChangeCategory,
  onChangeFavorite,
}) => {
  let categoryStyle = "lab friends";

  switch (category) {
    case "Work":
      categoryStyle = "lab work";
      break;
    case "Family":
      categoryStyle = "lab family";
      break;
    case "Private":
      categoryStyle = "lab private";
      break;
    case "Friends":
      categoryStyle = "lab friends";
      break;
  }

    let favotiteStyle = "lab favorite";
  switch(favorite) {
    case "True":
      favotiteStyle = "lab true";
      break;
    case "False": 
      favotiteStyle = "lab false";
      break;
  }

  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          
          <div className={favotiteStyle} onClick={onChangeFavorite}>
          {favorite} 
        </div>
        </div>
        <div>
          <img src={avatar} alt="image" className="avatar" /> {name}
        </div>
        <div className={categoryStyle} onClick={onChangeCategory}>
          {category}
        </div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
    </div>
  );
};

export default ContactItem;
