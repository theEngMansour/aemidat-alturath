import { z } from "zod";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("./Form"), { ssr: false });

const users = [
  {
    name: "Mansour Ahmed",
    email: "m@tech.com",
  },
];

//schema zod
const schema = z.object({
  name: z.string().nonempty("not nonempty").max(2, "mix two"),
  email: z.string().email("not eamil"),
});

export default function page() {
  async function login(formData) {
    "use server";
    //form validation
    const response = schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
    });

    //send data form validation
    if (!response.success) {
      const { errors } = response.error;
      return { error: errors.map((e, k) => <li key={k}>{e.message}</li>) };
    } else {
      const { name, email } = response.data;
      users.push({
        name,
        email,
      });
      return { success: "تم إضافة مستخدم جديد !", name, email };
    }
  }

  return <Form action={login} users={users} />;
}
