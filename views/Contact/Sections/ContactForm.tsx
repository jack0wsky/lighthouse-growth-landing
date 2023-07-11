import { Input } from "@/shared/Input";
import { useContactForm } from "@/views/Contact/useContactForm";
import { Button } from "@/shared";
import { Checkbox } from "@/shared/Checkbox";
import { useContactDictionary } from "@/views/Contact/dictionaries/useContactDictionary";

export const ContactForm = () => {
  const { values, dispatch } = useContactForm();

  const { form } = useContactDictionary();

  return (
    <form className="bg-palette-black max-w-[400px] w-full p-6 rounded-2xl">
      <Input
        label={form.name.label}
        value={values.name}
        onChange={({ target }) =>
          dispatch({ type: "update-name", payload: target.value })
        }
        required
        type="text"
        placeholder={form.name.placeholder}
        className="mb-4"
      />
      <Input
        label={form.email.label}
        value={values.email}
        required
        onChange={({ target }) =>
          dispatch({ type: "update-email", payload: target.value })
        }
        type="email"
        inputMode="email"
        placeholder={form.email.placeholder}
      />

      <div className="mt-7">
        <p className="text-white text-sm opacity-80 ml-4 mb-1">
          {form.nda.label}
        </p>
        <div className="flex items-center bg-palette-grey-600 p-1 rounded-lg">
          <button
            disabled={values.needNDA}
            onClick={() => dispatch({ type: "set-nda", payload: true })}
            className="w-full h-8 flex items-center justify-center text-white disabled:bg-palette-black rounded"
          >
            {form.nda.yes}
          </button>
          <button
            disabled={!values.needNDA}
            onClick={() => dispatch({ type: "set-nda", payload: false })}
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
            value={values.message}
            onChange={({ target }) =>
              dispatch({ type: "update-message", payload: target.value })
            }
            placeholder={form.message.placeholder}
            className="bg-palette-grey-600 w-full h-32 sm:h-40 rounded-lg px-4 py-2.5 focus:outline-palette-grey-400 focus:outline-1 focus:outline-offset-2"
          />
        </label>
      </div>

      <Checkbox
        selected={values.privacyConsent}
        onChange={({ target }) => {
          dispatch({ type: "set-privacy-consent", payload: target.checked });
        }}
        label={form.consent}
        className="my-6"
      />

      <Button type="submit" variant="secondary" width="full">
        {form.cta}
      </Button>
    </form>
  );
};
