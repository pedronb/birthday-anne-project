"use client";

import { Heart } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  password: z
    .string({
      required_error: "A senha é obrigatória",
      invalid_type_error: "A senha precisa ser uma palavra",
    })
    .refine((val) => val.toLowerCase() === "crew", {
      message: "Senha incorreta!",
    }),
});

export const SecretPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const password = values.password;
    if (password.toLowerCase() === "crew") {
      console.log("ACERTOU");
    }
    console.log(values);
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
      <div className="text-center">
        <Heart className="mx-auto text-rose-500 mb-4" size={64} />
        <h1 className="text-2xl font-bold text-rose-600 mb-6">
          Descubra o seu Presente Secreto!
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="Digite a senha secreta"
                      className="w-full p-3 border-2 border-rose-300 rounded-lg text-center text-rose-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button
              type="submit"
              className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition mt-4"
            >
              Descobrir Presente
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
