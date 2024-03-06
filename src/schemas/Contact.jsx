import * as Yup from "yup"

export const  contactSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    address:Yup.string().required("Please enter your address"),
    city:Yup.string().required("Please enter your city"),
     message:Yup.string().min(2).required("Please enter your message"),
    number:Yup.number().min(10).required("Please enter your phone no."),
    // password:Yup.string().min(6).required("Please enter your password"),
    // confirmPassword:Yup.string().required().oneOf([Yup.ref('passeord'),null],"Password must match")
})