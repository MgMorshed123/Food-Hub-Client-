import { Dispatch, SetStateAction } from "react";
import { Dialog } from "./ui/dialog";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return <Dialog></Dialog>;
};

export default CheckoutConfirmPage;
