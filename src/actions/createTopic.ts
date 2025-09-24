"use server"
import {z} from "zod";

const createTopicSchema = z.object({
    name:z.string().min(3),
    discription:z.string().min(10)
})
export const createTopic = async (formData: FormData) => {
  const name = formData.get('name');
  const discription = formData.get('discription');
  const result = createTopicSchema.safeParse({
    name:formData.get('name'),
    discription:formData.get('discription')
  });
  
}