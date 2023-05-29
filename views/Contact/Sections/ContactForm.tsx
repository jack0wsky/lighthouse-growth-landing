import { Input } from "@/shared/Input";
import { useContactForm } from "@/views/Contact/useContactForm";
import { Button } from "@/shared";
import { Checkbox } from "@/shared/Checkbox";

export const ContactForm = () => {
  const { values, dispatch } = useContactForm();

  return (
    <form className="bg-palette-black max-w-[400px] w-full p-6 rounded-2xl">
      <Input
        label="Your name"
        value={values.name}
        onChange={({ target }) =>
          dispatch({ type: "update-name", payload: target.value })
        }
        required
        type="text"
        placeholder="How should we call you?"
        className="mb-4"
      />
      <Input
        label="Your email"
        value={values.email}
        required
        onChange={({ target }) =>
          dispatch({ type: "update-email", payload: target.value })
        }
        type="email"
        placeholder="We'd like to contact you"
      />

      <div className="mt-7">
        <p className="text-white text-sm opacity-80 ml-4 mb-1">
          Do you need NDA?
        </p>
        <div className="flex items-center bg-palette-grey-600 p-1 rounded-lg">
          <button
            disabled={values.needNDA}
            onClick={() => dispatch({ type: "set-nda", payload: true })}
            className="w-full h-8 flex items-center justify-center text-white disabled:bg-palette-black rounded"
          >
            Yes
          </button>
          <button
            disabled={!values.needNDA}
            onClick={() => dispatch({ type: "set-nda", payload: false })}
            className={
              "w-full h-8 flex items-center justify-center text-white disabled:bg-palette-black rounded"
            }
          >
            No
          </button>
        </div>

        <label>
          <p className="text-white text-sm opacity-80 ml-4 mb-1 mt-5">
            Your question
          </p>
          <textarea
            value={values.message}
            onChange={({ target }) =>
              dispatch({ type: "update-message", payload: target.value })
            }
            placeholder="What do you need?"
            className="bg-palette-grey-600 w-full h-40 rounded-lg px-4 py-2.5 focus:outline-palette-grey-400 focus:outline-1 focus:outline-offset-2"
          />
        </label>
      </div>

      <Checkbox
        selected={values.privacyConsent}
        onChange={({ target }) => {
          dispatch({ type: "set-privacy-consent", payload: target.checked });
        }}
        label="I agree to receive marketing communication from Lighthouse."
        className='my-6'
      />

      <Button type="submit" variant="secondary" width="full">
        Send message
      </Button>
    </form>
  );
};
