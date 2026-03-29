import React from 'react'

export default function Newsletter() {
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">

        <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://80910aad.sibforms.com/serve/MUIFANqugqi8P6gk7R2I206Y_z_JibDKguiiBfBreLMDe1rpBknlZ3HKefknAm9PPAIHNNUIUefqnTpydCu245KechizIoDrFYnrGu3TncPzH4ZW9YB29_l6pd0wkCvYL9bHOd5m5Zuy91JqWi9d7LQ7iGcj2ZJt3c_nSceVWnOS6IGO7mR2UMNLmYSMFhMxddy96_hGkET2480BPA=="
            title="Signup newsletter"
            className="block h-[320px] w-full md:h-[380px]"
            style={{ border: "0" }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}