"use server"
import { auth } from "@/auth";
import {z} from "zod";


const createTopicSchema = z.object({
    name:z.string().min(3).regex(/^[a-z-]+$/,{message:"Must be lowercase without space"}),
    discription:z.string().min(10)
})

type createTopicFormState = {
  errors:{
    name?:string[],
    discription?:string[],
    formError?:string[]
  }
}
export const createTopic = async (prevState:createTopicFormState, formData: FormData) : Promise<createTopicFormState> => {
  const result = createTopicSchema.safeParse({
    name:formData.get('name'),
    discription:formData.get('discription')
  });
  if(!result.success) {
     return {
      errors:result.error.flatten().fieldErrors
     }
  }
  const session = await auth();

  if(!session || !session.user) {
    return {
      errors:{
        formError:['you have to logon first'];
      }
    }
  }
  return (
    
  )
}