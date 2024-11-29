import { redirect } from "next/navigation";
import { FormState, SignupFormSchema } from "../lib/types";

export async function signup(state: FormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email } = validatedFields.data

    // @TODO: call backend API
    const user = { name, email }
   
    if (!user) {
      return {
        message: 'An error occurred while creating your account.',
      }
    }
    redirect('/profile')
}
