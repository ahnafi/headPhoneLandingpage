import LabelInput from "../../elements/input/labelInput";
import DetailsText from "../../elements/input/textarea";
import Button from "../../elements/button/Button";

const FormContact = () => {
  return (
    <div className="max-w-md w-full">
      <form action="">
        <LabelInput type="text" text="Example Joni Alstars" name="name" id="Name" label="Your Name" />
        <LabelInput type="email" text="Example jonipanjang@gmail.com" name="Email" id="Email" label="E-mail" />
        <DetailsText label="Details" text="Please write your question or a description of the product" name="details" id="detailstext" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default FormContact;
