import Link from 'next/link'
import { SignOutButton } from './sign-out-button'
import { getServerSession } from 'next-auth'

const Header = async () => {
    const session = await getServerSession()

    return (
        <header className='fixed w-full h-20 flex itens-center bg-amber-950 text-slate-50'>
            <nav className='w-full flex items-center justify-between m-auto max-w-screen-x1'>
                <Link href="/">Logo</Link>
                <ul  className="flex items-center gap-10">
                    <li><Link href="/">inicial</Link></li>
                    <li><Link href="/public">public</Link></li>
                    <li><Link href="/private">privat</Link></li>
                    {session && <li><SignOutButton /></li>}
                </ul>
            </nav>
        </header>
    )
}

export { Header }