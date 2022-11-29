import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';

import styles from './styles/app.css';
// import {Alert} from '~/components/shared';

export function links() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap',
    },
    {rel: 'stylesheet', href: styles},
  ];
}

export function meta() {
  return {
    charset: 'utf-8',
    title: 'Remix Space Rock Stack',
    viewport: 'width=device-width,initial-scale=1',
  };
}

function Document({children, title}: {children: React.ReactNode; title?: string}) {
  return (
    <html lang="en" data-theme="utilistrate">
      <head>
        <Meta />
        <Links />
        {title ? <title>{title}</title> : null}
      </head>
      <body className="font-base font-sans font-normal leading-relaxed text-gray-800">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="error-container p-20">
        {/* <Alert title={`That's a fail, bro - ${caught.status}`} status="error"> */}
        <code className="pb-2">{JSON.stringify(caught.data)}</code>
        <div>
          {caught.statusText}{' '}
          <Link to="/" className="underline">
            Take me back to the home page
          </Link>
        </div>
        {/* </Alert> */}
      </div>
    </Document>
  );
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <div className="error-container p-20">
        {/* <Alert title="Oops - something went wrong" status="error"> */}
        <div className="pb-2">{error.message}</div>
        <Link to="/" className="underline">
          Take me back to the home page
        </Link>
        {/* </Alert> */}
      </div>
    </Document>
  );
}
