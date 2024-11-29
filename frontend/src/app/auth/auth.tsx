import { redirect } from "next/navigation";
import { FormState, SignupFormSchema } from "../lib/types";
// import bcrypt from 'bcrypt';

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
      // const hashedPassword = await bcrypt.hash(password, 10)

      // @TODO: call backend API
      
      // const data = await db
      // .insert(users)
      // .values({
      //   name,
      //   email,
      //   password: hashedPassword,
      // })
      // .returning({ id: users.id })
   
    const user = { name, email }
   
    if (!user) {
      return {
        message: 'An error occurred while creating your account.',
      }
    }
    redirect('/profile')
}
