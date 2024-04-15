import { useState } from "react";
import { Input } from "@/shared/Input";
import { Button } from "@/shared";
import { Checkbox } from "@/shared/Checkbox";
import { useContactDictionary } from "@/views/Contact/dictionaries/useContactDictionary";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "@/shared/icons";

const SERVICE_ID = "service_7fiih7j";
const DEV_SERVICE_ID = "service_4mq9l6o";
const PUBLIC_KEY = "weXdkj32Phkox1zOW";
const TEMPLATE_ID = "template_o5wo9kj";

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

const schema = z.object({
  clientName: z.string(),
  clientEmail: z.string().email(),
  message: z.string(),
  needNDA: z.boolean(),
  privacyConsent: z.boolean().refine((value) => value),
});

type FormValues = z.infer<typeof schema>;
export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"default" | "success">(
    "default"
  );

  const { register, handleSubmit, formState, setValue, watch, reset } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: { needNDA: false },
      mode: "onChange",
    });

  const { form } = useContactDictionary();

  const sendEmail = async (data: FormValues) => {
    setIsSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          client_name: data.clientName,
          client_email: data.clientEmail,
          message: data.message,
          needNDA: data.needNDA,
        },
        { publicKey: PUBLIC_KEY }
      );
      setFormStatus("success");
      reset();
    } catch (error) {}

    setIsSending(false);
  };

  if (formStatus === "success") {
    return (
      <div className="bg-palette-black max-w-[400px] h-[400px] w-full p-6 rounded-2xl text-white flex flex-col items-center justify-center">
        <CheckCircle className="text-6xl text-green-400" />
        <p className="text-xl mt-4">{form.successTitle}</p>
        <p className="text-center opacity-70 mt-3">{form.successDescription}</p>
      </div>
    );
  }

  return (
    <form
      className="bg-palette-black max-w-[400px] w-full p-6 rounded-2xl"
      onSubmit={handleSubmit(sendEmail)}
    >
      <Input
        register={register}
        name="clientName"
        label={form.name.label}
        placeholder={form.name.placeholder}
        className="mb-4"
      />
      <Input
        register={register}
        name="clientEmail"
        label={form.email.label}
        inputMode="email"
        placeholder={form.email.placeholder}
      />

      <div className="mt-7">
        <p className="text-white text-sm opacity-80 ml-4 mb-1">
          {form.nda.label}
        </p>
        <div className="flex items-center bg-palette-grey-600 p-1 rounded-lg">
          <button
            disabled={watch("needNDA") === true}
            onClick={() => setValue("needNDA", true)}
            className="w-full h-8 flex items-center justify-center text-white disabled:bg-palette-black rounded"
          >
            {form.nda.yes}
          </button>
          <button
            disabled={watch("needNDA") === false}
            onClick={() => setValue("needNDA", false)}
            className={
              "w-full h-8 flex items-center justify-center text-white disabled:bg-palette-black rounded"
            }
          >
            {form.nda.no}
          </button>
        </div>

        <label>
          <p className="text-white text-sm opacity-80 ml-4 mb-1 mt-5">
            {form.message.label}
          </p>
          <textarea
            {...register("message", { required: true })}
            placeholder={form.message.placeholder}
            className="bg-palette-grey-600 text-white w-full h-32 sm:h-40 rounded-lg px-4 py-2.5 focus:outline-palette-grey-400 focus:outline-1 focus:outline-offset-2"
          />
        </label>
      </div>

      <Checkbox
        selected={watch("privacyConsent")}
        onChange={({ target }) => {
          setValue("privacyConsent", target.checked, { shouldValidate: true });
        }}
        label={form.consent}
        className="my-6"
      />

      <Button
        type="submit"
        variant="secondary"
        width="full"
        disabled={!formState.isValid || isSending}
      >
        {form.cta}
      </Button>
    </form>
  );
};
