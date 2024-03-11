import Link from "next/link";

export default function deniedPage() {
    return (
        <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
            <h1>Acesso restrito. Você não tem permissão</h1>
            <Link className="bg-red" href="/">Voltar</Link>
        </div>
    );
}