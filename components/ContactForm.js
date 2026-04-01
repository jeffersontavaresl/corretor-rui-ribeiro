"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato site — ${name || "Visitante"}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-brand-blue">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-brand-blue/20 px-3 py-2 text-brand-blue outline-none ring-brand-gold focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-blue">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-brand-blue/20 px-3 py-2 text-brand-blue outline-none ring-brand-gold focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-brand-blue">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-brand-blue/20 px-3 py-2 text-brand-blue outline-none ring-brand-gold focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-blue-dark transition hover:bg-brand-gold-light"
      >
        Enviar por e-mail
      </button>
      {sent && (
        <p className="text-center text-sm text-brand-blue/70">
          Se o cliente de e-mail não abrir, envie manualmente para {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
