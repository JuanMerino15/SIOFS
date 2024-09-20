"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const HermanoForm = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
        setIsLoading(true);

        try {
            // const userData = { name, email, phone };

            // const user = await createUser(userData);

            // if(user) router.push(`/hermanos/${user.id}/register`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-white rounded-lg p-8 shadow-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                    <section className="mb-12 space-y-4">
                    <h1 className="header text-center text-brown-800">SIOFS</h1>                    
                    </section>

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="usuario" // Changed from name to usuario
                        placeholder="USUARIO"
                        iconSrc="/assets/icons/user.svg"
                        iconAlt="user"
                    />

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="contraseña" // Changed from email to contraseña
                        placeholder="CONTRASEÑA"
                        iconSrc="/assets/icons/pass.svg"
                        iconAlt="password"
                    />


                    <SubmitButton isLoading={isLoading} className="bg-green-500 hover:bg-green-600 text-white">
                        INGRESAR
                    </SubmitButton>
                </form>
            </Form>
        </div>
    )
}

export default HermanoForm