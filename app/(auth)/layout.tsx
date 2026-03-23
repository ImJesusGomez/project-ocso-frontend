import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-200 w-screen h-screen overflow-hidden grid">
      <div className="place-content-center place-self-cente place-items-center">
        <Image
          src="/oxxo-logo.svg"
          className="place-self-center self-center justify-self-center my-4"
          alt="Logo de Ocso"
          width={200}
          height={0}
        />
        {children}
      </div>
    </div>
  );
}
