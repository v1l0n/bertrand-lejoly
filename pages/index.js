import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about">
                <a title="About Page">About</a>
            </Link>
            <p>Hello Next.js</p>
        </div>
    );
}