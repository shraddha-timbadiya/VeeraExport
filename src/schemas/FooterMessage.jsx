import * as Yup from "yup"

export const  footerMessage = Yup.object({
    message:Yup.string().min(2).required("Please enter your message"),
    number:Yup.number().min(10).required("Please enter your phone no."),

})