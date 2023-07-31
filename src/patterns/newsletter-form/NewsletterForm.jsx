"use client";

import { useState, useRef } from "react";
import { sendEmail } from "@/assets/api";
import { Form } from "@/components";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import CountdownToast from "../countdown-toast";

const NewsletterForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false),
    [toast, setToast] = useState("");

  const formRef = useRef();

  const handleSubmit =
    onSubmit ||
    function (ev) {
      ev.preventDefault();

      setLoading(true);

      sendEmail(formRef)
        .then(() => setToast("success"))
        .catch(() => setToast("error"))
        .finally(() => {
          setLoading(false);

          setTimeout(() => {
            setToast("");
          }, 2500);
        });
    };

  return (
    <Form
      ref={formRef}
      className="gap-0 shadow-md sm:join-horizontal"
      onSubmit={handleSubmit}
    >
      <Form.Field>
        <Form.Label className="absolute pl-3">
          <EnvelopeIcon
            name="EnvelopeIcon"
            className="h-5 w-5 text-gray-t"
          />
        </Form.Label>

        <Form.Input
          className="pl-10 max-sm:rounded-b-none sm:rounded-r-none"
          type="email"
          placeholder="Insira seu e-mail"
          required
        />
      </Form.Field>

      <Form.Submit
        className="join-item"
        loading={loading}
      >
        Assinar Newsletter
      </Form.Submit>

      {toast && (
        <CountdownToast
          variant={toast}
          text={toastTexts[toast]}
          delay={2500}
        />
      )}
    </Form>
  );
};

const toastTexts = {
  success: "Cadastro realizado com sucesso!",
  error: "Erro ao cadastrar!",
};

export default NewsletterForm;
