// rrd imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helper";

// library
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName"
  })
  toast.success("You’ve deleted your account!")
  // return redirect
  return redirect("/")
}